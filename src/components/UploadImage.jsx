

import { useState } from "react";




const Productpload=()=>{
    


    const defaultvalue={
   
 
    }
  
      const [user,setuser]=useState(defaultvalue)
      const [image, setImage] = useState(null);
  
      const onvaluechange= (e)=>{
      //console.log(e.target.name,e.target.value)
      setuser({...user,[e.target.name]:e.target.value})
      console.log('nameeebbbbbbbbbbbbbbee',user)
      }
  
      function handleChange(e) {
  
  
          setImage(e.target.files[0]);
          console.log(image);
      }
  
      const handleSubmit = e => {
        try {
          e.preventDefault();
          
          const formData = new FormData();
          formData.append('croppedImage', image);
        
          fetch('http://localhost:9000/api/users/setProfilePic', {       //phala 5000 port pa req ja rahe thi http://localhost:5000/upload
            method: 'POST',
            body: formData
           
          })
            .then(response => response.text())
            .then(response => {
            
            });
        } catch (error) {
          console.log(error);
        }
           
        };
  
    
    
    
    
    
    
    return(

    <>




<div className="page-wrapper bg-dark p-t-100 p-b-50">
        <div >          
          <div className="card card-6">
            
            <div className="card-heading">
              <h2 className="title">product upload</h2>
            </div>
            <div className="card-body">
              <form method="POST">
                
               
                <div className="form-row">
                  <div className="name">Upload image</div>
                  <div className="value">
                    <div className="input-group js-input-file">
                      <input className="input-file" type="file" name="croppedImage"onChange={handleChange} id="file" />
                     
                    </div>
                    <div className="label--desc">Upload your product data</div>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit" onClick={handleSubmit}>upload product </button>
            </div>
          </div>
        </div>
      </div>
      {/* Jquery JS*/}
      {/* Main JS*/}
    





</>

    )
}
export default Productpload;