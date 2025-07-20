export const getPosts = async () => {
  const res = await fetch("https://687cc83d918b6422432f7281.mockapi.io/posts/posts");
  return await res.json();
};
