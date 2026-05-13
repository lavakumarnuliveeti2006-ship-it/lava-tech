function openPlatform() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("platformPage").style.display = "block";
}
function selectLanguage(language) {
  document.getElementById("languageTitle").innerText = language + " Lesson";

  if (language === "Python") {
    document.getElementById("lessonText").innerText =
      "Python is beginner-friendly. Example: print('Hello World')";
    document.getElementById("codeBox").value = "print('Hello World')";
  }

  else if (language === "Java") {
    document.getElementById("lessonText").innerText =
      "Java is used for apps, backend, and Android development.";
    document.getElementById("codeBox").value =
      "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}";
  }

  else if (language === "C") {
    document.getElementById("lessonText").innerText =
      "C is a powerful basic programming language.";
    document.getElementById("codeBox").value =
      "#include <stdio.h>\nint main() {\n  printf(\"Hello World\");\n  return 0;\n}";
  }

  else if (language === "C++") {
    document.getElementById("lessonText").innerText =
      "C++ is used for games, software, and high-performance apps.";
    document.getElementById("codeBox").value =
      "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World\";\n  return 0;\n}";
  }
}

const buttons = document.querySelectorAll(".course-btn");
const lessonBox = document.querySelector("#lesson-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const language = button.getAttribute("data-lang");

        if (language === "c") {
            lessonBox.innerHTML = "C Basics: Variables, Data Types, printf()";
        }
        else if (language === "cpp") {
            lessonBox.innerHTML = "C++ Basics: OOP, Classes, Objects";
        }
        else if (language === "java") {
            lessonBox.innerHTML = "Java Basics: JVM, Classes, Methods";
        }
        else if (language === "python") {
            lessonBox.innerHTML = "Python Basics: Easy syntax, print(), loops";
        }
    });
});
function runCode() {
    let code = document.getElementById("codeBox").value;
    let output = document.getElementById("outputBox");

    if (code.includes("print(")) {
        let result = code.match(/print\((.*?)\)/);

        if (result && result[1]) {
            output.innerHTML = "Output:<br>" + result[1].replace(/['"]/g, "");
        } else {
            output.innerHTML = "Output:<br>Syntax Error";
        }
    } else {
        output.innerHTML = "Output:<br>Write Python print() to see result";
    }
}