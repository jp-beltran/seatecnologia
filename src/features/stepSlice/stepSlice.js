import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
};

const stepsSlice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        nextStep(state) {
            if (state.currentStep < 9) {
                state.currentStep += 1;
            }
        },
        resetSteps(state) {
            state.currentStep = 1;
        },
    },
});

export const { nextStep, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
