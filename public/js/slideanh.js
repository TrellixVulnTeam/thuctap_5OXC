var KichThuoc = document.getElementsByClassName("slide_picture")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
var ChuyenSlide1 = document.getElementsByClassName("chuyen-slide")[1];
var ChuyenSlide2 = document.getElementsByClassName("chuyen-slide")[2];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
var Chuyen1 = 0;
var Chuyen2 = 0;
var n;
var dodai;

function Next(n) {
    if (n === 1) {
        if (Chuyen1 < Max) Chuyen1 += KichThuoc;
        else Chuyen1 = 0;
        ChuyenSlide1.style.marginLeft = '-' + Chuyen1 + 'px';
    } else if (n === 2) {
        if (Chuyen2 < Max) Chuyen2 += KichThuoc;
        else Chuyen2 = 0;
        ChuyenSlide2.style.marginLeft = '-' + Chuyen2 + 'px';
    } else {
        if (Chuyen < Max) Chuyen += KichThuoc;
        else Chuyen = 0;
        ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
    }

}

function Back(n) {
    if (n === 1) {
        if (Chuyen1 === 0) Chuyen1 = Max;
        else Chuyen1 -= KichThuoc;
        ChuyenSlide1.style.marginLeft = '-' + Chuyen1 + 'px';
    } else if (n === 2) {
        if (Chuyen2 === 0) Chuyen2 = Max;
        else Chuyen2 -= KichThuoc;
        ChuyenSlide2.style.marginLeft = '-' + Chuyen2 + 'px';
    } else {
        if (Chuyen === 0) Chuyen = Max;
        else Chuyen -= KichThuoc;
        ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
    }
}