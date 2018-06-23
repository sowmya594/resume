function loadJson(file,callback) {
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});
var div2=document.getElementById("child2");
function fun_education(edu){
  var heading =document.createElement("h2");
  heading.textContent="EDUCATIONAL QUALIFICATIONS";
  div2.appendChild(heading);
  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<edu.length;i++){
    var listitem=document.createElement("li");
    listitem.textContent=edu[i].degree;
    list.appendChild(listitem);
    var listitem=document.createElement("ul");
    listitem.textContent=edu[i].institute;
    list.appendChild(listitem);
    var listitem=document.createElement("ul");
    listitem.textContent=edu[i].data;
    list.appendChild(listitem);
  }
}
