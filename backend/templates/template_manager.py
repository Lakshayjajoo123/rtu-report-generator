from templates.rtu_template import apply_rtu_margins
from templates.ieee_template import apply_ieee_template
from templates.assignment_template import apply_assignment_template


def apply_template(doc, template_name):

    if template_name == "RTU_PROJECT":

        apply_rtu_margins(doc)

    elif template_name == "IEEE":

        apply_ieee_template(doc)

    elif template_name == "ASSIGNMENT":

        apply_assignment_template(doc)

    else:

        raise ValueError(
            f"Unknown template: {template_name}"
        )