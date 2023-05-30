// 'balanceTitle' 아이디를 가진 HTML 요소를 가져와 'balanceElement' 변수에 저장합니다.
let balanceElement = document.getElementById('balanceTitle');

// 'transactions.json' 파일을 가져오는 HTTP 요청을 보냅니다.
// 'fetch' 함수는 프로미스를 반환합니다. 프로미스는 비동기 연산을 나타내는 객체입니다.
fetch('transactions.json')
  // 프로미스의 'then' 메소드를 호출하면, 프로미스가 성공적으로 완료된 경우에 실행될 콜백 함수를 지정할 수 있습니다.
  // 이 콜백 함수는 HTTP 응답 객체를 매개변수로 받습니다.
  .then(response => 
    // HTTP 응답 객체의 'json' 메소드를 호출하면, 응답 본문을 JSON 형식으로 파싱하는 또 다른 프로미스를 얻을 수 있습니다.
    response.json())
  .then(data => {
    // 거래 내역 배열을 반복하면서 잔액을 계산합니다.
    let balance = 0;
    for (let transaction of data) {
      balance += transaction.deposit;   // 입금액을 잔액에 더합니다.
      balance -= transaction.withdrawal; // 출금액을 잔액에서 뺍니다.
    }

    // 계산된 잔액을 화면에 표시합니다.
    // 'toLocaleString' 메소드를 사용하여 천 단위마다 쉼표를 추가한 형식으로 잔액을 표시합니다.
    balanceElement.textContent = `계좌잔고 : ${balance.toLocaleString()}원`;
  })
  // 'catch' 메소드를 호출하면, 프로미스가 실패한 경우에 실행될 콜백 함수를 지정할 수 있습니다.
  // 이 콜백 함수는 오류 객체를 매개변수로 받습니다.
  .catch(error => {
    // 오류 메시지를 콘솔에 출력합니다.
    console.error('Error:', error);
  });
