import React from 'react'
import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
       
        <div className="copyright">
                <header>
                  Copyright <span>&#169;</span> {year} Akash Site Onwer . All Right
                  Reserved
                </header>
              </div>
    )
}

export default Footer
