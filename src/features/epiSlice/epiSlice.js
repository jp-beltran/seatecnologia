import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isChecked: false,
    showComponents: true,
};

const epiSlice = createSlice({
    name: "epi",
    initialState,
    reducers: {
        toggleCheckbox: (state) => {
            state.isChecked = !state.isChecked;
            state.showComponents = !state.isChecked;
        },
    },
});

export const { toggleCheckbox } = epiSlice.actions;
export default epiSlice.reducer;
