$(function () {
    $(document).on('click', '.todo-check-all', function () {
        let list_checkbox = $('.todo-list ul li input[type="checkbox"]');
        list_checkbox.prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            list_checkbox.closest('li').addClass('active');
        } else {
            list_checkbox.closest('li').removeClass('active');
        }
    });

    $(document).on('click', '.todo-list ul li input[type="checkbox"]', function () {
        if ($(this).prop('checked')) {
            $(this).closest('li').addClass('active');
        } else {
            $(this).closest('li').removeClass('active');
        }
    });

    $(document).on('click', '.todo-list ul li', function (e) {
        let url = $(this).data('detail-url'),
            target = e.target;
        if (target.nodeName != 'INPUT' && target.nodeName != 'LABEL' && !$(target).hasClass('add-star') && !$(target).hasClass('todo-sortable-handle')) {
            window.location.href = url;
        }
    });

    if ($('.todo-textarea-editor').length) {
        new Quill('.todo-textarea-editor', {
            modules: {
                toolbar: ".todo-textarea-toolbar"
            },
            placeholder: "Type something... ",
            theme: "snow"
        });
    }
    if ($('.todo-textarea-editor2').length) {
        new Quill('.todo-textarea-editor2', {
            modules: {
                toolbar: ".todo-textarea-toolbar2"
            },
            placeholder: "Type something... ",
            theme: "snow"
        });
    }

    // Todo sortable
    if($('.todo-list').length) {
        $('.todo-list ul').sortable({
            axis: "y",
            cursor: "move",
            handle: '.todo-sortable-handle'
        }).disableSelection();
    }

    // Timepicker
    $('.task-time-input').clockpicker({
        autoclose: true
    });

    // Datapicker
    $('.task-datepicker-input').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false
    }).on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY'));
    });

    // Select2
    $('.task-tags-input').select2({
        placeholder: 'Select'
    });
});
