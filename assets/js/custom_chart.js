//for daily
let saleStaticDaily_options = {
  series: [
    { name: "Sales", data: [30, 20, 30, 20, 40, 30, 50, 30, 60, 70, 65]},
  ],
  grid: {
    borderColor: '#e3ebf6',
    strokeDashArray: [3, 2],
    height: 0.5,
    position: 'back',
    xaxis: {
      strokeWidth: '0',
      lines: {
          show: false
      }
    }, 
    yaxis: {
      strokeWidth: '0',
      lines: {
          show: true
      },
    },    
  },
  markers: {
      colors: ['#6259ca']
  },
  colors: ["#6259ca"],
  chart: { height: '380', type: "area",
    foreColor: '#76839a',
  },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", color: '#76839a'},
  xaxis: { 
    type: 'datetime',
    categories: ["11/11/2021", "11/12/2021", "11/13/2021","11/14/2021", "11/15/2021", "11/16/2021","11/17/2021", "11/18/2021", "11/19/2021","11/20/2021", "11/21/2021"] ,
    labels: {
      show: true,
      offsetY: 0, 
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
      },
      formatter: function (value, timestamp) {
        return moment(new Date(timestamp)).format("MMM D");
      },
    }
  },
  yaxis: { 
    show: true,
    showAlways: true,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    labels: {
      show: true,
      offsetX: -15, 
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-yaxis-label',
      },
      formatter: function (value) {
        var val = Math.abs(value); 
        if (val >= 1000) {
          val = "$" + (val / 100) + "K";
          return val;
        } 
        else{
          return "$" + val;
        }
      }
    }
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Poppins, sans-serif',
      colors: ['#76839a'],
    },
  }
};

//daily
let saleStaticDaily_chart = new ApexCharts(document.querySelector("#saleStatic-chart_daily"), saleStaticDaily_options);
saleStaticDaily_chart.render();


//for monthly
let saleStaticMontly_options = {
  series: [
    { name: "Sales", data: [5000, 2000, 3000, 2000, 4000, 3000, 5000, 3000, 6000, 7000, 6500]},
  ],
  grid: {
    borderColor: '#e3ebf6',
    strokeDashArray: [3, 2],
    height: 0.5,
    position: 'back',
    xaxis: {
      strokeWidth: '0',
      lines: {
          show: false
      }
    }, 
    yaxis: {
      strokeWidth: '0',
      lines: {
          show: true
      },
    },    
  },
  markers: {
      colors: ['#6259ca']
  },
  colors: ["#6259ca"],
  chart: { height: '380', type: "area",
    foreColor: '#76839a',
  },
 
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", color: '#76839a'},
  xaxis: { 
    type: 'datetime',
    categories: ["01/01/2021", "02/01/2021", "03/01/2021","04/01/2021", "05/01/2021", "06/01/2021","07/01/2021", "08/01/2021", "09/01/2021","10/01/2021", "11/01/2021"] ,
    labels: {
      show: true,
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
      },
      formatter: function (value, timestamp) {
        return moment(new Date(timestamp)).format("MMM");
      },
    }
  },
  yaxis: { 
    show: true,
    showAlways: true,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    labels: {
      show: true,
      offsetX: -15, 
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-yaxis-label',
      },
      formatter: function (value) {
        var val = Math.abs(value); 
        if (val >= 1000) {
          val = "$" + (val / 100) + "K";
          return val;
        } 
        else{
          return "$" + val;
        }
      }
    }
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Poppins, sans-serif',
      colors: ['#76839a'],
    },
  }
};
//monthly
let saleStaticMonthly_chart = new ApexCharts(document.querySelector("#saleStatic-chart_monthly"), saleStaticMontly_options);
saleStaticMonthly_chart.render();
//for Yearly
let saleStaticYearly_options = {
  series: [
    { name: "Sales", data: [500000, 200000, 300000, 200000, 400000, 300000, 500000, 300000, 600000, 700000, 650000,800000, 850000, 950000, 850000]},
  ],
  grid: {
    borderColor: '#e3ebf6',
    strokeDashArray: [3, 2],
    height: 0.5,
    position: 'back',
    xaxis: {
      strokeWidth: '0',
      lines: {
          show: false
      }
    }, 
    yaxis: {
      strokeWidth: '0',
      lines: {
          show: true
      },
    },    
  },
  markers: {
      colors: ['#6259ca']
  },
  colors: ["#6259ca"],
  chart: { height: '380', type: "area",
    foreColor: '#76839a',
  },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", color: '#76839a'},
  xaxis: { 
    type: 'datetime',
    categories: ["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016", "2017","2018", "2019", "2020", "2021"] ,
    labels: {
      show: true,
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
      },
      datetimeFormatter: {
        year: 'yyyy',
      },
      formatter: function (value, timestamp) {
        return moment(new Date(timestamp)).format("yyyy");
      }, 
    }
  },
  yaxis: { 
    show: true,
    showAlways: true,
    showForNullSeries: true,
    seriesName: undefined,
    opposite: false,
    reversed: false,
    logarithmic: false,
    labels: {
      show: true,
      offsetX: -15, 
      style: {
          colors: ['#76839a'],
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-yaxis-label',
      },
      formatter: function (value) {
        var val = Math.abs(value); 
        if (val >= 1000) {
          val = "$" + (val / 1000) + "K";
          return val;
        } 
        else{
          return "$" + val;
        }
      }
    }
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px',
      fontFamily: 'Poppins, sans-serif',
      colors: ['#76839a'],
    },
  }
};
//yearly
let saleStaticYearly_chart = new ApexCharts(document.querySelector("#saleStatic-chart_yearly"), saleStaticYearly_options);
saleStaticYearly_chart.render();

//chart bar2
// var chartBar2 = function () {
  var options = {
    series: [
      { name: "Profit", data: [5000, 1800, 7000, 4000, 9000, 5000] },
      { name: "Expenses", data: [8000, 4000, 5500, 2000, 5000, 7000] },
    ],
    chart: { type: "bar", height: 365, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: false, columnWidth: "30", borderRadius: 5 } },
    states: { hover: { filter: "none" } },
    colors: ["#6259ca", "#fea246"],
    dataLabels: { enabled: false },
    markers: { shape: "circle" },
    legend: { 
      position: "bottom",
      horizontalAlign: "center", 
      show: true, 
      fontSize: "13px", 
      fontWeight: "600", 
      labels: { 
        colors: "#76839a" 
      }, 
      markers: {
        width: 15, height: 15, strokeWidth: 0, strokeColor: "transparent", fillColors: undefined, radius: 15
      } 
    },
    stroke: { show: true, width: 1, colors: ["transparent"] },
    grid: { borderColor: "#e3ebf6" ,
    strokeDashArray: [3, 2]},
    xaxis: {
      categories: ["May", "June", "July", "Aug", "Sep", "Oct"],
      labels: {
        style: { 
          colors: "#76839a", 
          fontSize: "13px", 
          fontFamily: "poppins", 
          fontWeight: 500, 
          cssClass: "apexcharts-xaxis-label" 
        }, 
      },
      crosshairs: { 
        show: false 
      },
    },
    yaxis: { 
      labels: { 
        offsetX: -15, 
        style: { colors: "#76839a", fontSize: "13px", fontFamily: "poppins", fontWeight: 500, cssClass: "apexcharts-xaxis-label" },
        formatter: function (value) {
          var val = Math.abs(value); 
          if (val >= 1000) {
            val = "$" + (val / 100) + "K";
            return val;
          } 
          else{
            return "$" + val;
          }
        }
      } 
    },
    fill: { opacity: 1, colors: ["#6259ca", "#fea246"] },
    tooltip: {
        y: {
            formatter: function (val) {
                return " $" + val + " ";
            },
        },
    },
    responsive: [{ breakpoint: 575, options: { chart: { height: 250 } } }],
  };
  var chartBar2 = new ApexCharts(document.querySelector("#chartBar2"), options);
  chartBar2.render();
// };

///donut chart
const ctx = document.getElementById('chartjs-3').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ['Delivered', 'Pending', 'Cancel'],
      datasets: [{
          data: [25456, 19000, 11000],
          backgroundColor: [
              '#6259ca',
              '#fea246',
              '#ee335e',
          ],
          borderColor: [
            '#6259ca',
            '#fea246',
            '#ee335e',
          ],
          borderWidth: 0
      }]
  },
  options: {
      hoverBackgroundColor: [
        '#6259ca',
        '#fea246',
        '#ee335e',
      ],
      scales: {
        x: {
          grid:{ 
            display:false,
            drawBorder: false,
            zeroLineWidth: 0,
          },
          ticks: {
            display: false
          }
        },
        y: {
          grid:{
            display:false,
            drawBorder: false,
            zeroLineWidth: 0,
          },
          ticks: {
            display: false
          },
        }
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#76839a'
          },
          position:"bottom",
          align: "center"
        },
        tooltip: {
          callbacks: {
            labelTextColor: function(context) {
              return '#76839a';
            },
          },
          backgroundColor: '#fff',
          borderColor: "#e3ebf6",
          borderWidth: "1"
        }
      }
  }
});

// var spark2 = {
//   chart: {
//     id: 'spark2',
//     group: 'sparks',
//     type: 'line',
//     width: 120,
//     height: 70,
//     sparkline: {
//       enabled: true
//     },
//     dropShadow: {
//       enabled: true,
//       top: 1,
//       left: 1,
//       blur: 2,
//       opacity: 0.2,
//     }
//   },
//   series: [{
//     data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
//   }],
//   stroke: {
//     curve: 'smooth'
//   },
//   grid: {
//     padding: {
//       top: 20,
//       bottom: 10,
//       left: 10
//     }
//   },
//   markers: {
//     size: 0
//   },
//   colors: ['#6259ca'],
//   tooltip: {
//     enabled: false,
//     x: {
//       show: false
//     },
//     y: {
//       title: {
//         formatter: function formatter(val) {
//           return '';
//         }
//       }
//     }
//   }
// }
// new ApexCharts(document.querySelector("#spark2"), spark2).render();

// var spark1 = {
//   chart: {
//     id: 'spark1',
//     group: 'sparks',
//     type: 'line',
//     width: 120,
//     height: 70,
//     sparkline: {
//       enabled: true
//     },
//     dropShadow: {
//       enabled: true,
//       top: 1,
//       left: 1,
//       blur: 2,
//       opacity: 0.2,
//     }
//   },
//   series: [{
//     data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
//   }],
//   stroke: {
//     curve: 'smooth'
//   },
//   markers: {
//     size: 0
//   },
//   grid: {
//     padding: {
//       top: 20,
//       bottom: 10,
//       left: 10
//     }
//   },
//   colors: ['#ee335e'],
//   tooltip: {
//     enabled: false,
//     x: {
//       show: false
//     },
//     y: {
//       title: {
//         formatter: function formatter(val) {
//           return '';
//         }
//       }
//     }
//   }
// }

// var spark3 = {
//   chart: {
//     id: 'spark3',
//     group: 'sparks',
//     type: 'line',
//     width: 120,
//     height: 70,
//     sparkline: {
//       enabled: true
//     },
//     dropShadow: {
//       enabled: true,
//       top: 1,
//       left: 1,
//       blur: 2,
//       opacity: 0.2,
//     }
//   },
//   series: [{
//     data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
//   }],
//   stroke: {
//     curve: 'smooth'
//   },
//   markers: {
//     size: 0
//   },
//   grid: {
//     padding: {
//       top: 20,
//       bottom: 10,
//       left: 10
//     }
//   },
//   colors: ['#fea246'],
//   xaxis: {
//     crosshairs: {
//       width: 1
//     },
//   },
//   tooltip: {
//     enabled: false,
//     x: {
//       show: false
//     },
//     y: {
//       title: {
//         formatter: function formatter(val) {
//           return '';
//         }
//       }
//     }
//   }
// }

// var spark4 = {
//   chart: {
//     id: 'spark4',
//     group: 'sparks',
//     type: 'line',
//     width: 120,
//     height: 70,
//     sparkline: {
//       enabled: true
//     },
//     dropShadow: {
//       enabled: true,
//       top: 1,
//       left: 1,
//       blur: 2,
//       opacity: 0.2,
//     }
//   },
//   series: [{
//     data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
//   }],
//   stroke: {
//     curve: 'smooth'
//   },
//   markers: {
//     size: 0
//   },
//   grid: {
//     padding: {
//       top: 20,
//       bottom: 10,
//       left: 10
//     }
//   },
//   colors: ['#00d97e'],
//   xaxis: {
//     crosshairs: {
//       show: false,
//       width: 1
//     },
//   },
//   tooltip: {
//     enabled: false,
//     x: {
//       show: false
//     },
//     y: {
//       title: {
//         formatter: function formatter(val) {
//           return '';
//         }
//       }
//     }
//   }
// }

// new ApexCharts(document.querySelector("#spark1"), spark1).render();
// new ApexCharts(document.querySelector("#spark3"), spark3).render();
// new ApexCharts(document.querySelector("#spark4"), spark4).render();