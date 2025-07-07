function prime_numbers(n) {
    const primes = [];

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }  

    // Find primes until we get 'n' prime numbers
    let number = 2;  // Start checking from 2
    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes;
}
console.log(prime_numbers(5))
