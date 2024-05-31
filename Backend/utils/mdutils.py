from typing import Dict
import mammoth


def getMDOutputFromDoc(attr: Dict, doc_path: str) -> str:
    with open(f"{doc_path}", "rb") as docx_file:
        result = mammoth.convert_to_markdown(docx_file)
        md = str(result.value)
        for key in attr.keys():
            md = md.replace(key, attr[key])
    return md


