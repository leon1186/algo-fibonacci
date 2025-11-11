function fibonacci(num) {
  //Fibonacci ex expects adding 2 numbers (a and b), then adding the 2nd number to the solution
  // and taking that solution (c) and adding it to (b) for as long as n is required.
  //example i1: (a)0 + (b)1 = (c)1, n-1 + n-2, = n
  // b + c = d = 1 + 1 = 2, 2 + 1 = 3, 3+2 = 5
  //at n = 9 : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34: 
  
  // @n = 3: a (n-2) + b (n-1) = c (n)
  //zero base case
  if (num === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  let c; //working addition place holder
  //for loop to add i iterations until n (num)
  for (let i = 2; i <= num; i++) {
    c = a + b; //takes a sum of previos and sets it to current n
    a = b;
    b = c;
  }
  return b;
}

module.exports = fibonacci;
