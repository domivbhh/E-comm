import { useEffect, useState } from "react"


const useOnlineCheck=()=>{
    const[status,setStatus]=useState(false)

    useEffect(()=>{
            window.addEventListener('online',()=>{
                 setStatus(true)
            })
            window.addEventListener('offline',()=>{
                 setStatus(false)
            })
    },[status])
    // console.log(status)


        return status

}


export default useOnlineCheck