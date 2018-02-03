
//variables
var business_one_name = "Math 110 College Algebra";
var business_one_description = "Description: Learn the basics of Algebra while preparing for future courses in Calculus.";
var business_one_Prerequisites = "Prerequisites: None";
var business_one_Instructor = "Instructor: Mike";
var business_one_credit= "Credit Hours: 3";
var business_one_duration = "Duration: 50 Min.";

var business_two_name = "Anchor 1";
var business_two_description = "Description: None";
var business_two_Prerequisites = "Prerequisites: None";
var business_two_Instructor = "Instructor: Tom";
var business_two_credit= "Credit Hours: 3";
var business_two_duration = "Duration: 50 Min.";


var business_three_name = "Discourse 1";
var business_three_description = "Description: None";
var business_three_Prerequisites = "Prerequisites: None";
var business_three_Instructor = "Instructor: bob";
var business_three_credit= "Credit Hours: 3";
var business_three_duration = "Duration: 50 Min.";

var business_four_name = "Anchor 2";
var business_four_description = "Description: None";
var business_four_Prerequisites = "Prerequisites: Anchor 1 And Discourse 1";
var business_four_Instructor = "Instructor: Tom";
var business_four_credit= "Credit Hours: 3";
var business_four_duration = "Duration: 50 Min.";

var business_five_name = "Discourse 2";
var business_five_description = "Description: Anchor 1 And Discourse 1";
var business_five_Prerequisites = "Prerequisites: Anchor 1 And Discourse 1";
var business_five_Instructor = "Instructor: bob";
var business_five_credit= "Credit Hours: 3";
var business_five_duration = "Duration: 50 Min.";

var business_six_name = "Statistics 1";
var business_six_description = "Description: None";
var business_six_Prerequisites = "Prerequisites: None";
var business_six_Instructor = "Instructor: Mary";
var business_six_credit= "Credit Hours: 3";
var business_six_duration = "Duration: 50 Min.";

var seat = 30;


//shows or hides the data
function myfunction(){
    var item = document.getElementById("row-one");
    var item2 = document.getElementById("row-two");
    update_values();
    if(item.style.display === "none"){
        item.style.display = "block"
        item2.style.display = "block"
    }
    else{
        item.style.display = "none";
        item2.style.display = "none"
    }
}

//updates the values for the courses
function update_values(){

    document.getElementById('one-name').innerText = business_one_name;
    document.getElementById('one-desc').innerText = business_one_description;
    document.getElementById('one-inst').innerText = business_one_Instructor;
    document.getElementById('one-pre').innerText = business_one_Prerequisites;
    document.getElementById('one-credit').innerText = business_one_credit;
    document.getElementById('one-duration').innerText = business_one_duration;

    document.getElementById('two-name').innerText = business_two_name;
    document.getElementById('two-desc').innerText = business_two_description;
    document.getElementById('two-inst').innerText = business_two_Instructor;
    document.getElementById('two-pre').innerText = business_two_Prerequisites;
    document.getElementById('two-credit').innerText = business_two_credit;
    document.getElementById('two-duration').innerText = business_two_duration;

    document.getElementById('three-name').innerText = business_three_name;
    document.getElementById('three-desc').innerText = business_three_description;
    document.getElementById('three-inst').innerText = business_three_Instructor;
    document.getElementById('three-pre').innerText = business_three_Prerequisites;
    document.getElementById('three-credit').innerText = business_three_credit;
    document.getElementById('three-duration').innerText = business_three_duration;

    document.getElementById('four-name').innerText = business_four_name;
    document.getElementById('four-desc').innerText = business_four_description;
    document.getElementById('four-inst').innerText = business_four_Instructor;
    document.getElementById('four-pre').innerText = business_four_Prerequisites;
    document.getElementById('four-credit').innerText = business_four_credit;
    document.getElementById('four-duration').innerText = business_four_duration;

    document.getElementById('five-name').innerText = business_five_name;
    document.getElementById('five-desc').innerText = business_five_description;
    document.getElementById('five-inst').innerText = business_five_Instructor;
    document.getElementById('five-pre').innerText = business_five_Prerequisites;
    document.getElementById('five-credit').innerText = business_five_credit;
    document.getElementById('five-duration').innerText = business_five_duration;

    document.getElementById('six-name').innerText = business_six_name;
    document.getElementById('six-desc').innerText = business_six_description;
    document.getElementById('six-inst').innerText = business_six_Instructor;
    document.getElementById('six-pre').innerText = business_six_Prerequisites;
    document.getElementById('six-credit').innerText = business_six_credit;
    document.getElementById('six-duration').innerText = business_six_duration;



}

//opens new page and saves the selected item
function select(x){
    localStorage.setItem('selected', x);
    window.location.href = "register.html";
}

//updates the course data with the selected course
function GetValues(){
    var selected = localStorage.getItem('selected');

    if(selected =="one"){
        document.getElementById('name').innerText = business_one_name;
        document.getElementById('desc').innerText = business_one_description;
        document.getElementById('inst').innerText = business_one_Instructor;
        document.getElementById('pre').innerText = business_one_Prerequisites;
        document.getElementById('credit').innerText = business_one_credit;
        document.getElementById('duration').innerText = business_one_duration;
        document.getElementById('seats').innerText = seat;
    }
    else if(selected == "two"){
        document.getElementById('name').innerText = business_two_name;
        document.getElementById('desc').innerText = business_two_description;
        document.getElementById('inst').innerText = business_two_Instructor;
        document.getElementById('pre').innerText = business_two_Prerequisites;
        document.getElementById('credit').innerText = business_two_credit;
        document.getElementById('duration').innerText = business_two_duration;
        document.getElementById('seats').innerText = seat;
    }
    else if(selected == "three"){
        document.getElementById('name').innerText = business_three_name;
        document.getElementById('desc').innerText = business_three_description;
        document.getElementById('inst').innerText = business_three_Instructor;
        document.getElementById('pre').innerText = business_three_Prerequisites;
        document.getElementById('credit').innerText = business_three_credit;
        document.getElementById('duration').innerText = business_three_duration;
        document.getElementById('seats').innerText = seat;
    }
    else if(selected == "four"){
        document.getElementById('name').innerText = business_four_name;
        document.getElementById('desc').innerText = business_four_description;
        document.getElementById('inst').innerText = business_four_Instructor;
        document.getElementById('pre').innerText = business_four_Prerequisites;
        document.getElementById('credit').innerText = business_four_credit;
        document.getElementById('duration').innerText = business_four_duration;
        document.getElementById('seats').innerText = seat;
    }
    else if(selected == "five"){
        document.getElementById('name').innerText = business_five_name;
        document.getElementById('desc').innerText = business_five_description;
        document.getElementById('inst').innerText = business_five_Instructor;
        document.getElementById('pre').innerText = business_five_Prerequisites;
        document.getElementById('credit').innerText = business_five_credit;
        document.getElementById('duration').innerText = business_five_duration;
        document.getElementById('seats').innerText = seat;

    }
    else if(selected == "six"){
        document.getElementById('name').innerText = business_six_name;
        document.getElementById('desc').innerText = business_six_description;
        document.getElementById('inst').innerText = business_six_Instructor;
        document.getElementById('pre').innerText = business_six_Prerequisites;
        document.getElementById('credit').innerText = business_six_credit;
        document.getElementById('duration').innerText = business_six_duration;
        document.getElementById('seats').innerText = seat;
    }

}

//updates the seats and goes to registered page
function update_seats(){
    seat--;
    localStorage.setItem('number', seat);
    window.location.href = "registered.html";

}

//gets seat value and updates element
function Value(){
    var se = localStorage.getItem('number');
    document.getElementById('seats').innerText = "Seats: " + se;
}

//returns to home page
function goBack(){
    window.location.href = "home.html";
}