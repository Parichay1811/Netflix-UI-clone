let accordion = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let icon = this.childNodes[1];
    
    // Toggle icon between plus and times
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-plus");
    }

    // Toggle the content visibility
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
