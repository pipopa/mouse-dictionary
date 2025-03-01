/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

class ShortCache {
  constructor(size) {
    this.size = size;
    this.list = createArray(size, "");
    this.dict = {};
    this.index = 0;
  }

  put(key, value) {
    if (this.get(key)) {
      return;
    }

    let currentData = this.list[this.index];
    if (currentData) {
      const oldKey = currentData.key;
      delete this.dict[oldKey];
    } else {
      currentData = {};
      this.list[this.index] = currentData;
    }
    currentData.key = key;
    currentData.value = value;

    this.dict[key] = this.index;

    this.index = (this.index + 1) % this.size;
  }

  get(key) {
    if (!key) {
      return null;
    }

    const index = this.dict[key];
    if (index === undefined) {
      return null;
    }

    return this.list[index].value;
  }
}

/**
 * Create a "packed" array.
 * See also: https://v8.dev/blog/elements-kinds
 */
const createArray = (length, initialValue) => {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(initialValue);
  }
  return newArray;
};

export default ShortCache;
