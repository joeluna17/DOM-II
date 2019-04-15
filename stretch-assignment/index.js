

const blocks =  document.querySelector('.blocks').children
console.log(blocks);

let index = 1;

for(i=0; i<blocks.length; i++){ 

    blocks[i].addEventListener('click', event =>{ 

    if(event.target.style.top === "53px"){
        event.target.style.top =  "160px";
        event.target.style.zIndex = index++;
       
    }

else{
    event.target.style.position = 'absolute';
    event.target.style.top = '53px'; 
    event.target.style.zIndex = index++
    
            }
    })


}





