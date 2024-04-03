import React from "react";
import { Question } from "../../questions";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export const getEditInput = (question: Question | undefined, editingAnswer: any, setEditingAnswer: any, callback: any) => {
  if (!question) return null;
  const { options, answerType } = question;
  if (answerType === "dropdown") {
    return options ? (
      <select
        id={`selectpicker${question.id}`}
        className="form-control"
        style={{ width: "100%" }}
        data-live-search="true"
        value={editingAnswer}
        onChange={(event) => {
          setEditingAnswer(event.target.value);
        }}
      >
        <option key="empty" value="">
          Please select...
        </option>
        {options.map((item) => (
          <option key={item?.id} data-tokens={item} value={item?.name}>
            {item?.name}
          </option>
        ))}
      </select>
    ) : null;
  }
  if (answerType === "date") {
    const selectedDate = editingAnswer
      ? moment(editingAnswer, "YYYY/MM/DD").toDate()
      : new Date();
    if (editingAnswer === "") {
      const newValue = moment(new Date()).format("YYYY/MM/DD");
      setEditingAnswer(newValue);
    }
    return (
      <DatePicker
        selected={selectedDate}
        className="form-control datepicker overflow-y-auto max-h-48"
        dateFormat="yyyy/MM/dd"
        onChange={(date) => {
          const newValue = moment(date).format("YYYY/MM/DD");
          setEditingAnswer(newValue);
        }}
      />
    );
  }
  if (answerType === "boolean") {
    const yesValue = "Yes";
    const noValue = "No";
    return (
      <div className="flex flex-row space-x-4">
        <div className="grid grid-cols-2 gap-1 place-content-around">
          <input
            id="yes"
            className="peer/draft"
            type="radio"
            name="status"
            checked={editingAnswer === yesValue}
            onChange={(e) => {
              const value = e.target.checked ? yesValue : noValue;
              setEditingAnswer(value);
            }}
          />
          <label htmlFor="yes" className="peer-checked/draft:text-sky-500">
            {yesValue}
          </label>
        </div>
        <div className="grid grid-cols-2 gap-1 place-content-around">
          <input
            id="no"
            className="peer/draft"
            type="radio"
            name="status"
            checked={editingAnswer === noValue}
            onChange={(e) => {
              const value = e.target.checked ? noValue : yesValue;
              setEditingAnswer(value);
            }}
          />
          <label htmlFor="no" className="peer-checked/draft:text-sky-500">
            {noValue}
          </label>
        </div>
      </div >
    );
  }
  if (answerType === "phone") {
    const value = editingAnswer || "";
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={(event) => {
          setEditingAnswer(event);
        }} />
    );
  }
  return (
    <input
      type="text"
      className="border-2 border-sky-500"
      style={{ width: "100%" }}
      value={editingAnswer}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          callback();
        }
      }}
      onChange={(event) => {
        setEditingAnswer(event.target.value);
      }}
    />
  );
};
