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
function goToSignupOTP() {
    window.location.href = 'signupOTP.html';
}
function validateRegister() {
    var emailField = document.getElementById("signup-email");
    var displaynameField = document.getElementById("signup-name");
    var usernameField = document.getElementById("signup-username");
    var passwordField = document.getElementById("signup-password");
    var acceptTerms = document.getElementById("signup-terms");
    if (emailField.value === "") {
        alert("Email cannot be empty");
    }
    else if (!isValidEmail(emailField.value)) {
        // Handle invalid email case if needed
    }
    else if (usernameField.value === "") {
        alert("Username cannot be empty");
    }
    else if (passwordField.value.length < 8) {
        alert("Password must be a minimum of 8 characters");
    }
    else {
        var userData_1 = {
            id: 31,
            email: emailField.value,
            username: usernameField.value,
            firstName: displaynameField.value,
            password: passwordField.value,
        };
        var postUrl = "https://dummyjson.com/users/add";
        addUser(postUrl, userData_1).then(function (postResponse) {
            console.log(postResponse);
            var registeredUsers = [];
            var storedData = sessionStorage.getItem("registeredUsers");
            if (storedData) {
                registeredUsers = JSON.parse(storedData);
            }
            registeredUsers.push(userData_1);
            sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
            window.location.href = "signupOTP.html";
        });
    }
}
function isValidEmail(registerEmail) {
    var validEmailExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!registerEmail.match(validEmailExpr)) {
        alert("Not a valid email address");
        return false;
    }
    else {
        return true;
    }
}
function addUser(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response, responseData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseData = _a.sent();
                    return [2 /*return*/, responseData];
                case 3:
                    error_1 = _a.sent();
                    console.error("There was a problem with the fetch operation:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
