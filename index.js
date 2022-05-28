const store = require("./app/store");
const bookActions = require("./features/book/bookSlice").action;
const magazineActions = require("./features/magazine/magazineSlice").action;
const fetchUsers = require("./features/user/userSlice").fetchUsers

//console.log("initial state", store.getState());

store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.add(2));

// store.dispatch(magazineActions.ordered());
// store.dispatch(magazineActions.ordered());
// store.dispatch(magazineActions.ordered());
// store.dispatch(magazineActions.add(2));

//unsubscibe();
