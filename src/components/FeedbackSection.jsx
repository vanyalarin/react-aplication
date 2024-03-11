import Button from "./Button/Button";
import { useState, useRef } from "react";

const SteteVsRef = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShow(true);
    }

    e.preventDefault();
  };
  return (
    <div>
      <h3>SteteVsRef : {show && inputRef.current.value}</h3>
      <input
        ref={inputRef}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");

  const HandleChangeName = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
    // setName(e.target.value);
    // setHasError(e.target.value.trim().length === 0);
  };
  return (
    <section>
      <h3>Feedback</h3>
      <form action="">
        <label htmlFor="name">Your name</label>
        <input
          className="control"
          id="name"
          type="text"
          style={{ border: form.hasError ? "1px solid red" : null }}
          value={form.name}
          onChange={HandleChangeName}
        />
        <label htmlFor="reason">Reason</label>

        <select
          name="reason"
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) => setForm(e.target.value)}
        >
          <option value="Warning">Warning</option>
          <option value="Need assistance">Need assistance</option>
          <option value="help">Help</option>
        </select>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Submit
        </Button>
        <SteteVsRef />
      </form>
    </section>
  );
}
