$.copy = function(copy, paste) {
    let title = document.querySelector(copy).innerHTML;
    let input = document.querySelector(paste);
    input.value = title;
}