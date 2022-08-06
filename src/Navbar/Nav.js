import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {

  return (
    <>
        <div className="nav_container">
        <Link to='/home'  >
            <button class="btn btn-1">
            <svg>
             <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            HOME</button>
        </Link>
        <Link to='/html-projects'  >
        <button class="btn btn-1">
            <svg>
             <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            HTML</button>
        </Link>
        <Link to='/css-projects'  >
        <button class="btn btn-1">
            <svg>
             <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            CSS</button>
        </Link>
        <Link to='/js-projects'  >
        <button class="btn btn-1">
            <svg>
             <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            JS</button>
        </Link>
        <Link to='/react-projects'  >
        <button class="btn btn-1">
            <svg>
             <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            REACT</button>
        </Link>
        </div>
    </>
  )
}

export default Nav