window.onload=function(){
countrypop();
   getCoronaStats_IND();
   check();
    getCoronaAffectedChart();
   getCoronaRecoveredChart();
   getCoronaDeadChart();

}
let country_population=0;


function getCoronaAffectedChart(){
    fetch("https://api.rootnet.in/covid19-in/stats/history")//("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){
      return resp.json()})
    .then(function(data){
      


     
    var ctx = document.getElementById('myChart').getContext('2d');
var dates=[]
var datas=[]
//console.log(data.data[0].day);
  for(var i=0;i<data.data.length;i++){
      dates[i]=data.data[i].day;
      datas[i]=data.data[i].summary.total;
      }
     // console.log(data.data[0].summary.total);
var myChart = new Chart(ctx, {
  
    type: 'line',
    data: {
        labels: dates,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Black','White'],
        datasets: [{
            label: '# of affected',
            data: datas,//[10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(51, 153, 255,0.2)'
               
            ],
            borderColor: 
                'rgba(0, 102, 255,1)'
               ,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



    })
    .catch(function(){
      console.log("error!");
    })
    setTimeout(getCoronaAffectedChart,43200000);//updates every 12hrs
}




function getCoronaRecoveredChart(){
    fetch("https://api.rootnet.in/covid19-in/stats/history")//("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){
      return resp.json()})
    .then(function(data){
      


     
    var ctx = document.getElementById('myChart2').getContext('2d');
var dates=[]
var datas=[]
//console.log(data.data[0].day);
  for(var i=0;i<data.data.length;i++){
      dates[i]=data.data[i].day;
      datas[i]=data.data[i].summary.discharged;
      }
     // console.log(data.data[0].summary.dischared);
var myChart = new Chart(ctx, {
  
    type: 'line',
    data: {
        labels: dates,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Black','White'],
        datasets: [{
            label: '# of dischares',
            data: datas,//[10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(102, 255, 153,0.2)',
               
            ],
            borderColor: 
                'rgba(0, 255, 0,1)'
                
            ,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


   
    })
    .catch(function(){
      console.log("error!");
    })
    setTimeout(getCoronaRecoveredChart,43200000);//updates every 12hrs
}



function getCoronaDeadChart(){
    fetch("https://api.rootnet.in/covid19-in/stats/history")//("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){
      return resp.json()})
    .then(function(data){
      


     
    var ctx = document.getElementById('myChart3').getContext('2d');
var dates=[]
var datas=[]
//console.log(data.data[0].day);
  for(var i=0;i<data.data.length;i++){
      dates[i]=data.data[i].day;
      datas[i]=data.data[i].summary.deaths;
      }
     // console.log(data.data[0].summary.deaths);
var myChart = new Chart(ctx, {
  
    type: 'bar',
    data: {
        labels: dates,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Black','White'],
        datasets: [{
            label: '# of deaths',
            data: datas,//[10, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 255, 102,0.2)',
               
            ],
            borderColor: 
                'rgba(255, 255, 0, 1)'
               
            ,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



    })
    .catch(function(){
      console.log("error!");
    })
    setTimeout(getCoronaDeadChart,43200000);//updates every 12hrs
}







function check(){
	
	  fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")//("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){
    	return resp.json()})
    .then(function(data){
    	console.log(data);


let count=data.data.statewise;
 var i=document.getElementById("getstate").value;

 i=Number(i);
        

        
    document.getElementById("state").innerHTML=count[i].state;
    document.getElementById("act").innerHTML=count[i].active;
      document.getElementById("reco").innerHTML=count[i].recovered;
      document.getElementById("dd").innerHTML=count[i].deaths;

     document.getElementById("con").innerHTML=count[i].confirmed;

/*document.getElementById("state").innerHTML=count[36].state+" State";
    document.getElementById("act").innerHTML=count[36].active+" Active cases";
      document.getElementById("reco").innerHTML=count[36].recovered+" Recovered";
      document.getElementById("dd").innerHTML=count[36].deaths+" dead";

     document.getElementById("con").innerHTML=count[36].confirmed+" total corona confirmed cases";
*/
    })
    .catch(function(){
    	console.log("error!");
    })
    setTimeout(check,43200000);//updates every 12hrs
}




















function countrypop(){
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){return resp.json()})
     .then(function(data){
    	console.log(data);
    	country_population=data.location.country_population;
     document.getElementById('totalpop').innerHTML=country_population.toLocaleString('en');
    	
})
 .catch(function(){
    	console.log("error!");
    })
    setTimeout(countrypop,43200000);//updates every 12hrs
}

function getCoronaStats_IND(){
    fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")//("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
    .then(function(resp){
    	return resp.json()})
    .then(function(data){
    	console.log(data);



    //	let country_pop= countrypop();  //location.country_population;*/
    	let recovered=data.data.total.recovered;
    	let confirmed=data.data.total.confirmed;
    	let death=data.data.total.deaths;
    let country_attacked_by_corona=((Number(confirmed)+Number(death))/Number(country_population))*100;
       let death_percentage=(Number(death)/(Number(death)+Number(confirmed)))*100;

     //  document.getElementById('totalpop').innerHTML=country_pop.toLocaleString('en');
         document.getElementById('confirmed').innerHTML=confirmed.toLocaleString('en');
         document.getElementById('death').innerHTML=death.toLocaleString('en');
         document.getElementById('pac').innerHTML=country_attacked_by_corona.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:7})+"%";
         document.getElementById('pod').innerHTML=death_percentage.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2})+"%";
         document.getElementById('rec').innerHTML=recovered.toLocaleString('en');

       /*  let count=data.data.statewise;
         //count=count.length;
         //document.getElementById('count').innerHTML=count[0].state;
         var state;
          var act;
          var con;
          var ded;
          var i=0;
     for(i=0;i<count.length;i++){
        

        
    document.getElementById("state").innerHTML=count[i].state+" State";
    document.getElementById("act").innerHTML=count[i].active+" Active cases";
      document.getElementById("reco").innerHTML=count[i].recovered+" Recovered";
      document.getElementById("dd").innerHTML=count[i].deaths+" dead";

     document.getElementById("con").innerHTML=count[i].confirmed+" total corona confirmed cases";
}
/*document.getElementById("state").innerHTML=count[36].state+" State";
    document.getElementById("act").innerHTML=count[36].active+" Active cases";
      document.getElementById("reco").innerHTML=count[36].recovered+" Recovered";
      document.getElementById("dd").innerHTML=count[36].deaths+" dead";

     document.getElementById("con").innerHTML=count[36].confirmed+" total corona confirmed cases";
*/
    })
    .catch(function(){
    	console.log("error!");
    })
    setTimeout(getCoronaStats_IND,43200000);//updates every 12hrs
}
