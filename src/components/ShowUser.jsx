import { useState } from "react";

const ShowUser = () => {
  const [userData, setUserData] = useState({});
  const getUser = async (e) => {
    e.preventDefault();
    const userId = e.target.parentElement.elements[0].value;
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    try {
      fetch(`http://localhost:3000/${userId}`, requestOptions)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    } catch (e) {
      console.log("caught?");
      console.log(e);
    }
  };

  const renderUserData = () => {
    const str = JSON.stringify(userData, null, 4);
    return <>{str}</>;
  };

  return (
    <div>
      <h4>Show User Details</h4>
      <div>Type a user ID to show its details</div>
      <form>
        <input type="text" name="userId"></input>
        <button type="submit" onClick={(e) => getUser(e)}>
          Show User
        </button>
      </form>
      <div className="data">{renderUserData()}</div>
    </div>
  );
};

export default ShowUser;
