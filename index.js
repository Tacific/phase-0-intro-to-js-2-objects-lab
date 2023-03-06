// Write your solution in this file!
const employee = {
name: "Joe",
streetAddress: "1776 Philadelphia",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj,
    [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;

}

function deleteFromEmployeeByKey(employee, key){
const newEmployee = {...employee};
delete newEmployee[key];
return newEmployee;    
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
const newEmployee = {...employee};
delete employee[key];
return employee;

}




