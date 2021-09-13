import './App.scss';
import { useState } from "react"
import COLORS_ARRAY from './colors.js'
function App() {
  const [expression, setExpression] = useState("")
  const [answer, setAnswer] = useState(0)
  const [colors, setColors] = useState('#FFF')

  const display = (symbol) => {
    setExpression((prev) => {
      if (/[+*-/]/.test(symbol) && /[+*-/]/.test(prev[prev.length - 1])) {
        let newValue;
        if(/[-]/.test(symbol)){
          newValue = prev.slice(0, prev.length) + symbol;
        } else if(/[+/*]/.test(symbol)) {
          let count = 0;
          for(let i = 0; i < prev.length; i++){
          if(/[+/*-]/.test(prev[i])){
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prev.slice(0, prev.length - count) + symbol;
        } else if (/[.]/.test(symbol)){
          
          newValue = prev + symbol
        }
        setExpression(
          (newValue).replace(/([*|/|+|-])[.]+/g, '$10.')
                    .replace(/([0-9])([.]+)/g, '$1.')
                    .replace(/(-)([-]+)/g, '$1-')
                    .replace(/^[/*+]/g, "")
                    .replace(/(-)(-)(0)(.)/g, '$1 $2$3$4')
        )
        console.log(expression + "option1")
      } else {
        if(prev){
          prev = prev + "";
          let valArr = prev.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if(!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === "."){
            symbol = "";
          }   
        }
        setExpression(
          (prev + symbol).replace(/^0/g, "")
                         .replace(/\.+/g, ".")
                         .replace(/([*|/|+|-])([-]+)/g, '$1 -')
                         .replace(/^\./, "0.")
                         .replace(/^[/*+]/g, "")
                         .replace(/([*|/|+|-])([0]+)/g, '$10')
                         .replace(/([*|/|+|-])([0]+)([1-9]+)/g, '$1$3')
        )
        console.log(expression + "option2")
      }
    })
  }

  const calculate = () => {
    if(/[^(--)]/.test(expression)){
      setExpression(prev => {
        let newRes;
        if(/[+*-/]$/.test(prev)){
          let count = 0;
            for(let i = 0; i < prev.length; i++){
              if(isNaN(prev[i])){
                count++;
              } else {
                count = 0;
              }
            }
          newRes = prev.slice(0, prev.length-count)
          setExpression(eval(newRes))
          setAnswer(eval(newRes))
        } else { 
          setExpression(eval(expression))
          setAnswer(eval(expression))
        }
      })
      let randomNumber = Math.floor(Math.random() * COLORS_ARRAY.length)
      setColors(COLORS_ARRAY[randomNumber])
    }
  }

  const allClear = () => {
    setExpression("")
    setAnswer(0)
    setColors('#FEFEFE')
  }

  const clear = () => {
    setExpression((prev) => {
      setAnswer(0);
      prev = prev + "";
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });
  }
 
  return (
    <div className="App">
      <div className="grid"  style={{borderColor: colors}}>
        <div id="display" className="dis">
          <input className="expression" type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div id="clear" onClick={allClear} className="padButton" style={{borderColor: colors}}>AC</div>
        <div id="backspace" onClick={clear} className="padButton" style={{borderColor: colors}}>C</div>
        <div id="divide" onClick={() => display("/")} className="padButton" style={{borderColor: colors}}>/</div>
        <div id="multiply" onClick={() => display("*")} className="padButton" style={{borderColor: colors}}>*</div>
        <div id="seven" onClick={() => display("7")} className="padButton" style={{borderColor: colors}}>7</div>
        <div id="eight" onClick={() => display("8")} className="padButton" style={{borderColor: colors}}>8</div>
        <div id="nine" onClick={() => display("9")} className="padButton" style={{borderColor: colors}}>9</div>
        <div id="subtract" onClick={() => display("-")} className="padButton" style={{borderColor: colors}}>-</div>
        <div id="four" onClick={() => display("4")} className="padButton" style={{borderColor: colors}}>4</div>
        <div id="five" onClick={() => display("5")} className="padButton" style={{borderColor: colors}}>5</div>
        <div id="six" onClick={() => display("6")} className="padButton" style={{borderColor: colors}}>6</div>
        <div id="add" onClick={() => display("+")} className="padButton" style={{borderColor: colors}}>+</div>
        <div id="one" onClick={() => display("1")} className="padButton" style={{borderColor: colors}}>1</div>
        <div id="two" onClick={() => display("2")} className="padButton" style={{borderColor: colors}}>2</div>
        <div id="three" onClick={() => display("3")} className="padButton" style={{borderColor: colors}}>3</div>
        <div id="equals" onClick={()=> {calculate()}} className="padButton" style={{borderColor: colors}}>=</div>
        <div id="zero" onClick={() => display("0")} className="padButton" style={{borderColor: colors}}>0</div>
        <div id="decimal" onClick={() => display(".")} className="padButton" style={{borderColor: colors}}>.</div>
      </div>
      <span id="da3ker" style={{color: colors}}>by da3ker</span>
    </div>
  );
}

export default App;
