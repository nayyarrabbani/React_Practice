import { useState } from "react"
import "./App.css"

function App() {

  let [selected,setSelected] = useState([]);
  let [accordianType, setAccordianType] = useState("single");

  let handleSelected = (id) =>{
    // setSelected(selected===id ? null : id);
    if(accordianType == "single"){
      setSelected(selected[0] === id ? [] :  selected=[id]);
    }
    else{
      setSelected(selected.indexOf(id) == -1 ? [...selected,id] : selected.filter(item => item != id));
    }
  }

  let handleAccordianType = () => {
    setAccordianType(accordianType === "single" ? "multiple" : "single")
  }


  let data = [
    {
      id:1,
      name:"Section1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero, amet pariatur nisi laboriosam, quia et officia nostrum odio sed voluptatem aut a nobis asperiores deleniti aliquam vel provident aperiam!"
    },
    {
      id:2,
      name:"Section2",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero, amet pariatur nisi laboriosam, quia et officia nostrum odio sed voluptatem aut a nobis asperiores deleniti aliquam vel provident aperiam!"
    },
    {
      id:3,
      name:"Section3",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque libero, amet pariatur nisi laboriosam, quia et officia nostrum odio sed voluptatem aut a nobis asperiores deleniti aliquam vel provident aperiam!"
    }
  ]
  return (
    <div className="container">
      <button className="accordian-type" onClick={handleAccordianType}>{accordianType == "single" ? "Enable" : "Disable"} Multi-Accordian</button>
      {
        data.map((item)=>(
          <div className="accordian">
            <div className="accordian-heading" onClick={()=>handleSelected(item.id)}>
              <span>{item.name}</span>
              <span>+</span>
            </div>
            {selected[0] == item.id || selected.indexOf(item.id) != -1 ? <div className="accordian-container">{item.content}</div> : null}
          </div>
        ))
      }
    </div>
  )
}

export default App
