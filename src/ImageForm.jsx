import { useState } from "react";
import "./styles/ImageFormStyles.css";

export default function ImageForm({ addImg }) {
  const [imgURL, setImgURL] = useState("");
  const [imgCap, setImgCap] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newImg = {
      url: imgURL,
      caption: imgCap,
    };
    addImg(newImg);
    setImgURL("");
    setImgCap("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="imgForm">
      <label htmlFor="imgURL">Image URL</label>
      <input
        type="url"
        name="imgURL"
        id="imgURL"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      <label htmlFor="imgCaption">Image Caption</label>
      <input
        type="text"
        name="imgCaption"
        id="imgCaption"
        value={imgCap}
        onChange={(e) => setImgCap(e.target.value)}
      />
      <div className="buttons">
        {/* Add onClick to close form or reset fields to empty */}
        <button
          onClick={() => {
            setImgURL("");
            setImgCap("");
          }}
          type="button"
          name="cancel"
        >
          Cancel
        </button>
        <button type="submit" value="submit">
          Add Image
        </button>
      </div>
    </form>
  );
}
