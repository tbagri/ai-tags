import requests
import json

def send_and_extract_words(message):
    base_url = "http://localhost:8080/search/"
    query_params = {
        'yql': 'select * from sources * where userQuery() or ({targetHits: 10}nearestNeighbor(auto_embedding, embedding)) limit 5',
        'input.query(embedding)': f'embed(e5, "query:{message}")',
        'query': message,
        'ranking': 'combined'
    }

    response = requests.get(base_url, params=query_params)

    if response.status_code == 200:
        data = response.json()

        # Extract and order the words from the dictionary
        words = [child['fields']['text'] for child in data['root']['children']]

        # Create a new JSON object with all words together
        all_words_json = {
            "words": words
        }

        return all_words_json
    else:
        return {"error": f"Error: {response.status_code}", "response_text": response.text}
