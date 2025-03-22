/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
  const graph = new Map();
  const inDegree = new Map();
  const available = new Set(supplies);
  const result = [];

  recipes.forEach((recipe, i) => {
    ingredients[i].forEach((ingredient) => {
      if (!graph.has(ingredient)) {
        graph.set(ingredient, []);
      }
      graph.get(ingredient).push(recipe);
    });
    inDegree.set(recipe, ingredients[i].length);
  });

  const queue = [...supplies];

  while (queue.length > 0) {
    const item = queue.shift();

    if (graph.has(item)) {
      for (const recipe of graph.get(item)) {
        inDegree.set(recipe, inDegree.get(recipe) - 1);

        if (inDegree.get(recipe) === 0) {
          available.add(recipe);
          result.push(recipe);
          queue.push(recipe);
        }
      }
    }
  }

  return result;
};
