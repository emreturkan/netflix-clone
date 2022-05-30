import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'
const AuthContext = createContext()

export const AppContextProvider = ({children})=>{

    const [user,setUser]= useState({})

    const signUp =(email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
     setDoc(doc(db,'users',email),{
         savedMovies: []
     })
    }

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    })


    return <AuthContext.Provider value={{signUp,logIn,logOut,user}}>{children}</AuthContext.Provider>
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}