/*
 * Search, filtering and sorting
 */
var SORT_BY;
(function (SORT_BY) {
    SORT_BY[SORT_BY["ID"] = 0] = "ID";
    SORT_BY[SORT_BY["LAST_NAME"] = 1] = "LAST_NAME";
    SORT_BY[SORT_BY["BIRTH_DATE"] = 2] = "BIRTH_DATE";
})(SORT_BY || (SORT_BY = {}));
var FILTER_BY_AGE;
(function (FILTER_BY_AGE) {
    FILTER_BY_AGE["CHILD"] = "0-17";
    FILTER_BY_AGE["YOUNG"] = "18-25";
    FILTER_BY_AGE["ADULT"] = "26-40";
    FILTER_BY_AGE["OLDER"] = "41-60";
    FILTER_BY_AGE["RETIRED"] = "61+";
})(FILTER_BY_AGE || (FILTER_BY_AGE = {}));
let searchValue = null;
let filterValue = null;
let sortValue = SORT_BY.ID;
function handleSearchInput(event) {
    const input = event.target;
    const searchTerm = input.value.toLowerCase();
    // min. 3 characters
    if (searchTerm.length < 3) {
        searchValue = null;
        return;
    }
    searchValue = searchTerm;
}
function handleSortInput(event) {
    const input = event.target;
    const sortOption = input.value;
    sortValue = Number(sortOption);
}
function handleFilterInput(event) {
    const input = event.target;
    const filterOption = input.value;
    filterValue = filterOption;
}
function getAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
;
function applySearchFilterSort(data) {
    // make a copy
    let result = [...data];
    if (searchValue) {
        result = data.filter((person) => {
            const fullName = `${person.first_name} ${person.last_name}`.toLowerCase();
            return fullName.includes(searchValue);
        });
    }
    if (filterValue) {
        const [minAge, maxAge] = filterValue
            .split('-')
            .map(age => (age === '+' ? Infinity : parseInt(age, 10)));
        result = result.filter(item => {
            const age = getAge(item.birth_date);
            return age >= minAge && (maxAge === Infinity || age <= maxAge);
        });
    }
    switch (sortValue) {
        case SORT_BY.LAST_NAME:
            return result.sort((a, b) => a.last_name.localeCompare(b.last_name));
        case SORT_BY.BIRTH_DATE:
            return result.sort((a, b) => new Date(a.birth_date).getTime() - new Date(b.birth_date).getTime());
        case SORT_BY.ID:
        default:
            return result;
    }
}
