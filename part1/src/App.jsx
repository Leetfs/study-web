const Header = (Header) => {
  // const-definitions

  return (
    <div>
      <p>课程名称：{Header.name}</p>
    </div>
  )
}

const Content = () => {
  const math = "20"

  return (
    <div>
      <p>
        各部分练习数量： {math}
      </p>
    </div>
  )
}

const Total = (miao) => {

  return (
    <div>
      <p>
        练习的总数量：{miao.ttm}
      </p>
    </div>
  )
}

const Part = (pa) => {
  return (
    <div>
      <p>
        Part {pa.math} , 练习次数 {pa.cishu}
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
    <Header name = 'Lee name'/>
    <Content />
    <Total ttm = "50" />

    <Part math = "1" cishu = "5" />
    <Part math = "2" cishu = "10" />
    <Part math = "3" cishu = "15" />
    </div>
  )
}


export default App