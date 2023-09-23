import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [height, setHeight] = useState(""); // manage height
  const [weight, setWeight] = useState(""); // manage weight
  const [bmi, setBMI] = useState(null); // bmi holder

  function handleHeight(e) {
    // handle height value
    const h = e.target.value;
    setHeight(h);
  }

  function handleWeight(e) {
    // handle weight value
    const w = e.target.value;
    setWeight(w);
  }

  useEffect(() => {
    // set values
    if (height && weight) {
      const heightInMeters = height / 100;
      // round to 2dp
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  }, [height, weight]);

  // show status
  function getBMICategory(bmiValue) {
    if (bmiValue < 18.5) {
      return "Underweight 🙁";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "Normal Weight 😃";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return "Overweight 😩";
    } else {
      return "Obese 😳";
    }
  }

  function getBackgroundColor(bmiValue) {
    if (bmiValue < 18.5) {
      return "rgb(0, 95, 158)";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return "rgb(41, 150, 41)";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return "coral";
    } else {
      return "crimson";
    }
  }

  const backgroundColor =
    bmi !== null ? getBackgroundColor(parseFloat(bmi)) : "transparent";

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>BMI Calculator</h1>
      <p>Height (in cm)</p>
      <input type="number" onChange={handleHeight} value={height} />
      <p>Weight (in kg)</p>
      <input type="number" onChange={handleWeight} value={weight} />
      {bmi !== null && (
        <div>
          <h2>BMI: {bmi} kg/m²</h2>
          <p>Category: {getBMICategory(parseFloat(bmi))}</p>
        </div>
      )}
    </div>
  );
}

export default App;
