alert('Hello world from Typescript inside HTML!');
const result = [];
const addToResult = (data) => {
    result.push(data);
    // find team member by name
    const adam = result.filter((item) => item.name === 'Adam');
    console.debug('🚀 ~ Adam in my collection:', adam);
    // map team members to array of their birth dates
    const birthDates = result.map((item) => item.birthDate);
    console.debug('🚀 ~ birthDates:', birthDates);
    // has anyone like coding
    const hasLikeCoding = result.some((item) => item.likeCoding);
    console.debug('🚀 ~ addToResult ~ hasLikeCoding:', hasLikeCoding);
    alert('Maximum file size for Avatar exceeds 2MB!');
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
};
function handleFormSubmit(event) {
    event.preventDefault(); // Zabraňuje obnoveniu stránky
    const form = event.target;
    const formData = new FormData(form);
    const outputData = {
        name: formData.get('name').toString(),
        surname: formData.get('surname').toString(),
        likeCoding: formData.get('likeCoding') ? true : false,
        aboutMe: formData.get('aboutMe').toString() || null, // '' -> null, 'something' -> 'something'
        languages: formData.getAll('languages'),
        favoriteColor: formData.get('favoriteColor').toString(),
        gender: formData.get('gender') ? formData.get('gender') : null,
        birthDate: formData.get('birthDate').toString(),
        avatar: formData.get('avatar') ? {
            fileName: formData.get('birthDate')['name']
        } : null
    };
    addToResult(outputData);
}
