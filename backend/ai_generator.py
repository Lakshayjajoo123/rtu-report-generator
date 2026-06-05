from models import Section, SubSection

def generate_ai_content(project_title):

    return [

        Section(
            heading="Introduction",
            subsections=[
                SubSection(
                    title="Overview",
                    content=f"{project_title} is a software system developed to automate and improve operational efficiency."
                )
            ]
        ),

        Section(
            heading="Literature Survey",
            subsections=[
                SubSection(
                    title="Existing Systems",
                    content="Various existing systems were studied and analyzed."
                )
            ]
        ),

        Section(
            heading="System Design",
            subsections=[
                SubSection(
                    title="Architecture",
                    content="The proposed system follows a modular architecture."
                )
            ]
        ),

        Section(
            heading="Implementation",
            subsections=[
                SubSection(
                    title="Development",
                    content="The system was implemented using modern technologies."
                )
            ]
        ),

        Section(
            heading="Conclusion",
            subsections=[
                SubSection(
                    title="Summary",
                    content="The project successfully achieves its objectives."
                )
            ]
        )

    ]