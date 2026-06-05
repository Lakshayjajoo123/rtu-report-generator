import { useState } from "react";
import axios from "axios";

function App() {

  const [projectTitle, setProjectTitle] = useState("");
  const [studentName, setStudentName] = useState("");
  const [guideName, setGuideName] = useState("");
  const [department, setDepartment] = useState("");
  const [session, setSession] = useState("");
  const [template, setTemplate] = useState("RTU_PROJECT");

  const generateReport = async () => {

    try {

      // STEP 1: Generate AI Content

      const aiResponse = await axios.post(
        "http://127.0.0.1:8000/generate-ai-content",
        {
          project_title: projectTitle
        }
      );

      const generatedSections =
        aiResponse.data.sections;

      // STEP 2: Generate DOCX

      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
          template: template,

          project_title: projectTitle,

          student_name: studentName,

          guide_name: guideName,

          department: department,

          session: session,

          sections: generatedSections
        },
        {
          responseType: "blob"
        }
      );

      // STEP 3: Download DOCX

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute(
        "download",
        `${projectTitle}.docx`
      );

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (error) {

      console.error(error);

      alert(
        "Failed to generate AI report"
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial"
      }}
    >
      <h1>AI Report Generator</h1>

      <input
        type="text"
        placeholder="Project Title"
        value={projectTitle}
        onChange={(e) =>
          setProjectTitle(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) =>
          setStudentName(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Guide Name"
        value={guideName}
        onChange={(e) =>
          setGuideName(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Session"
        value={session}
        onChange={(e) =>
          setSession(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      />

      <br /><br />

      <select
        value={template}
        onChange={(e) =>
          setTemplate(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px"
        }}
      >
        <option value="RTU_PROJECT">
          RTU Project
        </option>

        <option value="IEEE">
          IEEE
        </option>

        <option value="ASSIGNMENT">
          Assignment
        </option>

        <option value="CUSTOM">
          Custom
        </option>
      </select>

      <br /><br />

      <button
        onClick={generateReport}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Generate AI Report
      </button>
    </div>
  );
}

export default App;