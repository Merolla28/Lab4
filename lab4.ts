let tasks: string[] = [];
let d = document.getElementById('display') as HTMLInputElement;

function addTask() {
    let input = document.getElementById('TaskName') as HTMLInputElement;
    tasks.push(input.value);
    render();
}

function render() {


    let p = document.createElement('p');
    p.textContent = tasks[tasks.length - 1];
    d.appendChild(p);

}