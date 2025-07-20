export const deletePost = async (id) => {
  await fetch(`https://687cc83d918b6422432f7281.mockapi.io/posts/posts/${id}`, {
    method: "DELETE",
  });
};
