var empleados_sse = _.chain(employeesCollection)
 .filter(function (employee){
    return employee.designation === 'SSE';
})
 .map(function (employee){
    return {name: employee.name, id: employee.id};
})
.value();

console.log(empleados_sse);

