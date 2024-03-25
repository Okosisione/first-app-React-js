 import food from "./food.png"
import mark from "./mark.png"
import markone from "./markone.png"
import markthree from "./markthree.png"
import "./Third.css"
function Third(){
 return(
        <div className="office">
            <div className="table">
            <img src={food} alt={food} width={420}/>
            </div>
            <div className="desk">
                <div className="desk3">
                    <div className="desk11">
                        <div className="eat"><img src={mark} alt={mark}width={10}height={10} /></div>
                        
                        <div className="drinks">
                            <h2>CREATIVE DESIGN</h2>
                        <p>Nulla feugiat leo tristique, vulputate lorem vitae,convallis tellus placerat Fusce.<br/>Morbi nunc metus, tempus ac consectetur sit amet, malesuada ac  ex. Ph<br/> elit.  id nisi sit amet urna luctus  vel nec libero. Fusce velit justo, teat tristiq. </p>
                        </div>
                        
                    </div>   
                </div>
                    
                    
                <div className="desk3">
                    
                    <div className="desk11">
                        <div className="eat"> <img src={markone} alt={markone} width={10}/></div>
                        
                        <div className="drinks">
                            <h2>CREATIVE DESIGN</h2>
                        <p>Nulla feugiat leo tristique, vulputate lorem vitae,convallis tellus placerat Fusce.<br/>Morbi nunc metus, tempus ac consectetur sit amet, malesuada ac  ex. Ph<br/> elit.  id nisi sit amet urna luctus  vel nec libero. Fusce velit justo, teat tristiq. </p>
                        </div>
                    </div>  

                </div>
                <div className="desk3">
                    <div className="desk11">
                        <div className="eat"> <img src={markthree} alt={markthree} width={10}/></div>
                        
                        <div className="drinks">
                            <h2>CREATIVE DESIGN</h2>
                            <p>Nulla feugiat leo tristique, vulputate lorem vitae,convallis tellus placerat Fusce.<br/>Morbi nunc metus, tempus ac consectetur sit amet, malesuada ac  ex. Ph<br/> elit.  id nisi sit amet urna luctus  vel nec libero. Fusce velit justo, teat tristiq. </p>
                        
                        </div>
                         
                          
                    </div>  
                </div>

            </div>
        </div>
  
  )
  }

export default Third