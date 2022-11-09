player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");



player1_score=0;
player2_score=0;
document.getElementById("player_1_name").innerHTML=player1_name+" : ";
document.getElementById("player_2_name").innerHTML=player2_name+" : ";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

function send(){

 get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("Word in lowercase is "+ word);

index_letter_1=word.charAt(1);
console.log(index_letter_1);

length_divide_2=Math.floor(word.length/2);
index_letter_2=word.charAt(length_divide_2);
console.log(index_letter_2);

length_minus_1=word.length-1;
index_letter_3=word.charAt(length_minus_1);
console.log(index_letter_3);

remove_charAt1=word.replace(index_letter_1, "_");
remove_charAt2=remove_charAt1.replace(index_letter_2, "_");
remove_charAt3=remove_charAt2.replace(index_letter_3, "_");
console.log(remove_charAt3);

question_word="<h4 id='word_display'> Q.  "+remove_charAt3+"</h4>";
input_box="<br> Answer : <input type='text' id='input_check_box' >";
check_button="<br> <br> <button class='btn btn-info' onclick='check()' > check </button>";
row=question_word+input_box+check_button;

document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}

answer_turn="player_2";
question_turn="player_1";

function check(){

get_word=document.getElementById("input_check_box").value;
answer_word=get_word.toLowerCase();
console.log(answer_word);

if(answer_word==word){

if(answer_turn=="player_1"){

player1_score=player1_score+1;
document.getElementById("player_1_score").innerHTML=player1_score;
} 
else{

player2_score=player2_score+1;

document.getElementById("player_2_score").innerHTML=player2_score;

}

}

if(question_turn=="player_1"){
question_turn="player_2";
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;

}
else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question turn - "+player2_name;
}

if(answer_turn=="player_1"){
   answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name;
    
    }
    else{
       answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;
    }

    document.getElementById("output").innerHTML="";
}