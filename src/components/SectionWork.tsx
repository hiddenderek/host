import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
import Card from './Card'

const cardData = [
    {
        name: 'Game Creator',
        image: 'images/gameCreatorCard.png', 
        expandedImage: 'images/gameCreatorExpandedCard.png',
        text: 'A fully functional full stack game editor that allows you to log in, share your games, and play others. Includes JWT based user session authentication and a hand made physics engine.', 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'React', 'Redux-Toolkit']
    }, 
    {
        name: 'Wiki Builder', 
        image: 'images/gameCreator.png', 
        expandedImage: '',
        text: 'A fully functional full stack wiki builder. Contribute with you own wikis, and browse others. Includes JWT based user session authentication and a wiki editing system', 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'React', 'Redux-Toolkit']
    }, 
    {
        name: 'Oasis Software Ecosystem', 
        image: 'images/oasis.png', 
        expandedImage: '',
        text: `A software ecosystem across multiple full stack programs built to automate the generation of user interfaces used to control air and water systems of enterprise buildings. Due to confidentiality concerns, I cannot share my code but I can share a video that goes over the basics of what this program can do.`, 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'Vanilla Js', 'React', 'Redux-Toolkit']}
]

function SectionWork () {
    const pageWidth = useAppSelector((state: any)=> state.pageScroll.pageWidth)
    const pageHeight = useAppSelector((state: any)=> state.pageScroll.pageHeight)
    const dispatch = useAppDispatch()
    const sectionRef = useRef<HTMLDivElement>(null)
    console.log('abouttttt')
    useEffect(()=>{
        dispatch(setSectionPosition({type: "work", position: sectionRef.current!.offsetTop}))
    },[pageWidth, pageHeight])
    return(
    <div className='section' ref = {sectionRef}>
        <h3>Work</h3>
        {cardData.map((item)=> <Card data = {item} />)}
    </div>
    )
}

export default React.memo(SectionWork)