alert('Hello world from Typescript inside HTML!');
const result = [];
const addToResult = (data) => {
    result.push(data);
    const adam = result.filter((item) => item.name === 'Adam');
    console.debug('Adam in my collection', adam);
    const birthDates = result.map((item) => item.birthDate);
    console.debug('birthDates:', birthDates);
    const hasLikeCoding = result.some((item) => item.likeCoding);
    console.debug('addToResult hasLikeCoding:', hasLikeCoding);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
};
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const outputData = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        likeCoding: formData.get('likeCoding') ? true : false,
        aboutMe: formData.get('aboutMe').toString(),
        languages: formData.getAll('languages'),
        favouriteColor: formData.get('favouriteColor').toString(),
        gender: formData.get('gender'),
        birthDate: formData.get('birthDate').toString(),
        avatar: formData.get('avatar') ? {
            fileName: formData.get('birthDate')['name']
        } : null
    };
    addToResult(outputData);
}
