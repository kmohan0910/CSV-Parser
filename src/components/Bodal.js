import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Bodal.css";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import Compo from "./compo";

const Bodal = () => {
  const handleShow = () => setShow(!show);
  const [columndata, handladd] = useState(["Email", "FirstName", "LastName"]);
  const [show, setShow] = useState(false);

  useEffect(() => {});

  return (
    <div>
      <Button variant="primary" className="hi" onClick={handleShow}>
        {" "}
        Upload CSV{" "}
      </Button>
      {show ? <Compo columndata1={columndata} /> : ""}
    </div>
  );
};

export default Bodal;
