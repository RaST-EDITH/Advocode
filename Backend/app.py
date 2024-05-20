from flask import Flask, request, jsonify
from flask_firebase_admin import FirebaseAdmin
from utils import chatbot, mdutils
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv(os.path.join(os.curdir, 'envs/.env'))
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(os.curdir, os.getenv("GOOGLE_APPLICATION_CREDENTIALS"))


app = Flask(__name__)
firebase = FirebaseAdmin(app)
CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route('/')
def livenessProbe():
    return "The Server is Live", 200

@app.route('/chat')
@firebase.jwt_required
def send():
    input_text = request.args.get('input')
    try:
        input_text = input_text.strip()
        if not input_text or input_text.strip("\"") == "":
            return "Malformed Request", 400
        chat_response=chatbot.queryBot(input_text)
        if chat_response is None:
            raise Exception("Bot Error...")
        response = {
            'question': f'{input_text}',
            'answer': f'{chat_response}',
        }
    except Exception:
        return "Internal Server Error", 500

    return jsonify(response), 200


@app.route('/get_doc', methods=['POST'])
def receive_json():
    try:
        # Get the JSON data from the request as a dictionary
        json_data = request.get_json()

        if json_data is None:
            return jsonify({'error': 'Invalid JSON data'}), 400

        # You can now work with the JSON data as a Python dictionary
        # For example, you can access values like this:
        doc_id = json_data.get('doc_id')
        creds = json_data.get('creds', None)
        if creds is None:
            return jsonify({'error': 'Key not found in JSON data'}), 400

        paths = {
            "0001": os.path.join(os.curdir, "doc_templates/Licence-to-use-Copyright.docx"),
            "0002": os.path.join(os.curdir, "doc_templates/Security-Bond-by-a-Surety.docx"),
            "0003": os.path.join(os.curdir, "doc_templates/General-Power-of-Attorney.docx"),
        }

        result = mdutils.getMDOutputFromDoc(creds, paths[doc_id])
        # Return a response
        return jsonify({'result': result}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
