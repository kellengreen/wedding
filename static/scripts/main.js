console.info('Go Gonzaga G.O.N.Z.A.G.A!');

(function() {
    var s = {};

    s.asArray = function(object) {
        for (var array = [], key = 0, value; value = object[key]; ++key) {
            array.push(value);
        }
        return array;
    };

    s.ready = function(func) {
        if (document.readyState === 'loading') {
            document.addEventListener('readystatechange', func);
        } else {
            func();
        }
    }

    window.shortcuts = s;
})();

shortcuts.ready(function() {
    var selectedSection,
        sectionAttr = 'section',
        selectedClass = 'selected',
        activeClass = 'active',
        sectionElems = shortcuts.asArray(document.querySelectorAll('[' + sectionAttr + ']')),
        sectionsContainer = document.querySelector('.' + sectionAttr + 's');

    sectionElems.forEach(function(sectionElem) {
        sectionElem.addEventListener('click', function(evt) {
            evt.cancelBubble = true;
            selectedSection = sectionElem.getAttribute(sectionAttr);

            // sections container
            if (selectedSection) {
                sectionsContainer.classList.add(activeClass);
            } else {
                sectionsContainer.classList.remove(activeClass);
            }

            // section elements
            sectionElems.forEach(function(sectionElem) {
                var sectionValue = sectionElem.getAttribute(sectionAttr);
                if (sectionValue) {
                    if (selectedSection === sectionValue) {
                        sectionElem.classList.add(selectedClass);
                    } else {
                        sectionElem.classList.remove(selectedClass);
                    }
                }
            });
        });
    });
});
