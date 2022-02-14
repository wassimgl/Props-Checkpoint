import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import img from './image/myself.jpg';



function App() {
  const fullName = 'Wassim Glouia'
  const bio = 'Web developer'
  const profession = 'textile engineer'
  const alertMe=(fullName)=>
    alert(fullName);
  return (
    <div className="App">
      <header className="App-header">   
  
  <Profile fullName={fullName} bio={bio} profession={profession} alertMe={alertMe}><img className="myphoto" src={img} alt="profile photo" />  </Profile>
      </header>
    </div>
  );
}


export default App;
