let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/2233jk.jpg') {
      myImage.setAttribute('src', 'img/22d1098286b9f162041cd9c67c5377f0.jpg');
    } else {
      myImage.setAttribute('src', 'img/2233jk.jpg');
    }
}
