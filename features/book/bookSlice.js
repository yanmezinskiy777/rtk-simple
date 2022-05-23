const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberofBooks: 20,
};

const slice = createSlice({
  name: "book",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberofBooks--;
    },
    add: (state, action) => {
      state.numberofBooks += action.payload;
    },
  },
});

module.exports.reducer = slice.reducer;
module.exports.action = slice.actions;
