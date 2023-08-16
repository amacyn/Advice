let code = document.querySelector('.code');
let quote = document.querySelector('.quote');

const fetchData =() => {
    fetch('https://api.adviceslip.com/advice')
    .then(reponse => reponse.json())
    .then(data =>{
      const {id, advice} = data.slip;
      code.innerHTML = id;
      quote.innerHTML = advice;
      // console.log(id,advice);
    })
    .catch(error =>{
      console.error(error);
    });
};