import os
import docx
from docx2pdf import convert
# from docx.enum.text import WD_ALIGN_PARAGRAPH

def fillBlanks( file, cred ) :
    doc = docx.Document( file )

    paragraphs = doc.paragraphs
    for para in paragraphs :
        newpara = list( para.text.split(" ") )
        for i in range(len(newpara)) :
            if newpara[i] in cred.keys() :
                newpara[i] = cred[newpara[i]]
