from docx.shared import Cm

def apply_ieee_template(doc):

    section = doc.sections[0]

    section.left_margin = Cm(1.9)
    section.right_margin = Cm(1.9)
    section.top_margin = Cm(2.5)
    section.bottom_margin = Cm(2.5)