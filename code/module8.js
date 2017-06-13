#Functions

function listPrimes( nPrimes ) {
   let primes = [ ];
   for( var n = 2;  nPrimes > 0;  n++ ) {
       if( isPrime(n) ) {
           primes.push( n );
           --nPrimes;
       }
   }
   return primes;
}

function isPrime( n ) {
   let max = Math.sqrt(n);
   for( var i = 2;  i <= max;  i++ ) {
       if( n % i === 0 )
           return false;
   }
   return true;
}

var firstHundredPrimes = listPrimes(100);
   
for( var i = 0;  i <= firstHundredPrimes.length; i++){
 console.log(firstHundredPrimes[ i ];
}  
