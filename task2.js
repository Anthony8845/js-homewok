let array = [2, 3, 6, 1, 4, 8, 7, 5, 9];

function quickSort(arr) {
  if(arr.length<=2) return arr
  let pivot = arr[0]
  let left = []
  let right = []

  for (let n = 1; n < arr.length; n++) {
    if (arr[n] < pivot) {
      left.push(arr[n])
    } else if (arr[n] > pivot) {
      right.push(arr[n])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(array))

