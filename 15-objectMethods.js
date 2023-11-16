employeeName = [
    {"name" : "Akif", "email" : "Akif@gmail.com", "age" : "20"},
    {"name" : "Senan", "email" :  "Senan@gmail.com", "age" : "25"},
    {"name" : "Arzu", "email" :  "Arzu@gmail.com", "age" : "22"},
    {"name" : "Hemid", "email" :  "Hemid@gmail.com", "age" : "2"}
];

//------Task 1 ------

function getNameOfEmployee(array) {
    for (let i=0; i<array.length; i++) {
        console.log(array[i].name);
        if (i < array.length - 1) {
            console.log(",");
          };
    };
};

// getNameOfEmployee(employeeName);

//------Task 2 ------

function showArray(arr) {
    console.log(arr);
  }
  
//   showArray.call(null,employeeName);


//------Task 3 ------


let getNames = employeeName.map((obj) => console.log(obj.name));

let employeeAge25 = employeeName.filter((obj) => obj.age >= 25);

console.log(employeeAge25);

