import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./Builder.css";

function QuestionTemplate() {
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([
    { key: 1, value: "Ответ 1", id: 0 },
    { key: 2, value: "Ответ 2", id: 1 },
    { key: 3, value: "Ответ 3", id: 2 },
  ]);

  function UpdateQuestionTextHandler(target) {
    setQuestionText(target.value);
  }

  function AddChoice(choice) {
    setChoices([...choices, choice]);
  }

  const handlerChanged = (e) => {
    console.log(e.target);
    // setChoices(choices.splice[parseInt(e.target.id), 1, {id:parseInt(e.target.id), key:parseInt(e.target.id)+1, value:'qqqq'}]);
    console.log(choices);
  };

  return (
    <div className="question-template">
      <div className="title">Вопрос</div>
      <div className="question-text">
        <Form.Label></Form.Label>
        <Form.Control
          as="textarea"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        {questionText}
      </div>
      {choices.map((choice) => {
        return (
          <div className="choice">
            <div>{choice.key}.</div>
            <Form.Control
              as="textarea"
              id={`${choice.id}`}
              // value={`${choice.value} `}
              onChange={handlerChanged}
            />
            {/* {choice.key}. {choice.value} */}
          </div>
        );
      })}
      {/* <div className="choices">
        <div className="title">
          <div className="title-icon"></div>
          <div className="title-text"></div>
        </div>
      </div> */}
      <Button
        variant="outline-dark"
        size="sm"
        className="buttonAddQuestion"
        onClick={() =>
          AddChoice({
            value: `Ответ ${choices[choices.length - 1].key + 1}`,
            key: choices[choices.length - 1].key + 1,
            id: choices[choices.length - 1].id + 1,
          })
        }
      >
        <AddCircleOutlineIcon />
        Добавить ответ
      </Button>
    </div>
  );
}

export default function Builder() {
  return (
    <div>
      <QuestionTemplate />
    </div>
  );
}
