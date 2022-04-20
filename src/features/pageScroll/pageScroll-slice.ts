import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { card } from './page_types';
import { createImportSpecifier, NumericLiteral } from 'typescript';

interface pageScrollState {
    pageWidth: number, 
    pageHeight: number,
    aboutPosition: number,
    contactPosition: number,
    homePosition: number,
    workPosition: number,
    currentSection: string,
    currentPosition: number,
    buttonPress: boolean,
    cardInfo: card,
    cardStatus: boolean,
    [key: string]: any
}


const initialState: pageScrollState = {
    pageWidth: 0,
    pageHeight: 0,
    aboutPosition: -1,
    contactPosition: -1,
    homePosition: -1,
    workPosition: -1,
    currentPosition: 0,
    buttonPress: false,
    currentSection: '',
    cardInfo: {name: '', image: '', text: ''},
    cardStatus: false
}

const pageScrollSlice = createSlice({
    name: 'pageScroll',
    initialState,
    reducers: {
        setPageSize(state, action: PayloadAction<{ width: number, height: number }>) {
            const { width, height } = action.payload
            state.pageWidth = width
            state.pageHeight = height
        },
        setSectionPosition(state, action: PayloadAction<{ type: string, position: number }>) {
            const { type, position } = action.payload
            state[`${type}Position`] = position
        },
        setCurrentSection(state, action: PayloadAction<string>) {
            state.currentSection = action.payload
        },
        setCurrentPosition(state, action: PayloadAction<number>) {
            state.currentPosition = action.payload
        },
        setButtonPress(state, action: PayloadAction<boolean>) {
            state.buttonPress = action.payload
        },
        setCardInfo(state, action: PayloadAction<card>) {
            state.cardInfo = action.payload
        },
        setCardStatus(state, action: PayloadAction<boolean>) {
            state.cardStatus = action.payload
        }
    }
})

export const { setPageSize, setSectionPosition, setCurrentSection, setCurrentPosition, setButtonPress, setCardInfo, setCardStatus } = pageScrollSlice.actions
export default pageScrollSlice.reducer;