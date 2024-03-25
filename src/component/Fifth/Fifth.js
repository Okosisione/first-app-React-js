import des from "./des.png"
import star from "./star.png"
import like from "./like.png"
import download from "./download.png"
import store from "./store.png"
import play from "./play.png"
import  first  from "./first.png"
import "./Fifth.css"
function Fifth(){
 return(
      <div className="father">
        <div className="onee">
            <div className="oneeof1">
                <h2>CHECKOUT OUR APP INTERFACE LOOK</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Donec ante nulla, convallis id vulputate et, accumsan ac<br/> magna. Integer est quam, tristique quis sollicitudin </p>
            </div>
              <div className="pia"> < img src={first} alt="first" width={720}/> </div> 
        </div>
        <div className="twoo">
          <div className="twoof2">
            <h2>DOWNLOAD APP NOW</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisc<br/>elit. Ut gravida gravida libero id euismod.<br/>Praesensollicitudin pharetra sodales. Curabitur </p>
            <div className="picc">
              <img src={play} alt="play" width={65}/>

              <div className="piccc"><img src={store} alt="store" width={65}/></div>
            </div>
            <div className="picc1">
                <div><img src={download} alt="download" width={90}/></div>
                <img src={like} alt="like" width={90}/>
                <img src={star} alt="star" width={90}/>
            </div>
          </div>
          <div className="lexx"> 
              <div className="lexxx"> <img src={des} alt="des" width={520}/> </div>
          </div>
        </div>
    </div>
          

          
 
  
  
  );
  }



export default Fifth