class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}


const lru = new LRUCache(2);
lru.put(1, "A");
lru.put(2, "B");
lru.get(1); // "A" (1 becomes most recently used)
lru.put(3, "C"); // evicts key 2
lru.get(2); // -1