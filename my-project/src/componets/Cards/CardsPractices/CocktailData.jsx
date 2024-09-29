import React from 'react'

const CocktailData = () => {
    const [showdata,setshowData]=React.useState();
    const handlechnge=()=>{
        setshowData(!showdata)
    }
  return (
    <div style={{width:'500px',textAlign:"center", marginLeft:"auto",marginRight:"auto", fontSize:"18px"}}>
        <button style={{fontSize:"18px",padding:"1rem",cursor:"pointer",marginBottom:"1rem",width:"8rem"}} onClick={handlechnge}>{showdata ? "Hide":"Show"}</button>
       {
        showdata ?  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam obcaecati modi, architecto provident aliquid incidunt tempora mollitia dolorem fugiat!</p> :<h1>No data Found try to click  show button</h1>
       }
    </div>
  )
}

export default CocktailData