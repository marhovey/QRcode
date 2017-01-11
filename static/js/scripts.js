(function () {
    'use strict';

    var jq = window.jQuery;
    var guiValuePairs = [
        ['size', 'px'],
        ['minversion', ''],
        ['quiet', ' modules'],
        ['radius', '%'],
        ['msize', '%'],
        ['mposx', '%'],
        ['mposy', '%']
    ];

    function updateGui() {
        jq.each(guiValuePairs, function (idx, pair) {
            var $label = jq('label[for="' + pair[0] + '"]');
            $label.text($label.text().replace(/:.*/, ': ' + jq('#' + pair[0]).val() + pair[1]));
        });
    }
    function updateQrCode() {
        var options = {
            render: "image",
            ecLevel: "H",
            minVersion: parseInt("1", 10),

            fill: "#333",
            background: "#fff",
            // fill: jq('#img-buffer')[0],

            text: document.URL,
            size: parseInt("150", 10),
            radius: parseInt("0", 10) * 0.01,
            quiet: parseInt("1", 10),

            mode: parseInt("0", 10),

            image: jq('#img-buffer')[0]
        };

        jq('#erwm').empty().qrcode(options);
    }

    function update() {
        updateGui();
        updateQrCode();
    }

    function onImageInput() {
        var input = jq('#image')[0];
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                jq('#img-buffer').attr('src', event.target.result);
                jq('#mode').val('4');
                setTimeout(update, 250);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    function init() {
        jq('#image').on('change', onImageInput);
        jq(window).load(update);
        update();
    }
    jq(init);
}());
