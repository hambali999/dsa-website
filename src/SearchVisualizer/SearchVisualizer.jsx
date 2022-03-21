import React, { useState, useEffect } from "react";
import "./SearchVisualizer.css";

function SearchVisualizer() {
  const [numbers, setNumbers] = useState([]);
  const [target, setTarget] = useState(0);
  const [targetPosition, setTargetPosition] = useState(0);
  //   const [doneColor, setDoneColor] = useState();

  useEffect(() => {
    resetNumbers();
  }, []);

  function resetNumbers() {
    let range = 400;
    let outputCount = 400;
    //https://dev.to/sagdish/generate-unique-non-repeating-random-numbers-g6g
    let arr = [];
    for (let i = 1; i <= range; i++) {
      arr.push(i);
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
    //console.log(result);
    setNumbers(result);
  }

  function resetArray() {
    setTargetPosition(0); //reset position

    let range = 400;
    let outputCount = 400;
    //https://dev.to/sagdish/generate-unique-non-repeating-random-numbers-g6g
    let arr = [];
    for (let i = 1; i <= range; i++) {
      arr.push(i);
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
    //console.log(result);
    setNumbers(result);
    let arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i <= numbers.length - 1; i++) {
      arrayBars[i].style.backgroundColor = "red";
    }
  }

  function linearSearch(numbers) {
    setTargetPosition(0);
    if (target === 0) {
      alert("Please generate a target first!");
    } else {
      console.log("Linear Search");
      console.log(numbers);
      console.log(target);
      alert("The target is: " + target);

      //LINEAR-SEARCH ALGORITHM O(N)
      //   setDoneColor("green");
      for (let i = 0; i <= numbers.length - 1; i++) {
        let arrayBars = document.getElementsByClassName("array-bar");
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = "green";
        }, (i + 1) * 10);
        console.log(i, numbers[i]);
        if (numbers[i] === target) {
          setTimeout(() => {
            setTargetPosition(i);
          }, (i + 1) * 10);
          break;
        }
      }
    }
  }

  function binarySearch(numbers) {
    //sort the numbers first
    numbers.sort(function (a, b) {
      //Array now becomes [7, 8, 25, 41]
      return a - b;
    });
    console.log(numbers);

    alert("Binary search");
    if (target === 0) {
      alert("Please generate a target first!");
    } else {
      console.log("Binary Search");
      alert("The target is: " + target);

      //BINARY-SEARCH ALGORITHM O(LOG N)
      let low = 0;
      let high = numbers.length - 1;

      console.log("The target is: " + target);
      console.log("The low and high is : " + low, high);

      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(mid, numbers[mid]);

        if (numbers[mid] === target) {
          console.log("The position is: " + mid);
          alert("THE POSITION IS" + mid);
          setTargetPosition(mid);
          return;
        } else if (numbers[mid] < target) {
          low = mid + 1;
        } else if (numbers[mid] > target) {
          high = mid - 1;
        }
      }
      return;
    }
  }

  function generateTarget(numbers) {
    setTargetPosition(0); //reset position

    console.log("Generate new target");
    console.log("Generate new target from: " + numbers);
    let newTarget = Math.floor(Math.random() * numbers.length);
    console.log(newTarget, numbers[newTarget]);
    setTarget(numbers[newTarget]);
    //numbers[newTarget] represents the new target number
    let arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i <= numbers.length - 1; i++) {
      arrayBars[i].style.backgroundColor = "red";
    }
  }

  return (
    <>
      <div>SearchVisualizer</div>
      <div className="array-container">
        {numbers.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div>
        <button onClick={() => linearSearch(numbers)}>Linear Search</button>
        <button onClick={() => binarySearch(numbers)}>Binary Search</button>
      </div>
      <div>
        <button onClick={() => generateTarget(numbers)}>
          Generate New Target
        </button>
        <button onClick={() => resetArray()}>Generate New Array</button>
      </div>
      <div>The target is: {target}</div>
      <div>The position of the target: {targetPosition}</div>
    </>
  );
}

export default SearchVisualizer;
