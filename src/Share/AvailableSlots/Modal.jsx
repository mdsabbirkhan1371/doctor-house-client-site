import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [doctorName, setDoctorName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState(''); // New state for phone number

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ date, time, category, doctorName, phoneNumber }); // Pass the booking info back to parent
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Book Your Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Time:</label>
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Service Category:
            </label>
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="border rounded p-2 w-full"
              placeholder="Enter service category"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Doctor's Name:</label>
            <input
              type="text"
              value={doctorName}
              onChange={e => setDoctorName(e.target.value)}
              className="border rounded p-2 w-full"
              placeholder="Enter doctor's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="border rounded p-2 w-full"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
