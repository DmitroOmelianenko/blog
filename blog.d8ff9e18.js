const t=async()=>{try{let t=await fetch("https://687cc83d918b6422432f7281.mockapi.io/posts/posts");return await t.json()}catch(t){throw console.error("Error fetching posts:",t),t}},e=async t=>{try{let e=await fetch("https://687cc83d918b6422432f7281.mockapi.io/posts/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await e.json()}catch(t){throw console.error("Error creating post:",t),t}},a=async t=>{try{await fetch(`https://687cc83d918b6422432f7281.mockapi.io/posts/posts/${t}`,{method:"DELETE"})}catch(t){throw console.error("Error deleting post:",t),t}},o=async(t,e)=>{try{let a=await fetch(`https://687cc83d918b6422432f7281.mockapi.io/posts/posts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await a.json()}catch(t){throw console.error("Error updating post:",t),t}},i=document.getElementById("postForm"),s=document.getElementById("postList");let r=null;const c=async()=>{s.innerHTML=(await t()).reverse().map(t=>`
    <li class="post-item" data-id="${t.id}">
      <h3>${t.title}</h3>
      <p><b>\u{410}\u{432}\u{442}\u{43E}\u{440}:</b> ${t.author}</p>
      <p><b>\u{414}\u{430}\u{442}\u{430}:</b> ${t.date}</p>
      ${t.image?`<img src="${t.image}" alt="">`:""}
      <p>${t.description}</p>
      <button class="edit" data-id="${t.id}">\u{270F}\u{FE0F}</button>
      <button class="del" data-id="${t.id}">\u{274C}</button>
    </li>
  `).join(""),s.querySelectorAll(".del").forEach(t=>{t.addEventListener("click",async()=>{await a(t.dataset.id),c()})}),s.querySelectorAll(".edit").forEach(e=>{e.addEventListener("click",async()=>{let a=(await t()).find(t=>t.id==e.dataset.id);a&&(i.title.value=a.title,i.author.value=a.author,i.date.value=a.date,i.image.value=a.image,i.description.value=a.description,r=a.id)})})};i.addEventListener("submit",async t=>{t.preventDefault();let a=Object.fromEntries(new FormData(i));r?await o(r,a):await e(a),r=null,i.reset(),c()}),c();
//# sourceMappingURL=blog.d8ff9e18.js.map
