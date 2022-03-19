const express = require("express");

const app = express();

// 1. 현재 디렉토리를 파키지로 만들기 - npm init
// 2. express 패키지 설치 : npm install express
// 3. express 패키지는 함수 하나를 외부에 공개하는데, 함수를 실행해준다.
// 4. express 로 만든 객체에는 관습적으로 app이라는 이름(app 객체)을 붙인다.

// 5. 외부 클라이언트가 보낸 request의 url path 부분이 '/hello'라면,
// 6. 두번째 인자로 들어온 콜백함수가 실행된다.
// 7. 이때, 특정 path에 대응하는 콜백을 'route handler'라고 한다.
// 8. route는 서버가 각 request의 path를 보고 알맞은 작업을 수행하는 것을 의미한다.
//    그리고 handler는 이 작업을 담당하는 존재를 의미한다.
// 9. 아래 route handler의 첫번째 매개변수에 전달되는 것은
//    request객체로, 이 객체를 통해 클라이언트가 보낸 request를 다룰 수 있고,
//    두번째 매개변수로 전달되는 것은 response 객체로써,
//    이 객체를 통해서 적절한 response를 보낼 수 있다.
app.get("/hello", (req, res) => {
  // res객체의 send라는 메소드를 사용해서 response body에 '<h1>Hello Express</h1>'를 담아서 응답을 주겠다.
  res.send("<h1>Hello Express</h1>");
  // '/hello'라는 part에 대한 request가 매번 올때마다,
  // '<h1>Hello Express</h1>'를 response body에 담아서 응답하게 될 것이다.
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
