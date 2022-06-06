import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setCardStatus } from '../features/pageScroll/pageScroll-slice'

function ExpandedCard () {
    const dispatch = useAppDispatch()
    const {name, expandedImage, text} = useAppSelector((state: any) =>  state.pageScroll.cardInfo)
    const cardStatus = useAppSelector((state: any) => state.pageScroll.cardStatus)
    function setCard() {
        dispatch(setCardStatus(false))
    }
    return(
    <div className={`expandedCard ${cardStatus ? "" : "expandedCardHidden"}`} >
        <div className = "cardHeader">
            <img className = "leftIcon" src = "images/github_logo.png" onClick = {setCard}  />   
            <h2 data-testid = "expanded_card_name">{name}</h2>
            <img data-testid = "expanded_card_close" className = "rightIcon" src = "images/xIcon.png" onClick = {setCard}  />
        </div>
        <div className = "navContainer">
            <img data-testid = "expanded_card_image" className = "expandedCardImage" src = {expandedImage}/>
            <a className = "navText">Click here to visit</a>
        </div>
        <p data-testid = "expanded_card_text" className = "expandedCardText">{text}</p>
    </div>
    )
}

export default ExpandedCard