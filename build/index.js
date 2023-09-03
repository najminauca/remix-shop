var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/tokimpoi/Workspace/abrio-products/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/tokimpoi/Workspace/abrio-products/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-MWTNYT7P.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/images/shop-logo.png
var require_shop_logo = __commonJS({
  "app/images/shop-logo.png"(exports, module2) {
    module2.exports = "/build/_assets/shop-logo-QRHTFSSS.png";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, { getKey: (location) => location.pathname }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_react_bootstrap5 = require("react-bootstrap"), import_react3 = require("react");

// app/components/category.filter.tsx
var import_react_bootstrap = require("react-bootstrap"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function CategoryFilterComponent({ categoryA, aCategoryHandler, categoryB, bCategoryHandler, categoryC, cCategoryHandler }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Dropdown, { className: "filter-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Dropdown.Toggle, { variant: "success", className: "filter-button", children: "Category" }, void 0, !1, {
      fileName: "app/components/category.filter.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_bootstrap.Dropdown.Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_bootstrap.Form.Check,
        {
          type: "checkbox",
          id: "A-category",
          label: "Gaming",
          checked: categoryA,
          onChange: aCategoryHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/category.filter.tsx",
          lineNumber: 12,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_bootstrap.Form.Check,
        {
          type: "checkbox",
          id: "B-category",
          label: "Decorations",
          checked: categoryB,
          onChange: bCategoryHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/category.filter.tsx",
          lineNumber: 21,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_bootstrap.Form.Check,
        {
          type: "checkbox",
          id: "C-category",
          label: "Household",
          checked: categoryC,
          onChange: cCategoryHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/category.filter.tsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/category.filter.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/category.filter.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/color.filter.tsx
var import_react_bootstrap2 = require("react-bootstrap"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ColorFilterComponent({ colorR, rColorHandler, colorG, gColorHandler, colorB, bColorHandler }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_bootstrap2.Dropdown, { className: "filter-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_bootstrap2.Dropdown.Toggle, { variant: "success", className: "filter-button", children: "Color" }, void 0, !1, {
      fileName: "app/components/color.filter.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_bootstrap2.Dropdown.Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react_bootstrap2.Form.Check,
        {
          type: "checkbox",
          value: "R-color",
          id: "R-color",
          label: "Red",
          checked: colorR,
          onChange: rColorHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/color.filter.tsx",
          lineNumber: 13,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react_bootstrap2.Form.Check,
        {
          type: "checkbox",
          id: "G-color",
          label: "Green",
          checked: colorG,
          onChange: gColorHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/color.filter.tsx",
          lineNumber: 22,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react_bootstrap2.Form.Check,
        {
          type: "checkbox",
          id: "B-color",
          label: "Blue",
          checked: colorB,
          onChange: bColorHandler,
          className: "dropdown-checkbox"
        },
        void 0,
        !1,
        {
          fileName: "app/components/color.filter.tsx",
          lineNumber: 30,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/color.filter.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/color.filter.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/services/product.service.ts
var import_promises = __toESM(require("fs/promises"));
async function getAllProducts() {
  let rawFileContent = await import_promises.default.readFile("products.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).products ?? [];
}
async function updateStock(updateStock2, add) {
  let products = await getAllProducts(), updatedProducts = [];
  return products.filter((product) => product.id === updateStock2.id).length != 0 && (products.forEach((product) => {
    product.id === updateStock2.id && (add ? product.stock = parseInt(product.stock) + 1 : product.stock >= 1 && (product.stock = parseInt(product.stock) - parseInt(updateStock2.count)));
  }), updatedProducts = products), import_promises.default.writeFile("products.json", JSON.stringify({ products: updatedProducts || [] }));
}

// app/routes/_index.tsx
var import_react4 = require("@remix-run/react");

// app/services/cart.service.ts
var import_promises2 = __toESM(require("fs/promises"));
async function getAllEntries() {
  let rawFileContent = await import_promises2.default.readFile("cart.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).entries ?? [];
}
async function addToCart(addToCart2) {
  let entries = await getAllEntries(), productStock = (await getAllProducts()).filter((product) => product.id == addToCart2.id).stock, updatedCart = [];
  return entries.filter((entry2) => entry2.id === addToCart2.id).length != 0 ? (entries.forEach((entry2) => {
    entry2.id === addToCart2.id && parseInt(productStock) >= parseInt(addToCart2.count) && (entry2.count = parseInt(entry2.count) + parseInt(addToCart2.count));
  }), updatedCart = entries) : updatedCart = entries.concat(addToCart2), import_promises2.default.writeFile("cart.json", JSON.stringify({ entries: updatedCart || [] }));
}
async function decreaseAmount(deleteEntry) {
  let entries = await getAllEntries(), updatedCart = [];
  return entries.filter((entry2) => entry2.id == deleteEntry.id).length != 0 && (entries.forEach((entry2) => {
    entry2.id === deleteEntry.id && entry2.count > 1 && (entry2.count = parseInt(entry2.count) - 1);
  }), updatedCart = entries), import_promises2.default.writeFile("cart.json", JSON.stringify({ entries: updatedCart || [] }));
}
async function removeFromCart(deleteEntry) {
  let entries = await getAllEntries(), index = entries.findIndex(function(entry2, i) {
    return entry2.id === deleteEntry.id;
  });
  return entries.splice(index, 1), import_promises2.default.writeFile("cart.json", JSON.stringify({ entries: entries || [] }));
}

// app/routes/_index.tsx
var import_node2 = require("@remix-run/node");

// app/components/product.tsx
var import_react_bootstrap3 = require("react-bootstrap"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ProductComponent({ product }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card, { style: { width: "21rem" }, className: "product-card text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card.Img, { variant: "top", className: "card-img-top", src: product.img || "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" }, void 0, !1, {
      fileName: "app/components/product.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card.Title, { className: "cart-title", children: product.title }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 11,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card.Subtitle, { className: "mb-2 text-muted", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("b", { children: [
        "\u20AC",
        parseFloat(product.price).toFixed(2).replace(".", ",")
      ] }, void 0, !0, {
        fileName: "app/components/product.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/product.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { action: "/?index", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Card.Text, { className: "input-quantity", children: [
          "Qty: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "count", type: "number", max: product.stock, min: 1, defaultValue: 1 }, void 0, !1, {
            fileName: "app/components/product.tsx",
            lineNumber: 17,
            columnNumber: 30
          }, this),
          " / ",
          product.stock
        ] }, void 0, !0, {
          fileName: "app/components/product.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "id", type: "hidden", value: product.id }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "title", type: "hidden", value: product.title }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "price", type: "hidden", value: product.price }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_bootstrap3.Button, { variant: "success", type: "submit", name: "intent", value: "plus", children: "Add to Cart" }, void 0, !1, {
          fileName: "app/components/product.tsx",
          lineNumber: 22,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/product.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, product.id, !0, {
    fileName: "app/components/product.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

// app/components/cart.entry.tsx
var import_react_bootstrap4 = require("react-bootstrap"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function CartEntryComponent({ entry: entry2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Card, { style: { width: "16rem" }, className: "cart-entry", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Card.Body, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Card.Title, { className: "card-title", children: entry2.title }, void 0, !1, {
      fileName: "app/components/cart.entry.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Card.Subtitle, { className: "mb-2 text-muted", children: [
      entry2.count,
      " x \u20AC",
      parseFloat(entry2.price).toFixed(2).replace(".", ",")
    ] }, void 0, !0, {
      fileName: "app/components/cart.entry.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { action: "?index", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", value: entry2.id, name: "id" }, void 0, !1, {
        fileName: "app/components/cart.entry.tsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", value: entry2.title, name: "title" }, void 0, !1, {
        fileName: "app/components/cart.entry.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", value: entry2.price, name: "price" }, void 0, !1, {
        fileName: "app/components/cart.entry.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.ButtonGroup, { className: "me-2 cart-button-group", "aria-label": "First group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Button, { className: "cart-button", variant: "secondary", type: "submit", name: "intent", value: entry2.count > 1 ? "minus" : "remove", children: "-" }, void 0, !1, {
          fileName: "app/components/cart.entry.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_bootstrap4.Button, { className: "cart-button", variant: "secondary", type: "submit", name: "intent", value: "plus", children: "+" }, void 0, !1, {
          fileName: "app/components/cart.entry.tsx",
          lineNumber: 17,
          columnNumber: 25
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/cart.entry.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cart.entry.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cart.entry.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/cart.entry.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Shop Demo" },
  { name: "description", content: "Abrio Bewerbertag Demo" }
];
function Index() {
  let { products, cart } = (0, import_react4.useLoaderData)(), [isVisible, setIsVisible] = (0, import_react3.useState)(!0), [categoryA, setCategoryA] = (0, import_react3.useState)(!1), aCategoryHandler = (e) => {
    localStorage.setItem("categoryA", JSON.stringify(!categoryA)), setCategoryA(!categoryA);
  }, [categoryB, setCategoryB] = (0, import_react3.useState)(!1), bCategoryHandler = (e) => {
    localStorage.setItem("categoryB", JSON.stringify(!categoryB)), setCategoryB(!categoryB);
  }, [categoryC, setCategoryC] = (0, import_react3.useState)(!1), cCategoryHandler = (e) => {
    localStorage.setItem("categoryC", JSON.stringify(!categoryC)), setCategoryC(!categoryC);
  }, [colorR, setColorR] = (0, import_react3.useState)(!1), rColorHandler = (e) => {
    localStorage.setItem("colorR", JSON.stringify(!colorR)), setColorR(!colorR);
  }, [colorG, setColorG] = (0, import_react3.useState)(!1), gColorHandler = (e) => {
    localStorage.setItem("colorG", JSON.stringify(!colorG)), setColorG(!colorG);
  }, [colorB, setColorB] = (0, import_react3.useState)(!1), bColorHandler = (e) => {
    localStorage.setItem("colorB", JSON.stringify(!colorB)), setColorB(!colorB);
  }, [sortType, setSortType] = (0, import_react3.useState)("");
  return (0, import_react3.useEffect)(() => {
    setIsVisible(JSON.parse(localStorage.getItem("isVisible")) || !1), setCategoryA(JSON.parse(localStorage.getItem("categoryA")) || !1), setCategoryB(JSON.parse(localStorage.getItem("categoryB")) || !1), setCategoryC(JSON.parse(localStorage.getItem("categoryC")) || !1), setColorR(JSON.parse(localStorage.getItem("colorR")) || !1), setColorG(JSON.parse(localStorage.getItem("colorG")) || !1), setColorB(JSON.parse(localStorage.getItem("colorB")) || !1), setSortType(JSON.parse(localStorage.getItem("sortType")) || !1);
  }, []), (0, import_react3.useEffect)(function() {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      lastScrollY < window.scrollY ? (setIsVisible(!1), localStorage.setItem("isVisible", JSON.stringify(isVisible))) : (setIsVisible(!0), localStorage.setItem("isVisible", JSON.stringify(isVisible))), lastScrollY = window.scrollY;
    });
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Container, { fluid: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Container, { className: "navbar fixed-top", fluid: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "navbar-icon", src: require_shop_logo() }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: "Shop Demo" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Container, { className: isVisible ? "filter-grid fixed-top" : "filter-grid fixed-top filter--hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        CategoryFilterComponent,
        {
          categoryA,
          categoryB,
          categoryC,
          aCategoryHandler,
          bCategoryHandler,
          cCategoryHandler
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 99,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        ColorFilterComponent,
        {
          colorR,
          colorG,
          colorB,
          rColorHandler,
          gColorHandler,
          bColorHandler
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Form.Select, { className: "sort-select filter-container filter-button", value: sortType, onChange: (e) => setSortType(e.target.value), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { children: "None" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "ascending", children: "Low to High" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "descending", children: "High to Low" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Row, { className: "product-grid", children: products.filter((product) => !(categoryA && !product.categories.includes("A") || categoryB && !product.categories.includes("B") || categoryC && !product.categories.includes("C") || colorR && product.color !== "R" || colorG && product.color !== "G" || colorB && product.color !== "B" || product.stock === 0)).sort((a, b) => {
      if (sortType === "ascending")
        return a.price > b.price ? 1 : -1;
      if (sortType === "descending")
        return a.price < b.price ? 1 : -1;
    }).map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ProductComponent, { product }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 141,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Row, { className: cart.length != 0 ? "cart-grid fixed-right" : "cart-grid--hidden fixed-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Container, { className: "cart-content", children: cart.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: "Cart" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this),
      cart.map((entry2) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CartEntryComponent, { entry: entry2 }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 150,
        columnNumber: 17
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "mb-2 text-muted", children: [
        "Total: \u20AC",
        cart.reduce((a, b) => a + parseFloat(b.price) * parseInt(b.count), 0).toFixed(2).replace(".", ",")
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_bootstrap5.Button, { className: "pay-button", variant: "success", children: "Pay Now" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 147,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 161,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 146,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
async function loader() {
  let [products, cart] = await Promise.all([
    getAllProducts(),
    getAllEntries()
  ]);
  return (0, import_node2.json)({ products, cart });
}
async function action({ request }) {
  let formData = await request.formData(), intent = formData.get("intent"), data = Object.fromEntries(formData);
  return intent === "plus" ? (await addToCart(data), await updateStock(data, !1)) : intent === "minus" ? (await decreaseAmount(data), await updateStock(data, !0)) : intent === "remove" && (await removeFromCart(data), await updateStock(data, !0)), (0, import_node2.redirect)("/");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DM2EDGQ2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-NJHFEDI5.js", "/build/_shared/chunk-XFNEQAGU.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-C6J2X6TU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-35JGUT6H.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "d7253002", hmr: { runtime: "/build/_shared/chunk-XFNEQAGU.js", timestamp: 1693763299338 }, url: "/build/manifest-D7253002.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
