let Math_Marks= parseInt(prompt('Enter your Math Marks :'));
let Physics_Marks=parseInt(prompt('Enter your physicsMarks :'));
let chemisteryMarks=parseInt(prompt('Enter your chemisteryMarks :'));
let CS_1_Marks=parseInt(prompt('Enter your CS_1_Marks :'));
let CS_2_Marks=parseInt(prompt('Enter your CS_2_Marks :'));


let total_marks=(Math_Marks+Physics_Marks+chemisteryMarks+CS_1_Marks+CS_2_Marks)*(20)/100;

if(total_marks>=90 && total_marks<100)
    {
        alert("A Grade");
    }
else
    if(total_marks>=70 && total_marks<90)
    {
        alert("B Grade");
    }
else
    if(total_marks>=60 && total_marks<70)
    {
        alert("C Grade");
    }
else
    if(total_marks>=50 && total_marks<60)
    {
        alert("D Grade");
    }
else
    if(total_marks<50)
    {
        alert("F Grade");
    }


alert(total_marks);