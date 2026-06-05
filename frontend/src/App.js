import { useState } from "react";
import axios from "axios";

function App() {

  const [projectTitle, setProjectTitle] = useState("");
  const [studentName, setStudentName] = useState("");

  const generateReport = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
          template: "RTU_PROJECT",

          project_title: projectTitle,

          student_name: studentName,

          guide_name: "Dr Sharma",

          department: "Computer Science",

          session: "2025-26",

          sections: [
            {
              heading: "Introduction",
              subsections: [
                {
                  title: "Overview",
                  content:
                    "This report was generated from React."
                }
              ]
            }
          ]
        },
        {
          responseType: "blob"
        }
      );

      const url =
        window.URL.createObjectURL(
          new Blob([response.data])
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.setAttribute(
        "download",
        "report.docx"
      );

      document.body.appendChild(link);

      link.click();

    } catch (error) {

      console.error(error);

      alert("Failed to generate report");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Report Formatter</h1>

      <input
        type="text"
        placeholder="Project Title"
        value={projectTitle}
        onChange={(e) =>
          setProjectTitle(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) =>
          setStudentName(e.target.value)
        }
      />

      <br /><br />

      <button onClick={generateReport}>
        Generate Report
      </button>

    </div>
  );
}

export default App;