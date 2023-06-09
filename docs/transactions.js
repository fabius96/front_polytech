// transactions.json 파일에서 데이터 불러오기
fetch('transactions.json')
  // 데이터를 JSON으로 파싱
  .then(response => response.json())
  .then(transactions => {
    // 날짜에 따라 오름차순으로 정렬
    transactions.sort((a, b) => a.date.localeCompare(b.date));

    // 초기 잔액 설정
    let balance = 0;
    // 테이블 본문 선택
    let tableBody = document.querySelector('#transactionTable tbody');

    // 각 거래에 대해
    transactions.forEach(transaction => {
      // 입금액을 잔액에 더함
      balance += transaction.deposit;
      // 출금액을 잔액에서 뺌
      balance -= transaction.withdrawal;

      // 새로운 행 생성
      let row = document.createElement('tr');

      // 입금액과 출금액에 기호 추가
      let deposit = transaction.deposit !== 0 ? `<span class="deposit">+${transaction.deposit.toLocaleString()}</span>` : '0';
      let withdrawal = transaction.withdrawal !== 0 ? `<span class="withdrawal">-${transaction.withdrawal.toLocaleString()}</span>` : '0';

      // 행에 거래 정보 입력
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.category}</td>
        <td>${deposit}</td>
        <td>${withdrawal}</td>
        <td>${balance.toLocaleString()}</td>
      `;

      // 생성된 행을 테이블 본문에 추가
      tableBody.appendChild(row);
    });

    // 테이블 본문의 모든 행을 내림차순으로 정렬
    Array.from(tableBody.getElementsByTagName("TR")).reverse().forEach(tr => tableBody.appendChild(tr));
  })// 에러 처리: 에러 발생 시 콘솔에 에러 메시지 출력
  .catch(error => console.error(error)); 