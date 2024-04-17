$(function () {
    $(document).on('click', '.email-check-all', function () {
        let list_checkbox = $('.email-list ul li input[type="checkbox"]');
        list_checkbox.prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            list_checkbox.closest('li').addClass('active');
        } else {
            list_checkbox.closest('li').removeClass('active');
        }
    });

    $(document).on('click', '.email-list ul li input[type="checkbox"]', function () {
        if ($(this).prop('checked')) {
            $(this).closest('li').addClass('active');
        } else {
            $(this).closest('li').removeClass('active');
        }
    });

    $(document).on('click', '.email-list ul li', function (e) {
        let url = $(this).data('detail-url'),
            target = e.target;
        if (target.nodeName != 'INPUT' && target.nodeName != 'LABEL' && !$(target).hasClass('add-star')) {
            window.location.href = url;
        }
    });

    if ($('.compose-quill-editor').length) {
        new Quill('.compose-quill-editor', {
            modules: {
                toolbar: ".compose-quill-toolbar"
            },
            placeholder: "Type something... ",
            theme: "snow"
        });
    }
    if ($('.mail-reply-editor').length) {
        new Quill('.mail-reply-editor', {
            modules: {
                toolbar: ".mail-reply-editor-toolbar"
            },
            placeholder: "Type something... ",
            theme: "snow"
        });
    }

});
