    
function fetched(contry,city){
 fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${contry}`
).then(function(respons){

if (respons.status>=200 & respons.status<300){
 return respons.json()}else{
 
 }
  
}).then(function(respons) {
 
 const trans = {
      'Fajr': 'الفجر',
      'Dhuhr': 'الظهر',
      'Asr': 'العصر',
      'Maghrib': 'المغرب',
      'Isha': 'العشاء',
      'Sunrise': 'الشروق'
    };  

  let timings = respons.data.timings;
    for (let [key, value] of Object.entries(timings)) { 
let keys= trans[key] || key;
 if (! keys.includes(key)) {
 
document.getElementById('timep').innerHTML+=`     
      <div class="time" >
        <h1>${keys}</h1>
         <h2>${value}</h2>
      </div> 
  `
} 
  
 }    
 
//if (citys.includes(cts))
 

document.getElementById('date').innerHTML+=`${respons.data.date.readable}`






 
  
}).catch(function(error) {
  console.error('Error:', error);
});    
} 
btn=document.getElementById('btn')

btn.onchange=function (){

document.getElementById('timep').innerHTML ='';
    document.getElementById('date').innerHTML = '';
    document.getElementById('city').innerHTML = '';
       
    if(this.value==="الجزائر"){
      {
      fetched('DZ','Algeriers') 
      document.getElementById("img").style.display="block";
      document.getElementById ('city').innerHTML=this.value
     } 
     
    }else if(this.value ==="عين وسارة"){
        {
            fetched('DZ','Ain oussera')
                document.getElementById("img").style.display="block";
document.getElementById('city').innerHTML=this.value              
         } 
         }
    else if(this.value ==="السعودية"){
        {
           fetched('SA','Riyadh') ;
           document.getElementById("img").style.display="block";
           document.getElementById ('city').innerHTML=this.value
         
    }}else{
        document.getElementById("img").style.display="none";
    }
} 