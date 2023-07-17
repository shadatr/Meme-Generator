import memedata from "./memedata";
import React, { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [allMemeImages, setAllMemeImages] = useState(memedata);


  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMeme((item) => ({
      topText: topText,
      bottomText: bottomText,
      randomImage: url,
    }));
  }

  return (
    <div className="meme">
      <div className="inputs">
        <input
          placeholder="enter the first sentence"
          className="input1"
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          placeholder="enter the second"
          className="input2"
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <button onClick={getMemeImage}>Get a new meme image 🏞</button>
      <div className="memeImage" style={{ position: "relative" }}>
        <img src={meme.randomImage} alt="meme" />
        {topText && <p className="topText">{topText}</p>}
        {bottomText && <p className="bottomText">{bottomText}</p>}
      </div>
    </div>
  );
}
