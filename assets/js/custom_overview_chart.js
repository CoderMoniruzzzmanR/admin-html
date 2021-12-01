var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

var spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    height: 120,
    sparkline: {
      enabled: true
    },
    zoom: {
        enabled: false
    },
  },
  
  dataLabels :{
    enabled: false
},
  stroke: {
    curve: 'smooth'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: "Follower", data: sparklineData.slice(),
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  yaxis: {
    max: 100
  },
  xaxis: {
    type: 'datetime',
    
  },
  colors: ['#2366b8'],
}
var chart = new ApexCharts(document.querySelector("#spark1"), spark1);
chart.render();
var spark2 = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      height: 120,
      sparkline: {
        enabled: true
      },
      zoom: {
          enabled: false
      },
    },
    
    dataLabels :{
      enabled: false
  },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: "Follower", data: sparklineData.slice(),
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    yaxis: {
      max: 100
    },
    xaxis: {
      type: 'datetime',
      
    },
    colors: ['#2366b8'],
  }

var chart = new ApexCharts(document.querySelector("#spark2"), spark2);
chart.render();