import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddEmployeeForm: true,
};

const formVisibilitySlice = createSlice({
    name: "formVisibility",
    initialState,
    reducers: {
        toggleFormVisibility(state) {
            state.showAddEmployeeForm = !state.showAddEmployeeForm;
        },
    },
});

export const { toggleFormVisibility } = formVisibilitySlice.actions;
export default formVisibilitySlice.reducer;
