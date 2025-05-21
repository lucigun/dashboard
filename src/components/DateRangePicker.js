import React, { useState } from 'react';

const DateRangePicker = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onDateChange(startDate, endDate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Start Date:
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                />
            </label>
            <label>
                End Date:
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    required
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

export default DateRangePicker;