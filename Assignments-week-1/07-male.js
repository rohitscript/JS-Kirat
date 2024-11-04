// 3. Write a program that prints all the male people’s first name given a complex object

let students = [
    {
      name: "Rohit",
      age: 23,
      gender: "male",
    },
    {
      name: "Mohini",
      age: 20,
      gender: "female",
    },
    {
      name: "Mohit",
      age: 25,
      gender: "male",
    },
    {
      name: "Raman",
      age: 27,
      gender: "male",
    },
    {
      name: "Komal",
      age: 23,
      gender: "female",
    },
    {
      name: "Ritu",
      age: 22,
      gender: "female",
    },
    {
      name: "Aman",
      age: 22,
      gender: "male",
    },
  ];
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "female") {
      console.log(students[i]);
    }
  }
  