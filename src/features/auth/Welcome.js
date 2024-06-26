import { Link } from 'react-router-dom';

import React from 'react'

const Welcome = () => {

    const date = new Date();
    const today = new Intl.DateTimeFormat('en-NG', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const content = (

        <section className='welcome'>
            <p>{today}</p>

            <h1>Welcome!</h1>

            <p><Link to='/dash/notes'>View NoteWorthy</Link></p>

            <p><Link to='/dash/users'>View User Settings</Link></p>
        </section>
    )
  return content;
}

export default Welcome