const head = document.getElementById("head");
console.log(head.textContent);

//const items = document.querySelectorAll('.item')
//items.foreeach((item)=>console.log(item.inner.HTML));

//const item = document.querySelector('.item')
//console.log(item.textContent);

//for (let index = 0; index < items.length; index++) {
  //console.log(items[index].textContent);
//}

const item = document.querySelector(".item");
item.innerHTML = "<em>text</em><ul><li>javascript</li></ul";
