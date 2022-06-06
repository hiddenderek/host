/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { setCardStatus, setCardInfo } from '../features/pageScroll/pageScroll-slice'
import ExpandedCard from '../components/ExpandedCard'
import { cardData } from '../components/MainArea'

const dispatch = store.dispatch

beforeEach(() => {
    dispatch(setCardStatus(true))
    dispatch(setCardInfo(cardData[0]))
    render(
        <Router>
            <Provider store={store}>
                <ExpandedCard />
            </Provider>
        </Router>
    )
})

test('Populate expanded card data', () => {
    const cardNameElm = screen.getByTestId('expanded_card_name')
    expect(cardNameElm.textContent).toBe(cardData[0].name)
    const cardTextElm = screen.getByTestId('expanded_card_text')
    expect(cardTextElm.textContent).toBe(cardData[0].text)
    const cardImageElm = screen.getByTestId('expanded_card_image') as HTMLImageElement
    expect(cardImageElm.src).toMatch(cardData[0].expandedImage)
})

test('Close expanded card', async () => {
    const user = userEvent.setup()
    const closeElm = screen.getByTestId('expanded_card_close')
    await user.click(closeElm)
    let pageScrollState = store.getState().pageScroll
    expect(pageScrollState.cardStatus).toBe(false)
})
