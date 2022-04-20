import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setCardStatus } from '../features/pageScroll/pageScroll-slice'

function ExpandedCard () {
    const dispatch = useAppDispatch()
    const {name} = useAppSelector((state: any) =>  state.pageScroll.cardInfo)
    const cardStatus = useAppSelector((state: any) => state.pageScroll.cardStatus)
    function setCard() {
        dispatch(setCardStatus(false))
    }
    return(
    <div className={`expandedCard ${cardStatus ? "" : "itemHidden"}`} >
        <div className = "cardHeader">
            <h2>{name}</h2>
            <img className = "xIcon" src = "images/xIcon.png" onClick = {setCard}  />
        </div>
    </div>
    )
}

export default ExpandedCard