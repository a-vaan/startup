import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './create.css'
import { useNavigate } from 'react-router-dom';

export function Create({ userName }) {
    // portion of code used to generate new rows and populate them with data from local storage
    const [media, setMedia] = React.useState({});

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/media')
        .then((response) => response.json())
        .then((media) => {
          setMedia(media);
        })
        .catch((error) => console.error(error));
    }, []);

    const navigate = useNavigate();
    const clickMedia = (med) => {
      const mediaId = media[med]; // Assuming mediaList is an object with {name: id}
      navigate('/comment', {state:{ mediaName: med, mediaId: mediaId }})
    }
  
    // Demonstrates rendering an array with React
    let mediaRows = [];
    let i = 0;
    if (Object.values(media).length) {
      for (const med in media) {
        mediaRows.push(
          <tr key={i++}>
            <td onClick={() => clickMedia(med)}>{med}</td>
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

    // portion of code used to save new media entries to local storage
    const [val, setVal] = useState("")
    const clickAdd = async () => {
        await updateMedia(val);
    }
    const change = event => {
        setVal(event.target.value);
    }

    async function updateMedia(newMedia) {
        let media = {name: newMedia};

        await fetch('/api/add-media', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(media),
        });

        if (!response.ok) {
          console.error('Failed to add media');
          return
        }
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
                <form  className = "form">
                    <input className="form-control" type="text" placeholder="TV Show/Movie" onChange={change} value={val} />
                    <Button type="submit" className="btn btn-primary" onClick={clickAdd}>Add New TV Show/Movie</Button>
                </form>
                </div>
            </div>
        </main>
    );
}