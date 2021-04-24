import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

// Slice of global state
export interface GlobalState {
    darkMode: boolean;
}

const initialState: GlobalState = {
    darkMode: !!localStorage.getItem('darkMode'),
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode ? 'on' : '') ;
        }
    },
});

export const { toggleDarkMode } = globalSlice.actions;

export const selectDarkMode = (state: RootState) => state.global.darkMode;

export default globalSlice.reducer;