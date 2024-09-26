let n1;
let phepToan;
let doiSo = false;
function themSo(number){
    const display = document.getElementById('calcuDisplay');
    if(doiSo){
        display.value = number;
        doiSo = false;
    }else{
        if(display.value==='0'){
            display.value = number;
        }else {
            display.value += number;
        }
    }
}
function datPhepToan(dau) {
    n1 = document.getElementById('calcuDisplay').value;
    phepToan = dau;
    doiSo = true
}
function tinhToan(){
    const display = document.getElementById('calcuDisplay');
    const n2 = display.value;
    display.value = eval(n1+phepToan+n2);
    phepToan = '';
}
function xoaHet() {
    const display = document.getElementById('calcuDisplay');
    display.value = '0';
    n1 = '';
    phepToan = '';
    doiSo = false;
}