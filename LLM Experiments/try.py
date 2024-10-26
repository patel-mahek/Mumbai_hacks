import requests

url = 'http://localhost:5000/process_pdf'
files = {'file': open('lead_profile.pdf', 'rb')}
data = {'type': 'lead'}

response = requests.post(url, files=files, data=data)

if response.status_code == 200:
    print("Extracted Data:", response.json())
else:
    print("Error:", response.json())
