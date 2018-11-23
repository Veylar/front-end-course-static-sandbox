const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickReset = document.getElementById('click-reset')
const clickStep = document.getElementById('click-step')
const clickMax = document.getElementById('max-value')
const clickStepBtn = document.getElementById('click-step-btn')
const clickMaxBtn = document.getElementById('click-max-btn')
const clicksleftnumber = document.getElementById('clicks-left')

let maxValue = 20
let clicks = 0
let step = 1
let clicksleft = 20

clickBtn.onclick = function() {
  if (clicks < maxValue-step) {
    clicks = clicks + step
    clicksleft = maxValue - clicks
  } else {
    clicks = 'max value reached'
    clicksleft = 'no clicks left :('
  }

clicksleftnumber.innerHTML = clicksleft
clickValue.innerHTML = clicks
}

clickStepBtn.onclick = function() {
 step = step + 1
 clickStep.innerHTML = step
}

clickMaxBtn.onclick = function() {
  maxValue = maxValue + 1
  clickMax.innerHTML = maxValue

  clicksleft = maxValue - clicks
clicksleftnumber.innerHTML = clicksleft
}

clickReset.onclick = function() {
   clicks = 0
   step = 1
   maxValue = 20
   clicksleft = maxValue
clickValue.innerHTML = clicks
clickStep.innerHTML = step
clickMax.innerHTML = maxValue
clicksleftnumber.innerHTML = clicksleft
}
