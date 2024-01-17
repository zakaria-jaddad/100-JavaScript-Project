
export default function productsFilter({ prevCategories, category }) {
  let newCategories = [];
  for (const prevCategory of prevCategories) {
    prevCategory !== category ? newCategories.push(prevCategory) : null;
  }
  return newCategories;
}