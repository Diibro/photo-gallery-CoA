const hasArrayWithSum = (arr, target ) => {
     let start = 0;
     let current_sum = 0;

     for(let end = 0; end < arr.length; end++){
          current_sum += arr[end];
          while (current_sum > target && start <= end) {
               current_sum -= arr[start];
               start++;
          }

          if (current_sum === target) {
               return true;
          }
     }

     return false;
}

const testHasArrayWithSum = (arr, target) => {
     console.log("input: ", arr, target);
     console.log("output: ", hasArrayWithSum(arr, target))
}
testHasArrayWithSum([4, 2, 7, 1, 9, 5], 33);