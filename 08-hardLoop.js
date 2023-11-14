let myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

let letters = ['c', 'o'];

for( let i = 0; i < myFarm.length; i++) {
    console.log(myFarm[i]);

    for (let j = 0; j < letters.length; j++) {

        if ( myFarm[i][0] === letters[j]) {
            alert(myFarm[i] + " Starts with 'c' or 'o'!")
        }
        
    }

    
};