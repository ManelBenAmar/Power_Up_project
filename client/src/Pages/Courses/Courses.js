import React from "react";
import CourseList from "../../Components/CourseList/CourseList";
import Search from "../../Components/Search/Search";
// import { Form, FormControl, Button } from "react-bootstrap";
const Courses = ({ getSearchTitle }) => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div>
                {/* <Form className="d-flex" style={{ width: "20cm" }}>
                    <Button>
                        <FormControl
                            type="search"
                            placeholder="Search a course"
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e) => getSearchTitle(e.target.value)}
                        />
                    </Button>
                </Form> */}
            </div>
            <br />
            <Search />
            <CourseList />
        </div>
    );
};

export default Courses;
