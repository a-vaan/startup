const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

let comments = {};
let ratings = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetMediaList
apiRouter.get('/media', async (_req, res) => {
  const mediaList = await DB.getMediaList();
  res.send(mediaList);
});

// AddMedia
apiRouter.post('/add-media', async (req, res) => {
  await DB.addMedia(req.body.name)
  const mediaList = await DB.getMediaList();
  res.send(mediaList)
});

// GetDescription
apiRouter.get('/description/:id', async (req, res) => {
  const descriptionObj = await DB.getDescription(req.params.id);
  if (descriptionObj?.description) {
    res.send({ description:[descriptionObj.description] });
  } else {
    res.status(404).send({ msg: 'Description not found' });
  }
});

// AddDescription
apiRouter.post('/add-description', async (req, res) => {
  await DB.addDescription(req.body.description, req.body.id);
  const newDescription = await DB.getDescription(req.body.id);
  res.send(newDescription);
});

// GetComments
apiRouter.get('/comments/:id', async (req, res) => {
  const commentsObj = await DB.getComments(req.params.id);
  if (commentsObj?.comments) {
    res.send(commentsObj.comments);
  } else {
    res.status(404).send({ msg: 'Comments not found' });
  }
});

// AddComment
apiRouter.post('/add-comment', async (req, res) => {
  const commentsObj = await DB.getComments(req.body.id);
  if (commentsObj?.comments) {
    const newComments = commentsObj.comments.push(req.body.comment);
    await DB.addComment(newComments, req.body.id);
  } else {
    await DB.addComment([req.body.comment], req.body.id);
  }
  const newComments = await DB.getComments(req.body.id);
  res.send(newComments.comments);
});

// GetRating
apiRouter.get('/rating/:id', (req, res) => {
  if (ratings[req.params.id]) {
    const averageRating = calculateRatings(ratings[req.params.id]);
    res.send({ averageRating });
  } else {
    res.status(404).send({ msg: 'Ratings not found' });
  }
});

// AddRating
apiRouter.post('/add-rating', (req, res) => {
  const rating = Number(req.body.rating); // Convert rating to a number

  if (isNaN(rating)) {
    return res.status(400).send({ msg: 'Invalid rating value' });
  }

  if (ratings[req.body.id]) {
    ratings[req.body.id].push(req.body.rating);
  } else {
    ratings[req.body.id] = [req.body.rating];
  }

  const averageRating = calculateRatings(ratings[req.body.id]);
  res.send({ averageRating });
});

// Function to calculate the new rating as an average of all ratings
function calculateRatings(ratingsList) {
  let total = 0;
  for (let rating of ratingsList) {
    total += Number(rating);
  }
  return (total/(ratingsList.length)).toFixed(1);
}

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}