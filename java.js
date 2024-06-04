function action(active,inactive,oldactive,btn1,btn2,btn3)
{
    var activebtn=document.getElementById(active);
    var inactivebtn=document.getElementById(inactive);
    var oldactivebtn=document.getElementById(oldactive);
    var Btn1=document.getElementById(btn1);
    var Btn2=document.getElementById(btn2);
    var Btn3=document.getElementById(btn3);

    activebtn.style.display="block";
    activebtn.className="animate__animated animate__slideInLeft";

    inactivebtn.style.display="none";
    oldactivebtn.style.display="none";

    Btn1.style.color="#fff";
    Btn2.style.color="gray";
    Btn3.style.color="gray";

}