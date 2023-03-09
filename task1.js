
function func (num1) {
  function a (num2) {
    function b (num3) {
      return num1 + num2 + num3
    }
    return b
  }
  return a
}

console.log(func(2)(3)(5))