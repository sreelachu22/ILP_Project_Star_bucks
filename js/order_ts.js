var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchDatas() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, products_1, maincontainer, i, frapContainer, container1, image1, container2, h4, container3, p3, p4, container4, p5, button1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://mocki.io/v1/73d694d0-bd11-4e29-8916-d124897d1721")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    products_1 = [];
                    data.forEach(function (element) {
                        products_1.push(element);
                        console.log(products_1);
                    });
                    maincontainer = document.getElementById("outer_container");
                    if (maincontainer) {
                        maincontainer.classList.add("main");
                        for (i = 0; i < 6; i++) {
                            frapContainer = document.createElement("div");
                            frapContainer.classList.add("frap");
                            container1 = document.createElement("div");
                            container1.classList.add("frap1");
                            image1 = document.createElement("img");
                            image1.src = products_1[i].thumbnail;
                            container1.appendChild(image1);
                            container2 = document.createElement("div");
                            container2.classList.add("frap2");
                            h4 = document.createElement("h4");
                            h4.textContent = products_1[i].title;
                            container2.appendChild(h4);
                            container3 = document.createElement("div");
                            container3.classList.add("tall");
                            p3 = document.createElement("p");
                            p3.textContent = products_1[i].category;
                            p4 = document.createElement("p");
                            p4.textContent = products_1[i].description;
                            container3.appendChild(p3);
                            container3.appendChild(p4);
                            container4 = document.createElement("div");
                            container4.classList.add("money");
                            p5 = document.createElement("h3");
                            p5.textContent = "\u20B9 ".concat(products_1[i].price);
                            button1 = document.createElement("button");
                            button1.classList.add("button1");
                            button1.textContent = "Add Item";

                            button1.addEventListener("click", function() {
                                window.location.href = "pay.html";
                            });
                            container4.appendChild(p5);
                            container4.appendChild(button1);
                            container2.appendChild(container3);
                            container2.appendChild(container4);
                            frapContainer.appendChild(container1);
                            frapContainer.appendChild(container2);
                            maincontainer.appendChild(frapContainer);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchDatas();
function goToStorePage() {
    window.location.href = "store.html";
}
