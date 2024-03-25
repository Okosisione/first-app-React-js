import call from  "./call.png"
import again from  "./again.png"
import eye from "./eye.png"
import Browser from "./browser.png"
import App from "./App.png"
import cellphone from "./cellphone.png"
import vector from "./vector.png"
import "./Fourth.css"
function Fourth(){
 return(
        <div className="maindiv">
            <div className="prediv">
                <div className="subdiv">
                    <div>
                        <h2>APP FEATURES</h2>
                         <p>Nulla feugiat leo tristique, vulputate lorem vitae, convallis tellus. Morbi nunc metus, <br/>tempus ac consectetur sit amet, malesuada ac ex. Phasellus vel blandit elit. Fusce id<br/> nisi sit amet urna luctus placerat vel nec libero. </p>
                    </div>
                     <div>
                        <img src={vector} alt={vector} width={40}/>
                        <h2>FULL FREE CHAT</h2>
                        <p>Nulla  nisi sit amet urna luctus placerat vel nec libero. </p>
                    </div>
                </div>
                
                   <div className="right">
                        <div className="one">
                            <div className="move">
                                <div className="piv"> 
                                    <div className="bro"> <img src={Browser}alt="Browser"width={40}/> </div>
                                    <h2>UNLIMITER FEATURES</h2>
                                    <p> eros, euisod nec elit ac, comodo <br/>vitae vehicula odio.</p>
                                </div>
                        
                                <div className="piv1">
                                    <div className="bro1"><img src={again}alt="again"width={40}/></div>
                                    <h2>AWSOME UI DESIGN</h2>
                                    <p>eros, euisod nec elit ac, comodo <br/>vitae vehicula odio. </p>
                                </div>                          
                            </div>
                            <div className="move2">
                                <img src={App}alt="App" width={400}/>
                                <div className="mid"><img src={call}alt="call"width={40}/> </div>
                                <h2>24/7 SUPPORT BY REAL PEOPLE</h2>
                                <p> eros, euisod nec elit ac, comodo <br/>vitae vehicula odio.</p>
                            </div>
                            <div className="move3">
                                    <div className="up">
                                        <div className="left"><img src={cellphone}alt="cellphone"width={40}/></div>
                                         <h2>ISO & ANDROIND VERSION</h2>
                                        <p>eros, euisod nec elit ac, comodo <br/>vitae vehicula odio. </p>
                                     </div>
                                
                                <div className="down">
                                  <div className="right"><img src={eye}alt="eye" width={40}/></div>
                                    <h2>RETINA READY GREAPHICS</h2>
                                    <p> eros, euisod nec elit ac, comodo <br/>vitae vehicula odio.</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                            
                        
                              
                         
                        
                           
                    
                    
                
            </div>
                    
            

        </div>
  
  )
  }

export default Fourth