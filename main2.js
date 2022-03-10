'use strict'

{
const targets = document.querySelectorAll('.block');

function callback(entries){
  console.log(entries);

  if (!entries[0].isIntersecting){
    return;
  } 
  entries[0].target.classList.add('appear');
  observer.unobserve(entries[0].target);
}

const options = {
  threshold: 0.3,
};



  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}


