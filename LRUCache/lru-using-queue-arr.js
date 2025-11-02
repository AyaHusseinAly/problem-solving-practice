class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = []; // stores keys in LRU order (front = oldest)
        this.cache = {};
    }

    get(key) {
        if (!(key in this.cache)) return null;

        // Move this key to the end (most recent)
        const index = this.queue.indexOf(key);
        this.queue.splice(index, 1);
        this.queue.push(key);

        return this.cache[key];
    }

    put(key, value) {
        // If key exists, update and move to end
        if (key in this.cache) {
            const index = this.queue.indexOf(key);
            this.queue.splice(index, 1);
            this.queue.push(key);
            this.cache[key] = value;
            return;
        }

        // If full, remove the least used (front of queue)
        if (this.queue.length === this.capacity) {
            const oldestKey = this.queue.shift();
            delete this.cache[oldestKey];
        }

        // Insert new key
        this.queue.push(key);
        this.cache[key] = value;
    }
}


const lru = new LRUCache(2);

lru.put("a", 1); // cache: a
lru.put("b", 2); // cache: a, b
console.log(lru.get("a")); // 1 → a becomes most recent (b, a)
lru.put("c", 3); // removes b → cache: a, c
console.log(lru.get("b")); // null
console.log(lru.get("c")); // 3