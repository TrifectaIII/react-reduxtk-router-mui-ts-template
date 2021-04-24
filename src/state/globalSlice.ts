import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

// Slice of global state
export interface NavigationPoint {
    name: string;
    route: string;
}

export interface GlobalState {
    darkMode: boolean;
    navPoints: NavigationPoint[]; //for nagivation feature of header
}

const initialState: GlobalState = {
    darkMode: !!localStorage.getItem('darkMode'),
    navPoints: [],
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        // toggle the mode and save to localstorage
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode ? 'on' : '') ;
        },
        // use payload action type to decale payload type
        setNavPoints: (state, action: PayloadAction<NavigationPoint[]>) => {
            state.navPoints = action.payload;
        }
    },
});

// extract actions
export const { toggleDarkMode, setNavPoints } = globalSlice.actions;

//selectors
export const selectDarkMode = (state: RootState) => state.global.darkMode;
export const selectNavPoints = (state: RootState) => state.global.navPoints;

export default globalSlice.reducer;