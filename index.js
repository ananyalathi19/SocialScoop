var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Facebook', 'Snapchat', 'WhatsApp', 'Instagram', 'Twitter', 'LinkdeIn', 'Pintrest', 'Tumblr', 'Youtube', 'Reddit'],
        datasets: [{
            label: ['monthly active users'],
            data: [2.4,0.301, 1.5, 1, 0.33, 0.303,0.291,0.452,1.9,0.33],
            backgroundColor: [
            '#FFA07A',
             	'#FA8072',
 	            '#E9967A',
              '#F08080',
            	'#CD5C5C',
             	'#DC143C',
              '#FF0000',
            	'#B22222',
              '#8B0000',
              '#FF4500'
            ],
            borderColor: [
              '#FFA07A',
               	'#FA8072',
   	            '#E9967A',
                '#F08080',
              	'#CD5C5C',
               	'#DC143C',
                '#FF0000',
              	'#B22222',
                '#8B0000',
                '#FF4500'
            ],
            borderWidth: 1
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
var ctx2 = document.getElementById('my1Chart');
var my1Chart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Facebook','Youtube','WhatsApp','Instagram','Twitter','Reddit','LinkdeIn','Snapchat','Pintrest','Tumblr'],
        datasets: [{
            label: ['daily active users'],
            data: [1.6,0.149,1,0.6,0.134,1,0.53,0.109,1,0.371],
            backgroundColor: [
                '#c62a88',
                '#790c5a',
                '#fceef5',
                '#ffd5cd',
                '#f3bad6',
                '#fdcfdf',
                '#fca3cc',
                '#ea86b6',
                '#e05297',
                '#cc0e74'
            ],
            borderColor: [
              '#fceef5',
              '#fae0df',
              '#ffdada',
              '#ffd5cd',
              '#f3bad6',
              '#fdcfdf',
              '#fca3cc',
              '#ea86b6',
              '#e05297',
              '#cc0e74'
            ],
            borderWidth: 1
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

var ctx4 = document.getElementById('my3Chart');
var my3Chart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Facebook','Youtube','WhatsApp','Instagram','Twitter','Reddit','LinkdeIn','Snapchat','Pintrest','Tumblr'],
        datasets: [{
            label: ['daily time spent'],
            data: [58, 40,28,53,10,15,19,49,14,21],
            backgroundColor: [
              '#ADD8E6 ',
              '#B0E0E6',
              '#87CEFA',
            	'#87CEEB',
               '#00BFFF',
               '#6495ED',
                '	#1E90FF',
                	'	#0000FF	' ,
                  '	#0000CD	' ,
                '#0d63a5',
                  '#001f3f'
            ],
            borderColor: [
              '#ADD8E6 ',
              '#B0E0E6',
              '#87CEFA',
              '#87CEEB',
               '#00BFFF',
               '#6495ED',
                '	#1E90FF',
                  '	#0000FF	' ,
                  '	#0000CD	' ,
                '#0d63a5',
                  '#001f3f'
              ],
            borderWidth: 1
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
