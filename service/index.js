const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let mediaList = {};
let descriptions = {};
let comments = {};
let ratings = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// GetMediaList
apiRouter.get('/media', (_req, res) => {
  res.send(mediaList);
});

// AddMedia
apiRouter.post('/add-media', (req, res) => {
  mediaList[req.body.name] = uuid.v4();
  res.send(mediaList);
});

// GetDescription
apiRouter.get('/description/:id', (req, res) => {
  const description = descriptions[req.params.id];
  if (description) {
    res.send({ description });
  } else {
    res.status(404).send({ msg: 'Description not found' });
  }
});

// AddDescription
apiRouter.post('/add-description', (req, res) => {
  descriptions[req.body.id] = req.body.description;
  res.send(descriptions);
});

// GetComments
apiRouter.get('/comments/:id', (req, res) => {
  const showComments = comments[req.params.id];
  if (comments[req.params.id]) {
    res.send(comments[req.params.id]);
  } else {
    res.status(404).send({ msg: 'Comments not found' });
  }
});

// AddComment
apiRouter.post('/add-comment', (req, res) => {
  if (comments[req.body.id]) {
    comments[req.body.id].push(req.body.comment);
  } else {
    comments[req.body.id] = [req.body.comment];
  }
  res.send(comments[req.body.id]);
});

// GetRating
apiRouter.get('/rating/:id', (req, res) => {
  if (ratings[req.params.id]) {
    res.send(ratings[req.params.id]);
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

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});