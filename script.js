'use strict';

const flexContainer = document.querySelector('.flex-container');
const section = [ 'section1' , 'section2' , 'section3' ];

const creatSection = section.forEach((_, i) => {
  flexContainer.insertAdjacentHTML('beforeend',
  `<div class="flex" href="#section${i +1}">
    Section ${i +1}
  </div>`
  );
});

const colorPlay  = function(e){
  document.querySelectorAll('.heading').forEach((i) => {
    i.classList.remove('heading')
  });
  e.classList.add(`heading`);
};


/* switch clicked && scroll clicked */


const allFlex = document.querySelectorAll('.flex');
const section1 = document.getElementById('sec2');
const section2 = document.getElementById('sec3');
const section3  = document.getElementById('sec4');
const navHeight = flexContainer.getBoundingClientRect().height;

allFlex.forEach( (iteam , i )=> iteam.addEventListener('click', function (e) {
colorPlay(iteam);

 const id = e.target.getAttribute('href');

 if ( id === `#section1`) { section1.scrollIntoView({ behavior: 'smooth' });}
 if ( id === `#section2` ) { section2.scrollIntoView({ behavior: 'smooth' });}
 if ( id === `#section3`) { section3.scrollIntoView({ behavior: 'smooth' });}

}));


/* onScroll flexContainer */
const hight1 = section1.getBoundingClientRect().top + window.pageYOffset - 2*`${navHeight}`;
const hight2 = section2.getBoundingClientRect().top + window.pageYOffset - 2*`${navHeight}`;
const hight3 = section3.getBoundingClientRect().top + window.pageYOffset - 2*`${navHeight}`;

	window.onscroll = function() {
    if(window.pageYOffset > hight1) colorPlay(allFlex[0]);
    if(window.pageYOffset > hight2) colorPlay(allFlex[1]);
    if(window.pageYOffset > hight3) colorPlay(allFlex[2]);
  };

/* fixed flexContainer */
const header = document.getElementById('sec1');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) flexContainer.classList.add('sticky');
  else flexContainer.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);



////  section two ////////
 document.querySelectorAll('.ownForms').forEach((form, i) => {
   form.addEventListener('click' , function(e){
     const clicked = e.target;
     document.querySelectorAll('.bulletsForms').forEach((bull) => {
       bull.classList.remove('activeBllForms')
     });
   document.querySelector(`.bulletsForms--${clicked.dataset.tab}`).classList.add('activeBllForms')

   })
 });
