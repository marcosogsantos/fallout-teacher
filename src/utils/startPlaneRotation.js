const startPlaneRotation = (CONFIG) => {
    var updateRotateZ
    var el = document.getElementById('transform')
    if (!el) {
        setTimeout(() => {
            startPlaneRotation()
        }, 100)
    } else {

        var isDown = false
        var mouseStartClickPosition = {
            x: 0,
            y: 9
        }

        function wheel(e) {
            e.preventDefault();
            var delta = e.wheelDelta || -e.detail;
            CONFIG.scale += delta > 0 ? .1 : -.1;
            document.documentElement.style.setProperty("--scale", CONFIG.scale);
        }

        document.addEventListener('mousewheel', wheel, false);
        document.addEventListener('DOMMouseScroll', wheel, false);

        document.addEventListener('mousedown', function (e) {
            e.preventDefault();
            isDown = true;
            mouseStartClickPosition = {
                x: e.clientX,
                y: e.clientY
            };
        }, false);

        document.addEventListener('mousemove', function (e) {

            if (isDown) {
                if (e.clientX < mouseStartClickPosition.x) {
                    var newZ = CONFIG.z >= 360 ? 0 : CONFIG.z + 2
                    document.documentElement.style.setProperty("--z", newZ)
                } else {
                    var newZ = CONFIG.z <= 0 ? 360 : CONFIG.z - 2
                    document.documentElement.style.setProperty("--z", newZ)
                }
                CONFIG.z = newZ
            }
            mouseStartClickPosition = {
                x: e.clientX,
                y: e.clientY
            };
        }, false);

        document.addEventListener('mouseup', function () {
            isDown = false;
        }, false);

        const update = () => {
            if (!isDown) {
                var newZ = CONFIG.z >= 360 ? 0 : CONFIG.z + .2
                document.documentElement.style.setProperty("--z", newZ)
                CONFIG.z = newZ
            }
            if (CONFIG.z > 60 && CONFIG.z < 243) {
                CONFIG.showLogo = 0.8
            } else {
                CONFIG.showLogo = 0
            }
            document.documentElement.style.setProperty("--showLogo", CONFIG.showLogo)
        }
        updateRotateZ = setInterval(() => { update() }, 25)
    }
    return updateRotateZ
}

export default startPlaneRotation;