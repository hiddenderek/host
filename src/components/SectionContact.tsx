import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
function SectionContact () {
    const pageWidth = useAppSelector((state: any)=> state.pageScroll.pageWidth)
    const pageHeight = useAppSelector((state: any)=> state.pageScroll.pageHeight)
    const dispatch = useAppDispatch()
    const sectionRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        dispatch(setSectionPosition({type: "contact", position: sectionRef.current!.offsetTop}))
    },[pageWidth, pageHeight])
    return(
    <div className='section' ref = {sectionRef}>
        <h3>Contact</h3>
        <p>Email: derekjchapman94@gmail.com</p>
        <p>Phone: 345-409-5474</p>
    </div>
    )
}

export default React.memo(SectionContact)