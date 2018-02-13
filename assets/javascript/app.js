//trivia questions in form of objs
var questions = {
    q1 = {
        question: "Who's birthday party did Harry, Ron, and Hermione go to in the The Chamber of Secrets?",
        answers: ["Dobby", "Nearly Headless Nick", "Draco Malfoy", "Albus Dumbledore"],
        correct: "Nearly Headless Nick"
    },
    q2 = {
        question: "What patronus does Luna Lovegood have?",
        answers: ["Stag", "Horse", "Rabbit", "Lion"],
        correct: "Rabbit"
    },
    q3 = {
        question: "Who was the quiddithc commentator in Harry's first years at Hogwarts?",
        answers: ["Lee Jordan", "Dean Thomas", "Angelina Johnson", "Terry Boot"],
        correct: "Lee Jordan"
    },
    q4 = {
        question: "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
        answers: ["Erniie McMillian", "Barty Crouch Jr.", "Severus Snape", "Vincent Crabbe"],
        correct: "Barty Crouch Jr."
    },
    q5 = {
        question: "What organization did Hermione start in her 4th year?",
        answers: ["Dumbledore's Army", "Witches for Equal Rights", "Society for the Promotion of Elfish Welfare", "Wizards Against the Dark Arts"],
        correct: "Society for the Promotion of Elfish Welfare"
    },
    q6 = {
        question: "What potion did Harry take in order to get Slughorn's memories?",
        answers: ["Felix Felicis", "Essence of Dittany", "Alihotsy Draught", "Polyjuice Potion"],
        correct: "Felix Felicis"
    },
    q7 = {
        question: "Who did Hermione take to Slughorn's Christmas party?",
        answers: ["Cormac McLaggen", "Neville Longbottom", "Dean Thomas", "Ron Weasley"],
        correct: "Cormac McLaggen"
    },
    q8 = {
        question: "Who was first to be stunned by the Basilisk?",
        answers: ["Ginny Weasley", "Mrs. Norris", "Colin Creevey", "Hermione Granger"],
        correct: "Mrs. Norris"
    },
    q9 = {
        question: "Who ended up giving Harry permission to go to Hogsmeade?",
        answers: ["Albus Dumbledore", "Vernon Dursley", "Sirius Black", "Minerva McGonagall"],
        correct: "Sirius Black"
    },
    q10 = {
        question: "What did Dumbledore leave for Hermione in his will?",
        answers: ["A bezoar", "An enchanted purse", "A lighter", "The Tales of Beedle the Bard"],
        correct: "The Tales of Beedle the Bard"
    },
    q11 = {
        question: "Who found Harry, Ron, and Hermione in the woods in The Deathly Hallows",
        answers: ["Lucius Malfoy", "Voldemort", "Snatchers", "Fenrir Greyback"],
        correct: "Fenrir Greyback"
    },
    q12 = {
        question: "How did Harry survive underwater in the Triwizard Tournament?",
        answers: ["Bubble-head charm", "Gills charm", "Transfiguration", "Gillyweed"],
        correct: "Gillyweed"
    },
    q13 = {
        question: "Who did Ron turn into when Harry, Ron, and Hermione snuck into the Ministry of Magic in The Deathly Hallows?",
        answers: ["Dirk Cresswell", "Mundungus Fletcher", "Albert Runcorn", "Reginald Cattermole"],
        correct: "Reginald Cattermole"
    },
    q14 = {
        question: "What spell is used to save Hermione from the troll in The Sorcerer's Stone?",
        answers: ["Wingardium Leviosa", "Stupify", "Petrificus Totalus", "Confundus"],
        correct: "Wingardium Leviosa"
    },
    q15 = {
        question: "What magazine does Luna's father publish?",
        answers: ["Challenges in Charming", "The Practical Potioneer", "The Daily Prophet", "The Quibbler"],
        correct: "The Quibbler"
    },
    q16 = {
        question: "What was Harry's first broomstick?",
        answers: ["Thunderbolt", "Nimbus 2000", "Cleansweep Two", "Firebolt"],
        correct: "Nimbus 2000"
    },
    q17 = {
        question: "How did Harry spend his first detention?",
        answers: ["Signing qutographs", "Cleaning trophies", "Going into the Forbidden Forest", "Writing an essay"],
        correct: "Going into the forbidden Forest"
    },
    q18 = {
        question: "What happened to Neville's parents that they couldn't remember their son?",
        answers: ["The Confundus Charm was used on them", "They lost their memories in an apperation accident", "The Cruciatus Curse was used on them", "They didn't lose their memories"],
        correct: "The Curciatus Curse was used on them"
    },
    q19 = {
        question: "What crime was Hagrid commited of in his time at Hogwarts?",
        answers: ["Casting a spell on a professor", "Opening the Chamber of Secrets", "Going into the Forbidden Forest", "Killing a girl"],
        correct: "Opening the Chamber of Secrets"
    },
    q20 = {
        question: "What was the name of the female elf Dobby liked?",
        answers: ["Orist", "Minka", "Winky", "Oona"],
        correct: "Winky"
    }
}
//variables to store number of correct, incorrect, and flags. 

var correct = 0;
var incorrect = 0;


//button to start the game.

//function to display question and answers

//if question is correct display green start next question three seconds later

//if question is incorrect, display red x next to answer and highlight correct answer in green. 
