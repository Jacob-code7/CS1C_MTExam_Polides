const DSA = [];
const WebDev = [];

function displayMenu() {
    console.log("Choose a subject:");
    console.log("(A) DSA");
    console.log("(B) WebDev");
}

function displayOperations() {
    console.log("Choose an operation:");
    console.log("(A) Enroll");
    console.log("(B) Unenroll");
    console.log("(C) Select Another Subject");
    console.log("(D) Exit");
}

function enrollStudent(subject) {
    const studentName = prompt("Enter the name of the student to enroll:");
    subject.push(studentName);
    console.log(`${studentName} has been enrolled successfully!`);
}

function unenrollStudent(subject) {
    console.log("Current students:", subject.join(", "));
    const studentName = prompt("Enter the name of the student to unenroll:");
    const index = subject.indexOf(studentName);
    if (index !== -1) {
        subject.splice(index, 1);
        console.log(`${studentName} has been unenrolled successfully!`);
    } else {
        console.log(`Student ${studentName} not found.`);
    }
}

function displayEnrolledStudents() {
    console.log("Enrolled students:");
    console.log("DSA:", DSA.join(", ") || "No students enrolled.");
    console.log("WebDev:", WebDev.join(", ") || "No students enrolled.");
}

function main() {
    let selectedSubject;
    while (true) {
        displayMenu();
        const subjectChoice = prompt("Select a subject (A/B):").toUpperCase();
        selectedSubject = subjectChoice === 'A' ? DSA : subjectChoice === 'B' ? WebDev : null;

        if (!selectedSubject) {
            console.log("Invalid choice. Try again.");
            continue;
        }

        while (true) {
            displayOperations();
            const operationChoice = prompt("Choose an operation (A/B/C/D):").toUpperCase();

            if (operationChoice === 'A') {
                enrollStudent(selectedSubject);
            } else if (operationChoice === 'B') {
                unenrollStudent(selectedSubject);
            } else if (operationChoice === 'C') {
                break; 
            } else if (operationChoice === 'D') {
                displayEnrolledStudents();
                console.log("Exiting program.");
                return;
            } else {
                console.log("Invalid operation. Try again.");
            }
        }
    }
}

main();