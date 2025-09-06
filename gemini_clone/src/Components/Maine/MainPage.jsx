import { useContext } from "react"
import { assets } from "../../assets/assets"
import './Main.css'
import { Context } from "../../context/Context"

function MainePage(params) {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (

        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.profile_icons} alt="" srcset="" />
            </div>

            <div className="main-container">

                {
                    !showResult?<>
                        <div className="greet">
                            <p><span>Hello,Sarvajeet</span></p>
                            <p>How Can I Help You Today ?</p>

                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae laboriosam amet facilis! Consectetur, dignissimos. </p>
                                <img src={assets.compass_icons} alt="" srcset="" />
                            </div>
                            <div className="card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae laboriosam amet facilis! Consectetur, dignissimos.</p>
                                <img src={assets.bulb_icons} alt="" srcset="" />
                            </div>
                            <div className="card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae laboriosam amet facilis! Consectetur, dignissimos.</p>
                                <img src={assets.message_icons} alt="" srcset="" />
                            </div>
                            <div className="card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae laboriosam amet facilis! Consectetur, dignissimos.</p>
                                <img src={assets.code_icons} alt="" srcset="" />
                            </div>
                        </div>
                    </>: 
                    <div className="result">
                        <div className="result-title">
                           <div className="result-user">
                             <img src={assets.profile_icons} alt="" />
                            <p> {recentPrompt}</p>
                           </div>
                            <div className="result-data">
                                <img src={assets.gemini_icons} alt="" />

                                {
                                    loading?<div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                        :
                                     <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(event) => setInput(event.target.value)} value={input} placeholder="Enter your Question here....." />
                        <div>
                            <img src={assets.gallary_icons} alt="" />
                            <img src={assets.mice_icons} alt="" />
                            
                            {input?<img onClick={() => onSent(input)} src={assets.send_icons} alt="" />:null
                            }
                            
                        </div>
                    </div>

                    <p className="bottom-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non.
                    </p>
                </div>
                
            </div>

        </div>

    )

}
export default MainePage