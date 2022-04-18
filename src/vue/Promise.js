
    //    ПРОМИСЫ

//  const p = new Promise((resolve, reject) =>{
//     console.log('setTimeout started')
//    setTimeout(() => {
//     console.log('setTimeout ended')
//     reject({status: ' not ok'})
//    },3000)
//  })

//  p
//  .then((data) => {
//     return new Promise(() =>{})
// }) 
//  .then()
//  .catch(error => console.error(error))
//  .finally(() => console.log('finally'))


//    урок 1. Что такое прототипы в JS

 const person = {
    name: 'vasif',
    age: 25,
    greet: function() {
     console.log('Greet!')
    }
  }

  const lena = Object.create(person)
  lena.name = 'Elena'