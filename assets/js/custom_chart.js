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
  chart: { height: '300', type: "area",
    foreColor: '#76839a',
  },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", color: '#76839a'},
  xaxis: { 
    type: 'datetime',
    categories: ["11/11/2021", "11/12/2021", "11/13/2021","11/14/2021", "11/15/2021", "11/16/2021","11/17/2021", "11/18/2021", "11/19/2021","11/20/2021", "11/21/2021"] ,
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
  chart: { height: '300', type: "area",
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
  chart: { height: '300', type: "area",
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
//yearly
let saleStaticYearly_chart = new ApexCharts(document.querySelector("#saleStatic-chart_yearly"), saleStaticYearly_options);
saleStaticYearly_chart.render();





