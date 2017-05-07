import {
	getProp,
	isEmpty,
	isEmptyOrNil,
	isNil,
	isObjectEmpty,
	sortByProp,
} from '../src';

describe('getProp', () => {
	it('should return the indicated property of an object', () => {
		const expected = 'hello world';
		const obj = { a: expected };
		const prop = 'a';
		const result = getProp(prop, obj);
		expect(result).to.equal(expected);
	});
	it('should return the indicated property of a nested object', () => {
		const expected = 'hello world';
		const obj = {
			a: {
				b: expected
			}
		};
		const prop = 'a.b';
		const result = getProp(prop, obj);
		expect(result).to.equal(expected);
	});
	it('should return undefined if prop is not found', () => {
		const obj = { a: 'hello world' };
		const prop = 'a.b';
		const prop2 = 'a.b.c';
		const result = getProp(prop, obj);
		const result2 = getProp(prop2, obj);
		expect(result).to.equal(undefined);
		expect(result2).to.equal(undefined);
	});
});

describe('isEmpty', () => {
	it('should return true when argument is an empty string', () => {
		const result = isEmpty('');
		expect(result).to.be.true;
	});
	it('should return true when argument is NaN', () => {
		const result = isEmpty(NaN);
		expect(result).to.be.true;
	});
	it('should return false when argument is a string', () => {
		const result = isEmpty('hello world');
		expect(result).to.be.false;
	});
	it('should return false when argument is a number', () => {
		const result = isEmpty(1);
		expect(result).to.be.false;
	});
	it('should return false when argument is true (boolean)', () => {
		const result = isEmpty(true);
		expect(result).to.be.false;
	});
	it('should return false when argument is false (boolean)', () => {
		const result = isEmpty(false);
		expect(result).to.be.false;
	});
	it('should return true when object is empty', () => {
		const result = isEmpty({});
		expect(result).to.be.true;
	});
});

describe('isEmptyOrNil', () => {
	it('should return true when argument is an empty string', () => {
		const result = isEmptyOrNil('');
		expect(result).to.be.true;
	});
	it('should return true when argument is null', () => {
		const result = isEmptyOrNil(null);
		expect(result).to.be.true;
	});
	it('should return true when argument is undefined', () => {
		const result = isEmptyOrNil(undefined);
		expect(result).to.be.true;
	});
	it('should return true when argument is NaN', () => {
		const result = isEmptyOrNil(NaN);
		expect(result).to.be.true;
	});
	it('should return false when argument is a string', () => {
		const result = isEmptyOrNil('hello world');
		expect(result).to.be.false;
	});
	it('should return false when argument is a number', () => {
		const result = isEmptyOrNil(1);
		expect(result).to.be.false;
	});
	it('should return false when argument is true (boolean)', () => {
		const result = isEmptyOrNil(true);
		expect(result).to.be.false;
	});
	it('should return false when argument is false (boolean)', () => {
		const result = isEmptyOrNil(false);
		expect(result).to.be.false;
	});
	it('should return true when object is empty', () => {
		const result = isEmptyOrNil({});
		expect(result).to.be.true;
	});
});

describe('isNil', () => {
	it('should return true when argument is null', () => {
		const result = isNil(null);
		expect(result).to.be.true;
	});
	it('should return true when argument is undefined', () => {
		const result = isNil(undefined);
		expect(result).to.be.true;
	});
});

describe('isObjectEmpty', () => {
	it('should return true when argument is an empty object', () => {
		const result = isObjectEmpty({});
		expect(result).to.be.true;
	});
	it('should return false when argument is not an object', () => {
		const result1 = isObjectEmpty('string');
		const result2 = isObjectEmpty(123);
		const result3 = isObjectEmpty(false);
		const result4 = isObjectEmpty(null);
		const result5 = isObjectEmpty(undefined);
		const result6 = isObjectEmpty(true);
		expect(result1).to.be.false;
		expect(result2).to.be.false;
		expect(result3).to.be.false;
		expect(result4).to.be.false;
		expect(result5).to.be.false;
		expect(result6).to.be.false;
	});
	it('should return false when argument is NOT an empty object', () => {
		const result = isObjectEmpty({ a: 'hello' });
		expect(result).to.be.false;
	});
});

describe('sortByProp', () => {
	const list = [
		{ prop: 'b' },
		{ prop: 'd' },
		{ prop: 'e' },
		{ prop: 'a' },
		{ prop: 'c' },
	];
	it('should sort the list according to the prop specified', () => {
		const expected = [
			{ prop: 'a' },
			{ prop: 'b' },
			{ prop: 'c' },
			{ prop: 'd' },
			{ prop: 'e' },
		];
		const result = sortByProp('prop', list);
		expect(result).to.eql(expected);
	});
	it('should sort the list in ascending order by default', () => {
		const notExpected = [
			{ prop: 'e' },
			{ prop: 'd' },
			{ prop: 'c' },
			{ prop: 'b' },
			{ prop: 'a' },
		];
		const result = sortByProp('prop', list);
		expect(result).to.not.eql(notExpected);
	});
});