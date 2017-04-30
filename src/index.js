import R from 'ramda';

/**
 * Returns the indicated property of the object
 * @param {string, string[]} prop
 * @param {object} obj
 * @return {function}
 **/
function getProp(prop, obj) {
	const path = (Array.isArray(prop)) ? prop : prop.split('.');
	const val = obj[path.shift()];
	return (path.length === 0 || val === undefined) ? val : getProp(path, val);
}

/**
 * Checks if the argument is empty, null or undefined
 * @param value
 * @return {boolean}
 **/
function isEmptyOrNil(value) {
	return (
		R.isNil(value) ||
		R.isEmpty(R.trim(value.toString())) ||
		(typeof value === 'number' && isNaN(value))
	);
}

export {
	getProp,
	isEmptyOrNil
};