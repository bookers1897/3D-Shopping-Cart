//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//animate items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')


//moving animation events
container.addEventListener("mousemove", (e)=>{
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});


// SNEAKER ROTATES BACK
sneaker.addEventListener('mouseleave', (e) =>{
  sneaker.style.transform = "translateZ(200px) rotateZ(0deg)";
});
// sneaker rotates 
sneaker.addEventListener('mouseenter', (e) =>{
  sneaker.style.transform = "translateZ(150px) rotateZ(-25deg)";
});

//animate in
container.addEventListener('mouseenter', (e) =>{
  card.style.transition = 'none';
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(120px)";
  purchase.style.transform = "translateZ(120px)";
  sizes.style.transform = "translateZ(100px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)";
})

//animate out
container.addEventListener('mouseleave', (e)=> {
  //POP OUT
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0deg)"
  sneaker.style.transform = "translateZ(0deg)"
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)" ;
  sizes.style.transform = "translateZ(0px)";
});


