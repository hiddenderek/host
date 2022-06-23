import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setCardStatus } from '../features/pageScroll/pageScroll-slice'

function ExpandedCard () {
    const dispatch = useAppDispatch()
    const {name, expandedImage, siteLink, githubLink, text} = useAppSelector((state: any) =>  state.pageScroll.cardInfo)
    const cardStatus = useAppSelector((state: any) => state.pageScroll.cardStatus)
    const [videoStatus, setVideoStatus] = useState(false)
    useEffect(()=>{
        setVideoStatus(false)
    },[cardStatus])
    function setCard() {
        dispatch(setCardStatus(false))
        document.querySelectorAll('video').forEach(vid => vid.pause())
    }
    return (
        <div className={`expandedCard ${cardStatus ? "" : "expandedCardHidden"}`} >
            <div className="cardHeader">
                {!name.includes("Oasis") ? 
                  <a href = {githubLink}><img className="leftIcon" src="images/github_logo.png" /></a>              
                : ""}
                <h2 data-testid="expanded_card_name">{name}</h2>
                <img data-testid="expanded_card_close" className="rightIcon" src="images/xIcon.png" onClick={setCard} />
            </div>
            <div className="navContainer">
                {videoStatus ?
                    <>
                        <video style={{ position: "absolute", zIndex: "10" }} width="100%" height="100%" controls>
                            <source src="/videos/Oasis_Demo.mp4" type="video/mp4" />
                        </video>
                        <div  className = "absolute fullWidth fullHeight" style={{ backgroundColor: "black", zIndex: "9" }} />
                    </>
                    : ""}
                <img data-testid="expanded_card_image" className="expandedCardImage" src={expandedImage} />
                {!name.includes("Oasis") ? <a className="navText" href = {siteLink}>Click here to visit</a> : <p className="navText" onClick={() => { setVideoStatus(true) }}>Click here to watch video</p>}
            </div>
            <p data-testid="expanded_card_text" className="expandedCardText">{text}</p>
        </div>
    )
}

export default ExpandedCard