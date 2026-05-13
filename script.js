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
            "Java is used for apps, backend, and Android development.";
        document.getElementById("codeBox").value =
            'public class Main {\\n  public static void main(String[] args) {\\n    System.out.println("Hello World");\\n  }\\n}';
    } 
    else if (language === "C") {
        document.getElementById("lessonText").innerText =
            "C is a powerful basic programming language.";
        document.getElementById("codeBox").value =
            '#include <stdio.h>\\nint main() {\\n  printf("Hello World");\\n  return 0;\\n}';
    } 
    else if (language === "C++") {
        document.getElementById("lessonText").innerText =
            "C++ is used for games, software, and high-performance apps.";
        document.getElementById("codeBox").value =
            '#include <iostream>\\nusing namespace std;\\nint main() {\\n  cout << "Hello World";\\n  return 0;\\n}';
    }
}

let pyodideReady = false;
let pyodide = null;
let pyodideScriptLoaded = false;

function loadPyodideScript() {
    return new Promise((resolve, reject) => {
        if (pyodideScriptLoaded) {
            resolve();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";

        script.onload = () => {
            pyodideScriptLoaded = true;
            resolve();
        };

        script.onerror = () => {
            reject("Failed to load Python compiler. Check internet connection.");
        };

        document.body.appendChild(script);
    });
}

async function runCode() {
    const code = document.getElementById("codeBox").value;
    const output = document.getElementById("outputBox");

  output.innerHTML = "First time loading Python (30–60 sec)… please wait ⏳";

    try {
        if (!pyodideReady) {
            await loadPyodideScript();
            pyodide = await loadPyodide();
            pyodideReady = true;
        }

        pyodide.runPython(`
import sys
from io import StringIO

output = StringIO()
sys.stdout = output

${code}

sys.stdout = sys.__stdout__
`);

        const result = pyodide.runPython("output.getvalue()");
        output.innerHTML = "Output:<br>" + result.replace(/\\n/g, "<br>");

    } catch (err) {
        output.innerHTML = "Error:<br>" + err;
    }
}