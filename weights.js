
/* Storing consts */
const mark_height = 1.69;
const mark_mass = 40;
const John_height = 1.69;
const john_mass = 40;


/* Calculatin BMI */
bmi_mark = mark_mass / mark_height ** 2;
bmi_john = john_mass / John_height ** 2;

console.log(bmi_mark, bmi_john)

/* Comparing */
compare = bmi_mark > bmi_john

console.log (compare)

/* */
if(bmi_mark > bmi_john)
{
    console.log(`Mark has higher BMI ${bmi_mark}`)
}

else if (bmi_mark == bmi_john) {
 
    console.log(`the BMIs are equal ${bmi_mark} ${bmi_john}`)
}

else {
    console.log(`John has a higher BMI ${bmi_john}`)
}