function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// add HTML content
document.querySelector('#counter').innerHTML = `
  <div>
    <div class="card">
      <button id="counterBtn" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counterBtn'))