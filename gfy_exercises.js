// ==UserScript==
// @name         gfy_exercises
// @namespace    http://tampermonkey.net/
// @version      2026-06-29
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// 递归获取元素及其所有子元素的文本
function getNestedText(element) {
    let text = '';

    // 遍历所有子节点
    for (let node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            // 文本节点
            text += node.textContent.trim() + ' ';
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 元素节点，递归处理
            text += getNestedText(node);
        }
    }
    return text.trim();
}

// 使用示例
const elements = document.getElementsByClassName('question-main');
const text = getNestedText(elements[0]);
console.log(text);


})();