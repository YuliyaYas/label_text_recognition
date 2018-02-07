import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return(
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
      <div className="ui three column grid">
          <div className="column">
            <Link to="/about">About</Link>
          </div>
          <div className="column">
          <Link to="/faqs">FAQs</Link>

          </div>
          <div className="column">
          <Link to="/careers">Careers</Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
