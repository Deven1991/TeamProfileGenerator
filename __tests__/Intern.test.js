const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Bryce Collins', '0809', 'bcollins@yahoo.com', 'IU');
    expect(intern.name).toBe('Bryce Collins');
    expect(intern.id).toBe('0809');
    expect(intern.email).toBe('bcollins@yahoo.com');
    expect(intern.school).toBe('IU');
});

test("gets intern's school", () => {
    const intern = new Intern('Bryce Collins', '0809', 'bcollins@yahoo.com', 'IU');
    expect(intern.getSchool()).toEqual(expect.stringContaining('IU'));
});

test("gets intern's role", () => {
    const intern = new Intern('Bryce Collins', '0809', 'bcollins@yahoo.com', 'IU');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});