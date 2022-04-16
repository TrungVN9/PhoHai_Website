import React from 'react'
import './location_hours.css'

export default function Location(){
    return(
        <div className='location'>
            <h1>Hours and Location</h1>
            <h3>Open 7 Days A Week</h3>
            <h3>8 AM - 8 PM</h3>
                <iframe className='map'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.253763014065!2d-118.05981288509913!3d34.06300858060309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d085f5a31877%3A0x32621c78493b8640!2sPh%E1%BB%9F%20Hai%20Restaurant!5e0!3m2!1sen!2sus!4v1650089775702!5m2!1sen!2sus'
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
    )
}
