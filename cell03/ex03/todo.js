const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

window.onload = function () {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    if (todoCookie) {
        const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        tasks.reverse().forEach(task => addTask(task, false));
    }
};

function saveToCookie() {
    const tasks = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        tasks.push(item.innerText);
    });

    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(tasks))}; expires=${d.toUTCString()}; path=/`;
}

function addTask(text, shouldSave = true) {
    if (!text || text.trim() === "") return;

    const div = document.createElement('div');
    div.className = 'todo-item';
    div.innerText = text;

    div.onclick = function () {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove();
            saveToCookie();
        }
    };

    ftList.insertBefore(div, ftList.firstChild);

    if (shouldSave) saveToCookie();
}

newBtn.onclick = function () {
    const task = prompt("Enter your new TO DO:");
    addTask(task);
};
