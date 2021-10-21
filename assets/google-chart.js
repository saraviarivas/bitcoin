/* INIT GOOGLE CHART : BEGIN  */

var chart;
var dataArray$ = [
  ['Última hora', 'Rate'],
];

google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(dataArray$);

  var options = {
    curveType: 'function',
    legend: { position: 'bottom' },
    width :800,
    height:320
  };
  chart = new google.charts.Line(document.getElementById('chart_div'));
  chart.draw(data, google.charts.Line.convertOptions(options));
}

/* INIT GOOGLE CHART : END */

/* UPDATING CHART FRON ANGULAR */

function updateChart(cont, rate, rateString) {
  document.getElementById('rate').innerHTML = rateString;
  var coor$ = [ cont.toString(), rate ]; // Example: ["1",  41.6] / String and float
  if ( dataArray$.length > 40) {
    dataArray$.splice(1, 1);
  }
  dataArray$.push(coor$);
  var newData = google.visualization.arrayToDataTable(dataArray$);
  var options = {
    curveType: 'function',
    legend: { position: 'bottom' },
    vAxis: { format: 'decimal' },
    width:800,
    height:320
  };
  chart.draw(newData, options);
}

/* UPDATING CHART FRON ANGULAR */
