import React  from 'react'
import { Route } from "react-router-dom"

const Admin = ({ component: Component, ...props}) => {

    return (
      <Route
      {...props}
      render={(props) => 
     <Component {...props}/>
    }
      />
    )
}

export default Admin;