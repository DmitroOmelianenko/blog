export const updatePost = async (id, updatedData) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return await res.json();
};
