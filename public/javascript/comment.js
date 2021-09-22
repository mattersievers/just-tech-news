async function commentFormHandler(event){
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body
        })
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);