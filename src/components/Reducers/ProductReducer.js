/*
>> This file code defines a Redux reducer function called ProductReducer. 
>> there are two action types: "ADD" and "NEW".
>> When the "ADD" action is dispatched, the reducer returns a new state object by spreading the existing state 
    and updating the balance property by adding the payload value from the action to the current balance.
>> When the "NEW" action is dispatched, the reducer returns a new state object by spreading the existing state 
and setting the balance property to 0.

>> If none of the defined action types match the dispatched action, 
    the reducer returns the current state unchanged.

>> Finally, the ProductReducer function is exported as the default export of the module, 
    making it available for use in other parts of the application. */
const initialState = {
  balance: 0,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "NEW":
      return {
        ...state,
        balance: state.balance - state.balance,
      };
    default:
      return state;
  }
};

export default ProductReducer;
