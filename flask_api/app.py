from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug import exceptions
import json


app = Flask(__name__)
CORS(app)

f = open('flask_api\db\data.json', encoding="utf8")
data = json.load(f)

@app.route('/')
def default():
    return 'Flask API is running!'

@app.route('/artists')
def show_characters():
    return data, 200


if __name__ == '__main__':
    app.run(debug=True)
