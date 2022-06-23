import React from 'react'

function ProfileContainer () {
    return(
    <div className='profileContainer'>
        <h4>DC | </h4>
        <a href = "https://github.com/hiddenderek">
            <img className = "bannerIcon" src = 'images/github_logo.png'/>
        </a>
        <a href = "https://www.linkedin.com/in/derek-chapman-5071b512a">
            <img className = "bannerIcon" src = 'images/linkedin_logo.png'/>
        </a>
    </div>
    )
}

export default ProfileContainer