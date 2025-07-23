
export const getPosts = async () => {
  try {
    const res = await fetch("https://687cc83d918b6422432f7281.mockapi.io/posts/posts");
    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};