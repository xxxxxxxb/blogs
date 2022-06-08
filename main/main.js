let myImage = document.querySelector('img');
class HashMap {
constructor(initialCapacity = 4) {
this.buckets = new Array(initialCapacity);
}
set(key, value) {
const index = this.getIndex(key);
this.buckets[index] = value;
}
get(key) {
const index = this.getIndex(key);
return this.buckets[index];
}
hash(key) {
return key.toString().length;
}
getIndex(key) {
const indexHash = this.hash(key);
const index = indexHash % this.buckets.length;
return index;
}
var photos = HashMap(114514);
photos.set(0,'main/img/2233jk.jpg');
photos.set(1,'main/img/v2-89aa40908b00c7d23fd265e897fe2989_r.jpg')
photos.set(2,'02789FA6-ABFD-47FB-9630-552DE0575855.jpeg')
var cnt = 0;
myImage.onclick = function() {
    if(cnt === 4){
        cnt = 0;
    }
    let mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src', photos.get(cnt + 1);
    cnt = cnt + 1;
}
