import React from 'react'

function Banner ({name} : {name: string}) {

    return(
    <div className='bannerButton'>
        {name}
    </div>
    )
}

export default Banner