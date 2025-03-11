import { useState } from "react";

function Search() {
    const [search, setSearch] = useState('');
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    const onSearchChange = (e) => setSearch(e.target.value);
    const onMinDateChange = (e) => setMinDate(e.target.value);
    const onMaxDateChange = (e) => setMaxDate(e.target.value);

    const updateFilter = () => {
        const filter = {
            keyword,
            minDate,
            maxDate
        };

        // setFilter(filter);
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={onSearchChange} />
            <input type="date" value={minDate} onChange={onMinDateChange} />
            <input type="date" value={maxDate} onChange={onMaxDateChange} />

            <button onClick={updateFilter}>Search</button>
        </div>
    );
}

export default Search;  