$('#icon-upload').click(function () { $('#image_input').trigger('click'); });

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
    let background = new Image();


    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
       
        var image = new Image();
        image.src = reader.result;

        image.onload = function () {
            history.saveState(canvasReal);

            contextReal.drawImage(image, 0, 0);
        };

        background.src = reader.result;
        uploaded_image = reader.result;
    });
    reader.readAsDataURL(this.files[0]);

});
