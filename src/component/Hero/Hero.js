import tochi from "./tochi.png" 
import mos from "./mos.png"
import "./Hero.css"
function Hero(){
 return(
     
  <div className="base">
    <div className="base1">
      <div className="pic1">
      <img className="shif" src={tochi} alt="tochi" width={320}/>
      </div>
      <div className="pic2">
          <img src={mos} width={420}/>
      </div>
    </div>
    <div className="base2">
        <h1>ABOUT OUR APP</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non justo uoppj gfgiuol neque.<br/> Aliquam cursus, metus non ultricies tincidunt, leoghlko diam bibendum purus, nec maximus <br/>arcu mi ac turpis. Sed ut velit sit amet mi lacinia sodales ut volutpat eros. Vestibulc<br/></p>
    </div>
  </div>
  
  )
  }

export default Hero