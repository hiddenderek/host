import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
import Card from './Card'
const cardData = [
    {name: 'Game Creator', image: '', text: 'No text yet.'}, 
    {name: 'Oasis Software Ecosystem', image: '', text: 'No text yet.'}
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