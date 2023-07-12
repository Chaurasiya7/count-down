const endDate ="2 July 2023 9:04 PM";
document.getElementById('endDate').innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock=()=>{
   const end= new Date(endDate);
   const now= new Date();
   const diff = (end-now)/1000;

   if(diff<0) return ;
   //dayssss
   const dayss = Math.floor(diff/3600/24);
   inputs[0].value =dayss;

   //hourss
   const hours = (Math.floor(diff/3600) % 24);
   inputs[1].value =hours;

   //mins
   const mins = (Math.floor(diff/60) % 60);
   inputs[2].value =mins;

   //sec
   const sec = (Math.floor(diff) % 60);
   inputs[3].value =sec;
   
   
}
clock();

setInterval(
   () =>{
      clock();
   },1000
)