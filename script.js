let question= document.getElementById("question");
let optionA=document.getElementById("optionA");
let optionB=document.getElementById("optionB");
let optionC=document.getElementById("optionC");
let optionD=document.getElementById("optionD");
let container =document.querySelector(".container");
let timeh = document.getElementById("timeh");
let Ans;
let time=30;
let interval;
let resulth2=document.getElementById("result-h2");
var i=0;
let opt=[optionA,optionB,optionC,optionD];
let data;
let prize = 0;


fetch('script.json')
.then(data=>{
   return data.json();
})
.then(data=>{
      addevent(opt);
        interval=setInterval(()=>{
         time--;
         getquestion(data,i);
         },1000);

     
});


function getquestion(data,i){
  question.innerText= data[i].q;
  optionA.innerText=data[i].optionA;
  optionB.innerText=data[i].optionB;
  optionC.innerText=data[i].optionC;
  optionD.innerText=data[i].optionD;
  Ans=data[i].Ans;
  if(time<0){
       clearInterval(interval);
       container.style.display="none";
       resulth2.innerText="Bye! Bye!  Your prize Amount is INR "+prize;
      
      }
  else{
        timeh.innerText=time;
      }
  }

function addevent(a){
   a.forEach(element => {
      element.addEventListener('click',(e)=>{
         if(e.target.innerText==Ans && i<5){
            prize=prize+1000;
            i++;
            time=30;
            getquestion(data,i);
         }
         else if(e.target.innerText==Ans && i==5){
            container.style.display="none";
            resulth2.innerText="Congratulations You are the Winner! Your prize Amount is INR 6000";
            
           
         }
         else if(e.target.innerText!=Ans){
            container.style.display="none";
            resulth2.innerText="bahut badiya khele aap  Your prize Amount is INR "+prize;
          
            
         }
      });
      
   });
}
  

       
     
     

