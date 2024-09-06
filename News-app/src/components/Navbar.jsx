import React from 'react'

const Navbar = ({ onCategoryChange }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"><span className='badge bg-light text-dark fs-5'>NewsHub</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={() => onCategoryChange('general')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => onCategoryChange('sports')}>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => onCategoryChange('business')}>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => onCategoryChange('entertainment')}>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Download Our App (Coming Soon)</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
