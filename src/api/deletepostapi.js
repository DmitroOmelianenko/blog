export const deletePost = async (id) => {
  try {
    const res = await fetch(`https://687cc83d918b6422432f7281.mockapi.io/posts/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
