import ShowUser from "../components/ShowUser";
import Deposit from "../components/Deposit";
const Home = () => {
  return (
    <div>
      <h1>Bank Manager</h1>
      <h3>Manage your bank accounts</h3>
      <hr />
      <ShowUser />
      <hr />
      <Deposit />
    </div>
  );
};

export default Home;
