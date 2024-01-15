import React, { useEffect, useState } from 'react'

const Newsmap = () => {
    const [news,setnews]=useState([])

    const fetchnews = async()=>{
        try {
            const res= await fetch('http://localhost:3000/news')
            const data= await res.json()
            setnews(data)
        } catch (error) {
            console.log(error);
        }
    }



 useEffect(()=>{
    fetchnews()
 },[])

  return (
    <>
        <div className="news">
            {news.map((n)=>(
                <div key={n.id} className="new">
                {n.image ? <img className='img' src={n.image}  /> : null}
                    <h3>{n.n}</h3>
                    <h6 className='gray'>{n.f}</h6>

                </div>
            ))}
           
        </div>
    </>
  )
}

export default Newsmap
