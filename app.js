var people = [
  {
    name: 'Allison',
    age: 28
  },
  {
    name: 'Chris',
    age: 30
  },
]
var arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
  return a.filter(function (val) {
    return val % 2 === 0
  })
}

alert(even(arr));