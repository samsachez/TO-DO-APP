document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var input = document.getElementById('place');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var task = input.value.trim(); // Trim whitespace from input value

        if (task !== '') {
            addTask(task);
            input.value = ''; // Clear input field after adding task
        }
    });

    function addTask(task) {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);

        document.body.appendChild(ul);
    }
});

