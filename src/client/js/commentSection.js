const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
var deleteCommentBtn = document.getElementsByClassName("deleteCommentBtn");

const addComment = (text, id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "video__comment";
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const span2 = document.createElement("span");
    span2.innerText = "❌";
    newComment.appendChild(icon);
    newComment.appendChild(span);
    newComment.appendChild(span2);
    newComment.addEventListener("click", handleDelete);
    videoComments.prepend(newComment);
};

// 로그인한 유저만 댓글을 쓰게 해줄것이기 때문에 이렇게.
const handleSubmit = async (event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const text = textarea.value;
    const videoId = videoContainer.dataset.id;
    // 댓글내용이 없으면 요청을 보내지않음.
    if (text === "") {
        return;
    }
    const response = await fetch(`/api/videos/${videoId}/comment`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    //올바른 요청이 왔을때만
    if (response.status === 201) {
        textarea.value = "";
        const { newCommentId } = await response.json();
        addComment(text,newCommentId);
    }
};

const deleteComment = (event) => {
    const commentContainer = document.querySelector(".video__comments ul");
    const commentList = event.target.parentNode;
    commentContainer.removeChild(commentList);  
}

const handleDelete = async (event) => {
    const commentId = event.target.parentElement.dataset.id
    const response = await fetch(`/api/comments/${commentId}/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
    });
    if(response.status === 201) {
        deleteComment(event);
    }
};

for (let i = 0; i< deleteCommentBtn.length; i++) {
    deleteCommentBtn[i].addEventListener("click", handleDelete);
}
if (form) {
    form.addEventListener("submit", handleSubmit);
}