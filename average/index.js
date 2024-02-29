const sum = (arr) => arr.reduce((acc,el) => acc+el,0);
const nums = [2,5,7,8];
const avg = sum(nums)/nums.length;
console.log(avg);