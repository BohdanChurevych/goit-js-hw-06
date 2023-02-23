const ul = document.querySelector('ul#categories');
const li = ul.children.length
console.log(`Number of categories: ${li}`)
for (const item of ul.children) {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
}