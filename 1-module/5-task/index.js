/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (maxlength >= str.length){
		return str;
	} else {
		const newStr = str.substr(0, maxlength-1) + '…';
		return newStr;
	}
}
