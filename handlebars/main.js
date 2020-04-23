$(document).ready(function () {


    var input = $('.message-input');
    var btn = $('.mess-btn');
    var inputRisp = $('.message-input-risp');
    var btnRisp = $('.btn-risp');
    var chat = $('.chat');


    var source = $('#message-template').html();
    var template = Handlebars.compile(source);


    btn.click(function () {

        console.log('OK');
        var textMessage = input.val().trim();

        console.log(textMessage);

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

        console.log('Anche io OK');

        var textMessageRisp = inputRisp.val().trim();

        console.log(textMessageRisp);

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