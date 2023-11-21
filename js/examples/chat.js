(function () {
    'use strict'

    $(document).on('click', '.chat-lists .list-group .list-group-item', function () {
        $('.chat-block .chat-content').removeClass('empty-chat-wrapper');
        $('.empty-chat').remove();
        $(this).parent().find('> *').removeClass('active');
        $(this).addClass('active').removeClass('unread-message');

        let messages = $('.chat-block .chat-content .messages');
        messages.niceScroll();
        messages.scrollTop(messages.prop("scrollHeight"));

        return false;
    });

    $('.chat-block .chat-sidebar .chat-sidebar-content').niceScroll();

    /*------------- Mobile chat sidebar -------------*/
    $(document).on('click', '.chat-block .chat-sidebar .chat-sidebar-content .list-group .list-group-item', function () {
        $('.chat-block .chat-content').addClass('chat-mobile-open');
        $('[data-close-chat]').toggleClass('show');
        return false;
    });

    /*------------- Mobile chat sidebar close btn -------------*/
    $(document).on('click', '[data-close-chat]', function () {
        $('.chat-block .chat-content').removeClass('chat-mobile-open');
        $(this).toggleClass('show');
        return false;
    });
})()
