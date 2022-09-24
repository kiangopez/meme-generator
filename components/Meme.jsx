import React from "react";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    console.log("effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <label htmlFor="top-text">
          <p>top text</p>
          <input
            type="text"
            id="top-text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="bottom-text">
          <p>bottom text</p>
          <input
            type="text"
            id="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </label>

        <button onClick={getImage}>Generate New Image</button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} alt="" />
        <p className="top-text">{meme.topText}</p>
        <p className="bottom-text">{meme.bottomText}</p>
      </div>
    </main>
  );
}

export default Meme;
