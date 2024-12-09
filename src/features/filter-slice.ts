import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  types?: string[];
  tags?: string[];
  category?: string[];
  all?:string[]
}

const initialState: FilterState = {
  types: [],
  tags: [],
  category: [],
  all:[]
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<FilterState>) => {
      state.types = action.payload.types;
      state.tags = action.payload.tags;
      state.category = action.payload.category;
      state.all=action.payload.all
    },
  },
});

export const {setFilters} = filterSlice.actions
export const filterReducer = filterSlice.reducer
