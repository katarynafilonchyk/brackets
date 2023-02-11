module.exports = function check(str, bracketsConfig) {
  const brackets_pair = new Map(bracketsConfig);
  let stack = [];
  for (const i of str) { 
    if (brackets_pair.get(stack.at(-1)) === i) {
      stack.pop(); 
    } else { 
      stack.push(i);
    }
  }
  return stack.length === 0;
  }
 
  