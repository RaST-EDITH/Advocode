from gpt_index import GPTSimpleVectorIndex

def chatbot(input_text, index_dir="models", indexfile="index.json"):
    index = GPTSimpleVectorIndex.load_from_disk(f"{index_dir}/{indexfile}")
    response = index.query(input_text, response_mode="compact")
    return response.response

def queryBot(input_text):
    try:
        return chatbot(input_text, index_dir="models", indexfile="index.json")
    except Exception:
        print("OpenAI Error")