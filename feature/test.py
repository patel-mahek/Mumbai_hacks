# backend/app/test_main.py
import unittest
import json
from main import app

class APITestCase(unittest.TestCase):
    def setUp(self):
        # Set up test client
        self.app = app.test_client()
        self.app.testing = True

    def test_root(self):
        # Test the root endpoint
        response = self.app.get("/")
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data["message"], "Backend is up and running!")

    def test_query(self):
        # Test the /query endpoint with a valid input
        response = self.app.post(
            "/query",
            data=json.dumps({"query": "Is customer retention a priority?"}),
            content_type="application/json"
        )
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn("response", data)

    def test_query_no_input(self):
        # Test the /query endpoint with no input
        response = self.app.post("/query", data=json.dumps({}), content_type="application/json")
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data["error"], "No query provided")

if __name__ == "__main__":
    unittest.main()
