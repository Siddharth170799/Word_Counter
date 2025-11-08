import { useEffect, useState } from "react";

const TextArea = () => {
  const [userInput, setUserInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [typedValue, setTypedValue] = useState("");

  const handleChange = (e) => {
    const typedValue = e.target.value.split(" ");
    setUserInput(e.target.value);
    setTypedValue(typedValue);
  };

  const countingWords = () => {
    let object = {};
    for (let i = 0; i < typedValue.length; i++) {
      if (object[typedValue[i]]) {
        object[typedValue[i]] = object[typedValue[i]] + 1;
      } else {
        object[typedValue[i]] = 1;
      }
    }

    let newArray = [];
    for (let key in object) {
      if (key) {
        newArray = [...newArray, { [key]: object[key], value: object[key] }];
      }
    }

    const sortedData = newArray.sort((a, b) => b.value - a.value);
    setUserData(sortedData);
  };

  useEffect(() => {
    countingWords();
  }, [userInput]);

  return (
    <div className="word-counter-container" style={{ margin: "auto" }}>
      <h1 className="word-counter-title" style={{ textAlign: "center" }}>
        Words Counter
      </h1>

      <div
        className="textarea-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <textarea
          className="word-counter-textarea"
          style={{ height: "100px", width: "300px" }}
          onChange={handleChange}
          placeholder="Type something..."
          value={userInput}
        />
      </div>

      <div className="word-frequencies" style={{ textAlign: "center" }}>
        <h3 className="frequencies-title">Word Frequencies</h3>
        {userData.map((item, index) => {
          const key = Object.keys(item);
          return (
            <p key={index} className="word-count-item">
              {key[0]} - count : {item.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TextArea;