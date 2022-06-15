let posts = [];
loadPosts();

document.getElementById('post-add').onclick = function () {
  let postName = document.getElementById('post-name');
  let postBody = document.getElementById('post-body');
  const post = {
    name: postName.value,
    body: postBody.value
  }

  postName.value = '';
  postBody.value = '';
  posts.push(post);
  savePosts();
  showPosts();
  finish();
}

function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
  if (localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'))
  };
  showPosts();
}

function showPosts() {
  let postsField = document.getElementById('posts-field')
  let out = '';
  posts.forEach(function (item) {
    out = `</div>` + out;
    out = `</div>` + out;
    out = `<p class="text-r">${item.body}</p>` + out;
    out = `<div class="notetext">` + out;
    out = `</div>` + out;
    out = `<h3 class="text-lr">${item.name}</h3>` + out;
    out = `<div class="subjecttext">` + out;
    out = `<div class="block-lm">` + out;
  });
  postsField.innerHTML = out;
}

function finish() {
  document.location.reload(true);
}