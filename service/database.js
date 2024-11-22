const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('simplyCinema');
const userCollection = db.collection('user');
const mediaCollection = db.collection('media');
const descriptionCollection = db.collection('description');
const commentsCollection = db.collection('comments');
const ratingsCollection = db.collection('ratings');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addMedia(media) {
  return mediaCollection.insertOne({ media, id:uuid.v4() });
}

function getMediaList() {
  return mediaCollection.find({}).toArray();
}

async function addDescription(description, id) {
  await descriptionCollection.deleteOne({ id })
  return descriptionCollection.insertOne({ description, id });
}

function getDescription(id) {
  return descriptionCollection.findOne({ id });
}

async function addComment(comments, id) {
  if (!Array.isArray(comments)) {
    throw new Error('Invalid data type: comments must be an array');
  }
  await commentsCollection.deleteOne({ id })
  return commentsCollection.insertOne({ comments, id });
}

function getComments(id) {
  return commentsCollection.findOne({ id });
}

async function addRating(ratings, id) {
  if (!Array.isArray(ratings)) {
    throw new Error('Invalid data type: comments must be an array');
  }
  await ratingsCollection.deleteOne({ id })
  return ratingsCollection.insertOne({ ratings, id });
}

function getRating(id) {
  return ratingsCollection.findOne({ id });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addMedia,
  getMediaList,
  addDescription,
  getDescription,
  addComment,
  getComments,
  addRating,
  getRating,
};
