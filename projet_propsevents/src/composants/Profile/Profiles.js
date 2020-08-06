import React from 'react'
import './profile.css'
import PropTypes from 'prop-types';


function handleName(name) {
    alert(name)
    }
   
export default function Profiles({name,profession,Bio,children}) {
    return (
       
        <div className="profiles">
<div  className="profile">  
{children}
<div className="detailles">
<h1 >Full Name :  {name}</h1>
<h1>Profession :{profession}</h1>
<h1>Bio :{Bio}</h1>
<button onClick={() => handleName (name)}>More Info</button>
</div>
 </div>      
       </div>
    )
}
Profiles.propTypes ={
    name: PropTypes.string, profession: PropTypes.string, Bio: PropTypes.string
  }
  Profiles.defaultProps={
      name:"no data",
      profession:"no data",
      Bio:"no data"
  }