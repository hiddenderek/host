import React from 'react'
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
                <img data-testid = "card_image" className="absolute fullWidth fullHeight" src={data.image} />
                <div className="cardHeader">
                    <img data-testid = "card_zoom_button" className="rightIcon" src="images/zoom.png" onClick={setCard} />
                </div>
            </div>
            <div data-testid = "card_tags" className="tagContainer">
                {data.tags.map((item: string, index) => <div key = {index} className = "tag">{item}</div>)}
            </div>
        </div>
    )
}

export default Card