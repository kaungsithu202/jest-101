import { convert } from "./convert";

describe("ROT13", () => {
	it("returns N when given A", () => {
		expect(convert("A")).toBe("N");
	});

	it("returns A when given N", () => {
		expect(convert("N")).toBe("A");
	});

	it("returns O when given B", () => {
		expect(convert("B")).toBe("O");
	});

	it("returns NO when given AB", () => {
		expect(convert("AB")).toBe("NO");
	});

	it("returns AB!! when given NO!!", () => {
		expect(convert("NO!!")).toBe("AB!!");
	});
});
