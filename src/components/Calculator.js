import { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const addHandler = (event) => {
    event.preventDefault();
    const result = Number(number1) + Number(number2);
    alert(`Result : ${result}`);
   
  };

  const subtractHandler = (event) => {
    event.preventDefault();
    const result = Number(number1) - Number(number2);
    alert(`Result : ${result}`);
  };

  const multiplyHandler = (event) => {
    event.preventDefault();
    const result = Number(number1) * Number(number2);
    alert(`Result : ${result}`);
  };

  const divideHandler = (event) => {
    event.preventDefault();
    const result = Number(number1) / Number(number2);
    alert(`Result : ${result}`);
  };

  return (
    <div className="flex justify-center">
      <form>
        <div className="flex mt-8">
          <label className="block  text-gray-700 font-semibold" for="number1">
            Number 1
          </label>
          <br />
          <input
            className="ml-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="num1"
            value={number1}
            name="number1"
            onChange={(event) => setNumber1(event.target.value)}
          />
          <br />
          <label
            className="ml-5 block text-gray-700 font-semibold"
            for="number2"
          >
            Number 2
          </label>
          <br />
          <input
            className="ml-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="num2"
            value={number2}
            name="number2"
            onChange={(event) => setNumber2(event.target.value)}
          />
          <br />
        </div>
        <div className="mt-10 flex justify-evenly">
          <input
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            value="Add"
            onClick={addHandler}
          />
          <input
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            value="Sub"
            onClick={subtractHandler}
          />
          <input
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            value="Multiply"
            onClick={multiplyHandler}
          />
          <input
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
            value="Divide"
            onClick={divideHandler}
          />
        </div>
        <div className="flex justify-center mt-20 text-sky-500 font-sans font-bold">
          <a href="/assignment2">Assignment2</a>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
