import React, { useState } from "react";
import "../../css/style.css";
import { useSelector } from "react-redux";

export default function Home() {
  const [name, setName] = useState("");
  const [IsLogIn, setIsLogIn] = useState(false);
  const Users = useSelector((state) => state.Users);

  const myUsers = () => {
    return (
      <div>
        <h3>User List:</h3>
        <ul>
          {Users.map((user) => (
            <li>{user.email}</li>
          ))}
        </ul>
      </div>
    );
  };

  const setAction = (request) => {
    switch (request) {
      case "login":
        if (name.trim() !== "") {
          setIsLogIn(true);
        } else {
          alert("Please enter the name");
        }

        break;
      case "logout":
        setIsLogIn(false);
        setName("");
        break;
      default:
        break;
    }
  };

  return (
    <div className="home">
      <div className="body">
        <br></br>
        <hr></hr>
        <main>
          <section class="overview">
            <div class="card">
              <h2>Total Orders</h2>
              <p>1,234</p>
            </div>
            <div class="card">
              <h2>Total Revenue</h2>
              <p>$12,345</p>
            </div>
            <div class="card">
              <h2>New Customers</h2>
              <p>567</p>
            </div>
          </section>

          <section class="recent-orders">
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>John Doe</td>
                  <td>2024-05-01</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Jane Smith</td>
                  <td>2024-04-30</td>
                  <td>$75</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Mike Johnson</td>
                  <td>2024-04-29</td>
                  <td>$120</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Online Shopping Dashboard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
