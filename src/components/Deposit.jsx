import { useState } from "react";

const Deposit = () => {
  const [userData, setUserData] = useState({});
  const deposit = async (e) => {
    e.preventDefault();
    const userId = e.target.parentElement.elements[0].value;
    const amount = e.target.parentElement.elements[1].value;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(
      `http://localhost:3000/deposit?id=${userId}&amount=${amount}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const renderUserData = () => {
    const str = JSON.stringify(userData, null, 4);
    return <>{str}</>;
  };

  return (
    <div>
      <h4>Deposit to User</h4>
      <div>Type a user ID to show its details</div>
      <form>
        <input type="text" name="userId" placeholder="User ID"></input>
        <input type="text" name="amount" placeholder="Amount"></input>
        <button type="submit" onClick={(e) => deposit(e)}>
          Deposit
        </button>
      </form>
      <div className="data">{renderUserData()}</div>
    </div>
  );
};

export default Deposit;
