const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Melissa Deven', '2311', 'mmdeven@gmail.com', 'Deven1991')
    
    expect(engineer.name).toBe('Melissa Deven');
    expect(engineer.id).toBe('2311');
    expect(engineer.email).toBe('mmdeven@gmail.com');
    expect(engineer.github).toBe('Deven1991');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Melissa Deven', '2311', 'mmdeven@gmail.com', 'Deven1991')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('Deven1991'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Melissa Deven', '2311', 'mmdeven@gmail.com', 'Deven1991')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});