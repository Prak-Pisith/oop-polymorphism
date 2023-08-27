var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Main Class 
var BaseVehicle = /** @class */ (function () {
    function BaseVehicle(type) {
        this.type = type;
    }
    BaseVehicle.prototype.control = function () {
        console.log("The ".concat(this.type, " is do something"));
    };
    BaseVehicle.prototype.getType = function () {
        return this.type;
    };
    return BaseVehicle;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(type) {
        return _super.call(this, type) || this;
    }
    Motorbike.prototype.control = function () {
        console.log("The ".concat(this.getType(), " is Riding Forward"));
    };
    return Motorbike;
}(BaseVehicle));
var CarVehicle = /** @class */ (function (_super) {
    __extends(CarVehicle, _super);
    function CarVehicle(type) {
        return _super.call(this, type) || this;
    }
    CarVehicle.prototype.control = function () {
        console.log("The ".concat(this.getType(), " is Driving Forward"));
    };
    return CarVehicle;
}(BaseVehicle));
var simpleVehicle = new BaseVehicle('unknown');
var motorbike = new Motorbike('Motorbike');
var car = new CarVehicle('Car');
simpleVehicle.control();
motorbike.control();
car.control();
