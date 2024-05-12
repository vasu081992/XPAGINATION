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

    const handlePageClickNext =() =>{
        if(page<(data.length)/10){
        setpage(page+1)
    }
}

    const handlePageClickBack =() =>{
       if(page-1){
        setpage(page-1)
    }
}
    return (
        <>
        <h1> Employee Table Data </h1>
          <table>
            <thead >
              <tr className="title">
                <th className="table-item1">ID</th>
                <th className="table-item">Name</th>
                <th className="table-item">Email</th>
                <th className="table-item">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(page*10 - 10,page*10).map(item => {
                return (
                  <tr>
                    <td className="table-item1">{item.id}</td>
                    <td className="table-item1">{item.name}</td>
                    <td className="table-item1">{item.email}</td>
                    <td className="table-item1">{item.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    {data.length>0 && 
    <div className="pagination">
{/* {
 
 data.length>0 && (
    <>
    {Array(Math.ceil(data.length/10)).fill("").map((_, i) => (
          <span onClick={()=>handlePageClick(i+1)} key={i + 1}>{i + 1}</span>
        ))
}
    </>
 )


} */}

 <button className="button" onClick={handlePageClickBack}> Previous </button>

{
    <p className="page">{page}</p>
}
 <button className="button" onClick={handlePageClickNext}> Next </button>


    </div>
}

        </>
    )
}



export default Pagination