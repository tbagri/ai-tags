import subprocess

def vespa_remove():
    for i in range(11):
        doc_id = f'id:tags:my_content::{i}'
        remove_vespa_document(doc_id)



def remove_vespa_document(document_id):
    # Build the vespa document remove command
    command = f'vespa document remove {document_id}'

    # Use subprocess to run the command
    process = subprocess.Popen(command, shell=True)
    process.wait()

    # Check the return code to see if the command was successful
    if process.returncode == 0:
        print(f"Document with ID {document_id} removed successfully")
        return True
    else:
        print(f"Error: Failed to remove document with ID {document_id}. Return code: {process.returncode}")
        return False
