chrome.runtime.onMessage.addListener((msg, sender) => {
  console.log(msg);
  if (msg.txt = 'kill') {
    document.querySelectorAll('.tp-modal, .tp-backdrop').forEach( elem => elem.remove() );
    document.querySelector('body').classList.remove('tp-modal-open');
  }
})
