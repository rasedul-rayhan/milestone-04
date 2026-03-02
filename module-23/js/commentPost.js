// task: make a input box and your written text will be a comment.

document.getElementById('post-btn')
.addEventListener('click', function(){
    const commentTextEl = document.getElementById('comment-text')
    
    const newComment = commentTextEl.value;
    const commentContainer = document.getElementById('comment-container')

    const comment  = document.createElement('p');
    comment.classList.add('comment');
    comment.innerText = newComment;

    commentContainer.appendChild(comment);

    commentTextEl.value = '';


})