import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCurrentSection, setCurrentPosition, setButtonPress } from "../features/pageScroll/pageScroll-slice";


export function useScrollMove(target : React.RefObject<HTMLElement>) {
    const buttonPress = useAppSelector((state: any) => state.pageScroll.buttonPress)
    const currentPosition = useAppSelector((state: any) => state.pageScroll.currentPosition)
    
    useEffect(() => {
        if (currentPosition >= 0 && buttonPress) {
        scrollMove()
        }
    }, [currentPosition, buttonPress])
    
    function scrollMove (){
        console.log(location.search)
        const targetElm = target.current
        console.log(currentPosition)
        if (targetElm && currentPosition >= 0 && buttonPress) {
            targetElm.scrollTo(
                {
                    left: 0,
                    top: currentPosition,
                    behavior: "smooth"
                }
            )
        }
    }
    return scrollMove
}

export function useTrackScroll(target : React.RefObject<HTMLElement>) {
    const dispatch = useAppDispatch()
    const aboutPosition = useAppSelector((state: any) => state.pageScroll.aboutPosition)
    const contactPosition = useAppSelector((state: any) => state.pageScroll.contactPosition)
    const workPosition = useAppSelector((state: any) => state.pageScroll.workPosition)

    return () => {

    const targetElm = target.current
    if (targetElm) {
        const { height } = targetElm.getBoundingClientRect()
        const scrollPosition = targetElm.scrollTop + (height / 2)
        console.log(targetElm.scrollTop)
        if (scrollPosition <= aboutPosition) {
            dispatch(setCurrentSection('home'))
        } else if (scrollPosition > aboutPosition && scrollPosition <= workPosition && aboutPosition >= 0) {
            dispatch(setCurrentSection('about'))
        } else if (scrollPosition > workPosition && scrollPosition <= contactPosition && contactPosition >= 0) {
            dispatch(setCurrentSection('work'))
        } else if (scrollPosition > contactPosition && workPosition >= 0) {
            dispatch(setCurrentSection('contact'))
        }
        dispatch(setCurrentPosition(scrollPosition))
        dispatch(setButtonPress(false))
    }
    }
}

export function useSendToSection(name: string) {
    const dispatch = useAppDispatch()
    const homePosition = useAppSelector((state: any) => state.pageScroll.homePosition)
    const aboutPosition = useAppSelector((state: any) => state.pageScroll.aboutPosition)
    const contactPosition = useAppSelector((state: any) => state.pageScroll.contactPosition)
    const workPosition = useAppSelector((state: any) => state.pageScroll.workPosition)
    return () => {
        if (typeof document !== "undefined") {
            let topAmount = 0
            switch (name.toLowerCase()) {
                case ("home"): topAmount = homePosition
                    break
                case ("about"): topAmount = aboutPosition
                    break
                case ("work"): topAmount = workPosition
                    break
                case ("contact"): topAmount = contactPosition
                    break
            }
            console.log(topAmount)
            dispatch(setCurrentPosition(topAmount))
            dispatch(setButtonPress(true))
        }
    }
}