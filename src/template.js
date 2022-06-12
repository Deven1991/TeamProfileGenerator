function roleCheck(answer) {
    var potentialEmployee = ``;
    var icon = ``;
    if (answer.getRole() === "Manager") {
        // if User selects manager
        potentialEmployee = `Office Number: ${answer.officeNumber}`;
        icon = `<i class="bi bi-building"></i>`;
    }
    else if (answer.getRole() === "Intern") {
        // if user selects intern
        potentialEmployee = `School: ${answer.school}`;
        icon = ` <i class="bi bi-book-half"></i>`;
    }
    else if (answer.getRole() === "Engineer") {
        // if user selects engineer
        potentialEmployee = `Github: <a href="https://github.com/${answer.github}" target="_blank" style="color:black">${answer.github}</a> `
        icon = `<i class="bi bi-calculator"></i>`;
    }
    return potentialEmployee + icon;
}

function generateTemplate(answers) {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title>My Team</title>
    </head>
    
    <body>
    
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                My Team
            </p>
            <p class="subtitle">
                Team's Basic Info
            </p>
        </div>
    </section>

    <div class="tile">
        <div class="card" style="width: 18rem;">
        ${generateCard(answers)}
        </div>
    </div>
    
    </body>

    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Website</strong> by <a href="https://github.com/deven1991">Melissa Deven</a>.
            </p>
        </div>
    </footer>
    
    </html>
    `
};

function generateCard(answers) {
    var htmlCard = ``;
    for (let i = 0; i < answers.length; i++) {
        htmlCard += `
    <div class="card ml-3">
        <h2 class="card-header text-center">${answers[i].name}</h2>
        <h4 class="card-text text-center">${answers[i].getRole()}</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers[i].id}</li>
            <li class="list-group-item">E-mail: <a href ="mailto:${answers[i].email}" style="color:black">${answers[i].email}</a></li>
            <li class="list-group-item">${roleCheck(answers[i])}</li>
        </ul>
    </div>
    `
    }
    return htmlCard;
};

module.exports = { generateTemplate, generateCard };