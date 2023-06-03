import { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

export default function ImageBoard() {
  const [images, setImages] = useState([]);
  const addImg = (img) => {
    setImages([...images, img]);
  };

  return (
    <>
      <ImageForm addImg={addImg} />

      <ImageList style={{ width: "70%" }} images={images} />
    </>
  );
}
