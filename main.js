let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runnersAge = 16;

if(runnersAge >= 18 && regEarly){
    raceNumber += 1000;
}
if(runnersAge >= 18 && regEarly){
    console.log(`Runners over the age of 18 and who also registered early. Your race number is ${raceNumber} and your race will start at 9:30 am`);
} else if(runnersAge >=18 && regEarly === false){
    console.log(`Runners over the age of 18 and who did not registered early. Your race number is ${raceNumber} and your race will start at 11:00 am`)
}
if(runnersAge < 18){
    console.log(`Youth registrants under the age of 18. Your race number is ${raceNumber} and your race will start at 12:30 am`)
}else if(runnersAge === 18){
    console.log(`Runners please see the registration desk`);
}