import React, { useEffect,useState } from "react";
import "./components.css"

const Pagination = () =>{

const [data,setdata] = useState([])
const [page,setpage]= useState(1)

console.log(data)
    useEffect(()=>{

    const fetchData = async ()=>{

      const api = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      const response = await api.json()
      console.log("response",response)
      setdata(response)
    }

    fetchData()

    },[])

    const handlePageClick =(val) =>{

        setpage(val)
    }
    return (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(page*10 - 10,page*10).map(item => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    {data.length>0 && 
    <div className="pagination">
{
 
 data.length>0 && (
    <>
    {Array(Math.ceil(data.length/10)).fill("").map((_, i) => (
          <span onClick={()=>handlePageClick(i+1)} key={i + 1}>{i + 1}</span>
        ))
}
    </>
 )


}

    </div>
}

        </>
    )
}



export default Pagination