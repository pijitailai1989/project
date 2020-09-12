export function formDate(date,bool) {
    var date = new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    m = m > 9 ? m : '0' + m;
    d = d > 9 ? d : '0' + d;
    h = h > 9 ? h : '0' + h;
    mi = mi > 9 ? mi : '0' + mi;
    if(bool){
        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
    }else{
        return y + '-' + m + '-' + d ;
    }
    
}