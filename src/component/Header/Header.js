import logo from "./Logo.png" 
import "./Header.css"
function Header(){
 return(
      <div className="navbar">
        <div className="pic">
          <img src={logo} alt="logo" width={60}/>
        </div>
         
        <div className="link1">
          <div className="link2">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>FEATURES</li>
              <li>SCREENSHOT</li>
              <li>BLOG</li>
              <li className="load"><button>DOWNLOAD</button></li>
            </ul>

          </div>

        </div>
        
  
      </div>
 
 
  
  
  )
  }

export default Header