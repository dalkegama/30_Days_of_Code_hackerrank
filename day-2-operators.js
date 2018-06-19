function solve(meal_cost, tip_percent, tax_percent) {
    const tip_percent_val = (meal_cost * tip_percent) / 100;
    const tax_percent_val = (meal_cost * tax_percent) / 100;
    const totalCost = meal_cost + tip_percent_val + tax_percent_val;

    console.log(`The total meal cost is ${Math.round(totalCost)} dollars.`);
}