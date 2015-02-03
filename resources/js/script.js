function genRandHobby() {
    var myHobbies = ["Photographer", "Amateur Designer", "Musician", "Nerd", "Maker", "Tinkerer"];
    var rando = Math.floor(Math.random() * myHobbies.length)
    var datSpan = document.getElementById("hobby");
    datSpan.innerHTML = myHobbies[rando];
}

$(document).ready(function () {
    $('li img').on('click', function () {
        src = $(this).attr('src');
        img_name = src.slice(src.indexOf("thumbnails/") + "thumbnails/".length, src.length);
        img_name = img_name.slice(0, img_name.indexOf(".thumbnail"));
        src = src.slice(0, src.indexOf("thumbnails"));
        new_src = src + "hd/" + img_name;
        var img = '<img src="' + new_src + '" class="img-responsive"/>';
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