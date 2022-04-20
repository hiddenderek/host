import React, { useEffect, useRef } from 'react'
import {useHistory} from 'react-router'
import {card} from '../features/pageScroll/page_types'
import {useAppDispatch} from '../app/hooks'
import {setCardInfo, setCardStatus} from '../features/pageScroll/pageScroll-slice'
function Card ({data} : {data: card}) {
    const dispatch = useAppDispatch()
    function setCard() {
        dispatch(setCardStatus(true))
        dispatch(setCardInfo(data))
    }
    return(
    <div className='card' >
        <div className = "cardHeader">
            <h3>{data.name}</h3>
            <img className = "xIcon" src = "images/xIcon.png" onClick = {setCard} />
        </div>
    </div>
    )
}

export default Card