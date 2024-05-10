 
//  $(document).ready(function () {

//   $('#menu').click(function () {
//       $(this).toggleClass('fa-times');
//       $('.navbar').toggleClass('nav-toggle');
//   });

//   $(window).on('scroll load', function () {
//       $('#menu').removeClass('fa-times');
//       $('.navbar').removeClass('nav-toggle');

//       if (window.scrollY > 60) {
//           document.querySelector('#scroll-top').classList.add('active');
//       } else {
//           document.querySelector('#scroll-top').classList.remove('active');
//       }
//   });
// });

 
// $('section').each(function () {
//   let height = $(this).height();
//   let offset = $(this).offset().top - 200;
//   let top = $(window).scrollTop();
//   let id = $(this).attr('id');

//   if (top > offset && top < offset + height) {
//       $('.navbar ul li a').removeClass('active');
//       $('.navbar').find(`[href="#${id}"]`).addClass('active');
//   }
// });
// });

// smooth scrolling
// $('a[href*="#"]').on('click', function (e) {
// e.preventDefault();
// $('html, body').animate({
//   scrollTop: $($(this).attr('href')).offset().top,
// }, 500, 'linear')
// });

 
 
 
 
 var typed = new Typed(".typing-test",{
  strings:["frontend development", "backend development", "web designing", "android development", "web development"],
  loop:true,
  typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500
  
 })


            fetch('assets/js/skills.json')
            .then((data)=>{
              return data.json();
            }).then((completedata)=>{
              let data1  = "";
              completedata.map((values)=>{
                data1 +=` <div class="bar">
                <div class="info">
                  <img src="${values.icon}"/>
                  <span>${values.name}</span>
                </div>
              </div> `
   
              })
              console.log(data1);
              document.getElementById("skillsContainer").innerHTML=data1;
              
            }).catch((err)=>{
              console.log(err);
            })





            $('#menu').click(function () {
              $(this).toggleClass('fa-times');
              $('.navbar').toggleClass('nav-toggle');
          });
      
          $(window).on('scroll load', function () {
              $('#menu').removeClass('fa-times');
              $('.navbar').removeClass('nav-toggle');
      
              if (window.scrollY > 60) {
                  document.querySelector('#scroll-top').classList.add('active');
              } else {
                  document.querySelector('#scroll-top').classList.remove('active');
              }
      
              // scroll spy
              $('section').each(function () {
                  let height = $(this).height();
                  let offset = $(this).offset().top - 200;
                  let top = $(window).scrollTop();
                  let id = $(this).attr('id');
      
                  if (top > offset && top < offset + height) {
                      $('.navbar ul li a').removeClass('active');
                      $('.navbar').find(`[href="#${id}"]`).addClass('active');
                  }
              });
          });
      
          // smooth scrolling
          $('a[href*="#"]').on('click', function (e) {
              e.preventDefault();
              $('html, body').animate({
                  scrollTop: $($(this).attr('href')).offset().top,
              }, 500, 'linear')
          });
      
