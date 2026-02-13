import Navbar from "../components/Navbar";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="create-post-page">
      <Navbar />

      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <p> Share your thought and stories with the world</p>
        </header>

        <div className="form-group">
          <label>Post Title</label>
          <div className="input-wrapper">
            <FaHeading className="input-icon" />
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter a catchy title..."
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="What's on your mind ? Write your story here"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Cover Image</label>

          <div className="image-soure-tabs">
            <button type="button" className="tab-btn active">
              {" "}
              Image URL
            </button>
            <button type="button" className="tab-btn active">
              {" "}
              Upload File
            </button>
          </div>

          <div className="input-wrapper">
            <FaLink className="input-icon" />
            <input
              type="url"
              name="imageUrl"
              className="form-control"
              placeholder="Paste image URL here ( e.g. https://...)"
            />
          </div>

          <div className="image-upload-area">
            <FaCloudUploadAlt className="input-icon" />
            <p> Click to upload image form your device</p>
          </div>

          <div className="image-preview-container">
            <img src="" alt="Priview" className="image-preview" />
            <button type="button" className="remove-image-btn">
              <FaTime />
            </button>
          </div>
        </div>

        <div className="form-actions-row">
          <button type="submit" className="submit-btn">
            <FaCloudUploadAlt />
            Publish Post
          </button>

          <button type="button" className="cancel-btn">
            Clear Form
          </button>
        </div>
      </div>
    </div>
  );
};
