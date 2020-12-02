import React, {createContext, useContext} from "react";
import {fireStore} from "../components/Firebase";

const FireStoreContext = createContext(null);

export const useFirestoreContext = () => {
    return useContext(FireStoreContext);
}

export const FireStoreProvider = (props) => {
    const sendMessage = (email, name, message) => {
        return new Promise((resolve, reject) => {
            fireStore
                .collection('/contacts')
                .add({
                    name: name,
                    email: email,
                    message: message
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    };

    return (
        <FireStoreContext.Provider
            value={{
                sendMessage: sendMessage
            }}
        >
            {props.children}
        </FireStoreContext.Provider>
    );
};