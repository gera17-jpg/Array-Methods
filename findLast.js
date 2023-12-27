//find Trevor
const grade1 = ['Alice','John','Wesley' , 'Trevor'];
const grade2 = ['John' , 'Peter'];
const grade3 = ['Trevor' , 'Ashly','Ana','Sylvia'];
const newBatch =grade1.concat(grade1,grade2,grade3);
console.log(newBatch);   //['Alice', 'John', 'Wesley', 'Trevor', 'Alice', 'John', 'Wesley', 'Trevor', 'John', 'Peter', 'Trevor', 'Ashly', 'Ana', 'Sylvia']
newBatch.findLast((student , index) =>  {
  if(student ==='Trevor') {
    console.log(`There's a student named ${student} in index ${index}.`);
  }
};
     
                  
