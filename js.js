  var ll = "/";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "DB2.xml", true);
  xhttp.send();

function myFunction(xml) {

  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th width='5%'>#</th><th>المؤسسة</th><th width='10%'>الوظيفة</th><th width='10%'>الدرجة</th><th width='5%'>الفئة</th><th>المتطلبات</th><th width='10%'>تاريخ البداية</th><th width='10%'>تاريخ النهاية</th><th width='5%'>الحالة</th><th width='5%'>الرابط</th></tr>";
  var x = xmlDoc.getElementsByTagName("DB");


  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Company")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Job")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Degree")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("For")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Condition")[0].childNodes[0].nodeValue +
    "</td>";

   var StartD = x[i].getElementsByTagName("Start")[0].childNodes[0].nodeValue;
   var EndD = x[i].getElementsByTagName("End")[0].childNodes[0].nodeValue;
   var d = new Date(StartD);
   var m = d.getMonth()+1;
   var fdate = d.getFullYear()+ "/"+m +"/"+ d.getDate();

   var dd = new Date(EndD);
   var mm = dd.getMonth()+1;
   var edate = dd.getFullYear()+ "/"+mm +"/"+ dd.getDate();

   table += "<td>" +
    fdate +
    "</td>"+ "<td>" +
    edate +
    "</td>";
    var today = "2018/7/17";
    var st ;
   if(today > edate)
   {
    st = "<td style='background-color:red; color:#fff;font-weight: bold;'>انتهى</td>";
   }
   else if(today < fdate)
   {
    st = "<td style='background-color:Orange; color:#fff;font-weight: bold;'>لم يبدا بعد</td>";
   }
   else
   {
    st = "<td style='background-color:Green; color:#fff;font-weight: bold;'>متاح</td>";
   }
  var fff = x[i].getElementsByTagName("Link")[0].childNodes[0].nodeValue;
  table += st+ "<td><a href='"+fff+"'>للتقديم</a></td></tr>";
   
  }
  document.getElementById("demo").innerHTML = table;
}
