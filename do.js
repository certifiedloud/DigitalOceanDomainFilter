// Initialize some elements
var input = document.createElement("input")
input.setAttribute('id', 'domainFilter')
input.style.cssFloat = "right"
input.setAttribute("placeholder", "Filter")
input.setAttribute("class", "u-mb-0 FloatLabel-input")
input.setAttribute("type", "text")

var domainsSection = document.querySelector("#domains")
domainsSection.insertBefore(input, domainsSection.querySelector("div"))

var  filterDomains = function(){
for(i in domainNames){
  if(domainNames[i].firstChild){
    if(domainNames[i].firstChild.nextSibling.innerHTML.trim().indexOf(document.querySelector("#domainFilter").value) > -1){
      domainNames[i].style.display = "table-row"
    } else {
      domainNames[i].style.display = "none";
    }
  }
}
}

document.querySelector("#domainFilter").addEventListener("keyup", filterDomains);

var rows = domainsSection.querySelectorAll("tr")
var domainNames = []
for(i in rows){
  domainNames.push(rows[i])
}
