//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
console.log([1, -2, 3].find((n) => n < 0)); //-2
console.log([1, 2, 3].find((n) => n > 10)) //undefined

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
console.log([1, 2, 3, 4].findIndex((n) => n > 2)); //2
console.log([1, 2, 3, 4].findIndex((n) => n > 6)); //-1