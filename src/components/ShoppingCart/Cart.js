/*
>>  This code defines a React component called Cart that is connected to the Redux store using the connect function.

>>  The component imports necessary dependencies, including connect from react-redux, React, 
    and useSelector from react-redux. It also imports an image file cartImage.png.

>>  The Cart component is defined as a functional component. 
    It uses the useSelector hook to access the balance and email properties from the Redux store.

>>  The Cart component is exported as the default export of the module, 
with the connect function used to connect the component to the Redux store and map the state properties to its props. This allows the component to access the balance and Users properties from the Redux store.
*/
import { connect } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import cartImage from "../../img/cartImage.png";

const Cart = () => {
  const { balance } = useSelector((state) => state.balance);
  const email = useSelector((state) => state.Users.email);

  return (
    <>
      {balance !== 0 ? (
        <div className="cart">
          <img src={cartImage} alt="Cart" />
          <span class="cart-count">{balance}</span>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    Users: state.Users,
  };
};

export default connect(mapStateToProps)(Cart);
