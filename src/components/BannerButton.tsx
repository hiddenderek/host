import React from 'react'
import { useAppSelector } from '../app/hooks'
import { useSendToSection } from '../utils/customHooks'
function Banner({ name }: { name: string }) {
    const currentSection = useAppSelector((state: any) => state.pageScroll.currentSection)
    const sendToSection = useSendToSection(name)
    return (
        <div className={`bannerButton ${currentSection === name.toLowerCase() ? "highlightItem" : ""}`} onClick={sendToSection}>
            {name}
        </div>
    )
}

export default Banner