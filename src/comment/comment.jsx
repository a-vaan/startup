import React from 'react';
import './comment.css';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Comment() {
  // setting up variables
  const location = useLocation();
  const { mediaName = "No Media Selected", mediaId = "No Id Passed" } = location.state || {};

  const [description, setDescription] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [comments, setComments] = React.useState([]);
  
  // Websocket Code
  class EventMessage {
    constructor(comment) {
      this.comment = comment;
    }
  }

  class UpdateCommentsNotifier {
    
    constructor() {
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:4000/ws`);
      this.socket.onmessage = async (msg) => {
        console.log("WebSocket Message Event:", msg);
        console.log("Message Data:", msg.data);
        try {
          const newComment = JSON.parse(await msg.data.text());
          console.log("newComment:", newComment)
          setComments((prevComments) => [...prevComments, newComment.comment]);
        } catch {}
      };
    }
  
    broadcastEvent(comment) {
      const event = new EventMessage(comment);
      this.socket.send(JSON.stringify(event));
    }
  }
  
  const UpdateNotifierRef = React.useRef(null);

  React.useEffect(() => {
    // Initialize WebSocket connection
    if (!UpdateNotifierRef.current) {
      UpdateNotifierRef.current = new UpdateCommentsNotifier();
    }

    // Fetch initial data
    fetch(`/api/description/${mediaId}`)
      .then((response) => response.json())
      .then((description) => {
        setDescription(description.description);
      })
      .catch((error) => console.error(error));

    fetch(`/api/comments/${mediaId}`)
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => console.error(error));

    fetch(`/api/rating/${mediaId}`)
      .then((response) => response.json())
      .then((rating) => {
        setRating(rating.averageRating);
      })
      .catch((error) => console.error(error));

    // Cleanup WebSocket connection on unmount
    return () => {
      if (UpdateNotifierRef.current?.socket) {
        UpdateNotifierRef.current.socket.close();
      }
    };
  }, [mediaId]);

  function handleUpdateEvent(event) {
    setEvent([...events, event]);
  }

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

  // code used to process values being passed into the description box
  const [descVal, setDescVal] = React.useState("");
  const updateDescription = async () => {
    const description = { id: mediaId, description: descVal };

    await fetch('/api/add-description', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(description),
    });

    fetch(`/api/description/${mediaId}`)
      .then((response) => response.json())
      .then((description) => {
        setDescription(description.description);
      })
  }
  const logDescription = event => {
      setDescVal(event.target.value);
  }

  // code used to process values being passed into the comments box
  const [comVal, setComVal] = React.useState("");
  const updateComments = async () => {
    const commentBody = { id: mediaId, comment: comVal }

    await fetch('/api/add-comment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(commentBody),
    });

    await fetch(`/api/comments/${mediaId}`)
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
      })

    // Broadcast that a new comment has been added
    UpdateNotifier.broadcastEvent(comVal);
  }
  const logComments = event => {
      setComVal(event.target.value);
  }

  // code used to process values being passed into ratings
  const [rateVal, setRateVal] = React.useState("");
  const updateRating = async () => {
    const ratingBody = { id: mediaId, rating: rateVal }

    await fetch('/api/add-rating', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(ratingBody),
    });

    await fetch(`/api/rating/${mediaId}`)
      .then((response) => response.json())
      .then((rating) => {
        setRating(rating.averageRating);
      })
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
          <ul className="list-group comment-list">{commentRows}</ul>
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