import {
	getProp,
	isEmptyOrNil,
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
});
