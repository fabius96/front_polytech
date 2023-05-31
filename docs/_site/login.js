function sorryAlert() {
  alert("아직 구현되지 않은 기능입니다.")
}

// form 관련 로직을 처리하기 위한 변수 선언
var form = document.querySelector('form');

// fetch 함수를 사용해 'users.json' 파일을 비동기적으로 로드
fetch('users.json')
  // fetch 함수는 Promise를 반환하며, 이 Promise는 Response 객체를 인자로 받는 then 메서드를 가진다.
  // Response.json() 메서드는 응답 본문을 JSON으로 변환하는 Promise를 반환한다.
  .then(response => response.json())
  // 응답 본문이 JSON으로 변환되면, users라는 이름의 변수를 가진 콜백 함수를 실행한다.
  .then(users => {
    // form 요소에 'submit' 이벤트 리스너를 추가한다.
    // 이 리스너는 form이 제출될 때 실행되는 함수를 정의한다.
    form.addEventListener('submit', function (event) {
      // 이 함수는 먼저 Event.preventDefault() 메서드를 호출하여 브라우저의 기본 동작을 취소한다.
      // 이 경우에서는 form 제출로 인한 브라우저의 새로고침이 발생되지 않도록 한다.(일반적으로는 form 제출 시 새로고침됨)
      event.preventDefault();

      // document.getElementById() 함수를 사용하여 'username'과 'password' ID를 가진 요소의 값을 가져옴.
      var inputId = document.getElementById('username').value;
      var inputPassword = document.getElementById('password').value;

      // Array.prototype.some() 메서드를 사용하여 users 배열에서 적어도 한 요소가 주어진 함수를 통과하는지 테스트한다.
      // 이 경우, 함수는 user.id가 inputId와 같고, user.password가 inputPassword와 같은지 확인
      var userExists = users.some(user => user.id === inputId && user.password === inputPassword);

      // 사용자가 존재하면 로그인 성공 메시지를 표시하고 index.html로 이동
      if (userExists) {
        window.location.href = 'logined-index.html'; // 로그인 성공시 logined-index.html로 이동
      } else {
        // 그렇지 않으면 로그인 실패 메시지를 표시하고 아이디와 비밀번호 필드를 초기화
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
        document.getElementById('username').value = ''; // 로그인 실패시 아이디 입력 필드 초기화
        document.getElementById('password').value = ''; // 로그인 실패시 비밀번호 입력 필드 초기화
      }
    });
  });