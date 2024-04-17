let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {
        autohide: false
    })
});

let toastPlacement = document.getElementById('toastPlacement');
if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
        if (!toastPlacement.dataset.originalClass) {
            toastPlacement.dataset.originalClass = toastPlacement.className
        }
        toastPlacement.className = toastPlacement.dataset.originalClass + ' ' + this.value
    })
}
