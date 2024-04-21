import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;