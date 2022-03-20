const { request } = require("express");
const express = require("express");

const app = express();

const members = require("./members");

app.get("/api/members", (req, res) => {
  //? send 메소드는 인자로 전달된 값을 json문자열로 변환하여 response의 body에 담아서 반환하게 된다.
  // res.send(members);
  //! query : 서버에 있는 데이터를 조회할 때, 기준을 정하기 위해 사용
  const { team } = req.query;
  if (team) {
    const teamMembers = members.filter((member) => member.team === team);
    res.send(teamMembers);
  } else {
    res.send(members);
  }
});

app.get("/api/members/:id", (req, res) => {
  //! Route Parameter
  const { id } = req.params;
  const member = members.find((meber) => meber.id === Number(id));
  if (member) {
    // meber를 json 문자열로 반환시키는 send 메소드
    res.send(member);
  } else {
    //* api server에서는 문장 자체를 주는 것보다, json 객체 안에 넣어서 전달하는 것이 좋다.
    //* json 객체 안에 문장을 넣어줌으로써, 이후에 response에 추가적인 정보를 넣어줘야 할 때, 확장하기가 쉽기 때문이다.
    res.status(404).send({ massage: "There is no such member" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening...");
});
