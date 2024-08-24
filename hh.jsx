"use client" ;

import { useEffect ,useState } from "react"

export default function Clintt (){
    const [te , setts] = useState("no no")
    useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users").then(
            (tt)=>tt.json()
        ).then(
            data =>{
                console.log (data[0].id)
                setts(data)
            }
        )
        // const jss =  ffet.json()

    // setts({ffet})
    },[])
    return(
        <div>
            <h2>
                i am frome client coomponet 
            </h2>
            <h2>
                it a fetch {te[3].name}
            </h2>
        </div>
    )
}