
export function getPostForm(post = {}) {
  return `
    <form id="postForm">
      <input type="hidden" name="id" value="${post.id || ''}">
      <input type="text" name="title" placeholder="Назва" value="${post.title || ''}" required>
      <input type="text" name="image" placeholder="URL зображення" value="${post.image || ''}" required>
      <textarea name="description" placeholder="Опис" required>${post.description || ''}</textarea>
      <button type="submit">${post.id ? 'Оновити' : 'Додати'} пост</button>
    </form>
  `;
}
