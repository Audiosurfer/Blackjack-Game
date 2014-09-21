$(document).ready(function() {
    var totalAmount = 0;
    var compAmount = 0;
    var compGen = function() {
        compAmount = (Math.floor(Math.random() * 11) * 2) + 1;
        while (compAmount <= 10) {
            compAmount += Math.ceil(Math.random() * 11);
        }
    };
    
     var bustCheck = function() {
         if (totalAmount > 21) {
            $('#draw').hide();
            $('#results').show();
            $('#results').text('You busted!');
        }
     }
     
     var blackjackCheck = function() {
         if (totalAmount === 21) {
            $('#draw').hide();
            $('#results').show();
            $('#results').text("Blackjack! You win!");
        }
     }
    
    var compareScore = function() {
        if (totalAmount > compAmount) {
            $('#results').text("Congrats! You win!");
        }
        else if (totalAmount < compAmount) {
            $('#results').text("I'm sorry, looks like you lose.")
        }
        else {
            $('#results').text("It's a tie. How boring.")
        }
    };
    
    var restart = function() {
        $('#draw').show();
        $('#direct').hide();
        $('#results').hide();
        $('#userscore').text(0);
        $('#compscore').text("?");
        totalAmount = 0;
        compAmount = 0;
    };
                                                  
    $('#yes').click(function() {
        var drawAmount = Math.ceil(Math.random() * 11)
        totalAmount += drawAmount;
        $('#userscore').text(totalAmount);
        bustCheck();
        blackjackCheck();
    })
    
    $('#no').click(function() {
        compGen();
        $('#compscore').text(compAmount);
        $('#draw').hide();
        $('#results').show();
        compareScore();
    })
    
     $('#directions').click(function() {
        $('#direct').toggle("slow");
    })
    
    $('#newgame').click(function() {
        restart();
    })
    restart();
});