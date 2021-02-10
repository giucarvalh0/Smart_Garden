
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Hora');
  data.addColumn('number', 'Umidade');
  data.addRows([
  [12, 30],  [13, 40],  [14, 50],  [15, 35],  [16, 50],  [17, 20],  [18, 25],  [19, 60]
  ]);

  var options = {
    hAxis: {
      title: 'Tempo (Hrs)'
    },
    vAxis: {
      title: 'Umidade (%)'
    },
    colors:['#338326','#338326']
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}