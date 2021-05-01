import {createSlice} from '@reduxjs/toolkit';

import {RootState} from './store';

// Slice of global state
export interface GlobalState {
    darkMode: boolean;
    navDrawerOpen: boolean;
}

const initialState: GlobalState = {
    darkMode: Boolean(localStorage.getItem('darkMode')),
    navDrawerOpen: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        // toggle the mode and save to localstorage
        toggleDarkMode: (state) => {

            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode ? 'on' : '');

        },
        openNavDrawer: (state) => {

            state.navDrawerOpen = true;

        },
        closeNavDrawer: (state) => {

            state.navDrawerOpen = false;

        },
    },
});

// extract actions
export const {toggleDarkMode, openNavDrawer, closeNavDrawer} = globalSlice.actions;

// selectors
export const selectDarkMode = (state: RootState): boolean => state.global.darkMode;
export const selectNavDrawerOpen = (state: RootState): boolean => state.global.navDrawerOpen;

export default globalSlice.reducer;
