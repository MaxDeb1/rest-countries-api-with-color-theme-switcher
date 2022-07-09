import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../../redux/store';

export interface RegionState {
  value: string;
}

const initialState: RegionState = {
  value: "",
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    handleRegion: (state, action: PayloadAction<string>) => {
      state.value = action.payload; 
    },
  },
});

export const { handleRegion } = regionSlice.actions;

export const selectRegion = (state: RootState) => state.region.value

export default regionSlice.reducer;