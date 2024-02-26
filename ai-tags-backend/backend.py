from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample function
def bharatWork(amount, memo, date, status):
    # Perform some work here based on the parameters
    return 1

@app.route('/<int:amount>/<memo>/<date>/<status>', methods=['GET'])
def process_data(amount, memo, date, status):
    result = bharatWork(amount, memo, date, status)
    return '{"all_words": ["State High Hack Club", "Hack Happy Valley", "Transfer", "Supplies", "Miscellaneous Expenses"]}'

if __name__ == '__main__':
    app.run(debug=True, port=5000)