import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/actions/admin";
import UserCard from "../UserCard/UserCard";

const UsersList = ({ searchTitle, getSearchTitle }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.adminReducer.users);
    const loadUsers = useSelector((state) => state.adminReducer.loadUsers);
    console.log(users, loadUsers);
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
                    {loadUsers ? (
                        <h2>loading </h2>
                    ) : (
                        users.map((el) => <UserCard key={el._id} user={el} />)
                    )}
                </div>
            </center>
        </div>
    );
};

export default UsersList;
