import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LandingSection } from '../enum'
import React, { Component } from "react";

export const landingReducer = createSlice({
    name: 'landingReducer',
    initialState: {
        section: LandingSection.Intro,
        showIntro: true,
        showAbout: false,
        showPortfolio: false,
        showWork: false,
        portfolio: {
            showcaseId: 1,
            title: "",
            desc: "",
            tag: <div></div>,
            imageShowcases: [""]
        }
    },
    reducers: {
        toSectionAbout: (state) => {
            state.section = LandingSection.About
            state.showAbout = true
        },
        toSectionPortfolio: (state) => {
            state.section = LandingSection.Portfolio
            state.showPortfolio = true
        },
        toSectionWork: (state) => {
            state.section = LandingSection.Work
            state.showWork = true
        },
        toSectionIntro: (state) => {
            state.section = LandingSection.Intro
        },
        disablePortfolio: (state) => {
            state.showPortfolio = false
        },
        disableAbout: (state) => {
            state.showAbout = false
        },
        disableWork: (state) => {
            state.showWork = false
        },
        changeShowcaseId: (state, action: PayloadAction<number>) => {
            state.portfolio.showcaseId = action.payload
        },
        changeShowcaseImages: (state, action: PayloadAction<string[]>) => {
            state.portfolio.imageShowcases = action.payload
        },
        changeShowcaseContent: (state, action: PayloadAction<{ title: string, desc: string, tag: React.JSX.Element }>) => {
            state.portfolio.title = action.payload.title
            state.portfolio.desc = action.payload.desc
            state.portfolio.tag = action.payload.tag
        }
    },
})

export const { toSectionAbout, toSectionPortfolio, toSectionWork,
    toSectionIntro, changeShowcaseId, changeShowcaseImages,
    changeShowcaseContent,disablePortfolio, disableAbout, disableWork } = landingReducer.actions
export default landingReducer.reducer
