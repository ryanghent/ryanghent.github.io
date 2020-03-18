if (window.performance) {
  console.info('window.performance works fine on this browser')
}

if (performance.navigation.type == 1) {
  document.body.classList.add('loading')
}

setTimeout(function() {
  document.body.className = document.body.className.replace('loading', '')
}, 1500)

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
var day = days[new Date().getDay()]
document.getElementById('time').innerHTML = "It's " + day + '. '
