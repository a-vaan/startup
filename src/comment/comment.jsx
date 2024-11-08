import React from 'react';
import './comment.css'
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Comment() {
  const location = useLocation();
  const { mediaName = "No Media Selected" } = location.state || {};

  const [description, setDescription] = React.useState("Add a description");
  const [rating, setRating] = React.useState(0);
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

  function updateMediaLocal() {
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

    if (newMedia !== newMedia) {
      localStorage.setItem(`${mediaName}`, JSON.stringify(newMedia));
    }
  }

  const [descVal, setDescVal] = React.useState("");
  const updateDescription = () => {
    setDescription(descVal);
    updateMediaLocal();
  }
  const logDescription = event => {
      setDescVal(event.target.value);
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
          <textarea id="description" name="description" rows="5" cols="25" placeholder="Write New Description" onChange={logDescription} value={descVal}></textarea>
          <div className="description-submit">
            <Button type="submit" className="btn btn-primary" onClick={updateDescription}>Submit New Description</Button>
          </div>
        </div>

        <div className="comments">
          <h4 className="cd-header">Comments:</h4>
          <ul className="list-group">{commentRows}</ul>
          <form action="comment.html" method="get">
            <input className="form-control" type="text" placeholder="Comment Here"></input>
            <button type="submit" className="btn btn-primary">Submit New Comment</button>
          </form>
          <div className="submit-comment">
            <form action="comment.html" method="get">
              <label htmlFor="rating">Rating (between 0 and 5):</label>
              <input type="range" id="rating" name="rating" min="0" max="5"></input>
              <button type="submit" className="btn btn-primary">Submit Rating</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}