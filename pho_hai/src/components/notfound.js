import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
    <div className='404_Not_Found'>
        <h1>404 Not Found</h1>
        <Link to= '/'>Return to Menu</Link>
    </div>
  )
}
