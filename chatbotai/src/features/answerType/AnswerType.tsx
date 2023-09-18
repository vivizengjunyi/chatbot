import React, { useState } from "react";
import { Question } from "../../questions";
import moment from "moment";
import DatePicker from "react-datepicker";

export const getEditInput = (question: Question, isFromModal: boolean, editingAnswer: any, setEditingAnswer:any) => {
  if (!question) return null;
  // const _editingAnswer = isFromModal ? modalEditingAnswer : editingAnswer;
  // const _setEditingAnswer = (value) => {
  //   if (isFromModal) {
  //     setModalEditingAnswer(value);
  //   } else {
  //     setEditingAnswer(value);
  //   }
  // };
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
          <option key={item?.id} data-tokens={item} value={item?.id}>
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
      className="form-control"
      style={{ width: "100%" }}
      aria-describedby="basic-addon1"
      value={editingAnswer}
    //   onKeyDown={(e) => {
    //     if (e.key === "Enter") {
    //       handleAnswer();
    //     }
    //   }}
      onChange={(event) => {
        setEditingAnswer(event.target.value);
      }}
    />
  );
};
