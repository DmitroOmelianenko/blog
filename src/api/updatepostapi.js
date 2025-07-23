export const updatePost = async (id, updatedData) => {
  try {
    const res = await fetch(`https://687cc83d918b6422432f7281.mockapi.io/posts/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};