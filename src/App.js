import React, { useState } from "react";
import "./App.css";
import {
  correctResult,
  printObject,
  initialArray,
  getCorrectingObject
} from "./utils";

let correctResultPrint = null;
let initialArrayPrint = null;

export default function App() {

 const [status, setStatus] = useState(false);

 const [loading, setLoading] = useState(false);

 const [result, setResult] = useState(null);

  const handler = () => {
    if (!status) {
      setLoading(true);
      const myRes = printObject(getCorrectingObject(initialArray));

      correctResultPrint = printObject(correctResult);
      initialArrayPrint = printObject(initialArray);
      
        setResult(myRes);
        setStatus(true);
        setLoading(false);
      
    } else if (status) {
      setStatus(false);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Преобразуйте массив в объект, отсортированный по тэгам</h1>
      <button className="but_getVal" onClick={handler}
       disabled={loading}>
        {!status && <span>Выполнить</span>}
        {status && <span>Скрыть</span>}
      </button>
      
      <div className="conteiner" style={{ animationName: !status ? "":"opacityAnimation", opacity: !status ? 0:1  }}>
        <div className="result_tree">
          <p>Исходный массив</p>
          <div className="white_border">
            <pre>{initialArrayPrint}</pre>
          </div>
        </div>
        <div className="result_tree">
          <p>Корректный объект</p>
          <div
            className={
              result === correctResultPrint ? "green_border" : "red_border"
            }
          >
            <pre>{correctResultPrint}</pre>
          </div>
        </div>
        <div className="operation">
          <div
            className="znak"
            style={{ color: result === correctResultPrint ? "green" : "red" ,overflowX:"hidden"}}
          >
            {result === correctResultPrint ? "=" : <span>&ne;</span>}
          </div>
        </div>
        <div className="result_tree">
          <p>Отсортированный по тегам</p>
          <div
            className={
              result === correctResultPrint ? "green_border" : "red_border"
            }
          >
            {!status && ""}
            {status && <pre>{result}</pre>}
          </div>
        </div>
      </div>
    </div>
  );
}
