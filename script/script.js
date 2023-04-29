const addButton = document.getElementById("add-button");
const addFormInput = document.getElementById("add-form-input");
const ulList = document.querySelector("#book-list > ul");
const hideBox = document.getElementById("hide");
const searchInput = document.getElementById("searchBar");

// add book functional
const handleAddBook = () => {
    const {value} = addFormInput;
    if(value.trim()) {
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteButton = document.createElement("span");

    bookName.innerText = value;
    deleteButton.innerText = "delete";

    bookName.classList.add("name");
    deleteButton.classList.add("delete");
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    ulList.appendChild(li)

    addFormInput.value = ""
    }
}

addButton.addEventListener("click", handleAddBook)

// delete book
const handleDeleteBook = event => {
    const { target } = event;
    if(target.className === 'delete') {
        const li = target.parentElement;
        console.log(li);
        ulList.removeChild(li)
    }   
}

ulList.addEventListener("click", handleDeleteBook)

// hide books

const handleHideBooks = event => {
    const { target } = event;
    ulList.style.display = target.checked ? "none" : "block";
    
    // const trueStatement = ulList.style.display = 'none';
    // target.checked ? trueStatement : ulList.style.display = "block";
    
    // if(target.checked) {
    //     ulList.style.display = "none"
    // } else {
    //     ulList.style.display = "block"
    // }
}

hideBox.addEventListener('input', handleHideBooks)