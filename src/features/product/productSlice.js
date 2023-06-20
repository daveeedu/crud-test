import { createSlice } from "@reduxjs/toolkit";

function createData( name, price, ) {
    return { name, price};
  }

  const initialState = {
    data: [
        createData( "Lorem ipsum",  "Lorem ipsum" ),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum",  "Lorem ipsum"),
        createData( "Lorem ipsum",  "Lorem ipsum"),
        createData( "Lorem ipsum",  "Lorem ipsum" ),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum", "Lorem ipsum"),
        createData( "Lorem ipsum",  "Lorem ipsum"),
        createData( "Lorem ipsum",  "Lorem ipsum")
    ],
  };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.data.push(action.payload);
      }
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

export const { addProduct, deleteRow, editRow } = productSlice.actions;

export default productSlice.reducer;
