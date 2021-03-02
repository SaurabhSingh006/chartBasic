import Chart from 'chart.js';

let ctx = document.querySelector('#mycanvas').getContext('2d');

let DATA = [13,15,5,10,9,10];

const inpt = document.querySelector('.selection');
 
inpt.addEventListener('change', function() {
  console.log(inpt.value);
  let myChart = new Chart(ctx, {
    type: inpt.value, 
    data: {
      labels: ["Python", "Javascript", "PHP", "Java", "C#", "C++"],
      datasets: [
        {
          data: DATA, 
          label: "Programming Languages",
          backgroundColor: ["#DBA091", "#7C787C", "#81849E", "#88AE9C", "#B4C49E", "#DEE3BA"]
        },
      ] 
    },
    options: {
      responsive: false,
      title: { 
        display: true,
        text: "Top programming languages",
        fontSize: "20"  
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
    }
  });  
});



