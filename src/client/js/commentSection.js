const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

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
    await fetch(`/api/videos/${videoId}/comment`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    textarea.value = "";
};

if (form) {
    form.addEventListener("submit", handleSubmit);
}