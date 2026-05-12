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

function runCode() {
  let code = document.getElementById("codeBox").value;

  document.getElementById("outputBox").innerText =
    "Demo Output:\nYour code is ready.\nReal compiler will be added later.";
}