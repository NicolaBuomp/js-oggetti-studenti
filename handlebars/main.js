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
        },
        {
            text: 'Ciaoooooooo',
            orario: '10:25',
        },
        {
            text: 'Che mi racconti ?',
            orario: '10:30',
        },
        {
            text: 'Nulla sono in quarantena...',
            orario: '10:35',
        },
    ];


    var data1 = {
        text: messaggi[0].text,
        time: messaggi[0].orario,
        userClass: 'sent'
    }

    var data2 = {
        text: messaggi[1].text,
        time: messaggi[1].orario,
        userClass: 'received'
    }

    var data3 = {
        text: messaggi[2].text,
        time: messaggi[2].orario,
        userClass: 'sent'
    }

    var data4 = {
        text: messaggi[3].text,
        time: messaggi[3].orario,
        userClass: 'received'
    }

    var output1 = template(data1);
    var output2 = template(data2);
    var output3 = template(data3);
    var output4 = template(data4);

    chat.append(output1);
    chat.append(output2);
    chat.append(output3);
    chat.append(output4);



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