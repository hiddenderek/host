import React from 'react'
import SectionHome from './SectionHome'
import SectionAbout from './SectionAbout'
import SectionWork from './SectionWork'
import SectionContact from './SectionContact'
function MainArea () {

    return(
    <div className='mainArea'>
        <SectionHome/>
        <SectionAbout/>
        <SectionWork/>
        <SectionContact/>
    </div>
    )
}

export default MainArea