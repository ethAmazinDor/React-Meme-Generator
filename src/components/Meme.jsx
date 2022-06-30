import React, { useState, useEffect } from "react"


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])


    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }



    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
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
                    onClick={getMemeImage}
                >
                    Get a new Meme Image
                </button>
            </form>
            <div className="meme-container">
                <img className="meme-image" src={meme.randomImage} alt="" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme