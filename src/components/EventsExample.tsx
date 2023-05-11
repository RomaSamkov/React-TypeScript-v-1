import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);

    console.log("ref:", inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
    console.log(e);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop");
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="JS"
      />
      <input ref={inputRef} type="text" placeholder="TS" />
      <button onClick={clickHandler}>Click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 100, height: 100, background: "pink" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 100,
          height: 100,
          background: isDrag ? "blue" : "pink",
          marginTop: 10,
          marginBottom: 10,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
