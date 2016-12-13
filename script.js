

    var randomWordArr = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l","m", "n", "o", "p","q", "r", "s", "t","u", "v", "w", "q","y", "z" ];

    //get your random word from the array
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)].toLowerCase();

    var s;
    var count= 0;
    var wins= 0;
    var losses = 0;
    var answerArray = [];

    function startUp()
    {
        for (var i = 0; i < randomWord.length; i++)
        {
            answerArray[i] = "_";
        }

        //create the string

        var s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;

    }

    startUp();

    function Letter(){
        //grab the letter that the user typed in the box
        var letter = document.getElementById("letter").value;

        //make sure we have a guess (mroe checks can be made here, only letters, etc)
        if (letter.length > 0)
        {
            for(var i = 0; i < randomWord.length; i++)
            {
                //now, if the randomword contains a letter that the user typed in
                if (randomWord[i] === letter)
                {

                    answerArray[i] = letter;
                    wins++;
                    document.getElementById("wins").innerHTML = "Wins: " + wins;
                    startUp();
                }

                else {
                    losses++;
                    document.getElementById("losses").innerHTML = "Losses: " + losses;
                }
            }

            //here is how many times the user has to guessed 
            count++;
            document.getElementById("counter").innerHTML = "Number of guesses: " + count;
            document.getElementById("answer").innerHTML = answerArray.join(" ");


            document.getElementById("guesses").innerHTML = "You guessed: " + letter;

        }


    }






