import React from 'react'
import {Bookmark} from "lucide-react"

const card = (prop) => {
  return (
    <div className="card">

      <div className="top">
        <img src={prop.brandLogo} alt="helooooooooooooo" className='logo' />
        <button>save <Bookmark /></button>
      </div>

      <div className="center">
        <h3>{prop.companyName} <span>{prop.datePosted}</span></h3>
        <h2>{prop.jobTitle}</h2>
        <div class="tags">
          <h4>{prop.postTag}</h4>
          <h4>{prop.levelTag}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h2>{prop.payUSD}</h2>
          <span>{prop.location}</span>
        </div>
        <button>Apply Now</button>
      </div>

    </div>
  )
}

export default card
