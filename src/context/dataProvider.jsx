//proveedor del context, variables, informacion que maneja el context
import UserContext from './context'
import { useState,useEffect,useMemo,useContext } from 'react';
import { getUser } from '../tools/auth-helper';
export const DataProvider =(props)=>{
    const url ='http://localhost:4000/';
    const USERNAME = "username"
    const [user,setUserC]=useState(
      ()=> localStorage.getItem(USERNAME)
    );
    const [ADMcomments,setADMcomments]=useState();
    const [buscar,setBuscar]=useState("");
    const fetchApi = async() =>{
      const response = await fetch(url+"user");
      
      const responseJSON = await response.json();
      setUserC(responseJSON);
      console.log(responseJSON)
    }
   
    const valueUser = useMemo(()=>{
      return({user,
              setUserC,
              ADMcomments,
              setADMcomments,
              buscar,
              setBuscar,
              url
      })
    },[user])
    return <UserContext.Provider value={valueUser} {...props}/>

}
export function useUser(){
const context = useContext(UserContext)
return context
}
