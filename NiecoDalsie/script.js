let likes = 0;

function likeBlogPost2() {
    likes++;
    document.getElementById(
        "likes_counter"
    ).innerHTML = `Count of likes: ${likes}`;
}

function time() {
    return new Date().toLocaleTimeString();
}
