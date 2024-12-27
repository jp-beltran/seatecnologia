import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchEmployeesAPI,
    addEmployeeAPI,
    editEmployeeAPI,
    deleteEmployeeAPI,
} from "../../api/fetchEmployees";

export const fetchEmployees = createAsyncThunk(
    "employees/fetchAll",
    async () => {
        return await fetchEmployeesAPI();
    }
);
export const fetchEmployeeById = createAsyncThunk(
    "employees/fetchById",
    async () => {
        return await fetchEmployeeById();
    }
);

export const addEmployee = createAsyncThunk(
    "employees/add",
    async (employee) => {
        return await addEmployeeAPI(employee);
    }
);

export const editEmployee = createAsyncThunk(
    "employees/edit",
    async (employee) => {
        return await editEmployeeAPI(employee);
    }
);

export const deleteEmployee = createAsyncThunk(
    "employees/delete",
    async (id) => {
        return await deleteEmployeeAPI(id);
    }
);

const initialState = {
    employees: [],
    status: "idle",
    showOnlyActive: false,
    isActive: false,
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
        },
        updateEmployee: (state, action) => {
            state.employees = [
                ...state.employees.filter((e) => e.id !== action.payload.id),
                action.payload,
            ];
        },
        toggleActiveFilter: (state) => {
            state.showOnlyActive = !state.showOnlyActive;
        },
        clearFilter: (state) => {
            state.showOnlyActive = false;
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.employees.push(action.payload);
            })
            .addCase(editEmployee.fulfilled, (state, action) => {
                const index = state.employees.findIndex(
                    (emp) => emp.id === action.payload.id
                );
                state.employees[index] = action.payload;
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter(
                    (emp) => emp.id !== action.payload
                );
            });
    },
});

export const {
    setEmployees,
    toggleActiveFilter,
    clearFilter,
    setIsActive,
    updateEmployee,
} = employeesSlice.actions;
export default employeesSlice.reducer;
