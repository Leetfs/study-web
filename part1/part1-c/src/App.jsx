import { useState,useEffect  } from 'react'

const Hello = ({name,age}) => {

  const year = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        你的出生年份是：{year()}
      </p>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect(
    () => setCounter(counter + 1),
    1000
  )

  const props = {
    name: 'Arto Hellas',
    age: 35,
  }


  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={props.name} age={props.age} />
      {counter}
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
    
  )
}

export default App