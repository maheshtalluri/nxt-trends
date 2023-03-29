// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="header-nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo-img"
      />
    </div>
    <div className="header-nav-elements">
      <ul className="list-container">
        <li className="home">Home</li>
        <li className="home">Products</li>
        <li className="home">Cart</li>
      </ul>
      <button className="header-button" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
