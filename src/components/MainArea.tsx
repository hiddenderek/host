import React, {useCallback, useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import SectionHome from './SectionHome'
import SectionAbout from './SectionAbout'
import SectionWork from './SectionWork'
import SectionContact from './SectionContact'
import {useScrollMove, useTrackScroll} from '../utils/customHooks'
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
    <div id = 'mainArea' className='mainArea' onScroll={()=>{trackScroll()}} ref = {mainAreaRef}>
        <SectionHome/>
        <SectionAbout/>
        <SectionWork/>
        <SectionContact/>
    </div>
    )
}

export default React.memo(MainArea)