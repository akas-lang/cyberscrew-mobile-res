function myhamb(){
    let a=document.querySelector('.hambergur');
    a.classList.toggle('change');
}
var icon=document.querySelector('.hambergur');
var con=document.querySelector('.menu');
var l=document.querySelector('.pro');
icon.addEventListener('click',function()
{
    con.classList.toggle('add');
});

const timeline=gsap.timeline();
timeline
 .from('.container',{x:'100',duration:'2',ease:'back',opacity:0})
.from('.lc',{y:'-200',duration:'0.5',ease:'bounce',opacity:'0'})
.from('.text1',{y:'-300',duration:'0.5',ease:'bounce',stagger:'0.8',opacity:'0'
})
.from('.search-box',{y:'-300',duraion:'1',ease:'slow',opacity:'0'})
.from('.acc-tab',{x:'-200',opacity:0,rotation:'300',delay:'1'})
.from('.acc',{x:'80',opacity:0,rotation:'300',})
const t1=gsap.timeline({
    scrollTrigger:{
        trigger:'.mainslider',
        start:'0%',
        end:'20%',
        scrub:0.6,
    },
});
const t2=gsap.timeline({
    scrollTrigger:{
        trigger:'.mainslider',
        start:'0%',
        end:'20%',
        scrub:0.6,
    },
});
const t3=gsap.timeline({
    scrollTrigger:{
        trigger:'.mainslider',
        start:'10%',
        end:'80%',
        scrub:0.6,
    },
});
const t4=gsap.timeline({
    scrollTrigger:{
        trigger:'.holder',
        start:'-10%',
        end:'30%',
        scrub:2,
    },
});
const t5=gsap.timeline({
    scrollTrigger:{
        trigger:'.holder',
        start:'0%',
        end:'30%',
        scrub:1,
    },
});

t1.fromTo('.contents',{x:'-100',opacity:0},{x:'0',opacity:1});
t2.fromTo('.react-img-cont',{x:'100',opacity:0},{x:'0',opacity:1});
t3.fromTo('.container3',{
    scale:'0',opacity:0
},{
    scale:'1',opacity:1
})
t3.fromTo('.container4',{
    scale:'0',opacity:0
},{
    scale:'1',opacity:1
})
t3.fromTo('.container5',{
    scale:'0',opacity:0
},{
    scale:'1',opacity:1,
})
t4.from('.txt1', {
    y: '100',
    duration: 0.5,
    stagger: 0.3
})
t4.from('.p1', {
    y: '100',
    duration: 0.5,
    opacity:0
});
 
var accortion = document.getElementsByClassName('box');
for (var i = 0; i < accortion.length; i++) {
    accortion[i].onclick = function() {
            this.classList.toggle('active');
        }
    }
  
        var close=document.querySelector('.close');
        var model=document.querySelector('.auto-popup');
        close.addEventListener('click',()=>{
            model.classList.add('model-style');
        })
        window.addEventListener('load',()=>{
            setTimeout(()=>{
                model.classList.add('scale-in');
            },2000);
        })

 let dark=localStorage.getItem('darkmod')
 var mon=document.getElementById('moon');
 mon.addEventListener('click',()=>{
    // console.log('enabled');
    dark = localStorage.getItem('darkmod'); 

    if(document.body.classList.contains('darkmode'))
    {
        enablelight();
        
    }
    else{
        enabledark();
    }
 });

 function enabledark(){
    document.body.classList.add('darkmode');
    mon.src="sun.png";
    localStorage.setItem('darkmod','enabled');


 }
 function enablelight(){
    document.body.classList.remove('darkmode');
    mon.src='moon.jpg';
    localStorage.setItem('darkmod','disabled');
 }
 if (dark === 'enabled') {
    enabledark();}

    var header=document.querySelector('.header');
    window.addEventListener('scroll',()=>{
        header.classList.toggle('act',window.scrollY > 0);
        
    })
    let slides = document.querySelectorAll('.rating-slider');
    let index = 0;

    function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    function prev() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }
    setInterval(next, 7000);