
const translate = require("./translate");

describe("translate", () => {
    test("converts from apple to pig-latin",() => {
        expect(translate("apple")).toEqual("appleway");
    })
});

describe("translate", () => {
    test("converts from elephant to pig-latin",() => {
        expect(translate("elephant")).toEqual("elephantway");
    })
});

describe("translate", () => {
    test("converts from island to pig-latin",() => {
        expect(translate("island")).toEqual("islandway");
    })
});

describe("translate", () => {
    test("converts from octupus to pig-latin",() => {
        expect(translate("octupus")).toEqual("octupusway");
    })
});

describe("translate", () => {
    test("converts from umbrella to pig-latin",() => {
        expect(translate("umbrella")).toEqual("umbrellaway");
    })
});

describe("translate", () => {
    test("converts from dog to pig-latin",() => {
        expect(translate("dog")).toEqual("ogday");
    })
});

describe("translate", () => {
    test("converts from cat to pig-latin",() => {
        expect(translate("cat")).toEqual("atcay");
    })
});

describe("translate", () => {
    test("converts from three to pig-latin",() => {
        expect(translate("three")).toEqual("eethray");
    })
});

describe("translate", () => {
    test("converts from pool to pig-latin",() => {
        expect(translate("pool")).toEqual("oolpay");
    })
});

describe("translate", () => {
    test("converts from Alligator to pig-latin",() => {
        expect(translate("Alligator")).toEqual("alligatorway");
    })
});

describe("translate", () => {
    test("converts from CAT to pig-latin",() => {
        expect(translate("CAT")).toEqual("atcay");
    })
});