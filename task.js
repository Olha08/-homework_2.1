/**
 * Created by Olechka on 11/2/18.
 */

function findIt(arr){
    var res = 0;

    for (var i=0;i<arr.length;i++){

        var leftMax = 0;
        var rightMax = 0;
        // find max for left
        for (var j = i; j >= 0; j--){
            leftMax = Math.max(leftMax, arr[j]);
        }

        // find max for right
        for (var k=i; k < arr.length;k++){
            rightMax = Math.max(rightMax, arr[k]);
        }

        res += Math.min(leftMax,rightMax) - arr[i];
    }

    return res;
}

console.log(findIt([2,1,5,0,3,3,7,2,3,1,7]));