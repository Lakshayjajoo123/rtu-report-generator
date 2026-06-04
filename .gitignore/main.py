from fastapi import FastAPI
from fastapi.responses import FileResponse

from models import ReportRequest
from report_generator import generate_report

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Report Generator Running"
    }


@app.post("/generate")
def create_report(report: ReportRequest):

    file_path = generate_report(report)

    return FileResponse(
        path=file_path,
        filename="report.docx",
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )