import { createSlice } from "@reduxjs/toolkit";

function createData(name, price, ) {
    return { name, price};
  }

  const initialState = {
    data: [
        createData("Lorem ipsum",  "Lorem ipsum" ),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum",  "Lorem ipsum"),
        createData("Lorem ipsum",  "Lorem ipsum"),
        createData("Lorem ipsum",  "Lorem ipsum" ),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum", "Lorem ipsum"),
        createData("Lorem ipsum",  "Lorem ipsum"),
        createData("Lorem ipsum",  "Lorem ipsum")
    ],
  };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    deleteRow(state, action) {
      state.data = state.data.filter((_, i) => i !== action.payload);
    },
    editRow(state, action) {
        const { index, data } = action.payload;
        const newData = [...state.data];
        newData[index] = data;
        state.data = newData;
      },
  },
});

export const { setData, deleteRow, editRow } = productSlice.actions;

export default productSlice.reducer;
