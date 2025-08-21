

let btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor='lightblue';
}

document.getElementById('btn-make-pink').addEventListener('click',function makePink(){
    document.body.style.backgroundColor='pink';
});

document.getElementById('btn-update-title').addEventListener('click',function update(){
    let pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText="MY CREATION";
});

document.getElementById('btn-update').addEventListener('click',function(){
    let nameInput=document.getElementById('input-name');
    console.log(nameInput);
    let name=nameInput.value;
    console.log(name);
    let nameP = document.getElementById('name');
    nameP.innerText = name;
});

document.getElementById('btn-post-comment').addEventListener('click',function(){
    let commentTextBox = document.getElementById('comment-text-box');
    let newComment =commentTextBox.value;
    let commentContainer = document.getElementById('comment-container');
    console.log(commentContainer);
    let commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;
    commentContainer.appendChild(commentElement);
    commentTextBox.value ='';
})