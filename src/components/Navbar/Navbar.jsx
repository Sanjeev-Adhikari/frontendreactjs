import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <h1>Digital Pathshala</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about" className="active">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar