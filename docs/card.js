// on-click event
window.onload = function () {
  document.getElementById('detailsButton').addEventListener('click', function () {
    window.location.href = 'logined-transactions.html';
  });
};


// 'data.json' 파일에서 데이터 불러오기
fetch('card.json')
  .then(response => response.json()) // 응답을 JSON으로 파싱
  .then(data => {
    // 카드 컨테이너 선택
    const cardContainer = document.querySelector('.card-container');

    // 각 항목에 대해
    data.forEach(item => {
      // 새로운 div 요소 생성
      const card = document.createElement('div');
      // 생성된 div 요소에 'card-mainpage' 클래스 추가
      card.classList.add('card-mainpage');

      // 카드 내용 채우기
      card.innerHTML = `
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">${item.button}</a>
        </div>
      `;

      // '혜택 변경하기' 버튼에 클릭 이벤트 리스너 추가
      card.querySelector('.btn').addEventListener('click', function (event) {
        // 링크의 기본 동작 방지
        event.preventDefault();
        // 경고 메시지 표시
        alert('아직 구현되지 않은 기능입니다.');
      });

      // 생성된 카드를 카드 컨테이너에 추가
      cardContainer.appendChild(card);
    });
  })
  // 에러 처리
  .catch(error => console.error(error)); // 에러 발생 시 콘솔에 에러 메시지 출력