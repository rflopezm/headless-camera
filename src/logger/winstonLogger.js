"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
var winston_1 = __importDefault(require("winston"));
var WinstonLogger = /** @class */ (function () {
    function WinstonLogger() {
        winston_1.default.addColors(this.colors);
        this._logger = winston_1.default.createLogger({
            level: this.level,
            levels: this.levels,
            format: this.format,
            transports: this.transports,
        });
    }
    Object.defineProperty(WinstonLogger.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinstonLogger.prototype, "levels", {
        get: function () {
            return {
                error: 0,
                warn: 1,
                info: 2,
                http: 3,
                debug: 4,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinstonLogger.prototype, "colors", {
        get: function () {
            return {
                error: 'red',
                warn: 'yellow',
                info: 'blue',
                http: 'green',
                debug: 'white',
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinstonLogger.prototype, "level", {
        get: function () {
            var env = process.env.NODE_ENV || 'development';
            return env === 'development' ? 'debug' : 'warn';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinstonLogger.prototype, "format", {
        get: function () {
            return winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf(function (info) { return info.timestamp + " " + info.level + ": " + info.message; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WinstonLogger.prototype, "transports", {
        get: function () {
            return [
                new winston_1.default.transports.Console(),
                new winston_1.default.transports.File({
                    filename: 'logs/error.log',
                    level: 'error',
                }),
                new winston_1.default.transports.File({ filename: 'logs/all.log' }),
            ];
        },
        enumerable: false,
        configurable: true
    });
    return WinstonLogger;
}());
exports.WinstonLogger = WinstonLogger;
//# sourceMappingURL=winstonLogger.js.map