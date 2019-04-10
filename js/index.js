// Your code goes here

// 1) Clone of mouse hover over the navigation links
const logo = document.querySelectorAll('.nav-link');


logo.forEach(function (ele){
    ele.addEventListener('mouseover', function (event){
            event.target.style.color = 'red';
        });

    ele.addEventListener('mouseout', function (event){
        event.target.style.color = 'black';
    });
})

//END Clone of mouse hover over the navigation links


// 2) Begin Change background color on scroll
window.addEventListener('scroll', function(event){
        if( document.body.scrollTop > 300  || document.documentElement.scrollTop > 300){
                const body = document.querySelector('body');
                body.style.backgroundColor = 'rgba(3,76,34,0.2)';            
        }
    
});

// End Change background color on scroll


// 3) Begin Click to change Hero image

const heroImage = document.querySelector(".intro img");
heroImage.title = "Click Me For Fun!"

heroImage.addEventListener('click', element =>{
        element.target.src = "https://cdn.shopify.com/s/files/1/0901/1622/products/IMG_2466_1024x1024.JPG?v=1493297795"
       
});

//End Click to change Hero image


//4) Begin Animate Image on DBL click by adding Id to each img being clicked

let shakeImage = document.querySelectorAll('img');

shakeImage.forEach( img => { 
img.addEventListener('dblclick', event =>{
    img.id = 'shaky-img';
    });
});

// End Animate Image


// 5) Begin keydown on keyboard changes the paragraph text to cast text shadow
const para = document.querySelectorAll('p');

window.addEventListener('keydown', event => {
    para.forEach(p =>{ p.style.textShadow = " 8px 4px 9px black";})
});

//End






