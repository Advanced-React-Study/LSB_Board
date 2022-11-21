import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import PostWrapper from "./PostWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let boardContent = 0;
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  axios
    .get("http://13.124.149.255:3001/board")
    .then((response) => {
      boardContent = response.data.title;
      console.log(response.data);
    })
    .catch((e) => {
      console.log("No");
      console.log(e);
    });

  return <>{boardContent}</>;
};

export default Board;
