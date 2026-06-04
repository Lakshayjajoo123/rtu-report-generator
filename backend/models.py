from pydantic import BaseModel
from typing import List


class SubSection(BaseModel):
    title: str
    content: str


class Section(BaseModel):
    heading: str
    subsections: List[SubSection]


class ReportRequest(BaseModel):

    template: str

    project_title: str

    student_name: str

    guide_name: str

    department: str

    session: str

    sections: List[Section]