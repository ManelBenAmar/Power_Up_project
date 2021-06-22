import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landpagep = () => {
    return (
        <div className="landpage">
            <center>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2021/01/07/06/07/start-5896299_960_720.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>POWER UP</h1>
                            <h1> " Soft Skills Development Community " </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2017/08/30/07/56/clock-2696234_960_720.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>POWER UP</h1>
                            <h1> " Soft Skills Development Community " </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>POWER UP</h1>
                            <h1> " Soft Skills Development Community " </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div style={{ backgroundColor: "grey" }}>
                    {" "}
                    <br />
                    <h1>About Us</h1> <br />
                </div>
                <br />
                <h3>
                    {" "}
                    Our platform is composed of volunteer qualified coaches and
                    trainers who are specialized in Soft Skills development and
                    students who are eager to impower their Soft Skills.{" "}
                </h3>
                <br />
                <br />
                {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F79516749654909836%2F&psig=AOvVaw0Lor_a8H75SJQBAanbxl7H&ust=1624008144872000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiIpamsnvECFQAAAAAdAAAAABBI
                 */}
            </center>

            <br />
            <br />
            <footer style={{ backgroundColor: "grey" }}>
                <center>
                    <br />
                    <br />
                    <h2> Power up project</h2>
                    <br />
                    <p>
                        <h3> For more informations: </h3>
                        <h5>Email: manelbenamar@hotmail.fr </h5>
                        <h5>Phone: +216 97678193</h5>
                    </p>
                    <br />
                    &copy; {new Date().getFullYear()} Copyright: Manel Ben Amar
                    <br />
                    <br />
                    <br />
                </center>
            </footer>
        </div>
    );
};

export default Landpagep;
