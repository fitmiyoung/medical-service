// bar chart: Cell Microscope-1
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          [' ', 'Original img', 'Stiched img'],
          [' ', 63.5, 66.5]
        ]);

        var options = {
          chart: {
            'title': 'Area'
          },
          height: 330
        };

        var chart = new google.charts.Bar(document.getElementById('chart-bar1'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
// bar chart: Cell Microscope-2
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          [' ', 'Original img', 'Stiched img '],
          [' ', 0.2, 0.6]
        ]);

        var options = {
          chart: {
            'title': 'Max Intensity'
          },
          height: 330
        };

        var chart = new google.charts.Bar(document.getElementById('chart-bar2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
// bar chart: Cell Microscope-3
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          [' ', 'Original img', 'Stiched img'],
          [' ', 0.015, 0.018]
        ]);

        var options = {
          chart: {
            'title': 'Mean Intensity'
          },
          height: 330
        };

        var chart = new google.charts.Bar(document.getElementById('chart-bar3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }      
// bar chart: Cell Microscope-4
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart4);

      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          [' ', 'Original img', 'Stiched img'],
          [' ', 0.95, 1]
        ]);

        var options = {
          chart: {
            'title': 'Roundness'
          },
          height: 330
        };

        var chart = new google.charts.Bar(document.getElementById('chart-bar4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      } 
// bar chart: Cell Microscope-5
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart5);

      function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          [' ', 'Original img', 'Stiched img'],
          [' ', 1.5, 1.55]
        ]);

        var options = {
          chart: {
            'title': 'Ratio of diameter'
          },
          height: 330
        };

        var chart = new google.charts.Bar(document.getElementById('chart-bar5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }       

// correlation chart: 무형광 영상
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'coefficient of determination');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options = {
        hAxis: {
          title: 'Analysis of coefficient of determination '
        },
        vAxis: {
          title: ''
        },
        height: 500
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart-correlation'));

      chart.draw(data, options);
    }


 //line chart = mr chart: MR 영상,
 google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'a');
      data.addColumn('number', 'b');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Survival prediction plot'
        },
        vAxis: {
          title: 'MR'
        },
        series: {
          1: {curveType: 'function'}
        },
        height: 350,
        title: 'Prediction chart' 
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart-mr'));
      chart.draw(data, options);
    }
// height: 400 챠트 높이조절, responsive가 안됨


$(window).resize(function(){
  drawBasic();
  drawChart();
  drawCurveTypes();
});         