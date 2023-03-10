
import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from '../services/apiService';

const initialState = {
   
    employees: [],


}

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        // chipFiveAdd: (state) => {
        //    state.initialCash = 500
        //     state.hasChips = true;
        // },
      

        
    }
});

export const {
    //tuk funkciite

} = employeeSlice.actions;

export const employeeState = (state) => state.employees;
export default employeeSlice.reducer;