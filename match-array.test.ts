const users = ["John Doe", "Jane Doe", "Alex"];

it("match array", () => {
	expect(users).toContainEqual("John Doe");
	// expect(users).toContain("John Doe"); failed test
});

it("match objects in array", () => {
	const users = [{ name: "John Doe" }, { name: "Jane Doe" }];
	expect(users).toContainEqual({ name: "John Doe" });
	// expect(users).toContain({ name: "John Doe" });   failed test
});

it("string contains", () => {
	const givenName = expect.stringContaining("John");
	expect("John Doe").toEqual(givenName);
});
// toContain check strictly  ===
// toContainEqual just check the value
//

describe("array", () => {
	const users = ["John Doe", "Jane Doe", "Alex"];
	it("array containing", () => {
		const userSet = expect.arrayContaining(["John Doe", "Jane Doe"]);
		expect(users).toEqual(userSet);
	});
});
