
/* Storing Vabiabels */
const mark_height = 1.69;
const mark_mass = 78;
const John_height = 1.88;
const john_mass = 85;


/* Calculatin BMI */
bmi_mark = mark_mass / mark_height ** 2;
bmi_john = john_mass / John_height ** 2;

console.log(bmi_mark, bmi_john)

/* Comparing */
compare = bmi_mark > bmi_john;

console.log (compare)