import { Link } from 'react-router-dom';

import React from 'react';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">NoteWorthy!</span></h1>
            </header>
            <main className="public__main">
                <p>NoteWorthy is a note taking app that allows you to write, save, and share notes with your anyone anywhere at any time.</p>
                <address className="public__addr">
                    NoteWorthy<br />
                    69 NoteWorthy Drive<br />
                    Abuja, FCT 900000<br />
                    <a href="tel:+2349000000000">+234 90 0000 0000</a>
                </address>
                <br />
                <p>Owner: EdtheArchitect</p>
            </main>
            <footer>
                <Link to="/login">User Login</Link>
            </footer>
        </section>

    );
    return content;
};

export default Public;