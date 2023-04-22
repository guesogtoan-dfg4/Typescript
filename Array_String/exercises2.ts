let arr: any[] = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function retrieve(rev: any[]): number[] {
  let output: number[] = [];
  rev.forEach((truthy) => {
    if (Boolean(truthy) === true) {
      output.push(truthy);
    }
  });
  return output;
}

console.log(retrieve(arr));
