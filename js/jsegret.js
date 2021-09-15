/**
 *
 * jsegret.js
 * 08/08/2021
 * Ian Neal Higginson
 * iannhigginson@hotmail.com
 *
 * A very simple jQuery clone. I don't need the whole library.
 *
 */

//#region $
function $(param) {
 if (param.indexOf('#') === 0) {
  /**
   * This comes back as a single element (as in "id").
   * An example of how to drive it:
   *   $('#one').innerHTML = "Hello World.";
   */
  return document.getElementById(param.substr(1, param.length));
 }
 if (param.indexOf('.') === 0) {
  /**
   * This comes back as a collection of elements (as in "class").
   * An example of how to drive it:
   *   let one = $('.one');
   *   for(let i = 0; i < one.length; i++){
   *    one[i].setAttribute("style", "color: black;");
   *   }
   */
  return document.querySelectorAll(param);
 }
}
//#endregion $

//#region css
/**
 *  $.css('.title',
        `background-color: #c0c0c0;
         border-radius: 5px;
         color: #000;
         padding: 5px;
         text-align: center;
         `);
 */
$.css = (elem, style) => {
 let elements = document.querySelectorAll(elem);
 for (let i = 0; i < elements.length; i++) {
  elements[i].setAttribute("style", style);
 }
};
//#endregion css

//#region get
/**
 *
  $.get("./json/a.json", data => {
   console.log(data);
  });
 */
$.get = (url, callback) => {
 var httpRequest = new XMLHttpRequest();
 httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState == 4 && httpRequest.status == 200)
   callback(httpRequest.responseText);
 };
 httpRequest.open("GET", url, true);
 httpRequest.send(null);
};
//#endregion get

//#region ready
$.ready = (...args) => {
 document.addEventListener('DOMContentLoaded', () => {

  execute = () => {

   var argsLen = args.length;

   for (i = 0; i < argsLen; i++) {
    args[i].call();
   }

  };

  execute();

 });

};
//#endregion ready

//#region post
/**
 *
  $.post('./php/a.php', JSON.stringify(dataObj), (response) => {
   console.log({response});
  });
 */
$.post = (url, request, callback) => {
 var httpRequest = new XMLHttpRequest();
 httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState == 4 && httpRequest.status == 200)
   callback(httpRequest.responseText);
 };
 httpRequest.open("POST", url, true);
 httpRequest.send(request);
};
//#endregion post

// EOF
