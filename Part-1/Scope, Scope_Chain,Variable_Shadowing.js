// ================= GLOBAL SCOPE =================
let name = "GlobalName"; // global variable
let age = 50;

function outerFunction() {
    // ================= FUNCTION SCOPE =================
    let name = "OuterName"; // function variable
    let score = 100;

    console.log("Function Scope:");
    console.log("name:", name); // outer function variable
    console.log("age:", age);   // global variable
    console.log("score:", score);

    function innerFunction() {
        // ================= SCOPE CHAIN =================
        let name = "InnerName"; // inner function variable
        let level = 1;

        console.log("\nScope Chain Example:");
        console.log("name:", name);   // inner function variable
        console.log("score:", score); // outer function variable
        console.log("age:", age);     // global variable
        console.log("level:", level); // inner function variable

        // ================= VARIABLE SHADOWING =================
        let score = 999; // shadows outer function variable
        console.log("\nVariable Shadowing Example:");
        console.log("score:", score); // prints 999 (inner dominates)

        // ================= BLOCK SCOPE =================
        {
            let age = 25; // block scoped
            console.log("\nBlock Scope Example:");
            console.log("age inside block:", age);
        }
        // console.log(age); // outer age (50), not block age (25)
    }

    innerFunction();

    // console.log(level); // ❌ ERROR: inner function variable
}

outerFunction();

// console.log(score); // ❌ ERROR: function variable not accessible globally