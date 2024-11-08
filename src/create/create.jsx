import React from 'react';
import './create.css'

export function Create({ userName }) {
    const [scores, setScores] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        setScores(JSON.parse(scoresText));
      }
    }, []);
  
    // Demonstrates rendering an array with React
    const scoreRows = [];
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        scoreRows.push(
          <tr key={i}>
            <td>{i}</td>
            <td>{score.name.split('@')[0]}</td>
            <td>{score.score}</td>
            <td>{score.date}</td>
          </tr>
        );
      }
    } else {
      scoreRows.push(
        <tr key='0'>
          <td colSpan='4'>Be the first to score</td>
        </tr>
      );
    }

    return (
        <main className="container-fluid bg-secondary text-center">
            <div className="user">
                User:
                <span className="user-name"> {userName}</span>
            </div>

            <div>
                <table className="table table-warning table-striped table-hover">
                    <thead className="table-dark" >
                        <tr>
                            <th>Show/Movie List</th>
                        </tr>
                    </thead>
                    <tbody id='media-list'>{mediaRows}</tbody>
                </table>

                <div className="form-group row">
                <form action="comment.html" method="get">
                    <input className="form-control" type="text" placeholder="TV Show/Movie" />
                    <button type="submit" className="btn btn-primary">Add New TV Show/Movie</button>
                </form>
                </div>
            </div>
        </main>
    );
}