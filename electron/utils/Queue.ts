export default class Queue<T> {

    private _head: QueueItem<T>;
    private _tail: QueueItem<T>;
    private _length: number;

    constructor(...values: T[]) {

        this._head = this._tail = null;
        this._length = 0;

        if (values.length > 0) {
            values.forEach((value) => {
                this.append(value);
            });
        }
    }

    * iterator(): IterableIterator<T> {
        let currentItem = this._head;

        while (currentItem) {
            yield currentItem.value
            currentItem = currentItem.next
        }
    }

    [Symbol.iterator]() {
        return this.iterator();
    }

    get headVal(): T {
        return this._head ? this._head.value : null;
    }

    get head(): QueueItem<T> {
        return this._head ? this._head : null;
    }

    get tailVal(): T {
        return this._tail ? this._tail.value : null;
    }

    get tail(): QueueItem<T> {
        return this._tail ? this._tail : null;
    }

    get length(): number {
        return this._length;
    }

    // Adds the element at a specific position inside the linked list
    insert(val: T, previousItem: T, checkDuplicates: boolean = false): boolean {

        if (checkDuplicates && this.isDuplicate(val)) {
            return false;
        }

        let newItem: QueueItem<T> = new QueueItem<T>(val);
        let currentItem: QueueItem<T> = this._head;

        if (!currentItem) {
            return false;
        } else {
            while (true) {
                if (currentItem.value === previousItem) {
                    newItem.next = currentItem.next;
                    newItem.prev = currentItem;
                    currentItem.next = newItem;

                    if (newItem.next) {
                        newItem.next.prev = newItem;
                    } else {
                        this._tail = newItem;
                    }
                    this._length++;
                    return true;
                } else {
                    if (currentItem.next) {
                        currentItem = currentItem.next;
                    }
                    else {
                        // can't locate previousItem
                        return false;
                    }
                }
            }
        }
    }

    // Adds the element at the end of the linked list
    append(val: T, checkDuplicates: boolean = false): boolean {

        if (checkDuplicates && this.isDuplicate(val)) {
            return false;
        }

        let newItem = new QueueItem<T>(val);

        if (!this._tail) {
            this._head = this._tail = newItem;
        } else {
            this._tail.next = newItem;
            newItem.prev = this._tail;
            this._tail = newItem;
        }

        this._length++;
        return true;
    }

    // Add the element at the beginning of the linked list
    prepend(val: T, checkDuplicates: boolean = false): boolean {

        if (checkDuplicates && this.isDuplicate(val)) {
            return false;
        }

        let newItem = new QueueItem<T>(val);

        if (!this._head) {
            this._head = this._tail = newItem;
        } else {
            newItem.next = this._head;
            this._head.prev = newItem;
            this._head = newItem;
        }

        this._length++;
        return true;
    }

    remove(val: T): T {
        let currentItem = this._head;

        if (!currentItem) {
            return;
        }

        if (currentItem.value === val) {
            this._head = currentItem.next;
            this._head.prev = null;
            currentItem.next = currentItem.prev = null;
            this._length--;
            return currentItem.value;

        } else {
            while (true) {
                if (currentItem.value === val) {
                    if (currentItem.next) { // special case for last element
                        currentItem.prev.next = currentItem.next;
                        currentItem.next.prev = currentItem.prev;
                        currentItem.next = currentItem.prev = null;
                    } else {
                        currentItem.prev.next = null;
                        this._tail = currentItem.prev;
                        currentItem.next = currentItem.prev = null;
                    }
                    this._length--;
                    return currentItem.value;
                } else {
                    if (currentItem.next) {
                        currentItem = currentItem.next;
                    } else {
                        return;
                    }
                }
            }
        }
    }

    removeHead(): T {
        let currentItem = this._head;

        // empty list
        if (!currentItem) {
            return;
        }

        // single item list
        if (!this._head.next) {
            this._head = null;
            this._tail = null;

            // full list
        } else {
            this._head.next.prev = null;
            this._head = this._head.next;
            currentItem.next = currentItem.prev = null;
        }

        this._length--;
        return currentItem.value;
    }

    removeTail(): T {
        let currentItem = this._tail;

        // empty list
        if (!currentItem) {
            return;
        }

        // single item list
        if (!this._tail.prev) {
            this._head = null;
            this._tail = null;

            // full list
        } else {
            this._tail.prev.next = null;
            this._tail = this._tail.prev;
            currentItem.next = currentItem.prev = null;
        }

        this._length--;
        return currentItem.value;
    }

    first(num: number): T[] { //O(n) operation
        let iter = this.iterator();
        let result = [];

        let n = Math.min(num, this.length);

        for (let i = 0; i < n; i++) {
            let val = iter.next();
            result.push(val.value);
        }
        return result;
    }

    search(node: QueueItem<T>, val: any): QueueItem<T> { // this is linear O(n)
        if (node === null)
            return null;

        if (node.value === val) {
            return node;
        }
        return this.search(node.next, val);
    }

    last(num: number): T[] { //O(1) for subtraction and O(n) for looping and O(1) pushing to new array
        let result = [];
        let n = this.length - num; //nth position
        const arr = this.toArray();
        for (let i = n; i < arr.length; i++) {
            result.push(arr[i])
        }
        return result;
    }

    toArray(): T[] {
        return [...this];
    }

    private isDuplicate(val: T): boolean {
        let set = new Set(this.toArray());
        return set.has(val);
    }
}

export class QueueItem<T> {
    value: T;
    next: QueueItem<T>;
    prev: QueueItem<T>;

    constructor(val: T) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}
