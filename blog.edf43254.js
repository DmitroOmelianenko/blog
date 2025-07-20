const t=async()=>{let t=await fetch("http://localhost:3000/posts");return await t.json()},e=async t=>{let e=await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await e.json()},a=async t=>{await fetch(`http://localhost:3000/posts/${t}`,{method:"DELETE"})},i=async(t,e)=>{let a=await fetch(`http://localhost:3000/posts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await a.json()},s=document.getElementById("postForm"),n=document.getElementById("postList");let o=null;const l=async()=>{n.innerHTML=(await t()).reverse().map(t=>`
    <li class="post-item" data-id="${t.id}">
      <h3>${t.title}</h3>
      <p><b>\u{410}\u{432}\u{442}\u{43E}\u{440}:</b> ${t.author}</p>
      <p><b>\u{414}\u{430}\u{442}\u{430}:</b> ${t.date}</p>
      ${t.image?`<img src="${t.image}" alt="">`:""}
      <p>${t.description}</p>
      <button class="edit" data-id="${t.id}">\u{270F}\u{FE0F}</button>
      <button class="del" data-id="${t.id}">\u{274C}</button>
    </li>
  `).join(""),n.querySelectorAll(".del").forEach(t=>{t.addEventListener("click",async()=>{await a(t.dataset.id),l()})}),n.querySelectorAll(".edit").forEach(e=>{e.addEventListener("click",async()=>{let a=(await t()).find(t=>t.id==e.dataset.id);a&&(s.title.value=a.title,s.author.value=a.author,s.date.value=a.date,s.image.value=a.image,s.description.value=a.description,o=a.id)})})};s.addEventListener("submit",async t=>{t.preventDefault();let a=Object.fromEntries(new FormData(s));o?await i(o,a):await e(a),o=null,s.reset(),l()}),l();
//# sourceMappingURL=blog.edf43254.js.map
