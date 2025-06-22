const inputData = document.getElementById('inputField');
const outputData = document.getElementById('outputField');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    const commentlist = document.createElement('li');
    commentlist.innerHTML = `
    <span id="textTask">${inputData.value}</span>
    <button id="editButton">Edit</button>
    <button id="deleteButton">Delete</button>
    `;
    outputData.appendChild(commentlist);
    inputData.value = '';
    const spanText = commentlist.querySelector('#textTask')
    const editComment = commentlist.querySelector('#editButton');
    const deleteComment = commentlist.querySelector('#deleteButton');
    editComment.addEventListener('click', () => {
        const newText = prompt('Edite your text', spanText.textContent);
        if (newText !== null) {
            spanText.textContent = newText.trim();
        }
    });
    deleteComment.addEventListener('click', () => {
        commentlist.remove()
    });
})