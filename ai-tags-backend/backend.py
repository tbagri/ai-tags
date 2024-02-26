from flask import Flask
from flask_cors import CORS
from subbacked.main import main

app = Flask(__name__)
CORS(app)

@app.route('/<int:amount>/<memo>/<date>/<status>', methods=['GET'])
def process_data(amount, memo, date, status, type):
    result = main(amount, memo, date, status, type)
    return result

if __name__ == '__main__':
    app.run(debug=True, port=5000)