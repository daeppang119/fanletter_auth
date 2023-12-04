import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import fakeData from "fakeData.json";

const initialState = {
  fanLetters: [],
  isLoading: false,
  error: null
};

export const __getLetters = createAsyncThunk("letters/asyncFetch", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:5000/letters");
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      return [action.payload, ...state];
    },

    deleteLetter: (state, action) => {
      return state.filter((letter) => letter.id !== action.payload);
    },

    editLetter: (state, action) => {
      return state.map((letter) => {
        if (letter.id === action.payload) {
          return { ...letter, content: action.payload };
        }
        return letter;
      });
    }
  },
  extraReducers: {
    [__getLetters.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.fanLetters = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getLetters.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    }
  }
});

export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;
export default letterSlice.reducer;
