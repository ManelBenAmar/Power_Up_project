import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../Redux/actions/course";
import ReactPlayer from "react-player";
import { Header } from "semantic-ui-react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
const CourseDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());
    }, []);
    const courses = useSelector((state) => state.courseReducer.courses);
    const course = courses.find((c) => c._id === id);

    // const courses = useSelector((state) => state.courseReducer.courses);
    // const { courseId } = useParams();
    // const course = courses.find((course) => course._id === Number(courseId));

    return (
        <div>
            <center>
                <br />
                <div>
                    <Header size="huge">
                        <h1>{course && course.title}</h1>
                    </Header>
                    {/* <Header size="large">
                        <h2>courseinstructor</h2>
                    </Header> */}
                </div>
                <br /> <br />
                <div>
                    <Header size="small">
                        <h3>{course && course.description}</h3>
                    </Header>
                </div>
                <br /> <br />
                <ReactPlayer url={course && course.videoUrl} />
                {/* <iframe
                    src={course && course.url}
                    className="iframeBook"
                    style={{ width: "100%", heigh: "500px" }}
                >
                    {" "}
                </iframe> */}
            </center>
        </div>
    );
};

export default CourseDetails;
