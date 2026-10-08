{
    // 1.1. Взаимно простые числа (НОД = 1)
    let areCoprime =  function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a === 1;
    }

    // 1.2. Проверка на простоту
    let isPrime = function(n) {
        if (n < 3) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    // теперь стрелочные
    // 1.4. Первые N простых чисел
    let getFirstNPrimes = (n) => {
        let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61];
        let num = 67;

        while (primes.length < n) {
            if (isPrime(num)) { primes.push(num) };
            num += 2;
        }
        return primes.slice(0, n);
    }

    // 1.5. Найти все делители числа
    let getDivisors = (num) => {
        let divs = [1, num];
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divs.push(i);
                if (i !== num / i) {
                    divs.push(num / i);
                }
            }
        }
        return divs.sort((a, b) => a - b);
    }

    // 1.9. Проверка на число Фибоначчи
    let isFibonacci = (n) => {
        if (n < 0) return false;
        let a = 0;
        let b = 1;

        while (a < n) {
            [a, b] = [b, a + b]; // деструктурирующее присваивание
        }
        return a === n;
    }

    // 1.15. Числа на интервале (n, m), которые делятся на сумму своих цифр
    let divisibleByDigitSum = (n, m) => {
        let result = [];

        for (let i = n; i <= m; i++) {
            let sum = 0;

            String(i).split('').forEach(digit => {
                sum += Number(digit)
            });

            if (i % sum === 0) {
                result.push(i);
            }
        }

        return result;
    }

    console.log(areCoprime(17, 88));
    console.log(isPrime(2024));
    console.log(getFirstNPrimes(20));
    console.log(getDivisors(2200));
    console.log(isFibonacci(618));
    console.log(divisibleByDigitSum(50, 100));
}
