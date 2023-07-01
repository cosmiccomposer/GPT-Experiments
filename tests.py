import unittest

import coverage

if __name__ == "__main__":
    # Start coverage collection
    cov = coverage.Coverage()
    cov.start()

    # Load all tests from the 'autogpt/tests' package
    suite = unittest.defaultTestLoader.discover("./tests")

    # Run the tests
    unittest.TextTestRunner().run(suite)

    # Stop coverage collection
    cov.stop()
    cov.save()

    # Report the coverage
    cov.report(show_missing=True)
###########################################################
import openai
import requests
import json
import time

# Set your API keys
openai.api_key = "your_openai_api_key"
trading_bot_api_key = "your_trading_bot_api_key"

# Define the trading platform's API endpoint
trading_api_endpoint = "https://your-trading-platform.com/api/v1"

# Function to generate trading signals using GPT
def generate_trading_signal(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7,
    )

    message = response.choices[0].text.strip()
    return message

# Function to execute trade based on the trading signal
def execute_trade(signal):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {trading_bot_api_key}"
    }

    data = {
        "signal": signal
    }

    response = requests.post(
        f"{trading_api_endpoint}/execute_trade",
        headers=headers,
        data=json.dumps(data)
    )

    return response.json()

# Main loop
while True:
    # Generate a trading signal prompt (customize for your specific use case)
    prompt = "Generate a trading signal for the next hour for the BTC/USD pair:"

    # Call GPT to generate a trading signal
    trading_signal = generate_trading_signal(prompt)
    print(f"Trading signal: {trading_signal}")

    # Execute the trade using the trading bot
    trade_result = execute_trade(trading_signal)
    print(f"Trade result: {trade_result}")

    # Sleep for a desired interval (e.g., 1 hour)
    time.sleep(60 * 60)
    
    
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

# Now you can access the variables
import os
print(os.getenv("PINECONE_API_KEY"))
print(os.getenv("PINECONE_ENV"))
print(os.getenv("OPENAI_API_KEY"))
print(os.getenv("USE_AZURE"))
print(os.getenv("SMART_LLM_MODEL"))
print(os.getenv("FAST_LLM_MODEL"))
print(os.getenv("CUSTOM_SEARCH_ENGINE_ID"))

import openai
openai.api_key = os.getenv(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)
