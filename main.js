nameofthestudentarray=[];
function submit(){
    var name_1=document.getElementById("name_of_student_1").value;
    var name_2=document.getElementById("name_of_student_2").value;
    var name_3=document.getElementById("name_of_student_3").value;
    var name_4=document.getElementById("name_of_student_4").value;
    nameofthestudentarray.push(name_1);
    nameofthestudentarray.push(name_2);
    nameofthestudentarray.push(name_3);
    nameofthestudentarray.push(name_4);

    console.log(nameofthestudentarray);
    document.getElementById("display_name").innerHTML=nameofthestudentarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofthestudentarray.sort();

    console.log(nameofthestudentarray);
    document.getElementById("display_name").innerHTML=nameofthestudentarray;
}