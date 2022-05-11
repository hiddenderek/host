import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { card } from '../features/pageScroll/page_types'
import { useAppDispatch } from '../app/hooks'
import { setCardInfo, setCardStatus } from '../features/pageScroll/pageScroll-slice'
function Card({ data }: { data: card }) {
    const dispatch = useAppDispatch()
    function setCard() {
        dispatch(setCardStatus(true))
        dispatch(setCardInfo(data))
    }
    return (
        <div className = "cardContainer">
            <div className='card' >
                <img className="absolute fullWidth fullHeight" src={data.image} />
                <div className="cardHeader">
                    <img className="rightIcon" src="images/zoom.png" onClick={setCard} />
                </div>
            </div>
            <div className="tagContainer">
                {data.tags.map((item: string) => <div className = "tag">{item}</div>)}
            </div>
        </div>
    )
}

export default Card