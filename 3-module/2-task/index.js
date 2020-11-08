/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b){
	
	arr.filter(
		function(item){			
			return (item >= a && item <= b);
		}
	);
}
