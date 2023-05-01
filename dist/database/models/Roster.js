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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roster = exports.RosterStatus = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
var RosterStatus;
(function (RosterStatus) {
    RosterStatus["unselected"] = "unselected";
    RosterStatus["notWorking"] = "notWorking";
    RosterStatus["contactable"] = "contactable";
    RosterStatus["working"] = "working";
})(RosterStatus = exports.RosterStatus || (exports.RosterStatus = {}));
let Roster = class Roster {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Roster.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => User_1.User, user => user.roster, {
        onDelete: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], Roster.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "monday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "tuesday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "wednesday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "thursday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "friday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "simple-enum",
        enum: RosterStatus,
        default: RosterStatus.unselected
    }),
    __metadata("design:type", String)
], Roster.prototype, "saturday", void 0);
Roster = __decorate([
    (0, typeorm_1.Entity)()
], Roster);
exports.Roster = Roster;
