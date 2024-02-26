from flask import Flask
from flask_cors import CORS
from main import main

app = Flask(__name__)
CORS(app)

@app.route('/<amount>/<memo>/<date>/<status>/<type>', methods=['GET'])
def process_data(amount, memo, date, status, type):
    result = main(amount, memo, date, status, type)
    return result

if __name__ == '__main__':
    app.run(debug=True, port=5000)
