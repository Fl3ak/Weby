declare var SlimSelect: any;

// Avatar options
const avatarOptions = [
    {
        text: 'Avatar 1',
        value: 'https://picsum.photos/id/375/40',
        html: '<span><img src="https://picsum.photos/id/375/40" alt="Avatar 1" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 10px;" /> Avatar 1</span>',
    },
    {
        text: 'Avatar 2',
        value: 'https://picsum.photos/id/399/40',
        html: '<span><img src="https://picsum.photos/id/399/40" alt="Avatar 2" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 10px;" /> Avatar 2</span>',
    },
    {
        text: 'Avatar 3',
        value: 'https://picsum.photos/id/433/40',
        html: '<span><img src="https://picsum.photos/id/433/40" alt="Avatar 3" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 10px;" /> Avatar 3</span>',
    },
    {
        text: 'Avatar 4',
        value: 'https://picsum.photos/id/473/40',
        html: '<span><img src="https://picsum.photos/id/473/40" alt="Avatar 4" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 10px;" /> Avatar 4</span>',
    },
    {
        text: 'Avatar 5',
        value: 'https://picsum.photos/id/602/40',
        html: '<span><img src="https://picsum.photos/id/602/40" alt="Avatar 5" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 10px;" /> Avatar 5</span>',
    },
];

// Initialize SlimSelect for avatar field
new SlimSelect({
    select: '#avatar-select',
    data: avatarOptions,
    settings: {
        placeholderText: 'Vyberte avatar'
    }
});
