(() => {
    setTimeout(() => {
        document.querySelector("#text-click").style.display="inherit";
    }, 4000);
    document.querySelector("#rose-t").onclick = function () {
        document.querySelector("#rose-t").style.display = "none";
        document.querySelector("#castle").style.display = "inherit";
        document.querySelector("#theSvg").style.display = "inherit"

        rid = window.requestAnimationFrame(Typing);
        function Typing() {
            rid = window.requestAnimationFrame(Typing);
            if (t >= 1) {
                window.cancelAnimationFrame(rid);
                rid = null;
            } else {
                t += 0.0025;
            }

            lengthAtT = pathlength * t;
            for (index = 0; index < subpaths.length; index++) {
                if (subpaths[index].pathLength >= lengthAtT) {
                    break;
                }
            }
            T = get_T(t, index);
            newPoints = getBezierPoints(T, subpaths[index].lastCubicBezier);
            drawCBezier(newPoints, partialPath, index);
        }
    }
    const head = document.getElementsByTagName('head')[0];
    let animationId = 1;

    function CreateMagicDust(x1, x2, y1, y2, sizeRatio, fallingTime, animationDelay, node = 'main') {
        let dust = document.createElement('span');
        let animation = document.createElement('style');
        animation.innerHTML = '\
@keyframes blink' + animationId + '{\
  0% {\
      top: ' + y1 + 'px;\
      left: ' + x1 + 'px;\
      width: ' + 2 * sizeRatio + 'px;\
      height: ' + 2 * sizeRatio + 'px;\
      opacity: .4\
  }\
  20% {\
      width: ' + 4 * sizeRatio + 'px;\
      height: ' + 4 * sizeRatio + 'px;\
      opacity: .8\
  }\
  35% {\
      width: ' + 2 * sizeRatio + 'px;\
      height: ' + 2 * sizeRatio + 'px;\
      opacity: .5\
  }\
  55% {\
      width: ' + 3 * sizeRatio + 'px;\
      height: ' + 3 * sizeRatio + 'px;\
      opacity: .7\
  }\
  80% {\
      width: ' + sizeRatio + 'px;\
      height: ' + sizeRatio + 'px;\
      opacity: .3\
  }\
  100% {\
      top: ' + y2 + 'px;\
      left: ' + x2 + 'px;\
      width: ' + 0 + 'px;\
      height: ' + 0 + 'px;\
      opacity: .1\
  }}';
        head.appendChild(animation);
        dust.classList.add('dustDef');
        dust.setAttribute('style', `animation: blink${animationId++} ${fallingTime}s cubic-bezier(.71, .11, .68, .83) infinite ${animationDelay}s`);
        document.getElementById(node).appendChild(dust);
    }

    // yes, I'm doing it manually to get the effect I want.. can be easily changed to render randomly
    [[130, 132, 150, 152, .15, 2.5, .1, 'sub'],
    [65, 63, 300, 299, .5, 2, .2, 'sub'],
    [70, 70, 150, 150, .45, 2, .5],
    [75, 78, 160, 170, .6, 2, 1],
    [80, 82, 160, 180, .6, 1, .4],
    [85, 100, 160, 170, .5, 2, .5],
    [125, 110, 170, 180, .25, 3, 1.5],
    [90, 90, 115, 115, .4, 2, 2],
    [93, 95, 200, 200, .4, 3, 1.5],
    [100, 100, 145, 155, .45, 1, .5],
    [100, 90, 170, 230, .35, 2, .75],
    [100, 102, 115, 112, .35, 3, .25],
    [100, 95, 170, 200, .55, 1.5, .75],
    [100, 97, 150, 190, .7, 2, 1.5],
    [105, 100, 160, 180, .5, 1.5, .725],
    [125, 125, 180, 190, .25, 1, .725],
    [130, 130, 135, 135, .45, 3, 1.5],
    [135, 132, 170, 190, .25, 2.5, .75],
    [135, 132, 320, 315, .2, 5, .3, 'sub']
    ].forEach((o) => CreateMagicDust(...o));

})();

var leafOne = document.querySelector('.leafOne');
var stickLine = document.querySelector('.stickLine');
var leafTwo = document.querySelector('.leafTwo');
var leafS1 = document.querySelector('.leafS1');
var rose1 = document.querySelector('.rose1');
var rose2 = document.querySelector('.rose2');
var rose3 = document.querySelector('.rose3');
var rose4 = document.querySelector('.rose4');

var lineDrawing = anime({
    targets: [leafOne, stickLine, leafTwo, leafS1, rose1, rose2, rose3, rose4],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 4000,
    begin: function (anim) {
        //Leaf One
        leafOne.setAttribute("stroke", "black");
        leafOne.setAttribute("fill", "none");
        // Leaf Two
        leafTwo.setAttribute("stroke", "black");
        leafTwo.setAttribute("fill", "none");
        //Stick
        stickLine.setAttribute("stroke", "black");
        stickLine.setAttribute("fill", "none");
        // Leaf S1
        leafS1.setAttribute("stroke", "black");
        leafS1.setAttribute("fill", "none");
        //Rose One
        rose1.setAttribute("stroke", "black");
        rose1.setAttribute("fill", "none");
        //Rose Two
        rose2.setAttribute("stroke", "black");
        rose2.setAttribute("fill", "none");
        //Rose Three
        rose3.setAttribute("stroke", "black");
        rose3.setAttribute("fill", "none");
        //Rose Three
        rose4.setAttribute("stroke", "black");
        rose4.setAttribute("fill", "none");
    },
    complete: function (anim) {
        //Leaf One
        leafOne.setAttribute("fill", "#9CDD05");
        leafOne.setAttribute("stroke", "none");
        //Leaf Two 
        leafTwo.setAttribute("fill", "#9CDD05");
        leafTwo.setAttribute("stroke", "none");
        //Stick
        stickLine.setAttribute("fill", "#83AA2E");
        stickLine.setAttribute("stroke", "none");
        // Leaf S1
        leafS1.setAttribute("fill", "#9CDD05");
        leafS1.setAttribute("stroke", "none");
        // Rose 1
        rose1.setAttribute("fill", "#F37D79");
        rose1.setAttribute("stroke", "none");
        // Rose 2
        rose2.setAttribute("fill", "#D86666");
        rose2.setAttribute("stroke", "none");
        // Rose 3
        rose3.setAttribute("fill", "#F37D79");
        rose3.setAttribute("stroke", "none");
        // Rose 3
        rose4.setAttribute("fill", "#D86666");
        rose4.setAttribute("stroke", "none");
    },
    autoplay: true,
});