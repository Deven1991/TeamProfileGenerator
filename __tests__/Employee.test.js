const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Reese Emersyn', '0504', 'remersyn@yahoo.com');

    expect(employee.name).toBe('Reese Emersyn');
    expect(employee.id).toBe('0504');
    expect(employee.email).toBe('remersyn@yahoo.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Reese Emersyn', '0504', 'remersyn@yahoo.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Reese Emersyn'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Reese Emersyn', '0504', 'remersyn@yahoo.com');

    expect(employee.getId()).toEqual(expect.stringContaining('0504'));
});

test("gets employee's email", () => {
    const employee = new Employee('Reese Emersyn', '0504', 'remersyn@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('remersyn@yahoo.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Reese Emersyn', '0504', 'remersyn@yahoo.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});