import React from 'react';
import './comment.css'
import { useLocation } from 'react-router-dom';

export function Comment() {
  const location = useLocation();
  const { mediaName = "No Media Selected" } = location.state || {};

  return (
    <main className="container-fluid bg-secondary text-center">
      <div className="title">
        <h2>{mediaName}</h2>
        <h4>Rating: 4.5/5</h4>
      </div>

      <div className="main-body">
        <div className="description">
          <h4 className="cd-header">Description:</h4>
          <p>Star Wars is a multimedia space opera that combines science fiction and fantasy elements to create a universe with a variety of stories</p>
          <textarea id="description" name="description" rows="5" cols="25" placeholder="Write New Description"></textarea>
          <div className="description-submit">
            <form action="comment.html" method="get">
              <button type="submit" className="btn btn-primary">Submit New Description</button>
            </form>
          </div>
        </div>

        <div className="comments">
          <h4 className="cd-header">Comments:</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-dark">It's great!</li>
            <li className="list-group-item list-group-item-dark">It's kinda overrated...</li>
            <li className="list-group-item list-group-item-dark">Luke is so cool!</li>
          </ul>
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