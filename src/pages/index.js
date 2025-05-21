import { useState } from 'react';
import DateRangePicker from '../components/DateRangePicker';
import SearchTermsTable from '../components/SearchTermsTable';
import { fetchSearchTerms } from '../utils/data';

export default function Home() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchTerms, setSearchTerms] = useState([]);

    const handleSearch = async () => {
        if (startDate && endDate) {
            const data = await fetchSearchTerms(startDate, endDate);
            setSearchTerms(data);
        }
    };

    return (
        <div>
            <h1>Search Dashboard</h1>
            <DateRangePicker 
                startDate={startDate} 
                setStartDate={setStartDate} 
                endDate={endDate} 
                setEndDate={setEndDate} 
            />
            <button onClick={handleSearch}>Search</button>
            <SearchTermsTable searchTerms={searchTerms} />
        </div>
    );
}