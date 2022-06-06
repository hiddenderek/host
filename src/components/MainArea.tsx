import React, {useCallback, useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import SectionHome from './SectionHome'
import SectionAbout from './SectionAbout'
import SectionWork from './SectionWork'
import SectionContact from './SectionContact'
import {useScrollMove, useTrackScroll} from '../utils/customHooks'
import { card } from '../app/types'

export const cardData : card[] = [
    {
        name: 'Game Creator',
        image: 'images/gameCreatorCard.png', 
        expandedImage: 'images/gameCreatorExpandedCard.png',
        text: 'A fully functional full stack game editor that allows you to log in, share your games, and play others. Built with TypeScript, deployed with AWS and Docker containers. Includes JWT based user session authentication and a hand made game physics engine.', 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'React', 'Redux-Toolkit']
    }, 
    {
        name: 'Wiki Builder', 
        image: 'images/wikiBuilderCard.png', 
        expandedImage: 'images/wikiBuilderExpandedCard.png', 
        text: 'A fully functional full stack wiki builder. Contribute with you own wikis, and browse others. Built with TypeScript, deployed with AWS and Docker containers. Includes JWT based user session authentication and a wiki editing system', 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'React', 'Redux-Toolkit']
    }, 
    {
        name: 'Oasis Software Ecosystem', 
        image: 'images/oasisLogoEco.png', 
        expandedImage: 'images/oasisEcoExpandedCard.png',
        text: `A software ecosystem across multiple full stack programs that communicate with each other. These programs are designed to automate the generation of user interfaces used to control air and water systems of enterprise buildings. Complex redux state management is used to accomplish this. Due to confidentiality concerns, I cannot share my code but I can share a video that goes over the basics of what this program can do.`, 
        tags: ['Node.js', 'Docker', 'Express', 'Postgres', 'Vanilla Js', 'React', 'Redux-Toolkit']
    }
]


function MainArea () {
    const mainAreaRef = useRef<HTMLDivElement>(null)
    const trackScroll = useTrackScroll(mainAreaRef)
    const scrollMove = useScrollMove(mainAreaRef)
    const aboutPosition = useAppSelector((state: any) => state.pageScroll.aboutPosition)
    const contactPosition = useAppSelector((state: any) => state.pageScroll.contactPosition)
    const workPosition = useAppSelector((state: any) => state.pageScroll.workPosition)
    console.log('main area')
    useEffect(()=>{
        scrollMove()
    },[])
    useEffect(()=>{
        trackScroll()
    },[aboutPosition, contactPosition, workPosition])

    return(
    <div data-testid = 'main_area' id = 'mainArea' className='mainArea' onScroll={()=>{trackScroll()}} ref = {mainAreaRef}>
        <SectionHome/>
        <SectionAbout/>
        <SectionWork work = {cardData}/>
        <SectionContact/>
    </div>
    )
}

export default React.memo(MainArea)