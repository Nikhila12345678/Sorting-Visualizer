const barscontainer=document.getElementById("bars");
const generatebtn=document.getElementById("btn");
function disablebuttons(){
    document.querySelectorAll("button").forEach(btn=>btn.disabled=true);
    document.getElementById("sizeslider").disabled=true;
    document.body.style.cursor = "wait";
    document.getElementById("status").textContent="Sorting...";
    document.getElementById("speed").disabled=true;
   }
   function enablebuttons(){
 document.querySelectorAll("button").forEach(btn=>btn.disabled=false);
 document.getElementById("sizeslider").disabled=false;
 document.body.style.cursor = "default";
 document.getElementById("status").textContent="";
 document.getElementById("speed").disabled=false;
}
const sizeslider=document.getElementById("sizeslider");
const sizevalue=document.getElementById("sizevalue");
sizeslider.addEventListener("input",()=>{
    sizevalue.textContent=sizeslider.value;
})
const speed=document.getElementById("speed");
const sppedval=document.getElementById("speedval");
speed.addEventListener("input",()=>{
    speedval.textContent=speed.value;
})

const toggle=document.getElementById("change");
toggle.addEventListener("change",()=>{
    document.body.classList.toggle("dark-mode");
});



function generateArray(){
    num=document.getElementById("sizeslider").value;
    barscontainer.innerHTML = '';
    for(let i=0;i<num;i++){
        const value=Math.floor(Math.random()*291)+10;
        const bar=document.createElement('div');
        bar.style.height=`${value}px`;
        bar.style.width="22px";
        bar.style.margin="0 2px";
        bar.style.backgroundColor="yellow";

        barscontainer.appendChild(bar);
    }
}
window.onload=()=>{generateArray();};
generatebtn.addEventListener('click',()=>{generateArray();});
const bars=barscontainer.children;
async function bubblesort(){
    disablebuttons();
    for(let i=0;i<bars.length-1;i++){
        for(let j=0;j<bars.length-i-1;j++){
            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";
            const height1=parseInt(bars[j].style.height);
            const height2=parseInt(bars[j+1].style.height);
            await new Promise(resolve => setTimeout(resolve,speed.value )); 
            if(height1>height2){
                let t=bars[j].style.height;
                bars[j].style.height=bars[j+1].style.height;
                bars[j+1].style.height=t;
            }
            bars[j].style.backgroundColor="yellow";
            bars[j+1].style.backgroundColor="yellow";
        }
        bars[bars.length-i-1].style.backgroundColor="green";
    }
    bars[0].style.backgroundColor="green";
    enablebuttons();
}
document.getElementById("bubblesort").addEventListener("click",bubblesort);

async function selectionsort(){
    disablebuttons();
   for(let i=0;i<bars.length-1;i++){
    let min=i;
    bars[min].style.backgroundColor="blue";
    for(let j=i+1;j<bars.length;j++){
        bars[j].style.backgroundColor="red";

       const height1= parseInt(bars[min].style.height);
       const height2=parseInt(bars[j].style.height);
       await new Promise(resolve => setTimeout(resolve, 101-speed.value)); 
        if(height1>height2){
            min=j;
        }
        else{
            bars[j].style.backgroundColor="yellow";
        }
    }
        bars[min].style.backgroundColor="green";
    let t=bars[i].style.height;
    bars[i].style.height=bars[min].style.height;
    bars[min].style.height=t;
    bars[i].style.backgroundColor="green";
   }
   bars[bars.length-1].style.backgroundColor="green";
   enablebuttons();
}
document.getElementById("selectionsort").addEventListener("click",selectionsort);



