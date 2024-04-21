import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;
const gitProvider = new GithubAuthProvider;


const AuthProvider = ({children}) => {


    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, provider)
    }
    const signInWithGitHub=()=>{
        return signInWithPopup(auth, gitProvider)
    }

    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;