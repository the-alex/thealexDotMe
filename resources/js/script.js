function genRandHobby() {
    var myHobbies = ["Photographer", "Amateur Designer", "Musician", "Nerd", "Maker", "Tinkerer"];
    var rando = Math.floor(Math.random() * myHobbies.length)
    var datSpan = document.getElementById("hobby");
    datSpan.innerHTML = myHobbies[rando];
}

$(document).ready(function () {
    $('li img').on('click', function () {
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#gallery-modal').modal();
        $('#gallery-modal').on('shown.bs.modal', function () {
            $('#gallery-modal .modal-body').html(img);
        });
        $('#gallery-modal').on('hidden.bs.modal', function () {
            $('#gallery-modal .modal-body').html('');
        });
    });
})


genRandHobby();