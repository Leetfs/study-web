const Hello = (props) => {
  return (
    <div>
      <p>你好，{props.name}，你的年龄：{props.age}</p>
    </div>
  )
}


const App = () => {
  const name = "Lee"
  const age = 9+10
  

  return (
    <div>
      <h1>name and year</h1>
      <Hello name = {name}  age = {age}  />
      <Hello name="github" age={"不知道"} />
    </div>
  )
}

export default App