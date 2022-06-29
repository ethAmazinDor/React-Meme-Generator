import React, { useState, useEffect } from "react"


const Meme = () => {

    const [meme, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    console.log(meme)




    function handleChange(event) {
        const { name, type, value } = event.target
        setMemes(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }

    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"

                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"

                />
                <button
                    className="form-button"
                //onClick={getMemeImage}
                >
                    Get a new Meme Image
                </button>
            </form>
            <div className="meme-container">
                <img className="meme-image" src="" alt="" />
                <h2 className="meme-text top"></h2>
                <h2 className="meme-text bottom"></h2>
            </div>
        </main>
    )
}

export default Meme