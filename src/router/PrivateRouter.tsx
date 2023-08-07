import React, {PropsWithChildren} from 'react'
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux";


const PrivateRouter:React.FC<PropsWithChildren> = ({children}) => {

const user = useSelector((state:any) => state.user)
  return (
    <div>
{
    user ?
    <>
    {children}
    </>: <Navigate to="/register" />
}
    </div>
  )
}

export default PrivateRouter