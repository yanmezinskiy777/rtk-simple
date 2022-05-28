const axios = require("axios").default;
const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.data.map(user => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.data = [];
      state.loading = false;
    });
  },
});

module.exports.reducer = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
