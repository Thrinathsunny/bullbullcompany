import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Card= () => {
    const[array,setArray]=useState([])
    const[search,setSearch]=useState({hero:""})
    const[newarray,setNewarray]=useState([])
    useEffect(()=>{
    axios.get(" https://jsonplaceholder.typicode.com/posts").then((res)=>{
        let ammu= res.data;
        setArray(ammu)
        setNewarray(ammu)
console.log(ammu)
    })
    },[])
    let vin
    const handleArray =()=>{
        console.log(search.hero)
         vin=array
          
      let ved=  vin.filter((e)=>e.title.includes(search.hero))
      setNewarray(ved)
      console.log(ved)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setSearch({hero:e.target.value})} />
        <button onClick={()=>handleArray()}>search</button>
        <ol>
{
    array.map((e)=>{
        return(
            <>
            <li>{`title : ${e.title}`}</li>
            <p>{`body : ${e.body}`}</p>
            </>
        )
    
    })
}
</ol>

    </div>
  )
}

export default Card