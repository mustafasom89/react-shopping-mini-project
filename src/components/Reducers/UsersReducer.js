/*
>>  This code defines a Redux reducer function called reducer. 
    This reducer is responsible for managing the state related to user registration.

>>  The initial state of the reducer is defined as an object with an email property set 
        to "admin@task.com" and a password property set to "admin".

>>  Inside the reducer function, there is a switch statement that handles the "REG" action type.

>>  When the "REG" action is dispatched, the reducer returns a new state object by spreading the existing state 
    and updating the email and password properties with the values from the payload of the action. 
    The payload is expected to be an object with email and password properties.

>>  If none of the defined action types match the dispatched action, the reducer returns the current state unchanged.

>>  Finally, the reducer function is exported as the default export of the module, making it available for use in other parts of the application.
*/

const initialState = {
  email: "admin@task.com",
  password: "admin",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default reducer;
