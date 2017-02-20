//-------------------------------------------------------------------------------------
// STAR WARS HANGMAN
// Joel Roberts - 2017
//-------------------------------------------------------------------------------------


var hangmanGame = {  // OVERALL GAME OBJECT
    // GAME VARIABLES
    //---------------------------------------------------------------------------------
    answerBank: {  //Create Answer Bank as an object where each answer item is its own object containing a picture and description to display
        ANAKIN: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpeg?region=0%2C0%2C1200%2C675',
            description: 'Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force. A hero of the Clone Wars, Anakin was caring and compassionate, but also had a fear of loss that would prove to be his downfall.',
        },
        BOSSK: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_bossk_01_169_c3c42fbe.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'One of the most feared bounty hunters of the galaxy, Bossk used his natural Trandoshan hunting instincts to capture his prey. During the Clone Wars, the red-eyed reptilian partnered with Aurra Sing, Castas and young Boba Fett. Bossk didn\'t care much for vendettas or politics. He was in it to get paid. After a brief stint in a Republic prison, Bossk continued his partnership with Fett, becoming a bodyguard to the teen bounty hunter. Decades later, Bossk answered Darth Vader\'s call to capture the Millennium Falcon after the Battle of Hoth, an assignment that put him in direct competition with Boba.',
        },
        CHEWBACCA: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/chewie-db_2c0efea2.jpeg?region=54%2C154%2C1413%2C796',
            description: 'A legendary Wookiee warrior and Han Solo’s co-pilot aboard the Millennium Falcon, Chewbacca was part of a core group of Rebels who restored freedom to the galaxy. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart -- and is unwavering in his loyalty to his friends. He has stuck with Han through years of turmoil that have changed both the galaxy and their lives.',
        },
        DENGAR: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_dengar_01_169_18886b62.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'Crude and slovenly, Dengar was nonetheless an effective bounty hunter. While some hunters prided themselves on finesse and style, Dengar preferred firepower and destruction. Despite his scruffy-looking and battered exterior, Dengar thought highly of himself, enough to make blunt passes at shapely females that caught his eye. Despite these obnoxious qualities, Boba Fett enjoyed working with Dengar and held him in high regard due to his proven track record in hunting down prey.',
        },
        GREEDO: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'Greedo was a Rodian bounty hunter with a tapir-like snout, bulbous eyes, pea-green skin, and a crest of spines atop his skull. He was overzealous and a bit slow on the take, not to mention a pretty poor shot with a blaster. Though he fancied himself a big time bounty hunter in the employ of no less an underworld figure than Jabba the Hutt, in truth, no one took him too seriously.',
        },
        HAN: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Han-Solo_1d08eb2e.jpeg?region=0%2C1%2C1600%2C900&width=1536',
            description: 'Smuggler. Scoundrel. Hero. Han Solo, captain of the Millennium Falcon, was one of the great leaders of the Rebel Alliance. He and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. But after the Battle of Endor, Han would face difficult times in a galaxy plagued by chaos and uncertainty.',
        },
        LANDO: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Lando-Calrissian_a679fe1e.jpeg?region=1%2C0%2C1598%2C899&width=1536',
            description: 'Once a smooth-talking smuggler, Lando Calrissian changed from a get-rich-quick schemer to a selfless leader in the fight against the Empire. From adventures with the Ghost crew of rebels to the attack on Death Star II, his quick wit and daring proved to be invaluable.',
        },
        LEIA: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Princess-Leia-Organa_d7761ff5.jpeg?region=0%2C0%2C1600%2C900&width=1536',
            description: 'Princess Leia Organa was one of the Rebel Alliance’s greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy’s great heroes. But life under the New Republic has not been easy for Leia. Sidelined by a new generation of political leaders, and struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career have been accompanied by more personal losses.',
        },
        LOGRAY: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/logray-main-image_05b9e023.jpeg?region=0%2C143%2C1560%2C875&width=1536',
            description: 'The shaman of the Ewok village, Logray\'s rituals ensured his tribe remained in harmony with Endor\'s forest spirits. When a golden god visited his planet, Logray ordered the sacrifice of offworlders in this deity\'s honor -- only to somehow incur the god\'s wrath. No one ever said faith was easy.',
        },
        LUKE: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Luke-Skywalker_dd9c9f9b.jpeg?region=0%2C0%2C1536%2C864',
            description: 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries.',
        },
        OOLA: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/oola-main-image_5c15a693.jpeg?region=57%2C0%2C1170%2C658',
            description: 'A green-skinned Twi\'lek, Oola was one of Jabba\'s slaves, forced to dance for the Hutt\'s pleasure. When Oola resisted Jabba\'s orders one time too many, the cruel Hutt dropped her into the Rancor\'s cave beneath his throne room -- a one-way trip taken by many who no longer pleased the crimelord.',
        },
        PALPATINE: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Emperor-Palpatine_7ac4a10e.jpeg?region=0%2C0%2C1600%2C900&width=1536',
            description: 'Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace. He slowly manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- and eventually Emperor -- ruling the galaxy through fear and tyranny.',
        },
        REY: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/rey_bddd0f27.jpeg?region=0%2C24%2C1560%2C876&width=1536',
            description: 'Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict. Despite dismissing herself as “no one,” she learns that her life is being shaped by the mysterious power of the Force.',
        },
        SELBULBA: {
            pic: 'http://vignette4.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png/revision/latest?cb=20160916033950',
            description: 'testpic',
        },
        WICKET: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780',
            description: 'Wicket W. Warrick was the brave young Ewok who willingly joined the Rebellion and aided in the battle against the Empire on the forest moon of Endor. Even before he encountered the Rebels, Wicket had devised methods for defeating the Imperial machines, plans which were implemented after the Ewok befriended Princess Leia and recruited his tribe to the Alliance\'s cause. During the Battle of Endor, Wicket fought valiantly alongside his new allies.',
        },
        YODA: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864',
            description: 'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.',
        }
    },
    soundBank: {
        badFeeling: ['\"I got a bad feeling about this\"', 'assets/sound-clips/bad_feeling.wav'],
        forceAlways: ['\"The FORCE will be with you always!\"', 'assets/sound-clips/force.mp3'],
        makeDestroy: ['\"Don\'t make me destroy you.\"', 'assets/sound-clips/make_destroy.mp3'],
        useForce: ['Use the FORCE Luke...', 'assets/sound-clips/swforce2.wav'],
        failedLast: ['\"You have failed me for the last time.\"', 'assets/sound-clips/for_the_last_time.wav']
    },
    letterBank: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    currentWord: "",      // randomly chosen word from answerBank
    gameWord: [],         // word to be displayed
    wrongLetters: [],     // create a blank array to capture missed letter guesses
    guessesLeft: 10,      // variable to set initial guesses allowed
    winCount: 0,          // total number of games won
    lossCount: 0,         // total number of games lost


// FUNCTIONS
//---------------------------------------------------------------------------------

    // RESET
    //-------------------------------------------------------
    reset: function () {  // function to initialize a new game resetting all critical values
        // reset game variables
        this.gameWord = [];
        this.guessesLeft = 10;
        this.wrongLetters = [];
        this.letterBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // select random word from answerBank key values
        this.currentWord = Object.keys(this.answerBank)[Math.floor(Math.random() * Object.keys(this.answerBank).length)];
        // populate the characters array
        for (var i = 0; i < this.currentWord.length; i++) {
            this.gameWord.push("_");
        }

        // define display variables
        document.getElementById('game-word').innerHTML = this.gameWord.join("");        // setup gameWord display
        document.getElementById('wrong-letters').innerHTML = this.wrongLetters;         // setup wrongLetters display
        document.getElementById('guesses-left').innerHTML = this.guessesLeft;           // setup guessesLeft disply
        document.getElementById('win-count').innerHTML = this.winCount;                 // setup win counter display
        document.getElementById('loss-count').innerHTML = this.lossCount;               // setup loss counter display
        document.getElementById('message').innerHTML = "Press any key to get started!"; // setup start message
        document.getElementById('hangman-img').src = 'assets/images/trooper-10.png';    // load the beginning hangman image
    }, // end reset function

    //EVAL
    //-------------------------------------------------------
    eval: function (letterGuessed) {
        if (this.letterBank.indexOf(letterGuessed) !== -1) {            // if character is in letterBank then its either invalid or has not been guessed before
            if (this.currentWord.indexOf(letterGuessed) !== -1) {       // check to see if it's in currentWord - if so...
                for (var i = 0; i < this.currentWord.length; i++) {     // iterate through the currentWord
                    if (letterGuessed === this.currentWord[i]) {        // determine where position
                        this.gameWord.splice(i, 1, letterGuessed);      // update that position in gameWord with letterGuessed
                        document.getElementById('game-word').innerHTML = this.gameWord.join(""); // update game-word display
                    }
                }
            } //end child if statement
            else {                                                                        // if letter was not in currentWord - then..
                var position = this.letterBank.indexOf(letterGuessed);                    // determine its position in letterBank
                this.letterBank.splice(position, 1);                                      // remove it from letterBank
                this.wrongLetters.push(letterGuessed);                                    // adding it to the wrongLetters Array
                this.guessesLeft--;                                                       // decrement the number of guessesLeft
                document.getElementById('wrong-letters').innerHTML = this.wrongLetters;   // update wrong-letters display
                document.getElementById('guesses-left').innerHTML = this.guessesLeft;     // update the guesses-left display
                this.gameBoardUpdater(this.guessesLeft);                                  // update the hangman image
            } // end child else statement
        } // end parent if statement
    }, // end eval function

    //VERIFY
    //-------------------------------------------------------
    verify: function () {
        if (this.currentWord === this.gameWord.join("") && this.guessesLeft > 0) {        // if the word has been correctly guessed and there are more turns left
            this.winCount++;                                                              // bump the win counter up by 1
            document.getElementById('message').innerHTML = this.soundBank.forceAlways[0]; // display congratulations
            new Audio(this.soundBank.forceAlways[1]).play();                              // play congratulatory soundclip
            this.playAgain();                                                             // run the playAgain function
        }
        else if (this.guessesLeft === 7) {                                                // if the counter is down to 1
            document.getElementById('message').innerHTML = this.soundBank.badFeeling[0];  // display encouraging message
            new Audio(this.soundBank.badFeeling[1]).play();                               // play encouraging soundclip
        }
        else if (this.guessesLeft === 5) {                                                // if the counter is down to 1
            document.getElementById('message').innerHTML = this.soundBank.makeDestroy[0]; // display encouraging message
            new Audio(this.soundBank.makeDestroy[1]).play();                              // play encouraging soundclip
        }
        else if (this.guessesLeft === 2) {                                                // if the counter is down to 1
            document.getElementById('message').innerHTML = this.soundBank.useForce[0];    // display encouraging message
            new Audio(this.soundBank.useForce[1]).play();                                 // play encouraging soundclip
        }
        else if (this.guessesLeft === 0) {                                                // if the user ran out of turns
            this.lossCount++;                                                             // increment the loss counter
            document.getElementById('message').innerHTML = this.soundBank.failedLast[0];  // message ther user that they suck
            new Audio(this.soundBank.failedLast[1]).play();                               // play sucky soundclip
            this.playAgain();                                                             // run the playAgain function
        }
        else {                                                                            // if they have not guessed the word and the users still has turns
            document.getElementById('message').innerHTML = 'Continue guessing letters.';  // message the user to keep guessing
        }
    },  //end the verify function


    //PLAY AGAIN
    //-------------------------------------------------------
    playAgain: function () {
        document.onkeyup = function (event) {
            hangmanGame.reset();
            hangmanGame.play();
        }
    }, // end the playAgain function

    //GAME BOARD UPDATE
    //-------------------------------------------------------
    gameBoardUpdater: function (guessesLeft) {  // updates the hangman image
        for (var i = 0; i < 11; i++) {          // for each guess number between 1 & 10
            if (guessesLeft === i) {            // find which number the user is on
                document.getElementById('hangman-img').src = 'assets/images/trooper-' + i + '.png';  // and load the matching image number
            }
        }
    }, // end the gameBoardUpdater


// MAIN
//---------------------------------------------------------------------------------
    play: function () {
        document.onkeyup = function (event) {
            var letterGuessed = (event.key.toUpperCase());
            hangmanGame.eval(letterGuessed);
            hangmanGame.verify();
        }
    }

} // end hangmanGame object

hangmanGame.reset();
hangmanGame.play();



