import React, { useState } from 'react';
import './create.css'

export function Create({ userName }) {
    const [media, setMedia] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      const mediaText = localStorage.getItem('media');
      if (mediaText) {
        setMedia(JSON.parse(mediaText));
      }
    }, []);
  
    // Demonstrates rendering an array with React
    let mediaRows = [];
    if (media.length) {
      for (const [i, med] of media.entries()) {
        mediaRows.push(
          <tr key={i}>
            <td>{med}</td>
          </tr>
        );
      }
    } else {
      mediaRows.push(
        <tr key='0'>
          <td>Start adding media below</td>
        </tr>
      );
    }

    const [val, setVal] = useState("")
    const clickAdd = () => {
        updateMediaLocal(val)
    }
    const change = event => {
        setVal(event.target.value)
    }

    function updateMediaLocal(newMedia) {
        let media = [];
        const mediaText = localStorage.getItem('media');
        if (mediaText) {
          media = JSON.parse(mediaText);
        }
    
        let found = false;
        for (const prevMedia of media.entries()) {
          if (prevMedia === newMedia) {
            found = true;
            break;
          }
        }
    
        if (!found) {
          media.push(newMedia);
        }
    
        localStorage.setItem('media', JSON.stringify(media));
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
                <form>
                    <input className="form-control" type="text" placeholder="TV Show/Movie" onChange={change} value={val} />
                    <button type="submit" className="btn btn-primary" onClick={clickAdd}>Add New TV Show/Movie</button>
                </form>
                </div>
            </div>
        </main>
    );
}