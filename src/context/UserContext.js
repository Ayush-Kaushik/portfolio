import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(async () => {
        const response = await axios.get("https://api.github.com/users/Ayush-Kaushik");
        console.log(response.data);
        setUserInfo(response.data);
    }, []);

    return (
        <UserContext.Provider value={{
            userInfo: userInfo
        }}>
            {children}
        </UserContext.Provider>
    )
}