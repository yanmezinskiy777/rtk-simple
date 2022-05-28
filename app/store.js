const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../features/book/bookSlice").reducer;
const magazineReducer = require("../features/magazine/magazineSlice").reducer
const userReducer = require("../features/user/userSlice").reducer

const store = configureStore({
  reducer: {
    book: bookReducer,
    magazine: magazineReducer,
    user: userReducer
  },
});

module.exports = store;
