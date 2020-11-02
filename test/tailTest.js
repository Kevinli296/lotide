const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns [2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });

    it("returns [4, 5, 6] for [1, 4, 5, 6]", () => {
        assert.deepEqual(tail([1, 4, 5, 6]), [4, 5, 6]); 
    });
    
    it("returns ['lighthouse', 'labs'] for ['hello', 'lighthouse', 'labs']", () => {
        assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']); 
    });

    it("returns [] for [5]", () => {
        assert.deepEqual(tail([5]), []); 
    });

  });