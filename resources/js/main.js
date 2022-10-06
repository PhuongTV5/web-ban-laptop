// -------------SLIDE---------------------------
var Kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = Kichthuoc * Img.length;
Max -= Kichthuoc;
var Chuyen = 0;
function Next(){
    if(Chuyen<Max) Chuyen += Kichthuoc;
    else Chuyen = 0;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}
function Back(){
    if(Chuyen == 0) Chuyen = Max; 
    else Chuyen -= Kichthuoc;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

setInterval(function(){
     Next();
}, 3000)