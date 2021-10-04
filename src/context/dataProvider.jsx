//proveedor del context, variables, informacion que maneja el context
import UserContext from './context'
import { useState,useEffect,useMemo,useContext } from 'react';
export const DataProvider =(props)=>{
    const url ='http://localhost:5000/user';
    
    const [user,setUser]=useState([]);
    const fetchApi = async() =>{
      const response = await fetch(url);
      
      const responseJSON = await response.json();
      setUser(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])
    const value = useMemo(()=>{
      return({user})
    },[user])
    return <UserContext.Provider value={value} {...props}/>

       
    
}
export function useUser(){
const context = useContext(UserContext)
return context
}
