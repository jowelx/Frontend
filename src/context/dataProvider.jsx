//proveedor del context, variables, informacion que maneja el context
import UserContext from './context'
import { useState,useEffect,useMemo,useContext } from 'react';
export const DataProvider =(props)=>{
    const url ='https://leyla-back.herokuapp.com/';
    const [user,setUserC]=useState([]);
    const [ADMcomments,setADMcomments]=useState();
    const [buscar,setBuscar]=useState("");
    const fetchApi = async() =>{
      const response = await fetch(url+"user");
      
      const responseJSON = await response.json();
      setUserC(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])
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
