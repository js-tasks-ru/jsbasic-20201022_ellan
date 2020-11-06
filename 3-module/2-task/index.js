/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b){
	
	arr.filter(
		function(item){
			
			if(item >= a && item <= b){
				return item;
			}
		}
	);
}
