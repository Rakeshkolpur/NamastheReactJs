import React, { useState } from "react";

const templist = [
  {
    text: "Rakesh",
    id: 2546656565,
  },
  {
    text: "Sham",
    id: 4879568,
  },
];


const UseStateExample3 = () => {
  const [list, setList] = useState([]);
  const [editableitem,setEditableItem]=useState({
    id:"",
    isEditing:false
  })
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
const handleSubmit=(e)=>{
    e.preventDefault();
    let newTodo={
      text: message.text,
      id: new Date().getTime().toString()
    }
    setList([...list,newTodo])
    setMessage({
      text:"",
      id:""
    })
  }
  const deletehandle=(id)=>{
    const deleteId = list.filter((eachitemid)=>{
        return eachitemid.id!==id
    })
    setList(deleteId)
  }
  const changeEditState =(id)=>{
    setEditableItem({
      ...editableitem,
      id:id,
      isEditing:true
    })
    const finddata = list.find((eachItem)=>eachItem.id ===id);
    setMessage({
      ...message,
      text: finddata.text,
      id: finddata.id
      
    })
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", width:"800px", alignItems:"center",margin:"auto" }}>
      <form action="" style={{ marginBottom: "20px"}}>
        <input
          type="text"
          id="message"
          name="message"
          value={message.text}
          onChange={changeMessage}
          placeholder="Enter some text"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
       {
        editableitem.isEditing ?( <button
          onClick={handleSubmit}
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#28a745",
              color: "white",
              cursor: "pointer",
            }}
          >
            Edit
          </button>):
           <button
           onClick={handleSubmit}
             type="submit"
             style={{
               padding: "10px 20px",
               fontSize: "16px",
               borderRadius: "5px",
               border: "none",
               backgroundColor: "#28a745",
               color: "white",
               cursor: "pointer",
             }}
           >
             Add
           </button>
       }
      </form>
      <hr />
      {list.length===0 && <h4>There is no Items in list</h4>}
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {list.map((eachitem) => {
          const { text, id } = eachitem;
          return (
            <li
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #ccc",
              }}
            >
              <span>{text}</span>
              <div>
                <button
                onClick={()=>changeEditState(id)}
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                onClick={()=>deletehandle(id)}
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#dc3545",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateExample3;


