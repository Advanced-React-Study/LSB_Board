import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import BoardWrapper from "./BoardWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickPost = () => {
    axios
      .post("http://13.124.149.255:3001/board", {
        title,
        content,
      })
      .then((response) => {
        console.log(response.data);
        alert("Posted successfully");
        navigate("../post");
      })
      .catch((e) => {
        console.log("No");
        console.log(e);
      });
  };

  return (
    // {/* <h1>Board</h1> */}
    <BoardWrapper>
      <Input
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder={"Title:"}
      />

      <Input
        type="text"
        value={content}
        onChange={handleContent}
        placeholder={"Content:"}
      />
      <Button onClick={onClickPost}>글 쓰기</Button>
    </BoardWrapper>
  );
};

export default Board;
