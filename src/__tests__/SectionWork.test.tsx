/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter as Router } from 'react-router-dom'
import SectionWork from '../components/SectionWork'
import {cardData} from '../components/MainArea'

beforeEach(() => {

    render(
        <Router>
            <Provider store={store}>
                <SectionWork work = {cardData} />
            </Provider>
        </Router>
    )
})

test('Populate work section', () => {
    const workContainerElm = screen.getByTestId('section_work')
    expect(workContainerElm.childNodes.length).toBe(4)
})