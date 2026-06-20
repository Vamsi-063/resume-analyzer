import api from "../services/api";

function UploadResume() {
  const handleUpload = async (e) => {
    const file = document.getElementById("resumeFile").files[0];

    if (!file) {
      alert("Please select a resume");
      return;
    }

    const resumeData = {
      name: file.name,
      email: "Not Provided",
      experience: "Not Provided",
      education: "Not Provided",
      score: 0,
      status: "Pending",
    };

    await api.post("/resumes", resumeData);

    alert("Resume Saved Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Upload Resume</h2>

      <input
        id="resumeFile"
        type="file"
        accept=".pdf,.doc,.docx"
      />

      <br />
      <br />

      <button
        className="submit-btn"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}

export default UploadResume;