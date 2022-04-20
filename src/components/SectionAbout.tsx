import React, {useEffect, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
function SectionAbout () {
    const pageWidth = useAppSelector((state: any)=> state.pageScroll.pageWidth)
    const pageHeight = useAppSelector((state: any)=> state.pageScroll.pageHeight)
    const dispatch = useAppDispatch()
    const sectionRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        console.log('redo')
        dispatch(setSectionPosition({ type: "about", position: sectionRef.current!.offsetTop }))
    }, [pageWidth, pageHeight])
    return (
        <div className='section' ref={sectionRef}>
            <div className='aboutContainer'>
                <h3>About</h3>
                <p className = "paragraph">I am a full stack software developer building innovation at my company, Digital Air Control.  I am familiar with Node.js, Express, Postgres, React, and Redux Toolkit. My current job is to create programs that auto generate the user interfaces which control air and water systems from major companies such as Memorial Hermann and Bank of America.</p>
            </div>
        </div>
    )
}

export default React.memo(SectionAbout)