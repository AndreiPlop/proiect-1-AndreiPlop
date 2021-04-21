function incarca_persoane()
{
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange =
            function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                    
                    afiseaza_persoane(xmlhttp.responseXML);
                    
                }
            }
        xmlhttp.open("GET", "resurse/persoane.xml", true);
        xmlhttp.send();
    }
}