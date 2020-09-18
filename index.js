//c12f44d --apikey
//Comments be the notes/documentatioin ..upload git
async function fetchData(value){
  let resp = await axios.get(`http://www.omdbapi.com/`, {
  params:{
      apikey:"c12f44d",
      s:value
  }
});
console.log(`Heres the data `, resp.data);
}

function debounce(func){
  let timeOutId;
  return (...args) => {
    
  if(timeOutId){
    clearTimeout(timeOutId);
}
  timeOutId = setTimeout(() => {func.apply(null, args)}, 1000)
  }
}

let inp = document.querySelector('input');

const onInput = event => {
  fetchData(event.target.value) 
}

///we will try to make this function generic as multiple times it can be used if we make it more generic

inp.addEventListener('input', debounce(onInput));


//to understand this better 
//just compilation se pehle debounce(input) ki jgh pe function(...args){} aakr baith jaega.. ab jab hum kuch input
//dalege toh args me automatically hmare dale hue input jaege kyuki ye addEventListner ki property hai input hone
//par wo second argument me example (inp.addEventListener('input', second argument)) value toh pass krta hi hai
//and then we have concept of close passed func hmare lexical scope me toh rhega hi toh hum us func ko
//even after exiting the outer function call kr pa rhe hain.

//also this link helped https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


// var a = 1;
// let b = 2;

// console.log(a);

// console.log(b);


// function doAsyncWork() {
//     const array = []
//     setTimeout(() => array.push('it worked'), 1)
//     return array
//   }
//   const array = doAsyncWork()
//   console.log(array);