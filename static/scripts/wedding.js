(function() {
    var shortcuts = {};

    shortcuts.asArray = function(object) {
        for (var array = [], key = 0, value; value = object[key]; ++key) {
            array.push(value);
        }
        return array;
    };

    shortcuts.ready = function(func) {
        if (document.readyState === 'loading') {
            document.addEventListener('readystatechange', func);
        } else {
            func();
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
        sectionElems = shortcuts.asArray(document.querySelectorAll('[' + sectionAttr + ']')),
        sectionsContainer = document.querySelector('.' + sectionAttr + 's');

    sectionElems.forEach(function(sectionElem) {

        sectionElem.addEventListener('transitionend', function() {
            if (sectionElem.classList.contains(selectedClass)) {
                sectionElem.classList.add('done');
            }
        });

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
                        sectionElem.classList.remove(doneClass);
                    }
                }
            });
        });
    });
});
console.info('Go Gonzaga G.O.N.Z.A.G.A!');