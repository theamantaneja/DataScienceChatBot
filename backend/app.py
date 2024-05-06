from flask import Flask, request, jsonify
import nbformat
from nbconvert import PythonExporter
from importlib import util
from flask_cors import CORS  # Needed to allow communication with frontend

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React frontend

# Load the bot model from Jupyter Notebook
notebook_filename = 'dataScienceBot.ipynb'
with open(notebook_filename) as f:
    nb = nbformat.read(f, as_version=4)

exporter = PythonExporter()
bot_code, _ = exporter.from_notebook_node(nb)

# Create a new module from the code
spec = util.spec_from_loader('bot_module', loader=None)
bot_module = util.module_from_spec(spec)
exec(bot_code, bot_module.__dict__)

@app.route('/ask', methods=['POST'])
def ask():
    question = request.json.get('question')
    answer = bot_module.get_response(question)  # Adjust as per your Jupyter Notebook function
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
