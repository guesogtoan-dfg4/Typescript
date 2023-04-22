let color: String[] = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o: String[] = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let suffix: String;
  if (i + 1 > 3) {
    suffix = o[0];
  } else {
    suffix = o[i + 1];
  }
  console.log(`${i + 1}${suffix} choice is ${color[i]}`);
}
