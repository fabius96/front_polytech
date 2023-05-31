// 차트가 이미 존재할 경우, 차트 파괴
if (window.myChart) {
  window.myChart.destroy();
}

// 캔버스로부터 차트 Context 획득
var ctx = document.getElementById('donutChart').getContext('2d');

// AJAX 요청을 이용해 JSON 파일 읽기
var request = new XMLHttpRequest();
request.open("GET", "./data.json", true);
request.responseType = "json";
request.onload = function () {
  var jsonData = request.response;

  // 색상 배열을 직접 지정
  var backgroundColors = ["#00857E", "#00B4A6", "#4DD0C8", "#F2A477", "#FF1A5C", "#FF4F80"];

  // 읽어들인 JSON 데이터를 바탕으로 새로운 Chart 객체 생성
  window.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: jsonData.labels,
      datasets: [{
        label: '5월 지출내역',
        data: jsonData.data,
        backgroundColor: backgroundColors,
        borderColor: 'white',
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false
    }
  });
};
request.send();
