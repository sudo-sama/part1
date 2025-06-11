import { useState } from 'react'

const Header = props => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = props => {
  return (
    <button onClick={props.onHandleClick}>{props.text}</button>
  )
}

const StatisticLine = props => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = props => {
  const { good, bad, neutral } = props

  if(good === 0 && bad === 0 && neutral === 0)
    return (<p>No feedbad given.</p>)

  return (
    <table>
      <tbody>
        <StatisticLine text={"Good"} value={good}/>
        <StatisticLine text={"Bad"} value={bad}/>
        <StatisticLine text={"Neutral"} value={neutral}/>
        <StatisticLine text={"All"} value={good+bad+neutral}/>
        <StatisticLine text={"Average"} value={good/100} />
        <StatisticLine text={"Positive"} value={good /(good+bad+neutral) * 100} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const onUpdateGood = () => {
    setGood(good + 1)
  }

  const onUpdateBad = () => {
    setBad(bad + 1)
  }

  const onUpdateNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Header text={"Give Feedback"}/>
      <Button onHandleClick={onUpdateGood} text={"Good"}/>
      <Button onHandleClick={onUpdateBad} text={"Bad"}/>
      <Button onHandleClick={onUpdateNeutral} text={"Neutral"}/>
      <Header text={"Statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App