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
    fun_career(data.career);
  fun_education(data.education);
  fun_achievements(data.achievements);
  fun_skills(data.technicalskills);
});
var div2=document.getElementById("child2");
function fun_career(car){
  var h1=document.createElement("h3");
  h1.textContent="CAREER OBJECTIVE:";
  div2.appendChild(h1);
  var z=document.createElement("p");
  z.textContent=car.info;
  div2.appendChild(z);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
}
function fun_education(edu){
  var heading =document.createElement("h3");
  heading.textContent="EDUCATIONAL QUALIFICATIONS:";
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
  var hr=document.createElement("hr");
  div2.appendChild(hr);
}
function fun_achievements(ach){
  var heading1 =document.createElement("h3");
  heading1.textContent="ACHIEVEMENTS:";
  div2.appendChild(heading1);
  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<ach.length;i++){
    var listitem=document.createElement("li");
    listitem.innerHTML=ach[i].name;
    list.appendChild(listitem);
  }
  var hr=document.createElement("hr");
  div2.appendChild(hr);
}
function fun_skills(tech){
  var heading2 =document.createElement("h3");
  heading2.textContent="TECHNICAL SKILLS:";
  div2.appendChild(heading2);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<tech.length;i++)
  {
    tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
  }
table.innerHTML=tr;
table.border="1";

}
