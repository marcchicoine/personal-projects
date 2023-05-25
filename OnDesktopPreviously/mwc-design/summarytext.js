// if the a tag darkdays contains current
// 1) make darkdaystxt visible
// 2) make other text display none
//rinse and repeat

const ddfilter = document.querySelector('a.dd')
const tafilter = document.querySelector('a.ta')
const yafilter = document.querySelector('a.ya')
const psfilter = document.querySelector('a.ps')
const ddtag = document.querySelector('div.darkDaystxt')
const tatag = document.querySelector('div.treacherytxt')
const yatag = document.querySelector('div.yablatxt')
const pstag = document.querySelector('div.propertySpongetxt')
console.log(ddfilter)
ddfilter.addEventListener('click', function() {
  ddtag.classList.remove('hide')
  tatag.classList.add('hide')
  yatag.classList.add('hide')
  pstag.classList.add('hide')
})
tafilter.addEventListener('click', function() {
  ddtag.classList.add('hide')
  tatag.classList.remove('hide')
  yatag.classList.add('hide')
  pstag.classList.add('hide')
})
yafilter.addEventListener('click', function() {
  ddtag.classList.add('hide')
  tatag.classList.add('hide')
  yatag.classList.remove('hide')
  pstag.classList.add('hide')
})
psfilter.addEventListener('click', function() {
  ddtag.classList.add('hide')
  tatag.classList.add('hide')
  yatag.classList.add('hide')
  pstag.classList.remove('hide')
})

//on load -> make sure dark days filter click event is activated
