const container = document.getElementById('container')

fetch("data.json")
    .then(response => response.json())
    .then(data => showInfo(data));

var count = 1
function showInfo(data) {
    data.queans.forEach(userData => {
        const queAns = document.createElement('ul')
        queAns.classList.add('queAns')
        var que = `<li class="que"><span class="count">${count}.</span>${userData.question}</li>`;
        var ans = `<li class="ans">${userData.answer}</li>`;
        queAns.innerHTML = que + ans;
        container.append(queAns)
        count++
    });
}