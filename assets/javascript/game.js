// -------------------------------------
// Javascript file for Hangman game
// Joel Roberts - February 2017
// -------------------------------------

var hangmanGame = {
    //Create Answer Bank as an object where each answer item is its own object containing a picture and description to display
    answerBank: {
        chewbacca: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/chewie-db_2c0efea2.jpeg?region=54%2C154%2C1413%2C796',
            description: 'A legendary Wookiee warrior and Han Solo’s co-pilot aboard the Millennium Falcon, Chewbacca was part of a core group of Rebels who restored freedom to the galaxy. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart -- and is unwavering in his loyalty to his friends. He has stuck with Han through years of turmoil that have changed both the galaxy and their lives.',
        },
        yoda: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864',
            description: 'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.',
        },
        rey: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/rey_bddd0f27.jpeg?region=0%2C24%2C1560%2C876&width=1536',
            description: 'Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict. Despite dismissing herself as “no one,” she learns that her life is being shaped by the mysterious power of the Force.',
        },
        palpatine: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Emperor-Palpatine_7ac4a10e.jpeg?region=0%2C0%2C1600%2C900&width=1536',
            description: 'Scheming, powerful, and evil to the core, Darth Sidious restored the Sith and destroyed the Jedi Order. Living a double life, Sidious was in fact Palpatine, a Naboo Senator and phantom menace. He slowly manipulated the political system of the Galactic Republic until he was named Supreme Chancellor -- and eventually Emperor -- ruling the galaxy through fear and tyranny.',
        },
        leia: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Princess-Leia-Organa_d7761ff5.jpeg?region=0%2C0%2C1600%2C900&width=1536',
            description: 'Princess Leia Organa was one of the Rebel Alliance’s greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy’s great heroes. But life under the New Republic has not been easy for Leia. Sidelined by a new generation of political leaders, and struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career have been accompanied by more personal losses.',
        },
        bossk: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_bossk_01_169_c3c42fbe.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'One of the most feared bounty hunters of the galaxy, Bossk used his natural Trandoshan hunting instincts to capture his prey. During the Clone Wars, the red-eyed reptilian partnered with Aurra Sing, Castas and young Boba Fett. Bossk didn\'t care much for vendettas or politics. He was in it to get paid. After a brief stint in a Republic prison, Bossk continued his partnership with Fett, becoming a bodyguard to the teen bounty hunter. Decades later, Bossk answered Darth Vader\'s call to capture the Millennium Falcon after the Battle of Hoth, an assignment that put him in direct competition with Boba.',
        },
        lando: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Lando-Calrissian_a679fe1e.jpeg?region=1%2C0%2C1598%2C899&width=1536',
            description: 'Once a smooth-talking smuggler, Lando Calrissian changed from a get-rich-quick schemer to a selfless leader in the fight against the Empire. From adventures with the Ghost crew of rebels to the attack on Death Star II, his quick wit and daring proved to be invaluable.',
        },
        dengar: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_dengar_01_169_18886b62.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'Crude and slovenly, Dengar was nonetheless an effective bounty hunter. While some hunters prided themselves on finesse and style, Dengar preferred firepower and destruction. Despite his scruffy-looking and battered exterior, Dengar thought highly of himself, enough to make blunt passes at shapely females that caught his eye. Despite these obnoxious qualities, Boba Fett enjoyed working with Dengar and held him in high regard due to his proven track record in hunting down prey.',
        },
        greedo: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg?region=0%2C0%2C1560%2C878&width=1536',
            description: 'Greedo was a Rodian bounty hunter with a tapir-like snout, bulbous eyes, pea-green skin, and a crest of spines atop his skull. He was overzealous and a bit slow on the take, not to mention a pretty poor shot with a blaster. Though he fancied himself a big time bounty hunter in the employ of no less an underworld figure than Jabba the Hutt, in truth, no one took him too seriously.',
        },
        logray: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/logray-main-image_05b9e023.jpeg?region=0%2C143%2C1560%2C875&width=1536',
            description: 'The shaman of the Ewok village, Logray\'s rituals ensured his tribe remained in harmony with Endor\'s forest spirits. When a golden god visited his planet, Logray ordered the sacrifice of offworlders in this deity\'s honor -- only to somehow incur the god\'s wrath. No one ever said faith was easy.',
        },
        oola: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/oola-main-image_5c15a693.jpeg?region=57%2C0%2C1170%2C658',
            description: 'A green-skinned Twi\'lek, Oola was one of Jabba\'s slaves, forced to dance for the Hutt\'s pleasure. When Oola resisted Jabba\'s orders one time too many, the cruel Hutt dropped her into the Rancor\'s cave beneath his throne room -- a one-way trip taken by many who no longer pleased the crimelord.',
        },
        sebulba: {
            pic: 'http://vignette4.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png/revision/latest?cb=20160916033950',
            description: 'testpic',
        },
        luke: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Luke-Skywalker_dd9c9f9b.jpeg?region=0%2C0%2C1536%2C864',
            description: 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries.',
        },
        anakin: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpeg?region=0%2C0%2C1200%2C675',
            description: 'Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force. A hero of the Clone Wars, Anakin was caring and compassionate, but also had a fear of loss that would prove to be his downfall.',
        },
        han: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/Han-Solo_1d08eb2e.jpeg?region=0%2C1%2C1600%2C900&width=1536',
            description: 'Smuggler. Scoundrel. Hero. Han Solo, captain of the Millennium Falcon, was one of the great leaders of the Rebel Alliance. He and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. But after the Battle of Endor, Han would face difficult times in a galaxy plagued by chaos and uncertainty.',
        },
        wicket: {
            pic: 'https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780',
            description: 'Wicket W. Warrick was the brave young Ewok who willingly joined the Rebellion and aided in the battle against the Empire on the forest moon of Endor. Even before he encountered the Rebels, Wicket had devised methods for defeating the Imperial machines, plans which were implemented after the Ewok befriended Princess Leia and recruited his tribe to the Alliance\'s cause. During the Battle of Endor, Wicket fought valiantly alongside his new allies.',
        }
    },

    // Global variables
    winCount: 0, //total number of correctly guessed words

    // Setup variable hooks to the html page
    winCountDisplay: document.getElementById('winDisplay'),
    guessCountDisplay: document.getElementById('guessCountDisplay'),
    badGuessDisplay: document.getElementById('badGuessDisplay'),
    workingWordDisplay: document.getElementById('workingWordDisplay'),

    //FUNCTIONS
    // Start Game - set initial variables, select random word and parse through it capturing it's individual characters
    startGame: function() {
        //variable to set initial guesses allowed
        this.guessCount = 8;
        // create a blank array to capture missed letter guesses
        this.badGuessBank = new Array();

        // select random word from word bank (traversing through the answerBank object key names using the Object.keys method) and store it into a key named currentWord
        //
        this.currentWord = Object.keys(this.answerBank)[Math.floor(Math.random() * Object.keys(this.answerBank).length)];

        // create an object to hold the word characters
        this.characters = new Object();

        // create an object for each character in currentWord in the characters object
        for (var i = 0; i < this.currentWord.length; i++) {
            this.characters[this.currentWord.charAt(i)] = new Object();
            // create a 'guessed' key within each character object and set its initial value to false
            this.characters[this.currentWord.charAt(i)] = {guessed: false};
            // displayUpdate();
            // if (this.characters[this.currentWord.charAt(i)].guessed = false) {
            //   workingWordDisplay.textContent[i] = "_";
            // }
        };

        //display update


    }, //end startGame method

    // displayUpdate: function() {
    //   guessCountDisplay.textContent = this.guessCount
    //
    //   for (var i = 0; i < Object.keys(this.characters); i++) {
    //     if
    //   }


}; //end hangmanGame object declaration


// Also set displayWord array up to have the same character length as
//  currentWord and display '_' for each character


// Listen for user to click a key and capture that in the userPress
//  variable and push that value to the userGuesses array

// Capture letter guessed

// Check to see if the userPress value matches each index position
//  in the currentWord array

// For each position that matches, update that position in the
//  displayWord variable displaying that to the screen

// If the guess does not match any positions in the displayWord variable
//  then log that guess (capitalizing it) in the badGuess array and
//  decriment the number of guesses by one

// Check to see if the displayWord equals the currentWord array

// If the words match then restart routine with a new word

// If words dont match and guessCount is greater than 0 then continue play

// end routine

// Wait for user to click Enter to start
document.onkeyup = function(event) {
    // Capture Key stroke
    var userPress = event.key;
    hangmanGame.startGame();
    // hangmanGame.collectChars();

    console.log(hangmanGame.currentWord);
    console.log(hangmanGame.characters);

}
