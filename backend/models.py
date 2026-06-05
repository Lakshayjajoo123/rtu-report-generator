from pydantic import BaseModel
from typing import List

class AIRequest(BaseModel):

    project_title: str
    
class Formatting(BaseModel):
    font_name: str
    font_size: int
    line_spacing: float
    left_margin: float
    right_margin: float
    top_margin: float
    bottom_margin: float

class SubSection(BaseModel):
    title: str
    content: str


class Section(BaseModel):
    heading: str
    subsections: List[SubSection]


class ReportRequest(BaseModel):

    template: str

    formatting: Formatting | None = None

    project_title: str
    student_name: str
    guide_name: str
    department: str
    session: str

    sections: List[Section]