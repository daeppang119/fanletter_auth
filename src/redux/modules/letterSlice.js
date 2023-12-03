import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import fakeData from "fakeData.json";

const initialState = fakeData;

export const asyncUpFetch = createAsyncThunk("asyncThunk/asyncUpFetch", async () => {
  const response = await axios.get("http://localhost:5000/letters");

  console.log(response);
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
  }
});

export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;
export default letterSlice.reducer;
