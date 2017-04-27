import R from 'ramda';

/**
 * Checks if the argument is empty, null or undefined
 * @param value
 * @return {boolean}
 **/
const isEmptyOrNil = value => (
	R.isNil(value) ||
	R.isEmpty(R.trim(value.toString())) ||
	(typeof value === 'number' && isNaN(value))
);

export default isEmptyOrNil;