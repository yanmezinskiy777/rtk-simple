const store = require("./app/store");
const bookActions = require("./features/book/bookSlice").action;

console.log("initial state", store.getState());

const unsubscibe = store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.add(2));

unsubscibe();
