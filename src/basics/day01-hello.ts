interface Tester {
  name: string;
  yearsOfExperience: number;
  skills: string[];
}

const me: Tester = {
  name: "Yogesh",
  yearsOfExperience: 4,
  skills: ["Manual Testing", "TypeScript", "Playwright"],
};

function introduce(tester: Tester): string {
  return `${tester.name} has ${tester.yearsOfExperience} years of QA experience in ${tester.skills.join(", ")}.`;
}

const add = (a: number, b: number): number => a + b;

console.log(introduce(me));
console.log("2 + 3 =", add(2, 3));
console.log("Account check: committed from the personal repo");
