import React, { useState, useEffect } from "react";
import "./SearchVisualizer.css";

function SearchVisualizer() {
  const [numbers, setNumbers] = useState([]);
  const [target, setTarget] = useState(0);

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

  function linearSearch(numbers) {
    if (target === 0) {
      alert("Please generate a target first!");
    } else {
      console.log("Linear Search");
      console.log(numbers);
      console.log(target);
      alert("The target is: " + target);

      //LINEAR-SEARCH ALGORITHM O(N)
      for (let i = 0; i <= numbers.length - 1; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = "green";
        }, (i + 1) * 50);
        console.log(i, numbers[i]);
        if (numbers[i] === target) {
          console.log("The position of the target is: " + i);
          alert("The position of the target is: " + i);
          break;
        }
      }
    }
  }

  function binarySearch() {
    alert("Binary search");
  }

  function generateTarget(numbers) {
    console.log("Generate new target");
    console.log("Generate new target from: " + numbers);
    let newTarget = Math.floor(Math.random() * numbers.length);
    console.log(newTarget, numbers[newTarget]);
    setTarget(numbers[newTarget]);
    //numbers[newTarget] represents the new target number
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
        <button onClick={() => resetArray()}>Generate New Array</button>
        <button onClick={() => linearSearch(numbers)}>Linear Search</button>
        <button onClick={() => binarySearch()}>Binary Search</button>
      </div>
      <div>
        <button onClick={() => generateTarget(numbers)}>
          Generate New Target
        </button>
      </div>
    </>
  );
}

export default SearchVisualizer;
