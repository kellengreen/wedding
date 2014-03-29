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
