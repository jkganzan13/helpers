/**
 * Iterates through each key in the passed object
 * @param fn - function to call for each key
 *           - receives 3 arguments: value, key and object
 * @param obj -  object to iterate
 */
function forEachObjKey(fn, obj) {
	const keys = Object.keys(obj);
	keys.forEach((key) => {
		fn(obj[key], key, obj);
	});
}

/**
 * Returns the indicated property of the object
 * @param {string, string[]} prop
 * @param {object} obj
 * @return {*}
 **/
function getProp(prop, obj) {
	const path = (Array.isArray(prop)) ? prop : prop.split('.');
	const val = obj[path.shift()];
	return (path.length === 0 || val === undefined) ? val : getProp(path, val);
}

/**
 * Returns true if value is null or undefined
 * @param {*} value
 * @return {boolean}
 **/
function isNil(value) {
	return value === undefined || value === null;
}

/**
 * Returns true if object is empty
 * @param {object} obj
 * @return {boolean}
 **/
function isObjectEmpty(obj) {
	return typeof obj === 'object' && !!obj && Object.keys(obj).length === 0;
}

/**
 * Returns true if value is an empty string, object and array or NaN
 * @param {*} value
 * @return {boolean}
 **/
function isEmpty(value) {
	switch (typeof value) {
		case 'string':
			return !value.trim();
		case 'number':
			return isNaN(value);
		case 'boolean':
			return false;
		case 'object':
			return isObjectEmpty(value);
		default:
			return !value;
	}
}

/**
 * Checks if the argument is empty, null or undefined
 * @param value
 * @return {boolean}
 **/
function isEmptyOrNil(value) {
	return isNil(value) || isEmpty(value);
}

/**
 * Returns an array sorted by its prop in ascending order
 * @param prop - value to compare
 * @param arr - list of elements to sort
 */
function sortByProp(prop, arr) {
	return arr.sort((a, b) => {
		if (a[prop] < b[prop]) {
			return -1;
		}
		if (a[prop] > b[prop]) {
			return 1;
		}
		return 0;
	});
}

export {
	forEachObjKey,
	getProp,
	isEmpty,
	isEmptyOrNil,
	isNil,
	isObjectEmpty,
	sortByProp,
};
