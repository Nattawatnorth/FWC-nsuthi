$(document).ready(function () {

    function saveToCookie() {
        const tasks = [];

        $('.todo-item').each(function () {
            tasks.push($(this).text());
        });

        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = 'todos=' + encodeURIComponent(JSON.stringify(tasks))
            + '; expires=' + d.toUTCString() + '; path=/';
    }

    function addTask(text, shouldSave) {
        if (!text || text.trim() === '') {
            return;
        }

        const $item = $('<div>')
            .addClass('todo-item')
            .text(text)
            .click(function () {
                if (confirm('Do you want to remove this TO DO?')) {
                    $(this).remove();
                    saveToCookie();
                }
            });

        $('#ft_list').prepend($item);

        if (shouldSave) {
            saveToCookie();
        }
    }

    function loadFromCookie() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(row => row.startsWith('todos='));

        if (todoCookie) {
            const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            tasks.reverse().forEach(function (task) {
                addTask(task, false);
            });
        }
    }

    $('#new-btn').click(function () {
        const task = prompt('Enter your new TO DO:');
        addTask(task, true);
    });

    loadFromCookie();
});
