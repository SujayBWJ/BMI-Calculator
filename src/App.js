import { useState } from "react";

/* 
  Notes:
  1. const [var, setVar] = useState(val);
      this basically means, use the useState function and initialize it with a value val, it would return an array, so put the index 0 value inside var, and the 1 index value inside setVar
      JS equivalent:
        const arr = UseState(val);
        const var = arr[0];
        const setVar = arr[1];
  
  2. var is a state variable, and it should never be changed directly; That is, var = newValue is not permitted; Hence always call the setVar function, whose sole job is to update the changes happening to var

  3. Every react app returns something, that is called the jsx, for example, this app returns the html ui, and whatever the react app returns is displayed on the web page

  4. JS treats CSS like an object, hence every css styling must be written in form of an object itself; All the properties of CSS written in the form of text-align turn to camelCase like textAlgn

  5. onChange is an event handler, so "whenever there is a change run this code" thing
      for example:
        onChange={(e) => setWeight(e.target.value)}
        onChange in the weight input, run this function
          e => this is an event ojbect passed by react itself; this object contains alot of info, like target, timestamp etc
          we are interested only in target, the input
          hence we write e.target to only get the input
          e.target.value takes the value of the input, this value input is passed as a parameter to the setWeight function which changes the value of state variable weight

          so basically its like react saying, there is a change in the input, this is all the info needed, take the value of the target from the object and set it as current value of weight state variable using setWeight function
           





*/
function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both weight and height");
      return;
    }

    const h = height / 100;
    const bmiVal = (weight / (h * h)).toFixed(2); // this will calculate the bmi value based on entered inputs, and estimates it to 2 decimal places and stores it inside bmiVal variable

    setBMI(bmiVal); // this changes the value of bmi state variable to bmiVal

    if (bmiVal < 18.5) setStatus("Under weight");
    else if (bmiVal >= 18.5 && bmiVal < 25) setStatus("Normal Weight");
    else if (bmiVal >= 25 && bmiVal < 30) setStatus("Over weight");
    else setStatus("Obese");
  };

  return (
    // The first {} indicates that i am writing a JS code, and the inner {} indicates that i am writing a js object
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {/* The below code checks if bmi exists, if bmi is not 0, and if it is then displays the result */}
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <h3>Category: {status}</h3>
        </div>
      )}
    </div>
  );
}

export default BMI; // By writing this we can now use the BMI function of this js file inside any other JS file uisng import from syntax
