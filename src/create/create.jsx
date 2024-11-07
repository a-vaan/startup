import React from 'react';
import './create.css'

export function Create() {
    return (
        <main className="container-fluid bg-secondary text-center">
            <div className="user">
                User:
                <span className="user-name">User's Name</span>
            </div>

            <div>
                <table className="table table-warning table-striped table-hover">
                    <thead className="table-dark" >
                        <tr>
                            <th>Show/Movie List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">Star Wars</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">Breaking Bad</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">Lord of the Rings</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">The Fast and the Furious</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">Arcane</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">The Joy of Painting</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">The Conjuring</a></td>
                        </tr>
                        <tr>
                        <td>
                            <a className="nav-link" href="comment.html">Arrested Development</a></td>
                        </tr>
                    </tbody>
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