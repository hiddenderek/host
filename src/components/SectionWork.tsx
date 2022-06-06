import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
import Card from './Card'
import {card} from '../app/types'

function SectionWork ({work} : {work: card[]}) {
    const pageWidth = useAppSelector((state: any)=> state.pageScroll.pageWidth)
    const pageHeight = useAppSelector((state: any)=> state.pageScroll.pageHeight)
    const dispatch = useAppDispatch()
    const sectionRef = useRef<HTMLDivElement>(null)
    console.log('abouttttt')
    useEffect(()=>{
        dispatch(setSectionPosition({type: "work", position: sectionRef.current!.offsetTop}))
    },[pageWidth, pageHeight])
    return(
    <div data-testid = "section_work" className='section' ref = {sectionRef}>
        <h3>Work</h3>
        {work.map((item, index)=> <Card key = {index} data = {item} />)}
    </div>
    )
}

export default React.memo(SectionWork)