// b < d   = 3 < 2   =>
// e >= b  = 5 >= 3   =>
// a == d  ='1' == 2   =>
// c === a = 1 === '1'  =>
// c > a   = 1 > '1'  =>
// f >= b  ='4' >= 3   =>
// a === f ='1' === '4'  =>
// a <= c  ='1' <= 1   =>
// f < e   ='4' < 5   =>

// a = 1
// b = 3
// c = a(1)
// d = 2
// a = '1'
// e = 5
// f = '4'

// b < d && b < d ===========> 

// e >= b && b < d ===========> 

// a == d || e >= b ==========> check('1' == 1)

// c === a || c === a ==========> 

// c > a && c === a ==========> 1 > 

// f >= b && c > a && a === f ==> 

// a === f || f >= b && a <= c && f < e