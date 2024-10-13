import { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad
  const positive = () => {
    return all > 0? (good/all)*100 + '%' :0
  }
  const average = () => {
    return all > 0? (good-bad)/all :'无数据'
  }
  return (
    <div>
    <h1>statistics</h1>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
      all {all} <br />
      average {average()} <br />
      positive {positive()}  <br />
      <br />
      <h1>评价</h1>
      <StatisticLine text='好评' value={good} />
      <StatisticLine text='中评' value={neutral} />
      <StatisticLine text='差评' value={bad} />
      <StatisticLine text='评价总数' value={all} />
      <StatisticLine text='综合评分' value={average()} />
      <StatisticLine text='好评占比' value={positive()} />
      </div>
  )
}
const StatisticLine = ({text,value}) => {
  return(
    <div>
      <table>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      </table>
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
  {text}
  </button>
)
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad ] = useState(0)
  const [selected, setSelected] = useState(0)
  const [speakButton, setSpeakButton] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))
  const [index, setIndex] = useState(null)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }
  const all = good + neutral + bad
  const speak = () => {
    const min = 0 // 最小值
    const max = anecdotes.length - 1 // 最大值
    const math = Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机索引
    setSelected(math) // 更新选中的名言索引
    setSpeakButton(speakButton + 1)
  }
  const vote = () => {
    const copy = [...votes] // 创建票数的副本
    copy[selected] += 1 // 为当前选择的名言加一票
    setVotes(copy) // 更新票数状态

    const maxVotes = Math.max(...copy) //获取最大票数
    setIndex(copy.indexOf(maxVotes)) // 获取最大票数的索引
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text = {'good'} />
      <Button handleClick={neutralClick} text = {'neutral'} />
      <Button handleClick={badClick} text = {'bad'} />
      <br /><br />
      {all > 0 ?<Statistics good={good} neutral={neutral} bad={bad} /> :'暂无数据'} <br />
      <br />
      <h1>名言警句</h1>
      <p>点我随机生成一条名言警句</p>
      <Button handleClick={speak} text={'点我试试'}/>
      <br />
      { speakButton !==0? anecdotes[selected] : null} 
      <br /><br />
      { index !== null? '当前名言票数：' + votes[selected] :null }
      { speakButton !== 0? <Button handleClick={vote} text={'投票'} /> :null}
      <br /><br />
      { index !== null? <h1>票数最高</h1> :null }
      
      {anecdotes[index]}
    </div>
  )
}


export default App