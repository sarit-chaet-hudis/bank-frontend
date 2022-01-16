import { useState } from "react";

const ShowUser = () => {
  const [userData, setUserData] = useState({});
  const getUser = async (e) => {
    e.preventDefault();
    const userId = e.target.parentElement.elements[0].value;
    fetch(`http://localhost:3000/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const renderUserData = () => {
    const str = JSON.stringify(userData, null, 4);
    return <>{str}</>;
  };

  return (
    <div>
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
