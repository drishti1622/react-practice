import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  //  const [data,setData]=useState([])
  //   useEffect(()=>{
  //       fetch(`https://api.github.com/users/hiteshchoudhary`)
  //       .then(response => response.json() )
  //       .then(data => {
  //           console.log(data)
  //           setData(data)
  //       })
        
  //   },[])

  return (
    <div className="text-center rounded-md border border-gray-300 m-2 font-bold bg-gray-600 text-white p-4 text-3xl">
      <span class="mb-4 block">Github followers: {data.followers}</span>
      <img className="mx-auto rounded-md " src={data.avatar_url} alt="profile picture" width={300}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {                          //optimize way
      const response= await fetch(`https://api.github.com/users/hiteshchoudhary`)
      return response.json()
}
