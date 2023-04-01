// import userData from  './data.json' assert {type: 'json'};

const container = document.getElementById('container')

const data = [
    {
        "question": "What is Prototype ?",
        "answer": "A prototype is a preliminary or first model of something, such as a machine."
    },
    {
        "question": "List out the type of user.",
        "answer": "End user, Administrator, Observer(analyst), and Contributor(Programmer)"
    },
    {
        "question": "What is system ?",
        "answer": "System as a group of components or subsystems that integrate and function together in order to achieve a specific goal."
    },
    {
        "question": "What is System Design ?",
        "answer": "System Design is the process of defining elements of a system like modules, architecture, components and their interfaces and data for a system based on the specified requirements."
    },
    {
        "question": "What is System Analysis ?",
        "answer": "System analysis is the practice of planning, designing and maintaining software(information) systems. / System analysis is the process by which an individual (s) studies a system such that an information system can be analyzed, modeled, and a logical alternative can be chosen."
    },
    {
        "question": "Who is End user ?",
        "answer": "The and user is the person who will e using the software and program."
    },
    {
        "question": "What is Data capture ?",
        "answer": "Data capture is the process of extracting information from paper or electronic documents and converting it into data for key systems."
    },
    {
        "question": "What is Input ?",
        "answer": "An input is data that is entered into or received by a computer."
    },
    {
        "question": "What is Validation ?",
        "answer": "Validation means checking or verifying any data before it is allowed into a computer system."
    },
    {
        "question": "Define of Non-Signifficant code.",
        "answer": "A non significant code conveys no information by itself."
    },
    {
        "question": "Pay-slip is External output (T/F).",
        "answer": "True"
    },
    {
        "question": "Define: Data Validation.",
        "answer": "Data Validation or Validation means checking or verifying any data before it is allowed into a computer system."
    },
    {
        "question": "Define: Cohesion.",
        "answer": "Cohesion refers to which the elements inside a module belong together."
    },
    {
        "question": "What is full form of VTOC ?",
        "answer": "VTOC - Volume Table Of Contents."
    },
    {
        "question": "Define: Coupling.",
        "answer": "Coupling is the degree of interdependence between software modules."
    },
    {
        "question": "What is Peak Load testing ?",
        "answer": "Peak load testing is placing a load on the server for a short time to emulate the heaviest demand that would be generated at peak user times."
    },
    {
        "question": "Full form of HIPO.",
        "answer": "Hieratchical Input Process Output (model)"
    }
];

var count = 1
data.forEach(userData => {
    const queAns = document.createElement('ul')
    queAns.classList.add('queAns')
    var que = `<li class="que"><span class="count">${count}.</span>${userData.question}</li>`;
    var ans = `<li class="ans">${userData.answer}</li>`;
    queAns.innerHTML = que + ans;
    container.append(queAns)
    count++
});