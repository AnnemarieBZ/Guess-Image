window.onload = init;

        function init() {
            var images = document.getElementsByTagName("img");
            for (var i = 0; i < images.length; i++) {
                images[i].onclick = showAnswer;
            }
        }

        function showAnswer(e) {
            var image = e.target;
            var name = image.id;
            name = "imgs/" + name + ".jpeg";
            image.src = name;
            image.alt = "cat";
            image.title = "";

            setTimeout(function() {
                var image = e.target;
                var name = image.id;
                name = "imgs/" + name + "dog.jpeg";
                image.src = name;
                image.alt = "dog";
                image.title = "Click";
            }, 2000);
        }