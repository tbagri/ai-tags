import os
import subprocess

def load_documents_to_vespa(folder_path="words"):
    # Iterate over the files in the folder
    for filename in os.listdir(folder_path):
        if filename.endswith(".json"):
            file_path = os.path.join(folder_path, filename)

            # Build the vespa document put command
            command = f'vespa document put {file_path}'

            # Use subprocess to run the command
            process = subprocess.Popen(command, shell=True)
            process.wait()

            # Check the return code to see if the command was successful
            if process.returncode == 0:
                print(f"Document from {filename} added successfully")
            else:
                print(f"Error: Failed to add document from {filename}. Return code: {process.returncode}")
