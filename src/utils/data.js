const fetchSearchTerms = async (startDate, endDate) => {
    const response = await fetch(`/api/search-terms?start=${startDate}&end=${endDate}`);
    if (!response.ok) {
        throw new Error('Failed to fetch search terms');
    }
    const data = await response.json();
    return data;
};

const calculateChanges = (currentData, previousData) => {
    return currentData.map(term => {
        const previousTerm = previousData.find(prev => prev.term === term.term) || { quantity: 0 };
        const countChange = term.quantity - previousTerm.quantity;
        const percentageChange = previousTerm.quantity > 0 ? (countChange / previousTerm.quantity) * 100 : 0;

        return {
            ...term,
            increase: countChange > 0 ? { count: countChange, percentage: percentageChange } : null,
            decrease: countChange < 0 ? { count: -countChange, percentage: -percentageChange } : null,
        };
    });
};

export { fetchSearchTerms, calculateChanges };