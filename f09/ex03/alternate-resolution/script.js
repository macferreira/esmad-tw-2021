let x = 0
let y = -1
let z = 4

let nums = [x, y, z]
let sortedNums = nums.sort().reverse()
let sortedNumsString = ''

for (let i = 0; i < nums.length; i++) {
  if (i !== nums.length - 1) {
    sortedNumsString += nums[i].toString() + ', '
  } else {
    sortedNumsString += nums[i].toString()
  }
}
window.alert(sortedNumsString)
