/**
 * Returns the indicated property of the object
 * @param {string, string[]} prop
 * @param {object} obj
 * @return {*}
 **/
function getProp(prop,obj) {
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
 * Returns true if value is an empty string, object and array or NaN
 * @param {*} value
 * @return {boolean}
 **/
function isEmpty(value) {
	switch(typeof value) {
		case 'string':
			return !value.trim();
		case 'number':
			return isNaN(value);
		case 'boolean':
			return false;
		case 'object':
			return Object.keys(value).length === 0;
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

export {
	getProp,
	isEmpty,
	isEmptyOrNil,
	isNil,
};