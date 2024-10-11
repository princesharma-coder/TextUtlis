import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ mode, toggleMode}) {
  return (
    <nav className={`navbar d-flex justify-content-center navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid d-flex justify-content-md-between">
        <a className="navbar-brand position-relative start-30 mx-3" href="/">TextUtills</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} ms-auto`}>
            <input
              className="form-check-input position-relative end-100"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={toggleMode}
              checked={mode === 'dark'}
            />
            <label className="form-check-label  position-relative end-100" htmlFor="flexSwitchCheckDefault">
              {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
        </div>
      </div>
    </nav>
  )
}

// PropTypes for type checking
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
