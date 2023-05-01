"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Location = exports.Contract = exports.EmployeeType = exports.RolePermission = exports.Role = void 0;
const typeorm_1 = require("typeorm");
const Roster_1 = require("./Roster");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const datetime = process.env.PROD_DATABASE === "true"
    ? "timestamp"
    : "datetime";
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["operations"] = "operations";
    Role["admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
var RolePermission;
(function (RolePermission) {
    RolePermission[RolePermission["user"] = 0] = "user";
    RolePermission[RolePermission["operations"] = 1] = "operations";
    RolePermission[RolePermission["admin"] = 2] = "admin";
})(RolePermission = exports.RolePermission || (exports.RolePermission = {}));
var EmployeeType;
(function (EmployeeType) {
    EmployeeType["driver"] = "driver";
    EmployeeType["trainer"] = "trainer";
    EmployeeType["temp"] = "temp";
    EmployeeType["navigator"] = "navigator";
    EmployeeType["operations"] = "operations";
})(EmployeeType = exports.EmployeeType || (exports.EmployeeType = {}));
var Contract;
(function (Contract) {
    Contract["fullTime"] = "fullTime";
    Contract["partTime"] = "partTime";
    Contract["casual"] = "casual";
    Contract["temp"] = "temp";
})(Contract = exports.Contract || (exports.Contract = {}));
var Location;
(function (Location) {
    Location["cbd"] = "cbd";
    Location["innerNorth"] = "innerNorth";
    Location["outerNorth"] = "outerNorth";
    Location["innerEast"] = "innerEast";
    Location["outerEast"] = "outerEast";
    Location["innerSouth"] = "innerSouth";
    Location["outerSouth"] = "outerSouth";
    Location["innerWest"] = "innerWest";
    Location["outerWest"] = "outerWest";
})(Location = exports.Location || (exports.Location = {}));
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "employeeType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: Role,
        default: Role.user
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: Contract,
        default: Contract.fullTime
    }),
    __metadata("design:type", String)
], User.prototype, "contract", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "certified", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "injured", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: datetime, nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "joinDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: Location,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Roster_1.Roster, roster => roster.user, {
        cascade: true
    }),
    __metadata("design:type", Roster_1.Roster)
], User.prototype, "roster", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
