/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderWithRouter } from '../utils/testHelperFunctions'
import userEvent from '@testing-library/user-event'
import MainArea from '../components/MainArea'
import Card from '../components/Card'
import { cardData } from '../components/MainArea'

beforeEach(() => {
    render(
        <Router>
            <Provider store={store}>
                <Card data={cardData[0]} />
            </Provider>
        </Router>
    )
})

test('Populate card data', () => {
    const cardImageElm = screen.getByTestId('card_image') as HTMLImageElement
    expect(cardImageElm.src).toMatch(cardData[0].image)
    const cardTagsElm = screen.getByTestId('card_tags')
    expect(cardTagsElm.childNodes.length).toBe(cardData[0].tags.length)
    expect(cardTagsElm.childNodes[0].textContent).toBe(cardData[0].tags[0])
})

test('Set card info', async () => {
    const user = userEvent.setup()
    const cardZoomElm = screen.getByTestId('card_zoom_button')
    await user.click(cardZoomElm)
    const pageScrollState = store.getState().pageScroll
    expect(pageScrollState.cardInfo).toBe(cardData[0])
    expect(pageScrollState.cardStatus).toBe(true)
})