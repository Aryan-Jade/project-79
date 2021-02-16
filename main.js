name_of_the_pizza_array=[];

function add_item(){
    var pizza_1=document.getElementById("name_of_the_pizza_1").value;
    var pizza_2=document.getElementById("name_of_the_pizza_2").value;
    var pizza_3=document.getElementById("name_of_the_pizza_3").value;
    var pizza_4=document.getElementById("name_of_the_pizza_4").value;

    name_of_the_pizza_array.push(pizza_1);
    name_of_the_pizza_array.push(pizza_2);
    name_of_the_pizza_array.push(pizza_3);
    name_of_the_pizza_array.push(pizza_4);
    console.log(name_of_the_pizza_array);
    document.getElementById("display_name").innerHTML=name_of_the_pizza_array;
    document.getElementById("add_button").style.display="none";
    document.getElementById("get_button").style.display="inline-block";
}

function geting(){
    name_of_the_pizza_array.sort();
    console.log(name_of_the_pizza_array);
    document.getElementById("display_name").innerHTML=name_of_the_pizza_array;
}