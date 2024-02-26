import json
import os

import json
import os

def json_convert(file_path="data.json", folder_path="words"):
    # Load JSON data from the file
    with open(file_path, "r") as json_file:
        items = json.load(json_file)

    # Create a folder if it doesn't exist
    os.makedirs(folder_path, exist_ok=True)

    # Generate and save individual JSON files for each word
    for key, value in items.items():
        document_id = f"{key}"
        text_content = value["field"]

        new_json = {
            "put": f"id:tags:my_content::{document_id}",
            "fields": {
                "text": text_content
            }
        }

        # Save the JSON to a file in the specified folder
        file_path = os.path.join(folder_path, f"{document_id}.json")
        with open(file_path, "w") as json_file:
            json.dump(new_json, json_file, indent=2)

    print(f"JSON files saved in the '{folder_path}' folder.")


