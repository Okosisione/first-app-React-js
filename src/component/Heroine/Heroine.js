



import vec from "./vec.png"
import pan from "./pan.png"
import cull from "./cull.png"
import lit from "./lit.png"
import rank from "./rank.png"
import ree from "./ree.png"
import "./Heroine.css"
function Heroine(){
 return(
    <div className="bonk">
        <div className="partone">
            <div className="inshell">
                <form className="help" action="/action_page.php">
                 <input type="text" placeholder="search for"/>
                </form>
            </div>
            {/* < hr className="qee"/> */}
            <div className="duel">
                <h2 className="post">RECENT POST</h2>
                <img className="pizz" src={ree} alt="ree" width={300}/>
                <p><b>IRINA ROZOVSKY CAPTURES<br/> BROOKLYNS PROSPECT PARK IN A<br/> ROMANTIC LIGHT</b></p>
            </div>
            <div className="duel">
                  <img  className="pizz" src={rank} alt="rank"width={300}/>
                <p><b>A NEW ONLINE SHOW IS TRACING<br/> LEADING ARTISTS EARLY COMMER.<br/> CIAL PRACTICE</b></p>
            </div>
            <div className="duel">
                <img className="pizz" src={lit} alt="lit" width={300}/>
                <p><b>THINK FOOD BANK PROJECT USES<br/>STICKERS TO PROMPT PEOPLE TO <br/>CONTRIBUTE</b></p>
            </div>
            <div className="duel">
                <img className="pizz" src={cull} alt="cull" width={300}/>
                <p><b>A NEW PHOTO BOOK IS CELEBRA<br/>THIG LAS VIBRANT LOWRIDER<br/>CULTURE</b></p>
            </div>
            <div className="duel">
                <img className="pizz" src={pan} alt="pan" width={300}/>
                <p><b>THE INDIE PUBLISHERS ADAPTING<br/>TO THE PANDEMIC</b></p>
            </div>
            <hr className="qaa"/>
            <div className="arrow">
              <h2>CATEGORY</h2>
              <div className="gory">
                  <img src={vec} alt="vec"width={10}/>
                  <p className="eca">E-COMMARS APP</p>
              </div>
              <div className="gory">
                  <img src={vec} alt="vec"width={10}/>
                  <p className="eca">BANKING APP</p>
              </div>
              <div className="gory">
                  <img src={vec} alt="vec"width={10}/>
                  <p className="eca">BUSINESS APP</p>
              </div>
              <div className="gory">
                  <img src={vec} alt="vec"width={10}/>
                  <p className="eca">VIDEO APP</p>
              </div>
              <div className="gory">
                  <img src={vec} alt="vec"width={10}/>
                  <p className="eca">E-COMMARS APP</p>
              </div>
            </div>
            {/* <hr className="opti"/> */}

            <div className="tags">
              <h2>TAGS</h2>
                  <div className="tagg">
                      <p>ECOMMERS APP</p>
                      <p className="monk">MUSIC APP</p>
                  </div>
                  <div className="tagg">
                      <p>BANK APP</p>
                      <p className="monk">SOCIAL APP</p>
                  </div>
            </div>
        </div>

    </div>

        
              
  )
  }

export default Heroine;