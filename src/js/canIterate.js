function canIterate(iter) {
  try {
    iter[Symbol.iterator]().next().done;
    return true;
  } catch (e) {
    return false;
  }
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
