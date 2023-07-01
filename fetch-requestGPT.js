fetch('https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
        Authorization: 'Bearer ${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}',
        "Content-Type": "application/json"
        body : JSON.stringify([
            model: "text-davinci-003",
            prompt: "hello, how are you today?"
        ])

    }
})