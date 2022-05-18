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
}

function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
  if (localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'))
  };
  showPosts();
  putnum();
}

function putnum() {
  let lengthp = document.getElementsByClassName('block-lm').length;
  document.getElementsByClassName("count-text").innerHTML = lengthp;
}

function showPosts() {
  let postsField = document.getElementById('posts-field')
  let out = '';
  posts.forEach(function (item) {
    out = `</div>` + out;
    out = `</div>` + out;
    out = `<p class="text-r">${item.body}</p>` + out;
    out = `<div class="notetext">` + out;
    out = `<h3 class="text-lr">${item.name}</h3>` + out;
    out = `<div class="block-lm">` + out;
  });
  postsField.innerHTML = out;
}