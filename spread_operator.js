var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// spread operator with array
var arr = ["Ali", "Murad", "Rehman"];
var arr1 = ["yellow", "black", "pink"];
var updateArray = __spreadArray(__spreadArray([], arr, true), arr1, true); ////here ...spreadOperator is use
console.log(updateArray);
///spread operator with object
var student1 = {
    name: "rao ali murad",
    email: 'raoalimurad@52',
    id: 20
};
var student2 = __assign(__assign({}, student1), { hobbies: ["cricket", "hockey"] });
console.log(student2);
