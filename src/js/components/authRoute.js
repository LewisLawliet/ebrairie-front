import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthRoute = ({component, path, exact, ...props})=> {
    const Component = component;
    const isLogged = useAuth;

    console.log("est connecté", isLogged)

    if(!isLogged){
        return <Redirect to="/login" />
         
    }
  return  <Route exact={exact} path={path} render={()=><Component {...props}/>} />
}

const useAuth =()=>{
    const auth = useSelector(state => state.auth.user.values)
    console.log("authentification", auth)
    return auth !== null
}

export {AuthRoute, useAuth}