import React, {useState} from 'react';
import {Element} from "react-scroll";
import {useFirestoreContext} from "../context/FirestoreContext";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const firestoreContext = useFirestoreContext();

    const handleSubmit = async () => {
        try {
            await firestoreContext.sendMessage(email, name, message);
            alert("Awesome! I'll text you back 🙌");
            setMessage("");
            setName("");
            setEmail("");

        } catch (error) {
            alert("You message didn't go through ☹️ but thanks for checking out my portfolio 🤩");
            console.log(error);
        }
    }

    return (
        <Element name={"contact"}>
            <div className={"layout-page contact-container"}>
                <h1>{"Let's Connect!"}</h1>

                <div className={"layout-card"}>
                    <label><h2>{"Name"}</h2></label>
                    <input type={"text"} id={"name"} placeholder={"Your Awesome Name!"} onChange={(event) => {
                        setName(event.target.value);
                    }} value={name}/>

                    <label><h2>{"Email"}</h2></label>
                    <input type={"email"} id={"email"} placeholder={"youremail@email.com"} onChange={(event) => {
                        setEmail(event.target.value);
                    }} value={email}/>

                    <label><h2>{"Message"}</h2></label>
                    <input type={"text"} placeholder={"Let's work on something cool!"} onChange={(event) => {
                        setMessage(event.target.value);
                    }} value={message}/>
                    <div>
                        <button onClick={handleSubmit}><h3>{"Send"}</h3></button>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Contact;