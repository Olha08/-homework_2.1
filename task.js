/**
 * Created by Olechka on 11/2/18.
 */

function findIt(arr){
    var res = 0;

    arr.forEach(function(item, i, arr){

        var leftMax = 0;
        var rightMax = 0;
        // find max for left
        for (var j = i; j >= 0; j--){
            if (leftMax < arr[j]){
                leftMax = arr[j];
            }
        }

        // find max for right
        for (var k=i; k < arr.length;k++){
            if (rightMax < arr[k]){
                rightMax = arr[k];
            }
        }

        var min = leftMax;
        if (min > rightMax){
            min = rightMax;
        }
        res += min - arr[i];
    });

    return res;
}

console.log(findIt([2,1,5,0,3,3,7,2,3,1,7]));