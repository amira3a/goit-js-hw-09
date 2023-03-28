const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);
  
  for(let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then((result) => console.log(`Promise ${result.position} resolved after ${result.delay}ms`))
      .catch((error) => console.error(`Promise ${error.position} rejected after ${error.delay}ms`));
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      
      if(shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}