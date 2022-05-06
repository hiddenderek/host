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
            <h2>{name}</h2>
            <img className = "xIcon" src = "images/xIcon.png" onClick = {setCard}  />
        </div>
        <div className = "navContainer">
            <img className = "expandedCardImage" src = {expandedImage}/>
            <a className = "navText">Click here to visit</a>
        </div>
        <p className = "expandedCardText">{text}</p>
    </div>
    )
}

export default ExpandedCard