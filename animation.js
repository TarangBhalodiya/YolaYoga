

var t1 = gsap.timeline();
const navLink = document.querySelectorAll(".navLink");
const ellipse = document.querySelectorAll(".ellipse");
const yogaCard = document.querySelectorAll(".card");

// const mainHead = document.getElementById("mainHead").textContent.split("") .map(char => `<span style="display: inline-block;">${char}</span>`)
// .join('');

const textElement = document.getElementById('mainHead');
const text = textElement.textContent;
textElement.innerHTML = text
  .split('')
  .map(char => {
    if (char === ' ') {
      return `<span style="display: inline-block;">&nbsp;</span>`;
    }
    return `<span style="display: inline-block;">${char}</span>`;
  })
  .join('');

  

  t1.fromTo(".navigation",
    { y: -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      
    }
  );
  t1.fromTo( navLink,
    { y: -30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger:0.1,
     
    }
  );

//   t1.fromTo( textElement.querySelectorAll("span"),
//     { y: -30, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 0.3,
//       stagger:0.1,
      
//     }
  );
  t1.fromTo(".desc",
  { y: -30, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.3,
    // stagger:0.1,
  
  }
);


gsap.fromTo(yogaCard,
  { xPercent: -100, opacity: 0 },
  {
    xPercent: 0,
    opacity: 1,
    duration: 1,
    stagger:0.1,
    scrollTrigger: {
      trigger: yogaCard,    
      start: "top 90%",        
      end: "top 10%",      
      toggleActions:"play reverse play reverse"          
    }
  }
);

  t1.fromTo("#expHead",
  { yPercent: -30, opacity: 0 },
  {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger:{
        trigger: "#expHead",    
        start: "top 90%",        
        end: "top 10%",      
        toggleActions:"play reverse play reverse" ,
        markers: true        
      }
    }
);