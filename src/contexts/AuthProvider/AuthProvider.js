import React from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProviderLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = ( email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unScribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unScribe()
        } 
    }, [])

    const authInfo = { user, googleProviderLogin, createUser, signIn, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;