import os
import docx
from docx2pdf import convert
from docx.enum.text import WD_ALIGN_PARAGRAPH

def changeBold( target_word ) :

    doc = docx.Document(r'Licence-to-use-Copyright2.docx')
    new_doc = docx.Document()
    count = 0
