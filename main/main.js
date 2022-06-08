let myImage = document.querySelector('img');
myImage.onclick = function() {
    mySrc = myImage.getAttribute('src');
    if(mySrc === '2233jk.jpg'){
        myImage.setAttribute('src','v2-89aa40908b00c7d23fd265e897fe2989_r.jpg');
    }
    else if(mySrc === 'v2-89aa40908b00c7d23fd265e897fe2989_r.jpg'){
        myImage.setAttribute('src','02789FA6-ABFD-47FB-9630-552DE0575855.jpeg');
    }
    else{
         myImage.setAttribute('src','2233jk.jpg');
    }
}
