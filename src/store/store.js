import { configureStore } from "@reduxjs/toolkit";
import epiReducer from "../features/epiSlice/epiSlice.js";
import formVisibilityReducer from "../features/formVisibilitySlice/formVisibilitySlice.js";
import employeesReducer from "../features/employee/employeeSlice.js";
import filterReducer from "../features/filterSlice/filterSlice.js";
import stepsReducer from "../features/stepSlice/stepSlice.js";

export const store = configureStore({
    reducer: {
        formVisibility: formVisibilityReducer,
        epis: epiReducer,
        employees: employeesReducer,
        filter: filterReducer,
        steps: stepsReducer,
    },
});

export default store;
