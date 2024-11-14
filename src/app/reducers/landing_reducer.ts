import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LandingSection } from '../enum'

export const landingReducer = createSlice({
    name: 'landingReducer',
    initialState: {
        section: LandingSection.Intro,
        showIntro: true,
        showAbout: false,
        showPortfolio: false,
        showWork: false
    },
    reducers: {
        toSectionAbout: (state) => {
            state.section = LandingSection.About
        },
        toSectionPortfolio: (state) => {
            state.section = LandingSection.Portfolio
        },
        toSectionWork: (state) => {
            state.section = LandingSection.Work
        },
        toSectionIntro: (state) => {
            state.section = LandingSection.Intro
        },


    },
})

export const { toSectionAbout, toSectionPortfolio, toSectionWork, toSectionIntro } = landingReducer.actions
export default landingReducer.reducer
