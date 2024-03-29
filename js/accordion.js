/*!
 * External js:
 * MoveTo https://github.com/hsnaydd/moveTo MIT
 * lite-youtube-embed https://github.com/paulirish/lite-youtube-embed MIT
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/accordion.js":
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/
/***/ (() => {

eval("const CLASS_WRAP = 'js-accordion-wrap';\nconst CLASS_ACCORDION = 'js-accordion';\nconst CLASS_HEAD = 'js-accordion-head';\nconst CLASS_OPENER = 'js-accordion-open';\nconst CLASS_CONTENT = 'js-accordion-content';\nconst CLASS_DESCRIPTION = 'js-accordion-descr';\nconst CLASS_OPEN = 'js-open';\nconst CLASS_ACTIVE = 'active';\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(`.${CLASS_ACCORDION}`);\n  const openList = document.querySelectorAll(`.${CLASS_ACCORDION}.${CLASS_OPEN}`);\n  if (accordionList.length) {\n    accordionList.forEach(accordion => {\n      const wrap = accordion.closest(`.${CLASS_WRAP}`);\n      const open = accordion.querySelector(`.${CLASS_OPENER}`);\n      open.addEventListener('click', e => {\n        const {\n          target\n        } = e;\n        const btn = target.closest(`.${CLASS_OPENER}`);\n        const head = target.closest(`.${CLASS_HEAD}`);\n        const trigger = head || btn;\n        if (wrap && wrap.getAttribute('data-only') != undefined) {\n          const group = wrap.querySelector(`.${CLASS_ACCORDION}`).getAttribute('data-group');\n          let contentList = [];\n          if (group) {\n            const currentAccordionList = wrap.querySelectorAll(`[data-group=\"${group}\"]`);\n            currentAccordionList.forEach(accordion => {\n              contentList.push(accordion.querySelector(`.${CLASS_CONTENT}`));\n            });\n          } else {\n            contentList = wrap.querySelectorAll(`.${CLASS_CONTENT}`);\n          }\n          showAccordion(trigger, contentList, false);\n        } else {\n          showAccordion(trigger);\n        }\n      });\n    });\n    resize();\n  }\n  if (openList.length) {\n    clickAccordion(openList);\n  }\n  function getDesctiptionHeight(currentAccordion) {\n    const description = currentAccordion.querySelector(`.${CLASS_DESCRIPTION}`);\n    const height = description.offsetHeight;\n    const computedStyle = window.getComputedStyle(description);\n    const marginTop = +computedStyle.marginTop.replace('px', '');\n    const marginBottom = +computedStyle.marginBottom.replace('px', '');\n    return height + marginTop + marginBottom;\n  }\n  function showAccordion(head) {\n    let contentAccordion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    let all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n    const currentContent = head.nextElementSibling;\n    const parent = currentContent.closest(`.${CLASS_ACCORDION}`);\n    if (head.classList.contains(CLASS_ACTIVE)) {\n      head.classList.remove(CLASS_ACTIVE);\n      parent.classList.remove(CLASS_ACTIVE);\n      currentContent.style.maxHeight = '0';\n    } else {\n      if (!all && contentAccordion.length) {\n        contentAccordion.forEach(content => {\n          content.previousElementSibling.classList.remove(CLASS_ACTIVE);\n          content.style.maxHeight = '0';\n        });\n      }\n      const heightDescription = getDesctiptionHeight(currentContent);\n      let parentDescription;\n      let paretnContent;\n      function changeParent(el) {\n        parentDescription = el.closest(`.${CLASS_DESCRIPTION}`);\n        if (parentDescription) {\n          paretnContent = parentDescription.closest(`.${CLASS_CONTENT}`);\n        } else {\n          paretnContent = null;\n        }\n      }\n      changeParent(currentContent);\n      if (paretnContent) {\n        do {\n          const oldHeight = paretnContent.scrollHeight;\n          paretnContent.style.maxHeight = `${oldHeight + heightDescription}px`;\n          changeParent(paretnContent);\n        } while (paretnContent);\n      }\n      head.classList.add(CLASS_ACTIVE);\n      parent.classList.add(CLASS_ACTIVE);\n      currentContent.style.maxHeight = `${heightDescription}px`;\n    }\n  }\n  function updateResize() {\n    const activeAccordions = document.querySelectorAll(`.${CLASS_ACCORDION}.${CLASS_ACTIVE}`);\n    const activeOpeners = document.querySelectorAll(`.${CLASS_OPENER}.${CLASS_ACTIVE}`);\n    const activeHeads = document.querySelectorAll(`.${CLASS_HEAD}.${CLASS_ACTIVE}`);\n    const activeContents = document.querySelectorAll(`.${CLASS_CONTENT}.${CLASS_ACTIVE}`);\n    if (activeOpeners.length) {\n      activeOpeners.forEach(el => el.classList.remove(`.${CLASS_ACTIVE}`));\n    }\n    if (activeHeads.length) {\n      activeHeads.forEach(el => el.classList.remove(`.${CLASS_ACTIVE}`));\n    }\n    if (activeContents.length) {\n      activeContents.forEach(el => {\n        el.classList.remove(`.${CLASS_ACTIVE}`);\n        el.style.maxHeight = '0';\n      });\n    }\n    if (activeAccordions.length) {\n      activeAccordions.forEach(el => el.classList.remove(`.${CLASS_ACTIVE}`));\n      clickAccordion(activeAccordions);\n      clickAccordion(activeAccordions);\n    }\n  }\n  function clickAccordion(list) {\n    list.forEach(open => {\n      const btn = open.querySelector(`.${CLASS_OPENER}`);\n      if (btn) {\n        btn.click();\n      }\n    });\n  }\n  function resize() {\n    let changed = false;\n    window.addEventListener('resize', () => {\n      if (changed !== false) {\n        clearTimeout(changed);\n      }\n      changed = setTimeout(updateResize, 200);\n    });\n  }\n}\ninitAccordion();\n\n//# sourceURL=webpack:///./source/js/accordion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/js/accordion.js"]();
/******/ 	
/******/ })()
;