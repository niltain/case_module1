let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData()
    }
};
let data = {};
    let acceptData = () => {
        data["text"] = input.value;
        createPost();
    };
let createPost = () => {
    posts.innerHTML =   `
    <div class="post-bar">
                    <div class="post-avatar">
                        <div class="post-avatar-info">
                        <div class="user-photo">
                            <i class="fa fa-user-circle" aria-hidden="true" style="font-size: 35px"></i>
                        </div>
                        <div class="user-name">Admin</div>
                        </div>
                        <span class="options">
                        <i class="fa fa-pencil-square-o" onclick="editPost(this)" aria-hidden="true"></i>
                        <i class="fa fa-trash-o" onclick="deletePost(this)" aria-hidden="true"></i>
                    </span>
                    </div>
                    <div>
                        <p class="data_text">${data.text}</p>
                    </div>
                </div>
        ` + posts.innerHTML
  input.value = "";
};
let deletePost = (e) =>{
    e.parentElement.parentElement.parentElement.remove();
}
let editPost = (e) => {
    input.value = e.parentElement.parentElement.nextElementSibling.innerText;
    e.parentElement.parentElement.parentElement.remove();
};

