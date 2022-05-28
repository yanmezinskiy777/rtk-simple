const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberofMagazines: 30,
};

const slice = createSlice({
  name: "magazine",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberofMagazines--;
    },
    add: (state, action) => {
      state.numberofMagazines += action.payload;
    },
  },
});

module.exports.reducer = slice.reducer;
module.exports.action = slice.actions;
