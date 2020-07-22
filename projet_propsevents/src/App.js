import React from 'react';
import './App.css';
import profile  from './composants/Profile/data.js'
import Profiles from './composants/Profile/Profiles';

function App() {
  return (
    <div>
    <h1 className="HeaderApp">Profiles</h1>
    
    {profile.map(el=> ( <Profiles name={el.name} Bio={el.Bio} profession={el.profession} >
<img src={el.imgsrc} alt="profile"/></Profiles>))}
    </div>
  );
}

export default App;
