const liItems = document.querySelectorAll('#categories li.item').length;
console.log(liItems);

const categories = document.querySelectorAll('#categories .item');
categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems}`);
});
