/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import {store} from '../app/store'
import { setSectionPosition } from '../features/pageScroll/pageScroll-slice'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderWithRouter } from '../utils/testHelperFunctions'
import userEvent from '@testing-library/user-event'
import MainArea from '../components/MainArea'

const dispatch = store.dispatch

beforeEach(()=>{
    render(
        <Router>
            <Provider store={store}>
                <MainArea />
            </Provider>
        </Router>
    )
    dispatch(setSectionPosition({type: "home", position: 0}))
    dispatch(setSectionPosition({ type: "about", position: 200 }))
    dispatch(setSectionPosition({type: "work", position: 400}))
    dispatch(setSectionPosition({type: "contact", position: 600}))
})

test('Track scroll test', () => {
    const mainAreaElm = screen.getByTestId('main_area')
    fireEvent.scroll(mainAreaElm, {target: {scrollTop: 100}})
    let pageScrollState = store.getState().pageScroll
    expect(pageScrollState.currentSection).toBe('home')
    fireEvent.scroll(mainAreaElm, {target: {scrollTop: 300}})
    pageScrollState = store.getState().pageScroll
    expect(pageScrollState.currentSection).toBe('about')
    fireEvent.scroll(mainAreaElm, {target: {scrollTop: 500}})
    pageScrollState = store.getState().pageScroll
    expect(pageScrollState.currentSection).toBe('work')
    fireEvent.scroll(mainAreaElm, {target: {scrollTop: 700}})
    pageScrollState = store.getState().pageScroll
    expect(pageScrollState.currentSection).toBe('contact')
})