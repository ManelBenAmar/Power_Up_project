import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/actions/admin";
import UserCardAdmin from "../UserCard/UserCardAdmin";
import { Form, FormControl, Button } from "react-bootstrap";
const UsersListAdmin = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.adminReducer.users);
    const loadUsers = useSelector((state) => state.adminReducer.loadUsers);
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div>
            <center>
                <br />
                <br />
                <br />
                <div>
                    <Form style={{ width: "25cm" }}>
                        <Button>
                            <FormControl
                                type="search"
                                placeholder="Search a course"
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
                    className="courses-list"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    {users
                        .filter((val) =>
                            val.name
                                .toLowerCase()
                                .includes(searchTitle.toLowerCase())
                        )
                        .map((user) => (
                            <UserCardAdmin user={user} key={user._id} />
                        ))}

                    {/* //     users.map((el) => (
                    //         <UserCardAdmin key={el._id} user={el} />
                    //     ))
                    // )} */}
                </div>
            </center>
        </div>
    );
};

export default UsersListAdmin;
