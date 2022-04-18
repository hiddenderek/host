import React from 'react'
import BannerButton from './BannerButton'
import ProfileContainer from './ProfileContainer'
function Banner () {
    const buttons = ['Contact', 'Work', 'About', 'Home']
    return(
    <div className='banner'>
        <ProfileContainer/>
        {buttons.map(item => <BannerButton name = {item} />)}
    </div>
    )
}

export default Banner