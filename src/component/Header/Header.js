import logo from "./Logo.png" 
import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
 return(
      < div className="navbar">
        <div className="pic">
          <img src={logo} alt="logo" width={60}/>
        </div>
         
        <div className="link1">
          <div className="link2">
            <ul>
              <Link className="remove"> <li>HOME</li>  </Link>
              <Link to="/blog" className="remove"><li>ABOUT</li> </Link>
              <Link className="remove"> <li>FEATURES</li> </Link>
              <Link className="remove"> <li>SCREENSHOT</li></Link>
              <Link className="remove"><li>BLOG</li> </Link>
              <li className="load"><button>DOWNLOAD</button></li>
              
            </ul>

          </div>

        </div>
        
  
      </div>
 
 
  
  
  )
  }

export default Header;