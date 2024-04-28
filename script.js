var isShowing= false;
function show() {
    if(!isShowing){
        document.getElementById("hidden").style.display = "inline-block";
        document.getElementById("press").innerHTML = "Read less";
        isShowing=true;}
    else{
        document.getElementById("hidden").style.display = "none";
        document.getElementById("press").innerHTML = "Read more";
        isShowing=false;
    }
}
function clearSAVE(){
    var feedback = document.getElementById('fdback').value;
    localStorage.setItem('fdback', feedback);
    var textarea= document.getElementById('fdback');
    var inputs = document.getElementsByClassName("details");
    textarea.value='';
    for (var i=0; i<inputs.length;i++) {
        inputs[i].value = '';
    }
}
        var feed = localStorage.getItem('fdback');
        var userr= document.getElementById('userfb');
        if (feed) {
            userr.innerText= feed;
        } else {
            userr.innerText= 'No feedback yet.';
        }
function COM(){
    var comment= document.getElementById("com").value;
    document.getElementById("displayPart").innerText= comment;
    document.getElementById("com").value='';
    alert("Comment Posted");
}
function RuSure(){
    var confirmed= confirm("Are you sure you want to open a new tab?");
    if(confirmed){
        window.open("feedback.html",'_blank');
    }
    else{}
}
var light=true;
function Theme()
{
   if(light){
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(0, 23, 52)";
    document.getElementsByTagName("body")[0].style.color= "white";
    var head2=document.getElementsByTagName("h2");
    for(var k=0; k<head2.length;k++){
        head2[k].style.color="rgb(163, 204, 255)";
    }
    document.getElementsByTagName("button")[0].style.backgroundColor="rgb(163, 204, 255)";
    document.getElementsByTagName("button")[0].style.borderColor="white";
    document.getElementsByTagName("button")[0].style.color="rgb(0, 23, 52)";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(163, 204, 255)";
    var links= document.getElementsByClassName("linkat");
    for(var h=0; h< links.length;h++)
    {
        links[h].style.color="rgb(0, 23, 52)";
    }
    document.getElementById("switch").innerText="SWITCH TO LIGHT THEME";
    light=false;
}
 else{
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(246, 248, 255)";
    document.getElementsByTagName("body")[0].style.color= "black";
    var head2=document.getElementsByTagName("h2");
    for(var k=0; k<head2.length;k++){
        head2[k].style.color="rgb(0, 23, 52) ";
    }
    document.getElementsByTagName("button")[0].style.backgroundColor="rgb(0, 23, 52) ";
    document.getElementsByTagName("button")[0].style.borderColor="transparent";
    document.getElementsByTagName("button")[0].style.color="white";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(0, 23, 52) ";
    var links= document.getElementsByClassName("linkat");
    for(var h=0; h< links.length;h++)
    {
        links[h].style.color="rgb(246, 248, 255)";
    }
    document.getElementById("switch").innerText="SWITCH TO DARK THEME";
    light=true;
 }

}
    