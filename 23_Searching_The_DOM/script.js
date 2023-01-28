//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let ctitle = document.getElementsByClassName('card-title')[0]; // return node list
ctitle.style.color = 'red';

ctitle = document.getElementById('firstcardtitle'); // returns node
ctitle.style.color = 'pink';

ctitle = document.querySelectorAll('.card-title'); // returns a node list
console.log(ctitle);

ctitle = document.getElementsByTagName('div') // return a node list of all divs
console.log(ctitle);

// getElementsByName() --> returns a node list of all elements with the same name attribute