import { createSlice } from "@reduxjs/toolkit";

const initialState = "카리나";

// const member = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MEMBER:
//       const activeMember = action.payload;
//       return activeMember;
//     default:
//       return state;
//   }
// };

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (action) => {
      return action.payload;
    },
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
