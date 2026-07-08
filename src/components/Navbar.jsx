import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/service", label: "Service" },
  { to: "/project", label: "Project" },
  { to: "/blog", label: "Blog" },
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Signup" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">S</span>
          Sameer
        </NavLink>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

       <NavLink
  to="/contact"
  className={({ isActive }) =>
    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
  }
  onClick={() => setOpen(false)}
>
  Contact Me
</NavLink>
        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}