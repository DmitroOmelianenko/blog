import { getPosts } from "./api/getpostapi.js";
import { createPost } from "./api/createpostapi.js";
import { deletePost } from "./api/deletepostapi.js";
import { updatePost } from "./api/updatepostapi.js";

const form = document.getElementById("postForm");
const postList = document.getElementById("postList");

let editingId = null;

const renderPosts = async () => {
  const posts = (await getPosts()).reverse();
  postList.innerHTML = posts.map(post => `
    <li class="post-item" data-id="${post.id}">
      <h3>${post.title}</h3>
      <p><b>Автор:</b> ${post.author}</p>
      <p><b>Дата:</b> ${post.date}</p>
      ${post.image ? `<img src="${post.image}" alt="">` : ""}
      <p>${post.description}</p>
      <button class="edit" data-id="${post.id}">✏️</button>
      <button class="del" data-id="${post.id}">❌</button>
    </li>
  `).join("");

  // Події для кнопок "Видалити"
  postList.querySelectorAll(".del").forEach(button => {
    button.addEventListener("click", async () => {
      await deletePost(button.dataset.id);
      renderPosts();
    });
  });

  // Події для кнопок "Редагувати"
  postList.querySelectorAll(".edit").forEach(button => {
    button.addEventListener("click", async () => {
      const post = (await getPosts()).find(p => p.id == button.dataset.id);
      if (!post) return;

      form.title.value = post.title;
      form.author.value = post.author;
      form.date.value = post.date;
      form.image.value = post.image;
      form.description.value = post.description;
      editingId = post.id;
    });
  });
};

form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  editingId ? await updatePost(editingId, data) : await createPost(data);
  editingId = null;
  form.reset();
  renderPosts();
});

renderPosts();
