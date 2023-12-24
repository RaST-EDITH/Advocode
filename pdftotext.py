import fitz

pdf_file = r"C:\Users\ASUS\OneDrive\Documents\GitHub\Advocode\General-Power-of-Attorney-Rahul.pdf"  
doc = fitz.open(pdf_file)

for page_num in range(doc.page_count):
    page = doc.load_page(page_num)
    text = page.get_text()
    print(text)

doc.close()
