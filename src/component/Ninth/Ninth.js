import contact from "./contact.png"
import lili from "./lili.png"
import momo from "./momo.png"
import toto from "./toto.png" 
import "./Ninth.css"
function Ninth(){
 return(
       <div className="sister">
        <div className="church">
          <div className="brother">
              <div className="stuff">
                  <img className="pook" src={toto} width={200}/>
                  <h3>THE SNAP PIXEL: HOW IT<br/>WORKS AND HOW TO INSTALL</h3>
                  <p>suscipit porta diam, vitae bibendum orci.<br/> Etiam pretium consectetur vestibulum vivamus. <br/> molestie nulla sit amet dignissim tempus.</p>
                  <span className="coco">READ MORE</span> 
              </div>
              <div className="stuff">
                  <img className="pook" src={momo} alt="momo"width={200}/>
                  <h3>GLOBAL PARTNER SOLUTION:A<br/>PARTNERSHIP OF INNOVATION</h3>
                  <p>suscipit porta diam, vitae bibendum orci.<br/> Etiam pretium consectetur vestibulum vivamus.<br/> molestie nulla sit amet dignissim tempus.</p>
                   <span className="coco">READ MORE</span>
              </div>
              <div className="stuff">
                  <img className="pook" src={lili} alt="lili" width={200}/>
                  <h3>2021: AN OPPORTUNITY FOR<br/> SNAPCHATTERS TO START FRESH</h3>
                  <p>suscipit porta diam, vitae bibendum orci.<br/> Etiam pretium consectetur vestibulum vivamus. <br/>molestie nulla sit amet dignissim tempus. </p>
                  <span className="coco">READ MORE</span>
              </div>
           </div>
               <div className="concon">
                <img src={contact} alt="contact" width={850}/>
               </div>
         </div>      
      </div>
     
 
  
  
  )
  }

export default Ninth