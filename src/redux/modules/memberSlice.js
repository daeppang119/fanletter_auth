import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (action) => {
      return action.payload;
    }
  }
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
