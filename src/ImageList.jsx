export default function ImageList({ images }) {
  return (
    <>
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        {images.map((img, index) => (
          <li key={index}>
            <div style={{ width: "70%" }}>
              <img style={{ width: "100%" }} src={img.url} />
              <p style={{ fontSize: "16px" }}>{img.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
