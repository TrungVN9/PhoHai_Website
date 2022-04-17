import React, { useState } from 'react'
import './home.css'
import { HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'

export default function Home() {
  const img_slider = [
  {
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
  },
  {
    image: '/img/010_phobo.avif'
  },
  {
    image: '/img/002_bunhohue.jpeg'
  },
  {
    image: '/img/001_phonoodle.png'
  },
  {
    image: '/img/008_goicuon.jpeg'
  },
  {
    image: '/img/004_pho.jpeg'
  },
  {
    image: '/img/000_mainpage.jpeg'
  }
  ];

  const [ current, setCurrent ] = useState(0)
  const length = img_slider.length
  const nextSlide = () => {
    setCurrent (current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1: current - 1);
  }
  return (
    <div className='home'>
      <h1>Welcome to Pho Hai Restaurant</h1>
      <h2>Authentic Family Owned</h2>
    <section className='slider'>
      <HiArrowCircleLeft className='left-slide' onClick={prevSlide} />
      <HiArrowCircleRight className='right-slide' onClick={nextSlide} />
        {img_slider.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <img src={slide.image} alt='pho noodle' className='image'/>
          )}
          </div>
        )
    })}
    
    </section>
    </div>

    // <div className='home'>
    //     <img src='/img/000_mainpage.jpeg' alt='PhoNoodle'/>
    // </div>
  )
}
