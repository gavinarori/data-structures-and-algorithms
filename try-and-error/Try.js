const people = ['Gavin', 'Kate', 'John', 'Jane', 'Tom'];

const  getChosenPersonByName = people.filter(checkName) 
function checkName(name) {
  return name ==='Kate';
}
console.log(getChosenPersonByName);

const categories = ['HOMICIDE', 'THEFT/OTHER', 'ROBBERY', 'MOTOR VEHICLE THEFT', 'ASSAULT W/DANGEROUS WEAPON', 'BURGLARY', 'THEFT F/AUTO'];

const occurredOffense = categories.filter((type => type.includes('MOTOR VEHICLE THEFT')))
console.log(occurredOffense);

const numbers  = [1,2,3,4,5];
const sum = numbers.reduce((a,b) => a + b);
console.log(sum)

