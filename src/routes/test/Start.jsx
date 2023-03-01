import { Button } from "react-bootstrap";
import { Outlet, Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div id="question">
      <Link to={`/Question`}>
        <button id="start">Start</button>
      </Link>
    </div>
  );
};
export default Home;
