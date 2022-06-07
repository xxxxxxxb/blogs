let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'main/img/2233jk.jpg') {
      myImage.setAttribute('src', 'main/img/v2-89aa40908b00c7d23fd265e897fe2989_r.jpg');
    } else {
      myImage.setAttribute('src', 'main/img/2233jk.jpg');
    }
}
