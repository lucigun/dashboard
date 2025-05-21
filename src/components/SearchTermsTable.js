import React from 'react';

const SearchTermsTable = ({ searchData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Search Term</th>
                    <th>Search Quantity</th>
                    <th>Increase (Count)</th>
                    <th>Increase (%)</th>
                    <th>Decrease (Count)</th>
                    <th>Decrease (%)</th>
                </tr>
            </thead>
            <tbody>
                {searchData.map((term, index) => (
                    <tr key={index}>
                        <td>{term.type}</td>
                        <td>{term.searchTerm}</td>
                        <td>{term.searchQuantity}</td>
                        <td>{term.increase.count}</td>
                        <td>{term.increase.percentage}%</td>
                        <td>{term.decrease.count}</td>
                        <td>{term.decrease.percentage}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SearchTermsTable;