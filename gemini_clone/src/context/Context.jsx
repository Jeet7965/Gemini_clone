import { createContext, useState } from "react";
import runChat from "../confige/gemini";

export const Context = createContext();

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

const ContextProvider = (props) => {

    const [input, setInput] = useState(" ")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("")

    const delaypara = (index, nextword) => {
        setTimeout(function () {
            setResultData(pre => pre + nextword)
        }, 75 * index)

    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true);
        setShowResult(true)

        // if (!prompt) return;

        // setRecentPrompt(prompt);
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await runChat(input)
        }




        // setRecentPrompt(input)
        // setPrevPrompts(pre=>[...pre,input])
        // const response= await runChat(input)

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i]
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }

        }
        let newResponse2 = newResponse.split("*").join('</br>')

        let newResponseArray = newResponse2.split(" ")

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i]
            delaypara(i, nextword + " ")
        }
        //    setResultData(newResponse2);
        setLoading(false)
        setInput('')


    };



    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
        newChat
    }

    return (
        <Context.Provider value={contextValue} >
            {
                props.children
            }
        </Context.Provider>
    )
}

export default ContextProvider






// import { createContext, useState } from "react";
// import runChat from "../confige/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [resultData, setResultData] = useState("");

//   const delaypara = (index, nextword) => {
//     setTimeout(() => {
//       setResultData((pre) => pre + nextword);
//     }, 75 * index);
//   };

//   const onSent = async (prompt) => {
//     setResultData("");
//     setLoading(true);
//     setShowResult(true);


//     // try {
//     //   // Pick from argument or state
//     //   let finalPrompt = prompt !== undefined ? prompt : input;

//     //   // Ensure it's a string (avoid circular JSON error)
//     //   if (typeof finalPrompt !== "string") {
//     //     console.error("❌ Invalid prompt type:", typeof finalPrompt, finalPrompt);
//     //     setLoading(false);
//     //     return;
//     //   }

//     //   // Save to history if from input
//     //   if (prompt === undefined) {
//     //     setPrevPrompts((pre) => [...pre, finalPrompt]);
//     //   }
//     //   setRecentPrompt(finalPrompt);

//     //   // Call Gemini
//     //   const response = await runChat(finalPrompt);

//     //   // Format response (Markdown → HTML)
//     //   let formatted = response
//     //     .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // bold
//     //     .replace(/\*/g, "<br/>"); // line breaks

//     //   // Animate typing
//     //   let words = formatted.split(" ");
//     //   words.forEach((word, i) => {
//     //     delaypara(i, word + " ");
//     //   });
//     // } catch (err) {
//     //   console.error("Chat error:", err);
//     //   setResultData("⚠️ Something went wrong. Try again.");
//     // }

//     setLoading(false);
//     setInput("");
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     setInput,
//     input,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;
