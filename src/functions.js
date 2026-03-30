// ===========================================
// ITERACION 1 — .map()
// ===========================================

function doubleNumbers(numbers) {
  return numbers.map(function (num) {
    return num * 2;
  });
}

function getNames(people) {
  return people.map(function (person) {
    return person.name;
  });
}

function formatPrices(prices) {
  return prices.map(function (price) {
    return "$" + price.toFixed(2);
  });
}

function getInitials(names) {
  return names.map(function (fullName) {
    var words = fullName.split(" ");
    return words.map(function (w) { return w[0]; }).join(".") + ".";
  });
}


// ===========================================
// ITERACION 2 — .filter()
// ===========================================

function getEvenNumbers(numbers) {
  return numbers.filter(function (num) {
    return num % 2 === 0;
  });
}

function getExpensiveProducts(products, minPrice) {
  return products.filter(function (product) {
    return product.price >= minPrice;
  });
}

function getActiveUsers(users) {
  return users.filter(function (user) {
    return user.active;
  });
}

function getLongWords(words, minLength) {
  return words.filter(function (word) {
    return word.length >= minLength;
  });
}


// ===========================================
// ITERACION 3 — .reduce()
// ===========================================

function sumAll(numbers) {
  return numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);
}

function countOccurrences(arr) {
  return arr.reduce(function (acc, item) {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

function flattenArrays(arr) {
  return arr.reduce(function (acc, innerArray) {
    return acc.concat(innerArray);
  }, []);
}

function getOldest(people) {
  return people.reduce(function (oldest, person) {
    return person.age > oldest.age ? person : oldest;
  });
}


// ===========================================
// ITERACION 4 — Combinando 2 metodos
// ===========================================

function getTotalExpensive(products, minPrice) {
  return products
    .filter(function (product) { return product.price >= minPrice; })
    .reduce(function (acc, product) { return acc + product.price; }, 0);
}

function getAdultNames(people) {
  return people
    .filter(function (person) { return person.age >= 18; })
    .map(function (person) { return person.name; });
}

function getSquaresOfEvens(numbers) {
  return numbers
    .filter(function (num) { return num % 2 === 0; })
    .map(function (num) { return num * num; });
}


// ===========================================
// BONUS — Combinando los 3 metodos
// ===========================================

function getDiscountedTotal(products, category) {
  return Math.round(
    products
      .filter(function (p) { return p.category === category; })
      .map(function (p) { return p.price * (1 - p.discount / 100); })
      .reduce(function (acc, price) { return acc + price; }, 0)
    * 100
  ) / 100;
}

function getPassingSummary(students) {
  var names = students
    .filter(function (s) { return s.grade >= 5; })
    .map(function (s) { return s.name; });

  if (names.length === 0) return "Ninguno";
  if (names.length === 1) return names[0];
  return names.slice(0, -1).join(", ") + " y " + names[names.length - 1];
}
