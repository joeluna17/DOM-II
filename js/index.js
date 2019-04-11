// Your code goes here

// 1) Clone of mouse hover over the navigation links
const logo = document.querySelectorAll('.nav-link');


logo.forEach(function (ele){

    ele.addEventListener('click', element =>{    // We prevent the links from refreshing the page here with "preventDeafualt()"
            element.preventDefault();
    });

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
    para.forEach(p =>{ p.style.textShadow = "8px 4px 9px grey" });
});
//End

// 6) Begin alert when window resizes

const quote = ["Hello I hope you like the new size", "Here we go again", "Hope that does it!", "I guess it's not one size fits all."];
window.addEventListener('resize', event =>{
    let randNum = Math.round(Math.random( (quote.length +1) - 1));
        alert(quote[randNum]);
})

// End


//7) Begin on mouse down add border and radius to hero img

const buttonClick = document.querySelector('.btn');
console.log(buttonClick)

buttonClick.addEventListener('mousedown', event => {
        let img = document.querySelector('img');
        img.classList.add('black-border');
});

//End


//8) Begin Copy element and change elements color

window.addEventListener('copy', event=> {
    event.target.style.color = 'green';
});

//End

//9) Begin Cuts the selected text and then displats in alert box

window.addEventListener('cut', element =>{
    const text = element.target.textContent;
    alert(text)
})

//end


//10 Begin 

let status = document.createElement('span');
document.querySelector('body').append(status);
status.classList.add('status');

window.addEventListener('online', event =>{
        status.style.backgroundColor = 'green';
        status.textContent = "O"
});

window.addEventListener('offline', event =>{
        status.style.backgroundColor = "red";
        status.textContent = "X"
})

//end


// Begin Propagation Stop.
const span = document.querySelector('.nestedEle');
span.addEventListener('click', element =>{
    element.target.style.backgroundColor = 'red'
    element.stopPropagation();  // this is where we stop this element from having a blue border that we would get because the parent element properties are "inherited" because of the node and then calling the addEventListener() method. 
})

let nestedDiv = document.querySelector(".content-destination")
nestedDiv.addEventListener('click', event=>{
    event.target.style.border = "2px solid blue";
    
})