from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from models import ReportRequest
from report_generator import generate_report
from ai_generator import generate_ai_content
from models import AIRequest

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Report Generator Running"
    }

@app.post("/generate-ai-content")
def generate_ai(request: AIRequest):

    sections = generate_ai_content(
        request.project_title
    )

    return {
        "sections": sections
    }
    
@app.post("/generate")
def create_report(report: ReportRequest):

    file_path = generate_report(report)

    return FileResponse(
        path=file_path,
        filename="report.docx",
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )