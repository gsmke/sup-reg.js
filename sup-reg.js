/*
 * sup-reg.js v2.0.0
 * https://github.com/megasmack/sup-reg.js
 */

;(function ($) {
    'use strict';

    $('body :not(script,sup,iframe)').contents().filter(function () {
        return this.nodeType === 3;
    }).replaceWith(function () {
        return this.nodeValue.replace(/[®]/g, '<sup>$&</sup>');
    });
    $('sup').each(function(index, el) {
        var thisParent = $(el).parent().html();
        var thisSup = thisParent.substr(0, thisParent.indexOf('<sup>')).slice(-1);
        $(el).addClass('sup-reg');
        if (thisSup === '.') {
            $(el).addClass('sup-reg-kern');
        }
    });

})(jQuery);
