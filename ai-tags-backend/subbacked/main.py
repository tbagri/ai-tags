from llamaqueue import ollma_queue
from jsonconvert import json_convert
from vespaload import load_documents_to_vespa
from vespaqueue import send_and_extract_words
from vespadelete import vespa_remove
def main(amount, memo, date, pending, type):
    
    #getting a list of 10 words and saving them in data.json
    ollma_queue(amount, memo, date, pending, type)
    
    #converting to 10 jason files
    json_convert()
    
    #move the documents inot vespa
    load_documents_to_vespa()
    
    #getting a list of top 5 words from vespa
    result = send_and_extract_words(memo)
    
    #deloading vespa
    vespa_remove()
    
    return result
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
