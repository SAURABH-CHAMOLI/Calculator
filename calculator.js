let btn=document.querySelectorAll('.but');
let display=document.querySelector('.div1');

let str="";

for(b of btn) {
    b.addEventListener('click',(e)=>{
        if(e.target.innerText=="AC") {
            str="";
            display.innerText=str;
            console.log('chla')
        }
        else if(e.target.innerText=="DE") {
            console.log(typeof(str))
            str=str.substring(0, str.length-1);
            console.log(str)
            display.innerText=str;
        }
        else if(e.target.innerText=="=") {
            console.log('equal')
            str=(eval(display.innerText))
            console.log(str)
            display.innerText=str
            str=str.toString();
        }
        else {
        console.log(e.target.innerText)
        str+=e.target.innerText;
        display.innerText=str;
        console.log(str)
        }
        
})
}