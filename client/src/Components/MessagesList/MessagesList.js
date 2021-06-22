import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MessageCard from "../MessageCard/MessageCard";
import { seeAllMessages } from "../../Redux/actions/message";
import { Form, FormControl, Button } from "react-bootstrap";
const MessagesList = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    let messages = useSelector((state) => state.messageReducer.messages);

    useEffect(() => {
        dispatch(seeAllMessages());
    }, []);
    return (
        <div className="messages-content">
            <center>
                <br />
                <br />
                <br />
                <div>
                    <Form style={{ width: "25cm" }}>
                        <Button>
                            <FormControl
                                type="search"
                                placeholder="Search a message"
                                aria-label="Search"
                                onChange={(e) => getSearchTitle(e.target.value)}
                            />
                        </Button>
                    </Form>{" "}
                </div>
                <br />
                <br />
                <br />
                <div
                    className="messages-list"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    {messages &&
                        messages
                            .filter(
                                (val) =>
                                    val.subject &&
                                    val.subject
                                        .toLowerCase()
                                        .includes(
                                            searchTitle &&
                                                searchTitle.toLowerCase()
                                        )
                            )
                            .map((message) => (
                                <MessageCard
                                    message={message}
                                    key={message._id}
                                />
                            ))}
                    {/* ****************** */}
                    {/* {loadCourses ? (
                    <h2>loading</h2>
                ) : (
                    courses &&
                    courses.map((el) => <CourseCard key={el._id} course={el} />)
                )} */}
                    {/* ***************** */}
                    {/* {courses.map((course) => (
                    <CourseCard course={course} key={course._id} />
                ))} */}
                </div>
            </center>
        </div>
    );
};

export default MessagesList;
