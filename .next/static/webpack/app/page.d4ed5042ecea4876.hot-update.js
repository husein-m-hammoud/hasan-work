"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(app-pages-browser)/./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yet-another-react-lightbox */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n//import imagesData from \"./image_data.json\"\n\nfunction Home() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const imagesData = [\n        {\n            \"br\": {\n                \"before\": [\n                    {\n                        src: \"/images/br_before_1.jpeg\"\n                    },\n                    {\n                        src: \"/images/br_before_2.jpeg\"\n                    },\n                    {\n                        src: \"/images/br_before_3.jpeg\"\n                    },\n                    {\n                        src: \"./images/br_before_4.jpeg\"\n                    }\n                ],\n                \"after\": [\n                    {\n                        src: \"./images/br_after_1.jpeg\"\n                    },\n                    {\n                        src: \"./images/br_after_2.jpeg\"\n                    },\n                    {\n                        src: \"./images/br_after_3.jpeg\"\n                    },\n                    {\n                        src: \"./images/br_after_4.jpeg\"\n                    },\n                    {\n                        src: \"./images/br_after_5.jpeg\"\n                    }\n                ]\n            }\n        }\n    ];\n    const getSilder = (title, action)=>{\n        console.log(title, action);\n        console.log(imagesData.title.action);\n        setSlider(imagesData[title].action);\n        setOpen(true);\n    };\n    // const file = await fs.readFile(process.cwd() + '/app/image_data.json', 'utf8');\n    //const data:any= imagesData;\n    console.log(imagesData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"gallery\",\n                children: [\n                    imagesData.map((item, index)=>{\n                        var title = Object.keys(imagesData[index]);\n                        var befor_src = item[title].before[0].src;\n                        var after_src = item[title].after[0].src;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"before_after\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img img--before\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img__bg\",\n                                        style: {\n                                            backgroundImage: \"url(\".concat(befor_src, \")\")\n                                        },\n                                        onClick: ()=>getSilder(title[0], \"before\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img img--after\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img__bg\",\n                                        style: {\n                                            backgroundImage: \"url(\".concat(after_src, \")\")\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"content content--before\",\n                                    children: \"Before\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"content content--after\",\n                                    children: \"After\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this);\n                    //return(<>{JSON.stringify(item[title].befor[0].src)}</> )\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"before_after\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"img img--before\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img__bg bg-[url()]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"img img--after\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img__bg bg-[url(https://images.unsplash.com/photo-1530674657441-93e3709297ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21c08985e70df1e7431d568fb29d5627&auto=format&fit=crop&w=1500&q=80)]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content content--before\",\n                                children: \"Before\"\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content content--after\",\n                                children: \"After\"\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"before_after\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"img img--before\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img__bg bg-[url(https://images.unsplash.com/photo-1530687990204-46f722f2aac2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=894d11fc453db94850ee83751c923922&auto=format&fit=crop&w=1500&q=80)]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"img img--after\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"img__bg bg-[url(https://images.unsplash.com/photo-1530622044064-d99fa23c9bf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da1e24664ce66c563ce50a421174d8d5&auto=format&fit=crop&w=1350&q=80)]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content content--before\",\n                                children: \"Before\"\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content content--after\",\n                                children: \"After\"\n                            }, void 0, false, {\n                                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: open,\n                close: ()=>setOpen(false),\n                slides: slider\n            }, void 0, false, {\n                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                lineNumber: 90,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"./main.js\"\n            }, void 0, false, {\n                fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/husseinhammoud/Desktop/hasan-work/src/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"be/WVwrKQZ4GRMoyq16WOAw7WVw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzswQ0FFakIsOERBQUNZO2dDQUFJWixXQUFVOzBDQUEwQjs7Ozs7OzBDQUN6Qyw4REFBQ1k7Z0NBQUlaLFdBQVU7MENBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDZCxrRUFBUUE7Z0JBQ0hFLE1BQU1BO2dCQUNONEIsT0FBTyxJQUFNM0IsUUFBUTtnQkFDckI0QixRQUFRM0I7Ozs7OzswQkFFZCw4REFBQ04sb0RBQU1BO2dCQUFDUyxLQUFLOzs7Ozs7Ozs7Ozs7QUFTZjtHQWhHeUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcbi8vaW1wb3J0IGltYWdlc0RhdGEgZnJvbSBcIi4vaW1hZ2VfZGF0YS5qc29uXCJcbmltcG9ydCBMaWdodGJveCBmcm9tICd5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveCc7XG5leHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2xpZGVyLCBzZXRTbGlkZXJdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgY29uc3QgaW1hZ2VzRGF0YTphbnkgPSBbe1xuXG4gICAgXCJiclwiOiB7XG4gICAgICAgIFwiYmVmb3JlXCI6IFtcbiAgICAgICAgICAgIHtzcmM6IFwiL2ltYWdlcy9icl9iZWZvcmVfMS5qcGVnXCJ9LFxuICAgICAgICAgICAge3NyYzogXCIvaW1hZ2VzL2JyX2JlZm9yZV8yLmpwZWdcIn0sXG4gICAgICAgICAgICB7c3JjOiBcIi9pbWFnZXMvYnJfYmVmb3JlXzMuanBlZ1wifSxcbiAgICAgICAgICAgIHtzcmM6IFwiLi9pbWFnZXMvYnJfYmVmb3JlXzQuanBlZ1wifVxuICAgICAgICBdLFxuICAgICAgICBcImFmdGVyXCI6IFtcbiAgICAgICAgICAgIHtzcmM6IFwiLi9pbWFnZXMvYnJfYWZ0ZXJfMS5qcGVnXCJ9LFxuICAgICAgICAgICAge3NyYzogXCIuL2ltYWdlcy9icl9hZnRlcl8yLmpwZWdcIn0sXG4gICAgICAgICAgICB7c3JjOiBcIi4vaW1hZ2VzL2JyX2FmdGVyXzMuanBlZ1wifSxcbiAgICAgICAgICAgIHtzcmM6IFwiLi9pbWFnZXMvYnJfYWZ0ZXJfNC5qcGVnXCJ9LFxuICAgICAgICAgICAge3NyYzogXCIuL2ltYWdlcy9icl9hZnRlcl81LmpwZWdcIn1cbiAgICAgICAgXVxuICAgIH1cblxufV07XG5cbmNvbnN0IGdldFNpbGRlciA9ICh0aXRsZTphbnksIGFjdGlvbjphbnkpID0+IHtcbiAgY29uc29sZS5sb2codGl0bGUsIGFjdGlvbilcbiAgY29uc29sZS5sb2coaW1hZ2VzRGF0YS50aXRsZS5hY3Rpb24pXG4gIHNldFNsaWRlcihpbWFnZXNEYXRhW3RpdGxlXS5hY3Rpb24pO1xuICBzZXRPcGVuKHRydWUpXG5cbn1cbiAgLy8gY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlKHByb2Nlc3MuY3dkKCkgKyAnL2FwcC9pbWFnZV9kYXRhLmpzb24nLCAndXRmOCcpO1xuIC8vY29uc3QgZGF0YTphbnk9IGltYWdlc0RhdGE7XG4gIGNvbnNvbGUubG9nKGltYWdlc0RhdGEpXG4gIHJldHVybiAoXG5cbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XG4gICAgICB7aW1hZ2VzRGF0YS5tYXAoKGl0ZW06YW55LCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgdmFyIHRpdGxlOmFueSA9IE9iamVjdC5rZXlzKGltYWdlc0RhdGFbaW5kZXhdKVxuICAgICAgICAgdmFyIGJlZm9yX3NyYzphbnkgPSAgaXRlbVt0aXRsZV0uYmVmb3JlWzBdLnNyYztcbiAgICAgICAgIHZhciBhZnRlcl9zcmM6YW55ID0gIGl0ZW1bdGl0bGVdLmFmdGVyWzBdLnNyYztcbiAgICAgICBcbiAgICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmVmb3JlX2FmdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nIGltZy0tYmVmb3JlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdfX2JnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZWZvcl9zcmN9KWB9fSBvbkNsaWNrPXsoKT0+Z2V0U2lsZGVyKHRpdGxlWzBdLCAnYmVmb3JlJyl9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgaW1nLS1hZnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nX19iZ1wiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YWZ0ZXJfc3JjfSlgfX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGVudC0tYmVmb3JlXCI+QmVmb3JlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb250ZW50LS1hZnRlclwiPkFmdGVyPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgICk7XG4gICAgICAgIC8vcmV0dXJuKDw+e0pTT04uc3RyaW5naWZ5KGl0ZW1bdGl0bGVdLmJlZm9yWzBdLnNyYyl9PC8+IClcbiAgICAgICBcbiAgICAgIH0pfVxuXG4gIDxsaSBjbGFzc05hbWU9XCJiZWZvcmVfYWZ0ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBpbWctLWJlZm9yZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdfX2JnIGJnLVt1cmwoKV1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBpbWctLWFmdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ19fYmcgYmctW3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDY3NDY1NzQ0MS05M2UzNzA5Mjk3ZWM/aXhsaWI9cmItMC4zLjUmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZzPTIxYzA4OTg1ZTcwZGYxZTc0MzFkNTY4ZmIyOWQ1NjI3JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUwMCZxPTgwKV1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGVudC0tYmVmb3JlXCI+QmVmb3JlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGNvbnRlbnQtLWFmdGVyXCI+QWZ0ZXI8L2Rpdj5cbiAgPC9saT5cblxuICA8bGkgY2xhc3NOYW1lPVwiYmVmb3JlX2FmdGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgaW1nLS1iZWZvcmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nX19iZyBiZy1bdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwNjg3OTkwMjA0LTQ2ZjcyMmYyYWFjMj9peGxpYj1yYi0wLjMuNSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JnM9ODk0ZDExZmM0NTNkYjk0ODUwZWU4Mzc1MWM5MjM5MjImYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTAwJnE9ODApXVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nIGltZy0tYWZ0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nX19iZyBiZy1bdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwNjIyMDQ0MDY0LWQ5OWZhMjNjOWJmMz9peGxpYj1yYi0wLjMuNSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JnM9ZGExZTI0NjY0Y2U2NmM1NjNjZTUwYTQyMTE3NGQ4ZDUmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUwJnE9ODApXVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb250ZW50LS1iZWZvcmVcIj5CZWZvcmU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgY29udGVudC0tYWZ0ZXJcIj5BZnRlcjwvZGl2PlxuICA8L2xpPlxuICA8L3VsPlxuICA8TGlnaHRib3hcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgY2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICBzbGlkZXM9e3NsaWRlcn1cbiAgICAgIC8+XG4gIDxTY3JpcHQgc3JjPXsnLi9tYWluLmpzJ30vPlxuICAgIFxuICBcbiAgXG4gICAgPC9tYWluPlxuXG5cblxuICApXG59XG4iXSwibmFtZXMiOlsiU2NyaXB0IiwidXNlU3RhdGUiLCJMaWdodGJveCIsIkhvbWUiLCJvcGVuIiwic2V0T3BlbiIsInNsaWRlciIsInNldFNsaWRlciIsImltYWdlc0RhdGEiLCJzcmMiLCJnZXRTaWxkZXIiLCJ0aXRsZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiYmVmb3Jfc3JjIiwiYmVmb3JlIiwiYWZ0ZXJfc3JjIiwiYWZ0ZXIiLCJsaSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwib25DbGljayIsImNsb3NlIiwic2xpZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});