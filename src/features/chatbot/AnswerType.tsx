import { Question } from "../../questions";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css';

const formatPhoneNumber = (value: string): string => {
  // If the value is empty or just a hyphen, return empty string
  if (!value || value === '-') return '';
  
  // Remove all non-digit characters
  const numbers = value.replace(/\D/g, '');
  
  // If there are no numbers, return empty string
  if (!numbers) return '';
  
  // Limit to 10 digits
  const truncatedNumbers = numbers.slice(0, 10);
  
  // Format as XXX-XXX-XXXX
  if (truncatedNumbers.length <= 3) {
    return truncatedNumbers;
  } else if (truncatedNumbers.length <= 6) {
    return `${truncatedNumbers.slice(0, 3)}-${truncatedNumbers.slice(3)}`;
  } else {
    return `${truncatedNumbers.slice(0, 3)}-${truncatedNumbers.slice(3, 6)}-${truncatedNumbers.slice(6, 10)}`;
  }
};

export const getEditInput = (question: Question | undefined, editingAnswer: any, setEditingAnswer: any, callback: any) => {
  if (!question) return null;
  const { options, answerType } = question;
  if (answerType === "dropdown") {
    return options ? (
      <select
        id={`selectpicker${question.id}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
        </div>
        <input 
          type="text" 
          id="phone-input" 
          aria-describedby="helper-text-explanation" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" 
          placeholder="123-45-6789" 
          required 
          maxLength={12}
          value={value}
          onChange={(e) => {
            const formattedValue = formatPhoneNumber(e.target.value);
            setEditingAnswer(formattedValue);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              callback();
            }
          }}
        />
      </div>
    );
  }
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
