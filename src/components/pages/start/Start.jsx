import React from "react";
import Button from "react-bootstrap/Button";
import Header from "../../header/Header";
import "./Start.css"
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <h2>Создайте свой тест</h2>
        <Link to="/builder">
        <Button variant="outline-dark" className='button-ent'>Создать тест</Button></Link>
      </div>
    </div>
  );
}
