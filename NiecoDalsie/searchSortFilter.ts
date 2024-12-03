/*
 * Search, filtering and sorting
 */

enum SORT_BY {
    ID,
    LAST_NAME,
    BIRTH_DATE
}


enum FILTER_BY_AGE {
    CHILD = '0-17',
    YOUNG = '18-25',
    ADULT = '26-40',
    OLDER = '41-60',
    RETIRED = '61+'
}

let searchValue: string | null = null;
let filterValue: null | FILTER_BY_AGE = null;
let sortValue = SORT_BY.ID;

function handleSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();

    // min. 3 characters
    if (searchTerm.length < 3) {
        searchValue = null;
        return;
    }

    searchValue = searchTerm;
}

function handleSortInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const sortOption = input.value;
    sortValue = Number(sortOption);
}

function handleFilterInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const filterOption = input.value;
    filterValue = filterOption as FILTER_BY_AGE;
}

function getAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

function applySearchFilterSort(data: Client[]): Client[] {
    // make a copy
    let result = [...data];
    if(searchValue){
        result = data.filter((person) => {
            const fullName = `${person.first_name} ${person.last_name}`.toLowerCase();
            return fullName.includes(searchValue);
        });
    }

    if(filterValue){
        const[minAge, maxAge] = filterValue
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
            return result.sort((a, b) =>
            new Date(a.birth_date).getTime() - new Date(b.birth_date).getTime());

        case SORT_BY.ID:
        default:
            return result;
    }
}