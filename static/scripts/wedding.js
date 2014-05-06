(function() {

    var shortcuts = {};

    shortcuts.toArray = function(object) {
        for (var array = [], key = 0, value; value = object[key]; ++key) {
            array.push(value);
        }
        return array;
    };

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
    }

    window.shortcuts = shortcuts;

 })();

shortcuts.ready(function() {
    var selectedSection,
        sectionAttr = 'section',
        selectedClass = 'selected',
        activeClass = 'active',
        doneClass = 'done',
        sectionElems = shortcuts.toArray(document.querySelectorAll('[' + sectionAttr + ']')),
        sectionsContainer = document.querySelector('.' + sectionAttr + 's');

    sectionElems.forEach(function(sectionElem) {

        sectionElem.addEventListener('click', function(evt) {
            evt.cancelBubble = true;

            selectedSection = sectionElem.getAttribute(sectionAttr);
            if (selectedSection) {
                sectionsContainer.classList.add(activeClass);
            } else {
                sectionsContainer.classList.remove(activeClass);
            }

            sectionElems.forEach(function(sectionElem) {
                var sectionValue = sectionElem.getAttribute(sectionAttr);
                if (sectionValue) {
                    if (selectedSection === sectionValue) {
                        sectionElem.classList.add(selectedClass);
                    } else {
                        sectionElem.classList.remove(selectedClass);
                        sectionElem.classList.remove(doneClass);
                    }
                }
            });
        });
    });
});