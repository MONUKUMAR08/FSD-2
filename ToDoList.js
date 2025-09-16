  function addTask() {
      let input = document.getElementById("taskInput");
      let text = input.value.trim();
      if (text === "") return;

      let li = document.createElement("li");
      li.innerHTML = text + " <button onclick=\"removeTask(this)\">X</button>";
      li.addEventListener("click", function() {
        this.classList.toggle("completed");
      });
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    function removeTask(btn) {
      btn.parentElement.remove();
    }
