import React from "react";
import { useState } from "react";

const SingUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (event) => {
    setEmail(event.target.value);
  };
  const checkPassWord = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>ユーザーテスト</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            onChange={(event) => checkEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            onChange={(event) => checkPassWord(event)}
          />
        </div>
        <button>登録</button>
      </form>
    </>
  );
};

export default SingUp;
