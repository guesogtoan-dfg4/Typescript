let currentAge: number = 19;
let maxAge: number = 72;
let amountPerDay: number = 2;

let yearRemain: number = maxAge - currentAge;
let totalAmount: number = yearRemain * 365 * amountPerDay;

console.log(`You will need to eat ${totalAmount} of your favourite snack to last you until the ripe old age of ${maxAge}`);
