import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg d-flex justify-content-between navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtills</a>

        {/* Dark/Light mode toggle switch */}
        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={toggleMode}
            checked={mode === 'dark'}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

// PropTypes for type checking
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
