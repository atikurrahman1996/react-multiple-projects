import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineCharts = () => {
  const studentsMarks = [
    { id: 1, name: "Student 1", mathMarks: 85, englishMarks: 82 },
    { id: 2, name: "Student 2", mathMarks: 90, englishMarks: 91 },
    { id: 3, name: "Student 3", mathMarks: 78, englishMarks: 77 },
    { id: 4, name: "Student 4", mathMarks: 88, englishMarks: 85 },
    { id: 5, name: "Student 5", mathMarks: 92, englishMarks: 88 },
    { id: 6, name: "Student 6", mathMarks: 76, englishMarks: 79 },
    { id: 7, name: "Student 7", mathMarks: 81, englishMarks: 84 },
    { id: 8, name: "Student 8", mathMarks: 89, englishMarks: 92 },
    { id: 9, name: "Student 9", mathMarks: 94, englishMarks: 90 },
    { id: 10, name: "Student 10", mathMarks: 87, englishMarks: 86 },
  ];

  return (
    <div>
      <LineChart width={700} height={300} data={studentsMarks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="mathMarks" stroke="red" />
        <Line type="monotone" dataKey={"englishMarks"} stroke="yellow" />
      </LineChart>
    </div>
  );
};

export default LineCharts;

//https://recharts.org/
