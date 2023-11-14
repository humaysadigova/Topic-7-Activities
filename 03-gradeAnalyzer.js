const scores = [55,98,56,64,75,89,71,66,51,85,76,73,61];

function analyzeGrades(arr) {
   let countA = 0;
   let countB = 0;
   let countC = 0;
   let countD = 0;
   let countF = 0;

   for (let i=0; i<arr.length; i++){
    if (arr[i] >= 90) {
        countA ++;
    } else if (arr[i] >= 80) {
        countB ++;
    } else if (arr[i] >= 70) {
        countC ++;
    } else if (arr[i] >= 60) {
        countD ++;
    } else {
        countF ++;
    }
   };

   return {
    A: Math.round((countA/arr.length) * 100),
    B: Math.round((countB/arr.length) * 100),
    C: Math.round((countC/arr.length) * 100),
    D: Math.round((countD/arr.length) * 100),
    F: Math.round((countF/arr.length) * 100)
   }
};

const grades = analyzeGrades(scores);

console.log(grades);