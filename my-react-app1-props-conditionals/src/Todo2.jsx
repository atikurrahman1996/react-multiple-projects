// conditional rendering

// export default function Todo2({ task, isDone }) {
//   if (isDone) {
//     return <li>Finish: {task}</li>;
//   } else {
//     return <li> Work On: {task}</li>;
//   }
// }

// using ternary operator

// eslint-disable-next-line react/prop-types
export default function Todo2({ task, isDone }) {
  return (
    <li>
      {isDone ? "Finished" : "Work On"}: {task}
    </li>
  );
}

//Conditional rendering &&

// export default function Todo2({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }

//Conditional rendering or ||

// export default function Todo2({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do it"}
//     </li>
//   );
// }
