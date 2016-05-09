/**
 * Created by es on 24.09.2015.
 */
(function ($) {

    $.widget("softberry.magnify", {

        options: {
            value: 0
        },

        _create: function () {
            var self = this;
            var _show = function (e) {
                var x = e.clientX - self.lens.width(),
                    y = e.clientY - self.lens.height();

                self.lens.css({
                    left: x,
                    top: y,
                    backgroundPosition: '-' + 2 * x + 'px -' + 2 * y + 'px',
                    zIndex: 1
                });
            };
            this.lens = $('<div/>').css({
                width: 200,
                height: 200,
                position: 'absolute',
                boxShadow: 'inset 0 0 25px 4px rgba(255,255,255,.4)',
                left: 0,
                top: 0,
                backgroundImage: 'url(' + this.element.attr('src') + ')',
                cursor: 'none',
                borderRadius: '50%',
                backgroundPosition: '0px 0px',
                backgroundSize: (this.element.width() * 2) + 'px',
                backgroundRepeat: 'no-repeat'
            });
            this.element.addClass("img-magnifier");
            if (this.element.css('position') == '' || this.element.css('position') == 'undefined') this.element.css({'position': 'relative'});
            this.element.wrap('<div class="img-magnifier-wrap" style="position:relative;overflow: hidden;' +
                'display:inline-block;cursor: none;"></div>');
            this.element.parent().append(this.lens);

            this.element.on('mousemove', _show);

            this._update();
        },

        _setOption: function (key, value) {
            this.options[key] = value;
            this._update();
        },

        _update: function () {
            var progress = this.options.value + "%";

        },

        _destroy: function () {
            this.element
                .removeClass("img-magnifier")
                .text("");
        }

    });

}(jQuery));