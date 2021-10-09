function getdata()
{
    var name=prompt("Adınızı Giriniz :)");
    document.getElementById("myName").innerText=name;
}

function timer()
{
    var date = new Date();
    var a = date.getHours();
    var b = date.getMinutes();
    var c = date.getSeconds();
    var d = date.getDay();

    var week =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var weekday = week[d];

    a=a<10?"0"+a:a;
    b=b<10?"0"+b:b;
    c=c<10?"0"+c:c;

    var e = a+":" +b+":" +c+":"+"-"+weekday;

    document.getElementById("myClock").innerText=e;
    document.getElementById("myClock").textContent=e;
    
    setTimeout(timer,1000);

}
getdata();
timer();
