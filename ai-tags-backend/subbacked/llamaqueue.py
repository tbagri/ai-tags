import ollama
import json
def ollma_queue(amount, memo, date, pending, type):
  prompt = f"""
  You're building an innovative financial transaction tagging system. Consider the details of the given transaction:
  - Amount: {amount} cents
  - Memo: {memo}
  - Date: {date}
  - Pending: {pending}
  - Type: {type}
  Your task is to suggest ten tags that not only capture the factual details of the transaction but also infuse creativity and relevance.
  Aim for tags that are concise (1-2 words). To provide a starting point, here are some examples: Misc. Expenses, Team Mementos, Supplies, Prizes, Team Travel, Workshops & Activities Supplies, Logistics Supplies, Catering, Team Food.
  The goal is to make the information easy to sort through by grouping similar items. Just list the tags, don't include anything else. Never include the word tag. 
  """
  response = ollama.chat(model='llama2', messages=[
    {
      'role': 'user',
      'content': prompt,
      },
    ])
  
  print(response['message']['content'])
  
  output = response['message']['content']
  
  items = [item.split('. ', 1)[1].strip() for item in output.strip().split('\n')]
  
  json_list = {str(i+1): {"field": item} for i, item in enumerate(items)}
  
  # Convert the list of dictionaries to a JSON string
  json_string = json.dumps(json_list, indent=2)
  
  # Save the JSON string to a file named "data.json"
  
  with open("data.json", "w") as json_file:
    json_file.write(json_string)
  
  print("JSON data saved to 'data.json'")






