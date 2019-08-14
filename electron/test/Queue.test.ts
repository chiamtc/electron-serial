import {expect, assert} from 'chai';
import Queue, {QueueItem} from '../utils/Queue';

const faker = require('faker');
describe('Queue', () => {
    it('empty queue', () => {
        const q = new Queue<string>();
        expect(q.tail).equal(null);
        expect(q.head).equal(null);
        expect(q.length).equal(0);
    });

    it('initialize queue', () => {

        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue([word, word2])
        expect(q.length).equal(1);
        const a = q.headVal;
        const b = q.tailVal;
    });

    it('appends queue', () => {
        const word = faker.random.word();
        const q = new Queue<string>();
        q.append(word);
        q.append(word);
        expect(q.length).equal(2);
        expect(q.tail.value).equal(word);
    })

    it('appends queue, check boolean:true', () => {
        const word = faker.random.word();
        const q = new Queue<string>();
        q.append(word, true);
        q.append(word, true);
        expect(q.length).equal(1);
        expect(q.tail.value).equal(word);
    })

    it('insert queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.insert(word2, word);
        expect(q.length).equal(0);
    })


    it('insert queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.insert(word2, word);
        expect(q.length).equal(2);
        expect(q.tail.value).equal(word2);
        expect(q.head.value).equal(word);
    })

    it('insert queue:check boolean true', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2)
        q.insert(word2, word, true);
        q.insert(word2, word, true);
        expect(q.length).equal(2);
        expect(q.tail.value).equal(word2);
        expect(q.head.value).equal(word);
    })


    it('prepend queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.prepend(word)
        q.prepend(word2, word);
        expect(q.length).equal(2);
        expect(q.tail.value).equal(word);
        expect(q.head.value).equal(word2);
    })

    it('remove an item from with 0 item in queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.remove(word);
        expect(q.length).equal(0)
    })

    it('remove an item from with 2 items in queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        expect(q.length).equal(2);

        q.remove(word);
        expect(q.length).equal(1)
    })

    it('remove last item from queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        expect(q.length).equal(2);

        q.remove(word2);
        expect(q.length).equal(1)
    });

    it('removeHead from queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        expect(q.length).equal(2);

        q.removeHead();
        expect(q.length).equal(1)
    })

    it('removeTail from queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        expect(q.length).equal(2);

        q.removeTail();
        expect(q.length).equal(1)
    });

    it('get first 2 items with 3 items in queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const word3 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        q.append(word3);
        expect(q.length).equal(3);

        const first2 = q.first(2);
        expect(first2).to.have.length(2);
        expect(first2[0]).equal(word);
        expect(first2[1]).equal(word2);
    });

    it('get last 2 items with 3 items in queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const word3 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        q.append(word3);
        expect(q.length).equal(3);

        const first2 = q.last(2);
        expect(first2).to.have.length(2);
        expect(first2[0]).equal(word2);
        expect(first2[1]).equal(word3);
    });

    it('search an item in queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const word3 = faker.random.word();
        const q = new Queue<string>();
        const qItem = new QueueItem(word);
        q.append(word)
        q.append(word2);
        q.append(word3);
        expect(q.length).equal(3);
        const found = q.search(qItem, word);
        expect(found.value).equal(word);
    });

    it('toArray of a queue', () => {
        const word = faker.random.word();
        const word2 = faker.random.word();
        const word3 = faker.random.word();
        const q = new Queue<string>();
        q.append(word)
        q.append(word2);
        q.append(word3);
        expect(q.length).equal(3);

        assert.isArray(q.toArray());
    });


});
