import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__blob" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__badge">Welcome to my portfolio</p>
          <h1 className="hero__title">
            I Am <span className="hero__title-accent">Sameer</span>
          </h1>
          <p className="hero__subtitle">Software Engineer</p>
          <p className="hero__desc">
            I build full-stack web and mobile apps with React, React Native, and
            Node.js and I'm always exploring how applied ML fits in.
            Take a look at what I've been working on.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Hire Me</Link>
            <Link to="/project" className="btn btn--outline">View Work</Link>
          </div>
        </div>

        <div className="hero__media">
          
          <img className="hero__media-img" src={profile} alt="Sameer" />
        </div>
      </div>
    </section>
  )
}