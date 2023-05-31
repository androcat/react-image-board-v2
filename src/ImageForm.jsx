import { useState } from "react";
import "./styles/ImageFormStyles.css";

export default function ImageForm() {
  const [imgURL, setImgURL] = useState("");
  const [imgCap, setImgCap] = useState("");

  function handleURL(event) {
    setImgURL(event.target.value);
  }

  function handleCaption(event) {
    setImgCap(event.target.value);
  }

  return (
    <form className="imgForm">
      <label htmlFor="imgURL">Image URL</label>
      <input
        type="url"
        name="imgURL"
        id="imgURL"
        value={imgURL}
        onChange={handleURL}
      />
      <label htmlFor="imgCaption">Image Caption</label>
      <input
        type="text"
        name="imgCaption"
        id="imgCaption"
        value={imgCap}
        onChange={handleCaption}
      />
      <div className="buttons">
        {/* Add onClick to close form or reset fields to empty */}
        <button type="button" name="cancel">
          Cancel
        </button>
        <button type="submit" value="submit">
          Add Image
        </button>
      </div>
    </form>
  );
}
