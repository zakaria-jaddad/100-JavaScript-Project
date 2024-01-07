export default function productsFilter({ prevCategories, category }) {
    console.log(prevCategories, category);
  let newCategories = [];
  for (const categories of prevCategories) {
    categories !== category ? newCategories.push(categories) : null;
  }
  return newCategories;
}
