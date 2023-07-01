const API_KEY = "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"

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${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}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Hello, how are you today?",
        max_tokens: 7
      })
    });
  
    const data = await response.json();
    console.log(data);
}


fetchData()
//for command call 
// curl https://api.openai.com/v1/chat/completions\
// -H "Content-Type: application/json" \ 
// -H "Authorization: Bearer sk-API KEY"\
//  -d '{
//  "model": "gpt-4",
//  "messages": [{'role', 'user', 'content',: "Hello!"}]}'
