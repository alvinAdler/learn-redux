import { createSlice } from "@reduxjs/toolkit";

const THEME_CONFIG = {
    "light": {
        mode: "light", backgroundColor: "#FAFAFA", color: "#2B2B2B"
    },
    "dark": {
        mode: "dark", backgroundColor: "#2B2B2B", color: "#FAFAFA"
    }
}

const themesSlice = createSlice({
    name: "themes",
    initialState: THEME_CONFIG.light,
    reducers: {
        toggleTheme: (state, _) => {
            switch(state.mode){
                case "light":
                    state = THEME_CONFIG.dark
                    break;
                case "dark":
                    state = THEME_CONFIG.light
                    break;
                default:
                    console.log("Invalid theme mode")
            }

            return state
        }
    }
})

const {actions, reducer} = themesSlice

export const { toggleTheme } = actions
export default reducer