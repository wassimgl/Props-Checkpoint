import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div>
        <div>
        {props.children} 
    </div>
<h1 style={{color:"yellow", textJustify:"justify", fontFamily:"time", fontSize:"25px"}}>hello! I am {props.fullName}, i am {props.bio} and i work as {props.profession}.</h1>
 <button onClick={()=> props.alertMe(`hello ${props.fullName}`)}>click me</button>
 
    
    </div>
  )
}
Profile.propTypes = {
   
    fullName: PropTypes.number,
}
Profile.defaultProps={
    fullName:"foulen",
    bio:"????",
    profession:"!!!!"
}



export default Profile 
