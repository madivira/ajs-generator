function canIterate(iter) {
  try {
    if(iter[Symbol.iterator]) {
        return true
    }else{
        return false;
    }
  } catch (e) {
    return false;
  }
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
