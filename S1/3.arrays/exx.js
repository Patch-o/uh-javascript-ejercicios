var moderatIII = [];
            moderatIII[0] = "Eating hooks";
            moderatIII[1] = "Running";
            moderatIII[2] = "Finder";
            moderatIII[3] = "Ghostmother";
            moderatIII[4] = "Reminder";
            moderatIII[5] = "Intruder";
            moderatIII[6] = "Animal trails";    

console.log(moderatIII);

 

moderatIII.splice(2,2);

 console.log(moderatIII); //  ["Abel", "Pepe", "Noemi", "Rafa"]

moderatIII.splice(2,2,'Ethereal');


console.log(moderatIII);

moderatIII.splice(2,2,'Ethereal','Ethereal Remix vol.1','Ethereal Remix vol.2');

console.log(moderatIII);