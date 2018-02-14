window.onload = function () {
    //trivia questions in form of objs
    var q1 = {
        question: "Who's birthday party did Harry, Ron, and Hermione go to in the The Chamber of Secrets?",
        answers: ["Dobby", "Nearly Headless Nick", "Draco Malfoy", "Albus Dumbledore"],
        correct: "Nearly Headless Nick"
    }
    var q2 = {
        question: "What patronus does Luna Lovegood have?",
        answers: ["Stag", "Horse", "Rabbit", "Lion"],
        correct: "Rabbit"
    }
    var q3 = {
        question: "Who was the quidditch commentator in Harry's first years at Hogwarts?",
        answers: ["Lee Jordan", "Dean Thomas", "Angelina Johnson", "Terry Boot"],
        correct: "Lee Jordan"
    }
    var q4 = {
        question: "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
        answers: ["Ernie McMillian", "Barty Crouch Jr.", "Severus Snape", "Vincent Crabbe"],
        correct: "Barty Crouch Jr."
    }
    var q5 = {
        question: "What organization did Hermione start in her 4th year?",
        answers: ["Dumbledore's Army", "Witches for Equal Rights", "Society for the Promotion of Elfish Welfare", "Wizards Against the Dark Arts"],
        correct: "Society for the Promotion of Elfish Welfare"
    }
    var q6 = {
        question: "What potion did Harry take in order to get Slughorn's memories?",
        answers: ["Felix Felicis", "Essence of Dittany", "Alihotsy Draught", "Polyjuice Potion"],
        correct: "Felix Felicis"
    }
    var q7 = {
        question: "Who did Hermione take to Slughorn's Christmas party?",
        answers: ["Cormac McLaggen", "Neville Longbottom", "Dean Thomas", "Ron Weasley"],
        correct: "Cormac McLaggen"
    }
    var q8 = {
        question: "Who was first to be stunned by the Basilisk?",
        answers: ["Ginny Weasley", "Mrs. Norris", "Colin Creevey", "Hermione Granger"],
        correct: "Mrs. Norris"
    }
    var q9 = {
        question: "Who ended up giving Harry permission to go to Hogsmeade?",
        answers: ["Albus Dumbledore", "Vernon Dursley", "Sirius Black", "Minerva McGonagall"],
        correct: "Sirius Black"
    }
    var q10 = {
        question: "What did Dumbledore leave for Hermione in his will?",
        answers: ["A bezoar", "An enchanted purse", "A lighter", "The Tales of Beedle the Bard"],
        correct: "The Tales of Beedle the Bard"
    }
    var q11 = {
        question: "Who found Harry, Ron, and Hermione in the woods in The Deathly Hallows",
        answers: ["Lucius Malfoy", "Voldemort", "Snatchers", "Fenrir Greyback"],
        correct: "Fenrir Greyback"
    }
    var q12 = {
        question: "How did Harry survive underwater in the Triwizard Tournament?",
        answers: ["Bubble-head charm", "Gills charm", "Transfiguration", "Gillyweed"],
        correct: "Gillyweed"
    }
    var q13 = {
        question: "Who did Ron turn into when Harry, Ron, and Hermione snuck into the Ministry of Magic in The Deathly Hallows?",
        answers: ["Dirk Cresswell", "Mundungus Fletcher", "Albert Runcorn", "Reginald Cattermole"],
        correct: "Reginald Cattermole"
    }
    var q14 = {
        question: "What spell is used to save Hermione from the troll in The Sorcerer's Stone?",
        answers: ["Wingardium Leviosa", "Stupify", "Petrificus Totalus", "Confundus"],
        correct: "Wingardium Leviosa"
    }
    var q15 = {
        question: "What magazine does Luna's father publish?",
        answers: ["Challenges in Charming", "The Practical Potioneer", "The Daily Prophet", "The Quibbler"],
        correct: "The Quibbler"
    }
    var q16 = {
        question: "What was Harry's first broomstick?",
        answers: ["Thunderbolt", "Nimbus 2000", "Cleansweep Two", "Firebolt"],
        correct: "Nimbus 2000"
    }
    var q17 = {
        question: "How did Harry spend his first detention?",
        answers: ["Signing autographs", "Cleaning trophies", "Going into the Forbidden Forest", "Writing an essay"],
        correct: "Going into the Forbidden Forest"
    }
    var q18 = {
        question: "What happened to Neville's parents that they couldn't remember their son?",
        answers: ["The Confundus Charm was used on them", "They lost their memories in an apperation accident", "The Cruciatus Curse was used on them", "They didn't lose their memories"],
        correct: "The Cruciatus Curse was used on them"
    }
    var q19 = {
        question: "What crime was Hagrid commited of in his time at Hogwarts?",
        answers: ["Casting a spell on a professor", "Opening the Chamber of Secrets", "Going into the Forbidden Forest", "Killing a girl"],
        correct: "Opening the Chamber of Secrets"
    }
    var q20 = {
        question: "What was the name of the female elf Dobby liked?",
        answers: ["Orist", "Minka", "Winky", "Oona"],
        correct: "Winky"
    }

    //variables to store number of correct, incorrect, and flags. 

    var correct = 0;
    var incorrect = 0;
    var time = 10;
    var qTimer;
    var qNum = 1;
    var rank ;

    //button to start the game.
    $("#start").on("click", function () {
        $("#time").html(time)
        $("#inst").css("display", "none")
        $("#qa").css("display", "grid")
        displayQ()
    });

    function clearTimer() {
        clearInterval(qTimer)
    }
    //function to display question and answers

    function displayQ() {
        $("#aa").html("")
        $("#timer").css("display", "inline")
        $("#time").text(time)
        $("#correct").css("display", "none")
        $("#incorrect").css("display", "none")
        $("#timesup").css("display", "none")
        if (qNum < 21) {
            qTimer = setInterval(function () {
                if (time > 0) {
                    time--
                    $("#time").text(time)
                } else if (time === 0) {
                    clearTimer()
                    timesUp()
                    time = 10;
                }
            }, 1000);
            $("#question").text(eval("q" + qNum + ".question"))
            for (var j = 0; j < 4; j++) {
                var newDiv = $("<button>");
                newDiv.text(eval("q" + qNum + ".answers[" + j + "]"))
                newDiv.attr("id", "choices")
                $("#aa").append(newDiv)
            }
        } else if (qNum === 21) {
            complete()
        }
    }


    function timesUp() {
        $("button").each(function () {
            if ($(this).text() === eval("q" + qNum + ".correct")) {
                $(this).css("color", "green")
            }
        })
        clearTimer();
        time = 10;
        $("#timer").css("display", "none");
        $("#timesup").css("display", "inline");
        incorrect++;
        qNum++;
        setTimeout(displayQ, 3000);
    }

    function complete() {
        $("#complete").css("display", "grid");
        $("#qa").css("display", "none");
        $("#right").text(correct);
        $("#wrong").text(incorrect);
        if (correct < 10) {
            rank = "Muggle";
            $("#rnkimg").attr("src", "assets/images/dumbledore.gif")
        } else if (correct < 15) {
            rank = "Prefect";
            $("#rnkimg").attr("src", "assets/images/dumbledore.gif")
        }
        $("#rnk").text(rank)
    }
complete()
    $(document).on("click", "#choices", function () {
        if ($(this).text() === eval("q" + qNum + ".correct")) {
            $(this).css("color", "green");
            clearTimer();
            time = 10;
            $("#timer").css("display", "none");
            $("#correct").css("display", "inline")
            correct++;
            qNum++;
            setTimeout(displayQ, 3000)
        } else {
            $(this).css("color", "red");
            clearTimer();
            time = 10;
            $("button").each(function () {
                if ($(this).text() === eval("q" + qNum + ".correct")) {
                    $(this).css("color", "green")
                }
            })
            $("#timer").css("display", "none");
            $("#incorrect").css("display", "inline")
            incorrect++;
            qNum++;
            setTimeout(displayQ, 3000)
        }
    })
    //if question is incorrect, display red x next to answer and highlight correct answer in green. 
}