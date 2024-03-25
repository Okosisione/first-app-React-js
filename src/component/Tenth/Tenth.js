import icon from "./icon.png"
import "./Tenth.css"
function Tenth(){
 return(
       <div className="boss">
          <div className="off">
              <div className="work">
                 <h2>LOGO</h2>
                 <p> Lorem ipsum dolor jsit  damet<br/> consectetur adipiscing elit  vel blandit lectus. <br/>Morbi facilisis pharetra finibus. Etiam varius</p>
                 <img className="soca" src={icon} alt="icon" width={250}/>
              </div>
              <div className="work">
                 <h3>QUICK LINK</h3>
                 <p>About</p>
                 <p>Features</p>
                 <p>Screenshot</p>
                 <p>Blog</p>
              </div>
              <div className="work">
                <h3>NEWS LETTER</h3>
                 <p>Subscribe our newaletter to get our latest,<br/>update & news</p>
                 <form className="help" action="/action_page.php">
                 <input type="text" placeholder="Enter email address.."/>
                 <button className="bot" type="submit"><i class="fa fa-search"></i></button>
                 </form>
              </div>

          </div>

       </div>
        
  )
  }

export default Tenth