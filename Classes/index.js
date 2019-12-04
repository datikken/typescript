var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Application = /** @class */ (function () {
    function Application(name, username) {
        this.username = username;
        this.property = name;
    }
    Application.prototype.run = function () {
        console.log('started');
    };
    Application.prototype.setSome = function () {
        console.log('set');
    };
    Application.prototype.bull = function () {
        console.log('bu');
    };
    return Application;
}());
var app = new Application('shiny', 'app');
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.fuck = function () {
        this.bull();
        console.log('1m');
    };
    return Student;
}(Application));
var db = new Student('yay', 'dam');
db.fuck();
