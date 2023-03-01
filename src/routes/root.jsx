import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "./res/logo.jpg";
import com from "./res/img/comersial.jpg";
export default function Root() {
  return (
    <>
      <div id="head">
        <div id="structure">
          <div id="side">
            <div id="">
              <img
                src={logo}
                style={{
                  height: "10vh",
                }}
              ></img>
            </div>
            <div id="side">
              <Link to={`/home`} style={{ color: "white" }}>
                Home
              </Link>
              <Link to={`/aboutme`} style={{ color: "white" }}>
                About
              </Link>
              <Link to={`/calculate`} style={{ color: "white" }}>
                Calculator
              </Link>
              <Link to={`/slideshow`} style={{ color: "white" }}>
                Slideshow
              </Link>
              <Link to={`/shop`} style={{ color: "white" }}>
                Shop
              </Link>
              <Link to={`/test`} style={{ color: "white" }}>
                Test
              </Link>
            </div>
          </div>
        </div>
        <div id="top">
          <div id="basis">
            <div id="Left_col">
              <p>Выполнил студент 1 курса магистратуры Давлетбердин А.С</p>
            </div>
            <div id="Col">
              <Outlet />
            </div>
            <a href="https://sun9-84.userapi.com/impg/c857232/v857232557/1be2f4/0d4qmP7C_Pw.jpg?size=1280x720&quality=96&sign=aca690e4d4e7c18eddacd8455dc6d41a&type=album">
              <img src={com} id="Right_col"></img>
            </a>
          </div>
        </div>
      </div>

      <div id="footer">
        {" "}
        <a
          href="https://vk.com/id179431333"
          style={{ color: "white", fontsize: "80px" }}
        >
          My Footer
        </a>
      </div>
    </>
  );
}
