
import soso from "./soso.png"
import soco from "./soco.png"
import socials from "./socials.png"
import jocelyn from "./jocelyn.png"
import craig from "./craig.png"
import carla from "./carla.png" 
import "./Seventh.css"
function Seventh(){
 return(
        <div className="deck">
            <div className="sub-deck">
                <div className="content">
                    <h2>OUR REATIVE TEAM</h2>
                    <p>Morbi suscipit porta diam, vitae bibendum orci Etiam pretium.<br/> consectetur vestibulum Vivamus molestie. nulla sit i love create<br/> amet dignissim tempus.</p>
                </div>

                <div className="profile">
                    <div className="profile1">
                        <img className="becus" src={carla} alt="carla" width={150}/>
                        <h3>CARLA PRESS</h3>
                        <p><b>APP DEVELOPER </b></p>
                        <p>Ut gravida gravida libero id euismod. Praesent<br/> sollicitudin pharetra sodales. Curabitur hendrerit,<br/> erat id faucibus maximus, nisi mi aliquam dui</p>
                        <div className="social">
                            <img src={socials} alt="socials" width={250}/>
                        </div>
                    </div>
                    <div className="profile1">
                        <img className="becus" src={craig} alt="craig" width={150}/>
                        <h3>CRAIG GOUSE</h3>
                        <p><b>UI/UX DESINGNER</b></p>
                        <p> Ut gravida gravida libero id euismod. Praesent<br/> sollicitudin pharetra sodales. Curabitur hendrerit,<br/> erat id faucibus maximus, nisi mi aliquam dui</p>
                        <div className="social">
                            <img className="becus" src={soco} alt="soco" width={250}/>
                        </div>
                    </div>
                    <div className="profile1">
                        <img src={jocelyn} alt="jocelyn " width={150}/>
                        <h3>JOCELYN SEPTIMUS</h3>
                        <p><b>WEBSITE DEVELOPER</b></p>
                        <p>Ut gravida gravida libero id euismod. Praesent<br/> sollicitudin pharetra sodales. Curabitur hendrerit,<br/> erat id faucibus maximus, nisi mi aliquam dui</p>
                        <div className="social">
                            <img src={soso} alt="soso" width={250}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    
   
      
 
 
  
  
  )
  }

export default Seventh