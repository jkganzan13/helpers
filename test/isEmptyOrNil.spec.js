import isEmptyOrNil from '../src/isEmptyOrNil';

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
});
