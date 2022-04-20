import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
import { useSendToSection } from '../utils/customHooks'
function SectionHome () {
    const pageWidth = useAppSelector((state: any)=> state.pageScroll.pageWidth)
    const pageHeight = useAppSelector((state: any)=> state.pageScroll.pageHeight)
    const dispatch = useAppDispatch()
    const sendToSection = useSendToSection('work')
    const sectionRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        dispatch(setSectionPosition({type: "home", position: sectionRef.current!.offsetTop}))
    },[pageWidth, pageHeight])
    return(
    <div className='section' ref = {sectionRef}> 
        <div className = 'homeLayout' >
            <img className = 'profile' src = 'images/portrait.png'/>
            <div className = "profileInfo">
                <h5>Derek Chapman</h5>
                <p>Full Stack Javascript Developer</p>
            </div>
        </div>
        <div className = "fullWidth flexCenter" onClick = {sendToSection}><p className = "workButton">See My Work</p></div>
    </div>
    )
}

export default React.memo(SectionHome)