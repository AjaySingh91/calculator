import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "",
  });

  function handelNumber(value) {
    let newValue = value;

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false ,preOp: calc.preOp });
  }

  function handelOperator(value) {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  }

  function doCalculation() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
        break;
    }
    return total;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "",
    });
  }

  // function handelEqual() {
  //   let total = doCalculation();

  //   setCalc({
  //     current: total.toString(),
  //     total: total.toString(),
  //     isInitial: true,
  //     preOp: "=",
  //   });
  // }

  function rendercalc() {
    return calc.current;
  }

  return (
    <div className="App mx-10 my-10 bg-black w-fit rounded-sm">
      <div className="calc bg-white h-14 border-black border-x-2 border-y-2 rounded-lg  pt-1 text-4xl">
        {rendercalc()}
      </div>
      <div className="buttons border-black w-48">
        <CalcButtons value="9" onClick={handelNumber} />
        <CalcButtons value="8" onClick={handelNumber} />
        <CalcButtons value="7" onClick={handelNumber} />
        <CalcButtons
          className="bg-slate-50"
          value="/"
          onClick={handelOperator}
        />
        <CalcButtons value="6" onClick={handelNumber} />
        <CalcButtons value="5" onClick={handelNumber} />
        <CalcButtons value="4" onClick={handelNumber} />
        <CalcButtons
          className="bg-slate-50"
          value="*"
          onClick={handelOperator}
        />
        <CalcButtons value="3" onClick={handelNumber} />
        <CalcButtons value="2" onClick={handelNumber} />
        <CalcButtons value="1" onClick={handelNumber} />
        <CalcButtons
          className="bg-slate-50"
          value="-"
          onClick={handelOperator}
        />
        <CalcButtons value="C" onClick={handleClear} />
        <CalcButtons value="0" onClick={handelNumber} />
        <CalcButtons value="=" onClick={handelOperator} />
        <CalcButtons
          className="bg-slate-50"
          value="+"
          onClick={handelOperator}
        />
      </div>
    </div>
  );
}

function CalcButtons(props) {
  return (
    <button
      onClick={() => props.onClick(props.value)}
      className=" border-gray-500 text-lg border-x-2 border-y-2 w-12 h-12 bg-slate-400 rounded-lg hover:bg-slate-200"
    >
      {props.value}
    </button>
  );
}
export default App;
