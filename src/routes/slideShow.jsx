import "bootstrap/dist/css/bootstrap.min.css";
import Bot from "./res/img/botstrap.jpg";
import Dom from "./res/img/dom.jpg";
import Saturn from "./res/img/saturn.jpg";
import Vershin from "./res/img/vershin.jpg";
import Zakat from "./res/img/zakat.jpg";
import { Carousel } from "react-bootstrap";
const SlideShow = () => {
  return (
    <main>
      <Carousel style={{ padding: "1em" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={Bot} alt="botstrap" />
          <Carousel.Caption>
            <h3>Web developer Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Dom} alt="dom" />
          <Carousel.Caption>
            <h3>Web developer Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Saturn} alt="saturn" />
          <Carousel.Caption>
            <h3>Web developer Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Vershin} alt="vershin" />
          <Carousel.Caption>
            <h3>Web developer Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Zakat} alt="zakat" />
          <Carousel.Caption>
            <h3>Web developer Blog</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};
export default SlideShow;
