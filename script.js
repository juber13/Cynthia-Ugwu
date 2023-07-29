// const btn = document.querySelector("#btn")
// // btn.addEventListener('click' , (e) => {
//     // alert('sdf')
//     // console.log(e.pageX)
//     btn.onclick = function(event) {
//         if (event.altKey && event.shiftKey) {
//           alert('Hooray!');
//         }
//  }

const { json } = require("react-router-dom");

// btn.addEventListener('click' , (e) => {
//     if(e.altKey && e.shiftKey){
//         console.log('working');
//     }
// })

// const btn = document.querySelector('.btn-top');


// const go = () => window.scrollTo({top : 0 , behavior : 'smooth'});

// btn.addEventListener('click' , go);


// const hexCode =  () =>  "#" + Math.floor(Math.random() * 0Xfffff).toString(16).padEnd(6 , "0");
// console.log(hexCode());

const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e) => {
   e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

   fetch('https://jsonplaceholder.typicode.com/posts' , {
      method : "post",
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify(data),
   })
   .then(res => res.json())
   .then(res => console.log(res));

})