// hard to understand - look again ==> This text is for me


function dayRate(ratePerHour) {
    return ratePerHour * 8;
  }
  
  // console.log(dayRate(12));
  
  function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
  }
  
  // console.log(daysInBudget(10000, 12))
  
  function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const months = Math.floor(numDays / 22);
    const remainder = numDays % 22;
  
    return Math.ceil(
      applyDiscount(22 * dayRate(ratePerHour) * months, discount) +
        remainder * dayRate(ratePerHour)
    );
  }
  
  function applyDiscount(value, percentage) {
    return Math.ceil(value * (1 - percentage));
  }
  
  // console.log(priceWithMonthlyDiscount(56, 160, 0.35))
  