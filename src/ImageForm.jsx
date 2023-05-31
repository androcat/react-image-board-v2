import "./styles/ImageFormStyles.css";

export default function ImageForm() {
  return (
    <form className="imgForm">
      <label htmlFor="">Image URL</label>
      <input type="url" name="imgURL" id="imgURL" />
      <label htmlFor="">Image Caption</label>
      <input type="text" name="imgCaption" id="imgCaption" />
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
