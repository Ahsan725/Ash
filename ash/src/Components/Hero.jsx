import React from 'react'
import VisitorCount from './VisitorCount'
import Card from './Cardv1';

function Hero() {
  return (
    <div><div className="hero min-h-screen bg-slate-100">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-slate-600">Hello there!</h1>
        <p className="py-6 text-slate-700">My name is Ahsan and I am a computer science student with a knack for turning coffee into code!</p>
          <button className="btn btn-primary text-slate-100"><VisitorCount /></button>
      </div>
    </div>
  </div></div>
  )
}

export default Hero