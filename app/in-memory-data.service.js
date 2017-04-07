"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. A' },
            { id: 12, name: 'Mr. B' },
            { id: 13, name: 'Mr. C' },
            { id: 14, name: 'Mr. D' },
            { id: 15, name: 'Mr. E' },
            { id: 16, name: 'Mr. F' },
            { id: 17, name: 'Mr. G' },
            { id: 18, name: 'Mr. H' },
            { id: 19, name: 'Mr. I' },
            { id: 20, name: 'Mr. J' },
            { id: 21, name: 'Mr. K' },
            { id: 22, name: 'Mr. L' },
            { id: 23, name: 'Mr. M' },
            { id: 24, name: 'Mr. N' },
            { id: 25, name: 'Mr. O' },
            { id: 26, name: 'Mr. P' },
            { id: 27, name: 'Mr. Q' },
            { id: 28, name: 'Mr. R' },
            { id: 29, name: 'Mr. S' },
            { id: 30, name: 'Mr. T' },
            { id: 31, name: 'Mr. U' },
            { id: 32, name: 'Mr. V' },
            { id: 33, name: 'Mr. W' },
            { id: 23, name: 'Mr. X' },
            { id: 35, name: 'Mr. Y' },
            { id: 36, name: 'Mr. Z' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map