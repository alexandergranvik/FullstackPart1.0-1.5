const App = () => {
  const Header = () => {
    const course = 'Half Stack application development'
    return (
      <div>
      <h1>{course}</h1>
      </div>
    )
  }
  const Content = () => {
    const part = [
      { name: 'Fundamentals of React' , exercises: 10 },
      { name: 'Using props to pass data' , exercises: 7 },
      { name: 'State of a component' , exercises: 14 },
    ]

    return (
      <div>
        <p>{part[0].name} {part[0].exercises}</p>
        <p>{part[1].name} {part[1].exercises}</p>
        <p>{part[2].name} {part[2].exercises}</p>
      </div>
    )
  }
  const Total = () => {
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
    return (
      <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App