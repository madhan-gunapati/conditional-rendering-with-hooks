import { useState } from "react"

const Home = ()=>{
    const [buttonText , setText] = useState(false)

    function changeText(){
        setText((p)=>!p)
    }

    return <div>
        <h1>Welcome Here</h1>
        <p>Please subscribe</p>
        <button type='button' onClick={changeText}>{buttonText?'Subscribed':'subscribe'}</button>
    </div>
}

export default Home