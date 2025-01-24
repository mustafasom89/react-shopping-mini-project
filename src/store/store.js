/*
>>  This module exports a Redux store using the configureStore function from the @reduxjs/toolkit library.

>> The object has a reducer property that takes in an object with two key-value pairs: 
  *balance 
  and 
  *Users. 

>>  The balance key is associated with the balanceReducer function.
>>  The Users key is associated with the usrReducer function.

>>  This configuration sets up the Redux store with two reducers: 
  1.balanceReducer and 
  2. usrReducer. 
  Each reducer is responsible for managing a specific part of the state: balance and Users.

  */

import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../components/Reducers/ProductReducer";
import usrReducer from "../components/Reducers/UsersReducer";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    Users: usrReducer,
  },
});

export default store;
