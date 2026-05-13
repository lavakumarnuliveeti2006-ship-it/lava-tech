function openPlatform() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("platformPage").style.display = "block";
}

function selectLanguage(language) {
    document.getElementById("languageTitle").innerText = language + " Lesson";

    if (language === "Python") {
        document.getElementById("lessonText").innerText =
            "Python is beginner-friendly. Example: print('Hello World')";
        document.getElementById("codeBox").value = "print('Hello Lava')";
    } 
    else if (language === "Java") {
        document.getElementById("lessonText").innerText =
            "Java is used for apps and backend systems.";
        document.getElementById("codeBox").value =
            'System.out.println("Hello Lava");';
    } 
    else if (language === "C") {
        document.getElementById("lessonText").innerText =
            "C is a powerful basic programming language.";
        document.getElementById("codeBox").value =
            'printf("Hello Lava");';
    } 
    else if (language === "C++") {
        document.getElementById("lessonText").innerText =
            "C++ is used for games and performance apps.";
        document.getElementById("codeBox").value =
            'cout << "Hello Lava";';
    }
}

function runCode() {
    const code = document.getElementById("codeBox").value;
    const output = document.getElementById("outputBox");

    // Python print()
    if (code.includes("print(")) {
        let match = code.match(/print\\((.*?)\\)/);
        if (match && match[1]) {
            output.innerHTML = "Output:<br>" + match[1].replace(/['"]/g, "");
        } else {
            output.innerHTML = "Output:<br>Syntax Error";
        }
    }

    // Java System.out.println()
    else if (code.includes("System.out.println")) {
        let match = code.match(/println\\((.*?)\\)/);
        if (match && match[1]) {
            output.innerHTML = "Output:<br>" + match[1].replace(/['"]/g, "");
        } else {
            output.innerHTML = "Output:<br>Syntax Error";
        }
    }

    // C printf()
    else if (code.includes("printf")) {
        let match = code.match(/printf\\((.*?)\\)/);
        if (match && match[1]) {
            output.innerHTML = "Output:<br>" + match[1].replace(/['"]/g, "");
        } else {
            output.innerHTML = "Output:<br>Syntax Error";
        }
    }

    // C++ cout
    else if (code.includes("cout")) {
        let match = code.match(/<<\\s*"(.*?)"/);
        if (match && match[1]) {
            output.innerHTML = "Output:<br>" + match[1];
        } else {
            output.innerHTML = "Output:<br>Syntax Error";
        }
    }

    else {
        output.innerHTML = "Output:<br>Code executed (demo mode)";
    }
} 