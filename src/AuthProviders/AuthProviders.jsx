import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase";


export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, userPhoto) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: userPhoto });
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, carentUser => {
            setUser(carentUser);
            setLoading(false)
        })
        return ( () => unSubscribe);
    }, [])

    const authInformation = {
        user,
        loading,
        createNewUser,
        logIn,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;