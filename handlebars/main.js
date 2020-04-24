$(document).ready(function () {


    var input = $('.message-input');
    var btn = $('.mess-btn');
    var inputRisp = $('.message-input-risp');
    var btnRisp = $('.btn-risp');
    var chat = $('.chat');


    var source = $('#message-template').html();
    var template = Handlebars.compile(source);


    var messaggi = [{
            text: 'Ciao',
            orario: '10:20',
            userClass: 'received'
        },
        {
            text: 'Ciaoooooooo',
            orario: '10:25',
            userClass: 'sent'
        },
        {
            text: 'Che mi racconti ?',
            orario: '10:30',
            userClass: 'received'
        },
        {
            text: 'Nulla sono in quarantena...',
            orario: '10:35',
            userClass: 'sent'
        },
    ];


    for (var i = 0; i < messaggi.length; i++) {

        var actual = messaggi[i];

        var messaggiPrec = {
            text: actual.text,
            time: actual.orario,
            userClass: actual.userClass
        }

        var set = template(messaggiPrec);
        chat.append(set);

    };


    btn.click(function () {
        var textMessage = input.val().trim();

        var data = {
            text: textMessage,
            time: '10:15',
            userClass: 'sent'
        };

        var html = template(data);

        chat.append(html);

        input.val('');

    });

    btnRisp.click(function () {

        var textMessageRisp = inputRisp.val().trim();

        var data = {
            text: textMessageRisp,
            time: '10:15',
            userClass: 'received'
        };

        var html = template(data);

        chat.append(html);

        inputRisp.val('');

    });
}); //end doc ready