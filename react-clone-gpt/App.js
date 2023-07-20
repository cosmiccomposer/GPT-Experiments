import { useState, useEffect } from 'react'



const App = () => {
  const [value, setValue] = useState(null)
  const [ message, setMessage] = useState(null)
  const [ previousChats, setPreviousChats] = useState([])

  const getMessages = async () => {
      const options = {
        method: "POST",
        body : JSON.stringify({
          message: "Hello, How are you?"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    try {
        const response = await fetch('http://localhost:8000/completions', options)
        const data = response.json()
        setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    console.log(currentTitle, value, message])
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }
    if(currentTitle && value && message){
      setPreviousChats(prevChats => (
        [...prevChagts, 
          {

        },
        {
          
        }
        
      ]
      ))
    }
  }[message, currentTitle)


  return (
    <div className='app'>
      <section className='sidebar'> {/* Error: 'side bar' should be 'sidebar' */}
        <button>+ New Chat</button>
        <ul className='history'>
          <li>blah</li>
        </ul>
        <nav>
          <p>Constructed by Aurelia</p>
        </nav>
      </section>
      <section className='main'>
        <h1>AureliaGPT</h1>
        <ul className="feed">
          {/* Missing list items */}
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit">onClick={getMessages}➢</div>
          </div>
          <p className='info'>
            Chat GPT Mar 14 Version. Free Research Preview.
            Our goal is to make AI systems more natural and safe to interact with.
            Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
