import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: "filterTodos",
    initialState: {
        daysFilter: [{
            name: "all",
            startDate: ""
        }]
    },
    reducers: {
        setFilter: (state, action) => {
            state.daysFilter = state.daysFilter.filter(item => item.startDate !== action.payload.startDate);
            state.daysFilter = [...state.daysFilter, action.payload];
        }
    }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;