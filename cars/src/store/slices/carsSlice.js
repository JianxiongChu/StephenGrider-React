import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const carsSlice = createSlice({
  name: "cars",
  initialState: { searchTerm: "", data: [] },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });

      state.data = updated;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = 0;
      state.cost = 0;
    });
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
