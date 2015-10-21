(function() {
    var shortcuts = {};
    shortcuts.ready = function(callback) {
        if (document.readyState === 'loading') {
            var event = 'readystatechange';
            document.addEventListener(event, function listener() {
                document.removeEventListener(event, listener);
                callback();
            });
        } else {
            callback();
        }
    };
    window.shortcuts = shortcuts;
 })();

shortcuts.ready(function() {

    var controller = (function() {
        var sectionElems,
            sectionsContainer,
            sectionAttr = 'section',
            selectedClass = 'selected',
            activeClass = 'active';

        function activate(sectionSelected) {
            if (sectionSelected) {
                sectionsContainer.classList.add(activeClass);
            } else {
                sectionsContainer.classList.remove(activeClass);
            }
            for (var i = 0, elem; elem = sectionElems[i]; i++) {
                var sectionValue = elem.getAttribute(sectionAttr);
                if (sectionValue) {
                    if (sectionSelected === sectionValue) {
                        elem.classList.add(selectedClass);
                    } else {
                        elem.classList.remove(selectedClass);
                    }
                }
            }
        }
        return {
            init: function() {
                sectionElems = document.querySelectorAll('[' + sectionAttr + ']');
                sectionsContainer = document.querySelector('.' + sectionAttr +  's');
                for (var i = 0, elem; elem = sectionElems[i]; i++) {
                    elem.addEventListener('click', function(evt) {
                        var elem = this;
                        evt.cancelBubble = true;
                        var sectionSelected = elem.getAttribute(sectionAttr);
                        window.location.hash = sectionSelected ? '#/' + sectionSelected + '/' : '#/';
                    });
                }
            },
            update: function() {
                activate(window.location.hash.slice(2,-1));
            }
        }
    })();
    controller.init();
    controller.update();
    window.addEventListener('hashchange', controller.update);
});