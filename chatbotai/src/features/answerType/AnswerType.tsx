import React, { useState } from "react";
import { Question } from "../../questions";
import moment from "moment";
import DatePicker from "react-datepicker";

export const getEditInput = (question: Question | undefined, isFromModal: boolean, editingAnswer: any, setEditingAnswer:any, callback:any) => {
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
    return (
      <DatePicker
        selected={selectedDate}
        className="form-control datepicker"
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
      <fieldset>
        <input
          id="yes"
          className="peer/draft"
          type="radio"
          name="status"
          checked={editingAnswer === yesValue}
          onChange={(e: any) => {
            const value = e.target.checked ? yesValue : noValue;
            setEditingAnswer(value);
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
          onChange={(e: any) => {
            const value = e.target.checked ? noValue : yesValue;
            setEditingAnswer(value);
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
        setEditingAnswer(event.target.value);
      }}
    />
  );
};
