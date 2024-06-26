import { Link } from 'react-router-dom';

import React from 'react'

const DashHeader = () => {
    
    const content = (
        <header className='dash-header'>

            <div className='dash-header__container'>
                <Link to='/dash'>
                    <h1 className='dash-header__title'>NoteWorthy</h1>
                </Link>
                <nav className='dash-header__nav'>
                    {/* add nav buttons */}
                </nav>
            </div>

        </header>
    )

  return content
}

export default DashHeader;