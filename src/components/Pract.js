import React, { useState, useEffect } from 'react'
import './Pract.css'

export default function Pract() {

  const currYear = new Date().getFullYear();
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();


  //useState
  let [date, setDate] = useState(1);
  let [month, setMonth] = useState(1);
  let [year, setYear] = useState(currYear);

  date <= 0 || date > 31 ? date = 1 : date = date;
  month <= 0 || month > 12 ? month = 1 : month = month;
  year <= 1900 || year > currYear ? year = currYear : year = year;

  //useEffect  (executes everytime the page gets rendered)
  /*
  useEffect( () => {
    alert("date changed")
  }, [date])
  */
  // putting empty [] makes it to run only first time when page loads, [date] runs 1st n when date changes


  let [ans, setAns] = useState(0)

  return (
    <>
      <h5 className='right-align'>Current time: {currTime}</h5>
      <h5 className='right-align'>Current Date: {currDate}</h5>

      <br />

      <h3 className='heading' style={{ textAlign: "left" }} >Enter your DOB</h3>
      <table className='nice-table' id='lol'>
        <tr>
          <th>Date</th>
          <th>Month</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>
            <button onClick={() => { setDate(date - 1) }}>-</button>
            <h3>{date}</h3>
            <button onClick={() => setDate(date + 1)}>+</button>
          </td>
          <td><button onClick={() => setMonth(month - 1)}>-</button>
            <h3>{month}</h3>
            <button onClick={() => setMonth(month + 1)}>+</button>
          </td>
          <td>
            <button onClick={() => setYear(year - 1)}>-</button>
            <h3>{year}</h3>
            <button onClick={() => setYear(year + 1)}>+</button>
          </td>
        </tr>
      </table>

      <br />

      <h3 className='heading'>Calculator</h3>
      <input className='center-block' type="number" name="Value1" id="val1" />
      <input className='center-block' type="number" name="Value2" id="val2" />

      <table className='center' cellPadding={20} id='bol'>
        <tr>
          <td><button onClick={() => {
            setAns(ans = document.getElementById('val1').valueAsNumber + document.getElementById('val2').valueAsNumber)
          }}>+</button></td>
          <td><button onClick={() => {
            setAns(ans = document.getElementById('val1').valueAsNumber - document.getElementById('val2').valueAsNumber)
          }}>-</button></td>
        </tr>
        <tr>
          <td><button onClick={() => {
            setAns(ans = document.getElementById('val1').valueAsNumber * document.getElementById('val2').valueAsNumber)
          }}>*</button></td>
          <td><button onClick={() => {
            setAns(ans = document.getElementById('val1').valueAsNumber / document.getElementById('val2').valueAsNumber)
          }}>/</button></td>
        </tr>
      </table>

      <h3 className='center'>{ans}</h3>

      <br />


    </>
  )
}
