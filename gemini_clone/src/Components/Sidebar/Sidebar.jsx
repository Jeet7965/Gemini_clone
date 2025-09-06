import { useContext, useState } from "react"
import { assets } from "../../assets/assets"

import './Sidebar.css'
import { Context } from "../../context/Context"

function SideBar( ) {
    const [extended, setextended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context)

    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
      await onSent(prompt);
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" onClick={() => setextended(prev => !prev)} src={assets.menu_icons} alt="" />
                <div  onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {
                        extended ? <p>New chat</p> : null
                    }
                </div>
                {
                    extended ?
                        <div className="recent">
                            <p className="recent-title">Recent</p>
                            {
                                prevPrompts.map((item,index) => {
                                    return (
                                        <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                                            <img src={assets.message_icons} alt="" />
                                            <p>{item}...</p>
                                        </div>
                                    )

                                })
                            }

                        </div> : null
                }
            </div>
            <div className="bottom">
                <div className="bootem-items recent-entry">
                    <img src={assets.question_icons} alt="" />
                    {
                        extended ? <p>
                            Help
                        </p> : null
                    }
                </div>
                <div className="bootem-items recent-entry">
                    <img src={assets.history_icon} alt="" srcSet="" />
                    {
                        extended ? <p>
                            History
                        </p> : null
                    }
                </div>
                <div className="bootem-items recent-entry">
                    <img src={assets.setting_icons} alt="" srcSet="" />
                    {
                        extended ? <p>
                            Setting
                        </p> : null
                    }
                </div>

            </div>
        </div>
    )
}

export default SideBar