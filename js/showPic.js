function countBodyChildrens() {
  var body_element = document.getElementsByTagName("body")[0];
  // alert(body_element.nodeType);
}

function showPic(whichPic) {
  var source = whichPic.getAttribute("href");
  var title = whichPic.getAttribute("title");
  var placeholder = document.getElementById("placeholder");
  var description = document.getElementById("description");
  placeholder.setAttribute("src",source);
  description.firstChild.nodeValue = title;
  // alert(description.firstChild.nodeValue);

}
window.onload = countBodyChildrens;
