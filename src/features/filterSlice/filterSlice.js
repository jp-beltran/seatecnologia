import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOnlyActive: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleActiveFilter: (state) => {
            state.showOnlyActive = !state.showOnlyActive;
        },
        clearFilter: (state) => {
            state.showOnlyActive = false;
        },
    },
});

export const { toggleActiveFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
