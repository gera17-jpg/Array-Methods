//findIndex
const students = ['Bongseon' , 'Doosik' , 'Huisoo' , 'Gyungpo'];
const operationFindHuisoo = students.findIndex((students) => {
  return students === 'Huisoo';
});
console.log(operationFindHuisoo);      //Outpot: 2
