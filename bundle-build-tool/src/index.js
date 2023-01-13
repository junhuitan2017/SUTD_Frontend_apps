// test
import { camelCase } from "lodash";
import vars from "./style.scss";

console.log(camelCase("hello world"));
console.log(vars.primaryColor);

window.addEventListener("load", function() {
    this.alert("it's loaded");
    this.document.getElementsByTagName("body")[0].style.color = vars.primaryColor;
})