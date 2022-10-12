var findAllRecipes = function(recipes, ingredients, supplies) {

    /**
     * Iterate through ingrediants and find all recipies that we can make and if we find one, then add that as an ingredient to our ingrediants
     *
     * Repeat until we have visited all the recipies after adding a new ingredient.
     */
};

/**
 *
 * Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
Output: ["bread","sandwich"]
Explanation:
We can create "bread" since we have the ingredients "yeast" and "flour".
We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
 */var findAllRecipes = function(recipes, ingredients, supplies) {
    const setOfIngredients = new Set(supplies);
    const recipesWithIngredients = new Map();
    const progress = new Map();
	//map recipes to it's ingredients and set each recipe to false in another map called progress
    for(let i = 0; i < recipes.length; i++) {
        recipesWithIngredients.set(recipes[i], ingredients[i]);
        progress.set(recipes[i], false)
    }

    const result = [];

    for(const rec of recipes) {
        if(recurse(rec, recipesWithIngredients, setOfIngredients, progress)) {
            result.push(rec);
            setOfIngredients.add(rec);
        }
    }

    return result;
};

function recurse(rec, recipesWithIngredients, setOfIngredients, progress) {
    const currentIngredients = recipesWithIngredients.get(rec);
    for(const ingredient of currentIngredients) {
        if(setOfIngredients.has(rec)) continue;
        if(setOfIngredients.has(ingredient)) continue;

        else if(recipesWithIngredients.has(ingredient)) {
            if(progress.get(ingredient)) return false;
            progress.set(ingredient, true);
            let hasCycle = recurse(ingredient, recipesWithIngredients, setOfIngredients, progress);
            if(!hasCycle) return false;
            setOfIngredients.add(ingredient);
        } else {
            return false;
        }
    }
    return true;
}
brute force

var findAllRecipes = function(recipes, ingredients, supplies) {
    const setOfIngredients = new Set();
    for(const ingredient of supplies) setOfIngredients.add(ingredient);
    const result = [];
    let track = true;
    while(track) {
        track = false;
        for(let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let ingred = ingredients[i];
            if(result.indexOf(recipe) >= 0) continue;
            let hasAllIngredients = true;
            for(const ing of ingred) {
                if(!setOfIngredients.has(ing)) {
                    hasAllIngredients = false;
                    break;
                }
            }
            if(hasAllIngredients) {
                setOfIngredients.add(recipe);
                result.push(recipe);
                track = true;
            }
        }
    }
    return result;
};
Topological sort

var findAllRecipes = function(recipes, ingredients, supplies) {
    const listOfSupplies = new Set(supplies);
    const indexes = new Map();
    const map = new Map();
    for(let i = 0; i < recipes.length; i++) {
        indexes.set(recipes[i], i);
    }

    const indegree = new Array(recipes.length).fill(0);

    for(let i = 0; i < recipes.length; i++) {
        let ingr = ingredients[i];
        for(let ing of ingr) {
            if(listOfSupplies.has(ing)) continue;

            if(!map.has(ing)) map.set(ing, []);
            map.get(ing).push(recipes[i]);
            indegree[i]++;
        }
    }

    const queue = [];
    const result = [];
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) queue.push(i);
    }
    while(queue.length > 0) {
        let idx = queue.shift();
        result.push(recipes[idx]);
        if(!map.has(recipes[idx])) continue;
        const listOfDeps = map.get(recipes[idx]);
        removeDeps(listOfDeps, queue, indexes, indegree)

    }
    return result;
};

function removeDeps(listOfDeps, queue, indexes, indegree) {
    for(const dep of listOfDeps) {
        let depsIdx = indexes.get(dep)
        indegree[depsIdx]--;
        if(indegree[depsIdx] === 0) queue.push(depsIdx)
    }
}
