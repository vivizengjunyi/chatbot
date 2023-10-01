import React, { useState } from "react";
import { Question } from "../../questions";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const getEditInput = (question: Question | undefined, editingAnswer: any, handleStateEditing:any, callback:any) => {
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
          handleStateEditing(event.target.value);
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
    return (
      <DatePicker
        selected={selectedDate}
        className="form-control datepicker"
        dateFormat="yyyy/MM/dd"
        onChange={(date) => {
          const newValue = moment(date).format("YYYY/MM/DD");
          handleStateEditing(newValue);
        }}
      />
    );
  }
  if (answerType === "boolean") {
    const yesValue = "Yes";
    const noValue = "No";
    return (
      <fieldset>
        <input
          id="yes"
          className="peer/draft"
          type="radio"
          name="status"
          checked={editingAnswer === yesValue}
          onChange={(e) => {
            const value = e.target.checked ? yesValue : noValue;
            handleStateEditing(value);
          }}
        />
        <label htmlFor="yes" className="peer-checked/draft:text-sky-500">
          {yesValue}
        </label>
        <input
          id="no"
          className="peer/draft"
          type="radio"
          name="status"
          checked={editingAnswer === noValue}
          onChange={(e) => {
            const value = e.target.checked ? noValue : yesValue;
            handleStateEditing(value);
          }}
        />
        <label htmlFor="no" className="peer-checked/draft:text-sky-500">
          {noValue}
        </label>
      </fieldset>
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
        handleStateEditing(event.target.value);
      }}
    />
  );
};
