
import { useState } from "react"
import './style.css'
import axios from "axios";

    






const Chatgpt = () => {
    const [prompt, setdata] = useState("");
    const [responce,setresponce]=useState('')


    const onvaluechange = (e) => {
        //console.log(e.target.name,e.target.value)
        setdata({ ...prompt, [e.target.name]: e.target.value });
        console.log("nameeebbbbbbbbbbbbbbee", prompt);
      };




      async function submitinfo(e) {
        e.preventDefault();
        console.log("my data", prompt);
        try {
          const result = await axios.post(" http://localhost:8000/chat ", prompt, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log('my dddddddddddddd',result.data);
          setresponce(result.data)
        } catch (err) {
     
          console.log(err);
        }
      }


    return (
      <>
        <div className="Chatgpt">
          <h1>Hello ChatGPT</h1>
          <input type="text" placeholder="Write your question" name="prompt"  onChange={onvaluechange}/>
          <button onClick={submitinfo}>send your question</button>
          <p>{responce}</p>
        </div>
      </>
    );
  };
export default Chatgpt