const searchBox = document.getElementById("searchBox");
const subjects = document.querySelectorAll(".subject");

searchBox.addEventListener("input", function () {
  const text = searchBox.value.toLowerCase();

  subjects.forEach(function (subject) {
    const name = subject.textContent.toLowerCase();

    if (name.includes(text)) {
      subject.style.display = "block";
    } else {
      subject.style.display = "none";
    }
  });
});
