export const createPost = async (postData) => {
  try {
    const res = await fetch("https://687cc83d918b6422432f7281.mockapi.io/posts/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
