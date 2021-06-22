import React, { useEffect, useState } from "react";
import "./Contactus.css";
import { useDispatch } from "react-redux";
import { addMessage } from "../../Redux/actions/message";
const Contactus = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const addMsg = (e) => {
        e.preventDefault();
        dispatch(addMessage({ subject, message }));
        setSubject("");
        setMessage("");
        alert("Tank you for your message. We will respond you soon.");
    };

    return (
        <section className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <form className="contact-form row">
                <div className="form-field col-lg-12">
                    <input
                        id="subject"
                        className="input-text js-input"
                        type="text"
                        required
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <label className="label" htmlFor="message">
                        Subject
                    </label>
                </div>
                <div className="form-field col-lg-12">
                    <input
                        id="message"
                        className="input-text js-input"
                        type="text"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <label className="label" htmlFor="message">
                        Message
                    </label>
                </div>
                <div className="form-field col-lg-12">
                    <input
                        className="submit-btn"
                        type="submit"
                        defaultValue="Submit"
                        onClick={addMsg}
                    />
                </div>
            </form>
        </section>
    );
};

export default Contactus;
