$(document).ready(function() {
    // Adiciona uma tarefa ao submeter o formulário
    $("#task-form").submit(function(event) {
        event.preventDefault();
        var taskText = $("#task-input").val();
        if (taskText.trim() !== "") {
            var listItem = $("<li>").text(taskText);
            $("#task-list").append(listItem);
            $("#task-input").val("");
        }
    });

    // Marca uma tarefa como concluída ao clicar nela
    $("#task-list").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});
