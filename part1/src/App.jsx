import { useState } from 'react'

// EXERCICE  1.3
// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }
// const Content = ({part1, part2, part3}) => {
//   return (
//     <div>
//       <Part part={part1.name} exercises={part1.exercises} />
//       <Part part={part2.name} exercises={part2.exercises} />
//       <Part part={part3.name} exercises={part3.exercises} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.total}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }
//   const total = part1.exercises + part2.exercises + part3.exercises


//   return (
//     <div>
//         <Header course={course} />
//         <Content part1={part1}  part2={part2}  part3={part3} />
        
//         <Total total={total}/>
//     </div>
//   )
// }

//   export default App

// END EXCERCISE 1.3



// EXERCICE 1.4


// const Part = ({parts}) => {
//   return (
//     parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)
//   )
// }

// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }
// const Content = ({parts}) => {
//   return (
//     <div>
//       <Part parts={parts} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.total}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React', exercises: 10
//     },
//     {
//       name: 'Using props to pass data', exercises: 7
//     },
//     {
//       name: 'State of a component', exercises: 14
//     }
//   ]
//   const total = parts.reduce((sum, part) => sum + part.exercises, 0)


//   return (
//     <div>
//         <Header course={course} />
//         <Content parts={parts} />
        
//         <Total total={total}/>
//     </div>
//   )
// }

// export default App

// END   EXCERCISE 1.4

// EXERCICE 1.5

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
