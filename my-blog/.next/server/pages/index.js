"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst defaultOptions = {\n    watchQuery: {\n        fetchPolicy: \"no-cache\",\n        errorPolicy: \"ignore\"\n    },\n    query: {\n        fetchPolicy: \"no-cache\",\n        errorPolicy: \"all\"\n    }\n};\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"https://h70mv2iv.api.sanity.io/v1/graphql/production/default\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    defaultOptions: defaultOptions\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RDtBQUU3RCxNQUFNRSxpQkFBaUI7SUFDcEJDLFlBQVk7UUFDYkMsYUFBYTtRQUNiQyxhQUFhO0lBQ1o7SUFDQUMsT0FBTztRQUNSRixhQUFhO1FBQ2JDLGFBQWE7SUFDWjtBQUNGO0FBRUQsTUFBTUUsU0FBUyxJQUFJUCx3REFBWUEsQ0FBQztJQUM3QlEsS0FBSztJQUNMQyxPQUFPLElBQUlSLHlEQUFhQTtJQUN4QkMsZ0JBQWdCQTtBQUNuQjtBQUVBLGlFQUFlSyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYmxvZy8uL2Fwb2xsby1jbGllbnQuanM/M2NlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICB3YXRjaFF1ZXJ5OiB7XG4gXHRmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiBcdGVycm9yUG9saWN5OiAnaWdub3JlJyxcbiAgIH0sXG4gICBxdWVyeToge1xuIFx0ZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gXHRlcnJvclBvbGljeTogJ2FsbCcsXG4gICB9LFxuIH1cblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICB1cmk6IFwiaHR0cHM6Ly9oNzBtdjJpdi5hcGkuc2FuaXR5LmlvL3YxL2dyYXBocWwvcHJvZHVjdGlvbi9kZWZhdWx0XCIsXG4gICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgIGRlZmF1bHRPcHRpb25zOiBkZWZhdWx0T3B0aW9uc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJlcnJvclBvbGljeSIsInF1ZXJ5IiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ posts  }) {\n    console.log(posts);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"nav\",\n                onClick: ()=>router.push(\"/\"),\n                children: \"My Blog\"\n            }, void 0, false, {\n                fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 3\n            }, this),\n            posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"postContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"postTitle\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"postCard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"postImg\",\n                                    src: post.mainImage.asset.url,\n                                    alt: \"postImage\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"postDetails\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"postPreview\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                blocks: [\n                                                    0,\n                                                    1,\n                                                    2\n                                                ].map((x)=>post.bodyRaw[x])\n                                            }, void 0, false, {\n                                                fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                                                lineNumber: 25,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn\",\n                                            onClick: ()=>router.push(`/post/${post.slug.current}`),\n                                            children: \"Read more...\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kim/Desktop/sanity-graphql-vercel/my-blog/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 4\n    }, this);\n}\nasync function getServerSideProps() {\n    const { data  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].query({\n        query: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n   query {\n \tallBlog{\n   \ttitle,\n   \tslug {\n     \tcurrent\n   \t},\n   \tbodyRaw,\n   \tmainImage {\n    \tasset {\n      \turl\t \n     \t}\n   \t},\n \t}\n   }`\n    });\n    return {\n        props: {\n            posts: data.allBlog\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStEO0FBRTFCO0FBQ0M7QUFFRTtBQUV6QixTQUFTSSxLQUFLLEVBQUVDLE1BQUssRUFBRSxFQUFFO0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTUcsU0FBU0wsc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDaEIsOERBQUNDO2dCQUFHRCxXQUFVO2dCQUFNRSxTQUFTLElBQU1KLE9BQU9LLElBQUksQ0FBQzswQkFBTTs7Ozs7O1lBR25EUixNQUFNUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNQO29CQUFnQkMsV0FBVTs7c0NBQ3pCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBYUssS0FBS0UsS0FBSzs7Ozs7O3NDQUV0Qyw4REFBQ1I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBSVIsV0FBVTtvQ0FBVVMsS0FBS0osS0FBS0ssU0FBUyxDQUFDQyxLQUFLLENBQUNDLEdBQUc7b0NBQUVDLEtBQUk7Ozs7Ozs4Q0FFNUQsOERBQUNkO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNWLHVFQUFrQkE7Z0RBQUN3QixRQUFRO29EQUFDO29EQUFFO29EQUFFO2lEQUFFLENBQUNWLEdBQUcsQ0FBQ1csQ0FBQUEsSUFBR1YsS0FBS1csT0FBTyxDQUFDRCxFQUFFOzs7Ozs7Ozs7OztzREFFNUQsOERBQUNFOzRDQUFPakIsV0FBVTs0Q0FBTUUsU0FBUyxJQUFNSixPQUFPSyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUVFLEtBQUthLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBVjlFYjs7Ozs7Ozs7Ozs7QUFvQmhCLENBQUM7QUFFTSxlQUFlYyxxQkFBcUI7SUFDMUMsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNN0IsNERBQVksQ0FBQztRQUNsQzhCLE9BQU8vQiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWNWLENBQUM7SUFDSjtJQUVBLE9BQU87UUFDTGdDLE9BQU87WUFDUjVCLE9BQU8wQixLQUFLRyxPQUFPO1FBQ2xCO0lBQ0Y7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYmxvZy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNhbml0eUJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vYXBvbGxvLWNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gY29uc29sZS5sb2cocG9zdHMpXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gcmV0dXJuIChcbiAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuIFx0PGgxIGNsYXNzTmFtZT0nbmF2JyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5NeSBCbG9nPC9oMT5cblxuIFx0e1xuICAgXHRwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgIFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3Bvc3RDb250YWluZXInPlxuICAgICAgIFx0PGRpdiBjbGFzc05hbWU9J3Bvc3RUaXRsZSc+e3Bvc3QudGl0bGV9PC9kaXY+XG5cbiAgICAgICBcdDxkaXYgY2xhc3NOYW1lPSdwb3N0Q2FyZCc+XG4gICAgICAgICBcdDxpbWcgY2xhc3NOYW1lPSdwb3N0SW1nJyBzcmM9e3Bvc3QubWFpbkltYWdlLmFzc2V0LnVybH0gYWx0PVwicG9zdEltYWdlXCIgLz5cblxuICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT0ncG9zdERldGFpbHMnPlxuICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPSdwb3N0UHJldmlldyc+XG4gICAgICAgICAgICAgXHQ8U2FuaXR5QmxvY2tDb250ZW50IGJsb2Nrcz17WzAsMSwyXS5tYXAoeD0+cG9zdC5ib2R5UmF3W3hdKX0gLz5cbiAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3QvJHtwb3N0LnNsdWcuY3VycmVudH1gKX0+UmVhZCBtb3JlLi4uPC9idXR0b24+XG4gICAgICAgICBcdDwvZGl2PlxuICAgICAgIFx0PC9kaXY+XG4gICAgIFx0IFxuICAgICBcdCBcbiAgICAgXHQ8L2Rpdj5cbiAgIFx0KSlcbiBcdH1cbiAgIDwvZGl2PlxuIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICBxdWVyeTogZ3FsYFxuICAgcXVlcnkge1xuIFx0YWxsQmxvZ3tcbiAgIFx0dGl0bGUsXG4gICBcdHNsdWcge1xuICAgICBcdGN1cnJlbnRcbiAgIFx0fSxcbiAgIFx0Ym9keVJhdyxcbiAgIFx0bWFpbkltYWdlIHtcbiAgICBcdGFzc2V0IHtcbiAgICAgIFx0dXJsXHQgXG4gICAgIFx0fVxuICAgXHR9LFxuIFx0fVxuICAgfWBcbiB9KVxuXG4gcmV0dXJuIHtcbiAgIHByb3BzOiB7XG4gXHRwb3N0czogZGF0YS5hbGxCbG9nXG4gICB9XG4gfVxufVxuIl0sIm5hbWVzIjpbIlNhbml0eUJsb2NrQ29udGVudCIsImdxbCIsImNsaWVudCIsInVzZVJvdXRlciIsIkhvbWUiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJwdXNoIiwibWFwIiwicG9zdCIsImluZGV4IiwidGl0bGUiLCJpbWciLCJzcmMiLCJtYWluSW1hZ2UiLCJhc3NldCIsInVybCIsImFsdCIsImJsb2NrcyIsIngiLCJib2R5UmF3IiwiYnV0dG9uIiwic2x1ZyIsImN1cnJlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJkYXRhIiwicXVlcnkiLCJwcm9wcyIsImFsbEJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();