import React from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleProviderLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unScribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser)
            setUser(currentUser)
        });
        return () =>{
            unScribe()
        } 
    }, [])

    const authInfo = { user, googleProviderLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;