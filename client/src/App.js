import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpagep from "./Pages/Landpage/Landpagep";
import CourseList from "./Components/CourseList/CourseList";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import UsersListAdmin from "./Components/UsersList/UsersListAdmin";
import CoursesListAdmin from "./Components/CoursesList/CoursesListAdmin";
import AdminProfile from "./Pages/Profile/AdminProfile";
import InstructorProfile from "./Pages/Profile/InstructorProfile";
import StudentProfile from "./Pages/Profile/StudentProfile";
import StudentRoute from "./router/StudentRoute";
import InstructorRoute from "./router/InstructorRoute";
import AdminRoute from "./router/AdminRoute ";
import { Route, Switch } from "react-router-dom";
import Navbarp from "./Components/Navbar/Navbarp";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";

import AddEditCourse from "./Components/AddEditCourse/AddEditCourse";
import CoursesListInstructor from "./Components/CoursesList/CoursesListInstructor";
import CoursesListStudent from "./Components/CoursesList/CoursesListStudent";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Contactus from "./Pages/Contactus/Contactus";
import MessagesList from "./Components/MessagesList/MessagesList";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    const [searchTitle, setSearchTitle] = useState("");
    const getSearchTitle = (input) => {
        setSearchTitle(input);
    };
    return (
        <div>
            <Navbarp getSearchTitle={getSearchTitle} />
            <Switch>
                <Route exact path="/" component={Landpagep} />
                <Route path="/courses">
                    <CourseList
                        searchTitle={searchTitle}
                        getSearchTitle={getSearchTitle}
                    />
                </Route>
                <Route path="/userslist">
                    <UsersListAdmin
                        searchTitle={searchTitle}
                        getSearchTitle={getSearchTitle}
                    />{" "}
                </Route>
                <Route path="/courses" component={CourseList} />
                <Route path="/instructorcourseslist">
                    <CoursesListInstructor
                        searchTitle={searchTitle}
                        getSearchTitle={getSearchTitle}
                    />
                </Route>
                <Route path="/studentcourseslist">
                    <CoursesListStudent
                        searchTitle={searchTitle}
                        getSearchTitle={getSearchTitle}
                    />
                </Route>
                <Route path="/messages">
                    <MessagesList
                        searchTitle={searchTitle}
                        getSearchTitle={getSearchTitle}
                    />
                </Route>
                <Route path="/coursedetails/:id">
                    <CourseDetails />
                </Route>
                <Route path="/contactus" component={Contactus} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route
                    path={["/addcourse", "/editcourse/:iD"]}
                    component={AddEditCourse}
                />
                <AdminRoute path="/adminprofile" component={AdminProfile} />
                <StudentRoute
                    path="/studentprofile"
                    component={StudentProfile}
                />
                <InstructorRoute
                    path="/instructorprofile"
                    component={InstructorProfile}
                />
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
