/**
 * Deep extend an object with the given defaults.
 * Note that the extended object is not a clone, meaning the original object will also be updated.
 *
 * @param 	{object}	orignl	The object to extend to.
 * @param 	{object}	dfault	The object to extend from.
 * @return	{object}			The extended "orignl" object.
 */
export function extend(orignl: mmLooseObject, dfault: mmLooseObject) {
    if (type(orignl) != 'object') {
        orignl = {};
    }
    if (type(dfault) != 'object') {
        dfault = {};
    }

    for (let k in dfault) {
        if (!dfault.hasOwnProperty(k)) {
            continue;
        }

        if (typeof orignl[k] == 'undefined') {
            orignl[k] = dfault[k];
        } else if (type(orignl[k]) == 'object') {
            extend(orignl[k], dfault[k]);
        }
    }
    return orignl;
}

/**
 * Get the type of any given variable. Improvement of "typeof".
 *
 * @param 	{any}		variable	The variable.
 * @return	{string}				The type of the variable in lowercase.
 */
export function type(variable: any): string {
    return {}.toString
        .call(variable)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase();
}

/**
 * Set and invoke a (single) transition-end function with fallback.
 *
 * @param {HTMLElement} 	element 	Scope for the function.
 * @param {function}		func		Function to invoke.
 * @param {number}			duration	The duration of the animation (for the fallback).
 */
export function transitionend(
    element: HTMLElement,
    func: Function,
    duration: number
) {
    var _ended = false,
        _fn = function(evnt) {
            if (typeof evnt !== 'undefined') {
                if (evnt.target !== element) {
                    return;
                }
            }

            if (!_ended) {
                element.removeEventListener('transitionend', _fn);
                element.removeEventListener('webkitTransitionEnd', _fn);
                func.call(element);
            }
            _ended = true;
        };

    element.addEventListener('transitionend', _fn);
    element.addEventListener('webkitTransitionEnd', _fn);
    setTimeout(_fn, duration * 1.1);
}

/**
 * Get a (page wide) unique ID.
 */
export function uniqueId() {
    return 'mm-' + __id++;
}
var __id = 0;