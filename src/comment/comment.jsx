import React from 'react';
import './comment.css';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Comment() {
  // setting up variables
  const location = useLocation();
  const { mediaName = "No Media Selected" } = location.state || {};

  const [description, setDescription] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const mediaText = localStorage.getItem(`${mediaName}`);
    if (mediaText) {
      const parsedMedia = JSON.parse(mediaText);
      setComments(parsedMedia.comments);
      setDescription(parsedMedia.description);
      setRating(parsedMedia.rating);
    }
  }, []);

  // putting comment rows into the correct format to be listed
  let commentRows = [];
    if (comments.length) {
      for (const [i, comment] of comments.entries()) {
        commentRows.push(
          <li className="list-group-item list-group-item-dark" key={i}>{comment}</li>
        );
      }
    } else {
      commentRows.push(
        <li className="list-group-item list-group-item-dark" key={0}>Start adding comments below</li>
      );
    }

  // function to save media locally
  function updateMediaLocal(description, rating, comments) {
    let prevMedia;
    const newMedia = {
      description: description,
      rating: rating,
      comments: comments
    }
    const mediaText = localStorage.getItem(`${mediaName}`);
    if (mediaText) {
      prevMedia = JSON.parse(mediaText);
    }

    if (newMedia !== prevMedia) {
      localStorage.setItem(`${mediaName}`, JSON.stringify(newMedia));
    }
  }

  // code used to process values being passed into the description box
  const [descVal, setDescVal] = React.useState("");
  const updateDescription = () => {
    setDescription(descVal);
    updateMediaLocal(descVal, rating, comments);
  }
  const logDescription = event => {
      setDescVal(event.target.value);
  }

  // code used to process values being passed into the comments box
  const [comVal, setComVal] = React.useState("");
  const updateComments = () => {
    const newComments = [...comments, comVal];
    setComments(newComments);
    updateMediaLocal(description, rating, newComments);
  }
  const logComments = event => {
      setComVal(event.target.value);
  }

  // code used to process values being passed into ratings
  const [rateVal, setRateVal] = React.useState("");
  const updateRating = () => {
    let newRating = rateVal;
    if (rating) {
      newRating = (Number(rateVal) + Number(rating))/2;
    }
    setRating(newRating);
    updateMediaLocal(description, newRating, comments);
  }
  const logRating = event => {
      setRateVal(event.target.value);
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="title">
        <h2>{mediaName}</h2>
        <h4>Rating: {rating}/5</h4>
      </div>

      <div className="main-body">
        <div className="description">
          <h4 className="cd-header">Description:</h4>
          <p>{description}</p>
          <textarea id="description" name="description" rows="5" cols="25" placeholder="Write a new description" onChange={logDescription} value={descVal}></textarea>
          <div className="description-submit">
            <Button type="submit" className="btn btn-primary" onClick={updateDescription}>Submit New Description</Button>
          </div>
        </div>

        <div className="comments">
          <h4 className="cd-header">Comments:</h4>
          <ul className="list-group">{commentRows}</ul>
          <input className="form-control" type="text" placeholder="Comment here" onChange={logComments} value={comVal}></input>
          <Button type="submit" className="btn btn-primary" onClick={updateComments}>Submit New Comment</Button>
          <div className="submit-comment">
            <label htmlFor="rating">Rating (between 0 and 5):</label>
            <input type="range" id="rating" name="rating" min="0" max="5" onChange={logRating} value={rateVal}></input>
            <Button type="submit" className="btn btn-primary" onClick={updateRating}>Submit Rating</Button>
          </div>
        </div>
      </div>
    </main>
  );
}