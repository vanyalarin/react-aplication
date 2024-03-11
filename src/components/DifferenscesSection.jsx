import { useState } from "react";
import Button from "./Button/Button";
import { differences } from "../data";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Difference</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Some text
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Some text
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Some text
      </Button>
      {!contentType && <p>click</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
