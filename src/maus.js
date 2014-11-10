window.maus = new function(){
    "use strict";
    /**
     * @class maus
     * @static
     */

    var maus = this;

    this.j = function(selector){
        /**
         * The function to make a J instance.
         *
         * ``` maus.j(selector) ``` is equal to ``` new maus.J(selector) ``` .
         *
         * @method j
         * @param {String|Element|Array of Element|jQuery} selector This argument is passed to $().
         * @return {maus.J}
         * @example
         *     // ex1
         *     var body = maus.j("body"); // new maus.J("body")
         *     body.css("background-color", "red"); // $("body").css("background-color", "red");
         */
        return new maus.J(selector);
    };

    /**
     * 140 color names are defined in the HTML and CSS color specification (17 standard colors plus 123 more).
     * The keys of ``` maus.colors ``` are color keywords and the values of them are their hexadecimal values.
     *
     * @property colors
     * @type Object
     * @example
     *     console.log(maus.colors.red); // "#ff0000"
     *     console.log(maus.colors.palegreen); // "#98fb98"
     */
    this.colors = {
        "indigo": "#4b0082",
        "gold": "#ffd700",
        "firebrick": "#b22222",
        "indianred": "#cd5c5c",
        "yellow": "#ffff00",
        "darkolivegreen": "#556b2f",
        "darkseagreen": "#8fbc8f",
        "mediumvioletred": "#c71585",
        "mediumorchid": "#ba55d3",
        "chartreuse": "#7fff00",
        "mediumslateblue": "#7b68ee",
        "black": "#000000",
        "springgreen": "#00ff7f",
        "crimson": "#dc143c",
        "lightsalmon": "#ffa07a",
        "brown": "#a52a2a",
        "turquoise": "#40e0d0",
        "olivedrab": "#6b8e23",
        "cyan": "#00ffff",
        "silver": "#c0c0c0",
        "skyblue": "#87ceeb",
        "gray": "#808080",
        "darkturquoise": "#00ced1",
        "goldenrod": "#daa520",
        "darkgreen": "#006400",
        "darkviolet": "#9400d3",
        "darkgray": "#a9a9a9",
        "lightpink": "#ffb6c1",
        "teal": "#008080",
        "darkmagenta": "#8b008b",
        "lightgoldenrodyellow": "#fafad2",
        "lavender": "#e6e6fa",
        "yellowgreen": "#9acd32",
        "thistle": "#d8bfd8",
        "violet": "#ee82ee",
        "navy": "#000080",
        "orchid": "#da70d6",
        "blue": "#0000ff",
        "ghostwhite": "#f8f8ff",
        "honeydew": "#f0fff0",
        "cornflowerblue": "#6495ed",
        "darkblue": "#00008b",
        "darkkhaki": "#bdb76b",
        "mediumpurple": "#9370db",
        "cornsilk": "#fff8dc",
        "red": "#ff0000",
        "bisque": "#ffe4c4",
        "slategray": "#708090",
        "darkcyan": "#008b8b",
        "khaki": "#f0e68c",
        "wheat": "#f5deb3",
        "deepskyblue": "#00bfff",
        "darkred": "#8b0000",
        "steelblue": "#4682b4",
        "aliceblue": "#f0f8ff",
        "gainsboro": "#dcdcdc",
        "mediumturquoise": "#48d1cc",
        "floralwhite": "#fffaf0",
        "coral": "#ff7f50",
        "purple": "#800080",
        "aqua": "#00ffff",
        "lightcyan": "#e0ffff",
        "darksalmon": "#e9967a",
        "beige": "#f5f5dc",
        "azure": "#f0ffff",
        "lightsteelblue": "#b0c4de",
        "oldlace": "#fdf5e6",
        "greenyellow": "#adff2f",
        "royalblue": "#4169e1",
        "lightseagreen": "#20b2aa",
        "mistyrose": "#ffe4e1",
        "sienna": "#a0522d",
        "lightcoral": "#f08080",
        "orangered": "#ff4500",
        "navajowhite": "#ffdead",
        "lime": "#00ff00",
        "palegreen": "#98fb98",
        "burlywood": "#deb887",
        "seashell": "#fff5ee",
        "mediumspringgreen": "#00fa9a",
        "fuchsia": "#ff00ff",
        "papayawhip": "#ffefd5",
        "blanchedalmond": "#ffebcd",
        "peru": "#cd853f",
        "aquamarine": "#7fffd4",
        "white": "#ffffff",
        "darkslategray": "#2f4f4f",
        "tomato": "#ff6347",
        "ivory": "#fffff0",
        "dodgerblue": "#1e90ff",
        "lemonchiffon": "#fffacd",
        "chocolate": "#d2691e",
        "orange": "#ffa500",
        "forestgreen": "#228b22",
        "slateblue": "#6a5acd",
        "olive": "#808000",
        "mintcream": "#f5fffa",
        "antiquewhite": "#faebd7",
        "darkorange": "#ff8c00",
        "cadetblue": "#5f9ea0",
        "moccasin": "#ffe4b5",
        "limegreen": "#32cd32",
        "saddlebrown": "#8b4513",
        "darkslateblue": "#483d8b",
        "lightskyblue": "#87cefa",
        "deeppink": "#ff1493",
        "plum": "#dda0dd",
        "darkgoldenrod": "#b8860b",
        "maroon": "#800000",
        "sandybrown": "#f4a460",
        "magenta": "#ff00ff",
        "tan": "#d2b48c",
        "rosybrown": "#bc8f8f",
        "pink": "#ffc0cb",
        "lightblue": "#add8e6",
        "palevioletred": "#db7093",
        "mediumseagreen": "#3cb371",
        "dimgray": "#696969",
        "powderblue": "#b0e0e6",
        "seagreen": "#2e8b57",
        "snow": "#fffafa",
        "mediumblue": "#0000cd",
        "midnightblue": "#191970",
        "paleturquoise": "#afeeee",
        "palegoldenrod": "#eee8aa",
        "whitesmoke": "#f5f5f5",
        "darkorchid": "#9932cc",
        "salmon": "#fa8072",
        "lightslategray": "#778899",
        "lawngreen": "#7cfc00",
        "lightgreen": "#90ee90",
        "lightgray": "#d3d3d3",
        "hotpink": "#ff69b4",
        "lightyellow": "#ffffe0",
        "lavenderblush": "#fff0f5",
        "linen": "#faf0e6",
        "mediumaquamarine": "#66cdaa",
        "green": "#008000",
        "blueviolet": "#8a2be2",
        "peachpuff": "#ffdab9"
    };

    this.J = function(selector){
        /**
         * jQuery Wrapper Class.
         *
         * @class J
         * @namespace maus
         * @constructor
         * @param {String|Element|Array of Element|jQuery} selector This argument is passed to $().
         * @example
         *     // ex1
         *     var body = new maus.J("body");
         *     body.css("background-color", "red"); // $("body").css("background-color", "red");
         */

        var self = this;
        this.jq = function(){
            /**
             * Get the jQuery object.
             * @method jq
             * @return {jQuery} The jQuery object.
             * @example
             *     // ex1
             *     var body = new maus.J("body");
             *     body.jq(); // $("body")
             */
            return $(selector);
        };
        function _call(thisArg, key){
            function call2(){
                var self = thisArg.jq();
                return self[key].apply(self, arguments);
            }
            return call2;
        }
        Object.keys(Object.getPrototypeOf(this.jq())).forEach(function(key){
            self[key] = _call(self, key);
        });
        /**
         * The short cut method of jQuery.prop("checked", flag).
         * @method checked
         * @param {Boolean} [flag]
         * @return {jQuery} The jQuery object.
         * @example
         *     // ex1
         *     var checkboxes = new maus.J(":checkbox");
         *     checkboxes.checked(true); // $(":checkbox").prop("checked", true);
         *     checkboxes.checked(); // $(":checkbox").prop("checked");
         */

        /**
         * The short cut method of jQuery.prop("disabled", flag).
         * @method disabled
         * @param {Boolean} [flag]
         * @return {jQuery} The jQuery object.
         * @example
         *     // ex1
         *     var button = new maus.J(":button");
         *     button.disabled(true); // $(":button").prop("disabled", true);
         *     button.disabled(); // $(":button").prop("disabled");
         */
        ["checked", "disabled"].forEach(function(key){
            self[key] = function(value){
                if (value === undefined){
                    return self.prop(key);
                } else {
                    return self.prop(key, value);
                }
            };
        });
        this.display = function(val){
            /**
             * The short cut method of jQuery.css("display", val).
             * @method display
             * @param {String} val
             * @return {jQuery} The jQuery object.
             * @example
             *     // ex1
             *     var button = new maus.J(":button");
             *     button.display("none"); // $(":button").css("display", "none");
             */
            return this.css("display", val);
        };
        /**
         * The short cut method of jQuery.css("display", *).
         * Note: inline-block is supported by only some browsers.
         *
         * @method display_*
         * @return {jQuery} The jQuery object.
         * @example
         *     // ex1
         *     var button = new maus.J(":button");
         *     button.display_none(); // $(":button").css("display", "none");
         *     button.display_inline(); // $(":button").css("display", "none");
         *     button.display_list_item(); // $(":button").css("display", "list-item");
         */
        ["inline", "block", "list-item", "run-in", "inline-block", "table",
        "inline-table", "table-row-group", "table-header-group",
        "table-footer-group", "table-row", "table-column-group",
        "table-column", "table-cell", "table-caption", "none", "inherit"]
        .forEach(function(key){
            self["display_" + key.replace("-", "_")] = function(){
                return self.display(key);
            };
        });
    };

    function Form(selector, live, def){
        /**
         * The Base Class of Text, CheckBox, etc.
         * You cannot access this class.
         *
         * @class Form
         * @constructor
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param {undefined|false|selector} [live=undefined]
         * @param {undefined|String|Array of String} [def=undefined] The default value.
         */

        /**
         * If live is undefined, you can't use the **vchange.fm** event and on_vchange and off_vchange method.
         * @attribute live
         * @type {undefined|false|selector}
         * @writeOnce
         * @default undefined
         */
        
        var _default;

        maus.J.call(this, selector);
        this.def = function(){
            /**
             * Change the value to the default value.
             * @method def
             * @return this
             * @example
             *     var text = new maus.Text(":text");
             *     console.log(text.get()); // ""
             *     text.setDef("hello");
             *     console.log(text.get()); // ""
             *     text.def();
             *     console.log(text.get()); // "hello"
             */
            // return this.set(this._default);
            return this.set(_default);
        };
        this.getDef = function(){
            /**
             * Return the default value.
             * @method getDef
             * @return {String|Array of String|null}
             * @example
             *     var text = new maus.Text(":text");
             *     console.log(text.getDef()); // ""
             *     text.setDef("hello");
             *     console.log(text.getDef()); // "hello"
             */
            // return this._default;
            return _default;
        };
        this.setDef = function(val){
            /**
             * Set the default value.
             * @method setDef
             * @param {String|Array of String|null} val The default value.
             * @return this
             * @example
             *     var text = new maus.Text(":text");
             *     console.log(text.getDef()); // ""
             *     text.setDef("hello");
             *     console.log(text.getDef()); // "hello"
             */
            // this._default = val;
            _default = val;
            return this;
        };
        this.setDef(def);
        this.lon = function(event, func){
            /**
             * Attach the event handler function for the event to the selected elements.
             * This method is similar to ``` jQuery.on() ``` .
             * If live is undefined, this method does nothing.
             * If live is false, this method is equivalent to ``` $(selector).on(event, func) ``` .
             * Otherwise, this method is equivalent to ``` $(live).on(event, selector, func) ``` .
             * @method lon
             * @param {String} event 
             * @param {Function} func 
             * @return this
             * @example
             *     var text = new maus.Text(":text", false);
             *     text.lon("vchange.fm", function(e, val){
             *         // Execute whenever the value of textbox changes.
             *         // val is the value of textbox.
             *         console.log(val);
             *     });
             */
            if (live !== undefined){
                if (live){
                    $(live).on(event, selector, func);
                } else {
                    this.on(event, func);
                }
            }
            return this;
        };

        /**
         * Attach an event handler function for **vchange.fm** event.
         * @method on_vchange
         * @return this
         * @example
         *     var text = new maus.Text(":text", false);
         *     text.off_vchange();
         *     text.on_vchange();
         */

        /**
         * Remove an event handler function for **vchange.fm** event.
         * @method off_vchange
         * @return this
         * @example
         *     var text = new maus.Text(":text", false);
         *     text.off_vchange();
         */
    }
    Form.prototype = new maus.J;

    /**
     * If live is not undefined, this event occurs when the value of form changes.
     * If you don't want this event to occur, call this.off_vchange().
     * After call this.off_vchange(), if you want this event to occur again, call this.on_vchange().
     * @event vchange.fm
     * @example
     *     var text = new maus.Text(":text", false);
     *     text.lon("vchange.fm", function(e, val){
     *         // Execute whenever the value of textbox changes.
     *         // val is the value of textbox.
     *         console.log(val);
     *     });
     */

    this.Text = function(selector, live, def){
        /**
         * This class helps to operate input:text or textarea.
         * @class Text
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=""] The default value.
         * @example
         *     var text = new maus.Text(":text");
         */
        var self = this;
        Form.call(this, selector, live, def === undefined ? "" : def);
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {String}
             * @example
             *     var text = new maus.Text("textarea");
             *     text.set("hello");
             *     console.log(text.get()); // "hello"
             */
            return this.val();
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {String|null} val
             * @return this
             * @example
             *     var text = new maus.Text("textarea");
             *     text.set("hello");
             *     console.log(text.get()); // "hello"
             *     text.set(null);
             *     console.log(text.get()); // ""
             *     text.set("hello");
             */
            this.val(val);
            return this;
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var text = new maus.Text("textarea");
             *     text.clear();
             *     console.log(text.get()); // ""
             */
            return this.set("");
        };
        function _vchange(e){
            var val = self.get();
            if (self._val !== val){
                self._val = val;
                $(this).trigger("vchange.fm", val);
            }
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("keyup", selector, _vchange);
                } else {
                    this.on("keyup", _vchange);
                }
            }
            return this;
        };
        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("keyup", selector, _vchange);
                } else {
                    this.off("keyup", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.Text.prototype = new Form;

    this.Select = function(selector, live, def, multiple){
        /**
         * This class helps to operate select.
         * @class Select
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=null] The default value.
         * @param {boolean} [multiple=false] The value of select's multiple attribute.
         * @example
         *     var select = new maus.Select("select");
         *     var multi_select = new maus.Select("select", undefined, undefined, true); // multiple select
         */
        Form.call(this, selector, live, def === undefined ? null : def);
        var self = this;
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {String|Array of String|null}
             * @example
             *     // ex1: single
             *     var select = new maus.Select("select");
             *     console.log(select.get()); // String or null
             * @example
             *     // ex2: multiple
             *     var select = new maus.Select("select", undefined, undefined, multiple);
             *     select.set("hello");
             *     console.log(select.get()); // ["hello"]
             *     select.clear();
             *     console.log(select.get()); // null
             */
            return this.val();
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {String|Array of String|null} val
             * @return this
             * @example
             *     // ex1: single
             *     var select = new maus.Select("select");
             *     select.set("hello");
             *     console.log(select.get()); // "hello"
             *     select.set(null);
             *     console.log(select.get()); // null
             *
             * @example
             *     // ex2: multiple
             *     var select = new maus.Select("select", undefined, undefined, multiple);
             *     select.set("hello");
             *     console.log(select.get()); // ["hello"]
             *     select.set(["bad", "good"]);
             *     console.log(select.get()); // ["bad", "good"]
             *     select.set(null);
             *     console.log(select.get()); // null
             *     select.set(["bad", "good"]);
             *     select.set([]);
             *     console.log(select.get()); // []
             */
            this.val(val);
            return this;
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     // ex1 single
             *     var select = new maus.Select("select");
             *     select.clear();
             *     console.log(select.get()); // null
             * @example
             *     // ex2 single
             *     var select = new maus.Select("select", undefined, undefined, multiple);
             *     select.clear();
             *     console.log(select.get()); // null
             */
            return this.set([]);
        };
        function _vchange(e){
            if (multiple){
                $(this).trigger("vchange.fm", [self.get()]);
            } else {
                $(this).trigger("vchange.fm", self.get());
            }
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change", selector, _vchange);
                } else {
                    this.on("change", _vchange);
                }
            }
            return this;
        };
        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.Select.prototype = new Form;
    
    this.Radio = function(selector, live, def){
        /**
         * This class helps to operate input:radio.
         * @class Radio
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=null] The default value.If def == null, it means no item is checked.
         */
        Form.call(this, selector, live, def === undefined ? null : def);
        var self = this;
        var checked_selector = _.template(selector + "[value='<%= value %>']");
        var checked = new maus.J(selector + ":checked");
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {String|null}
             * @example
             *     var radio = new maus.Radio(":radio");
             *     radio.set("good");
             *     console.log(radio.get()); // "good"
             */
            var val = checked.val();
            return val === undefined ? null : val;
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {String|null} val
             * @return this
             * @example
             *     var radio = new maus.Radio(":radio");
             *     radio.set("good");
             *     console.log(radio.get()); // "good"
             *     radio.set(null);
             *     console.log(radio.get()); // null
             */
            if (val == null){
                this.clear();
                return this;
            } else {
                $(checked_selector({value: val})).prop("checked", true);
                return this;
            }
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var radio = new maus.Radio(":radio");
             *     radio.clear();
             *     console.log(radio.get()); // null
             */
            checked.checked(false);
            return this;
        };
        function _vchange(e){
            $(this).trigger("vchange.fm", self.get());
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change", selector, _vchange);
                } else {
                    this.on("change", _vchange);
                }
            }
            return this;
        };
        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.Radio.prototype = new Form;

    this.CheckBox = function(selector, live, def){
        /**
         * This class helps to operate input:checkbox.
         * @class CheckBox
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=[]] The default value. I def is [], it means no item is checked.
         */
        Form.call(this, selector, live, def === undefined ? [] : def);
        var self = this;
        var checked_selector = _.template(selector + "[value='<%= value %>']");
        var checked = new maus.J(selector + ":checked");
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {Array of String}
             * @example
             *     var checkbox = new maus.CheckBox(":checkbox");
             *     console.log(checkbox.get()); // []
             *     checkbox.set("good");
             *     console.log(checkbox.get()); // ["good"]
             */
            var vals = [];
            checked.each(function(){
                vals.push($(this).val());
            });
            return vals;
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var checkbox = new maus.CheckBox(":checkbox");
             *     checkbox.clear();
             *     console.log(checkbox.get()); // []
             */
            checked.checked(false);
            return this;
        };
        this.set = function(vals){
            /**
             * Set the value.
             * @method set
             * @param {String|Array of String|null} val
             * @return this
             * @example
             *     var checkbox = new maus.CheckBox(":checkbox");
             *     checkbox.set("hello");
             *     console.log(checkbox.get()); // ["hello"]
             *     checkbox.set(["good", "bad"]);
             *     console.log(checkbox.get()); // ["good", "bad"]
             *     checkbox.set(null);
             *     console.log(checkbox.get()); // []
             */
            this.clear();
            if (vals instanceof Array){
                vals.forEach(function(val){
                    $(checked_selector({value: val})).prop("checked", true);
                });
            } else if (_.isString(vals)){
                $(checked_selector({value: vals})).prop("checked", true);
            } else if (vals === null){
                this.clear();
            }
            return this;
        };
        function _vchange(e){
            $(this).trigger("vchange.fm", [self.get()]);
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change", selector, _vchange);
                } else {
                    this.on("change", _vchange);
                }
            }
            return this;
        };

        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.CheckBox.prototype = new Form;

    this.BoolCheckBox = function(selector, live, def){
        /**
         * This class helps to operate input:checkbox.
         * If you use this class, the following conditions should be satisfied.
         *
         * - ``` $(selector).size() ``` is 1.
         * - You want to check Whether this checkbox is checked.
         * - You don't want to check the value of the checked checkbox.
         *
         * @class BoolCheckBox
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=false] The default value.
         */
        Form.call(this, selector, live, def === undefined ? false : def);
        var self = this;
        this.get = function(){
            /**
             * Return whether the checkbox is checked.
             * @method get
             * @return {boolean}
             * @example
             *     var checkbox = new maus.BoolCheckBox(":checkbox");
             *     checkbox.clear();
             *     console.log(checkbox.get()); // false
             *     checkbox.set(true);
             *     console.log(checkbox.get()); // true
             */
            return this.checked();
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var checkbox = new maus.BoolCheckBox(":checkbox");
             *     checkbox.clear();
             *     console.log(checkbox.get()); // false
             */
            this.checked(false);
            return this;
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {bool|null} val
             * @return this
             * @example
             *     var checkbox = new maus.BoolCheckBox(":checkbox");
             *     checkbox.set(true);
             *     console.log(checkbox.get()); // true
             *     checkbox.set(false);
             *     console.log(checkbox.get()); // false
             */
            this.checked(Boolean(val));
            return this;
        };
        function _vchange(e){
            $(this).trigger("vchange.fm", self.get());
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change", selector, _vchange);
                } else {
                    this.on("change", _vchange);
                }
            }
            return this;
        };

        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.BoolCheckBox.prototype = new Form;

    this.Color = function(selector, live, def){
        /**
         * This class helps to operate input:color.
         *
         * @class Color
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def] The default value.
         * @example
         *     var text = new maus.Color("[type='color']");
         */
        Form.call(this, selector, live, def);
        var self = this;
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {String} the hexadecimal value.
             * @example
             *     var color = new maus.Color("[type='color']");
             *     color.set("red");
             *     console.log(color.get()); // "#ff0000"
             */
            return this.val();
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {String} val Either the hexadecimal value or the color keyword. If you use the color keyword, it must be included in ``` maus.colors ``` (case-insensitive).
             * @return this
             * @example
             *     var color = new maus.Color("[type='color']");
             *     color.set("red");
             *     console.log(color.get()); // "#ff0000"
             */
            val = val.toLowerCase();
            if (val in maus.colors){
                val = maus.colors[val];
            }
            this.val(val);
            return this;
        };
        function _vchange(e){
            $(this).trigger("vchange.fm", self.get());
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change", selector, _vchange);
                } else {
                    this.on("change", _vchange);
                }
            }
            return this;
        };

        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                }
            }
            return this;
        };
        this.on_vchange();
    };
    this.Color.prototype = new Form;

    this.Number = function(selector, live, def){
        /**
         * This class helps to operate input:number.
         * @class Number
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|jQuery} selector
         * @param [live]
         * @param [def=""] The default value.
         * @example
         *     var number = new maus.Number("[type='number']");
         */
        var self = this;
        Form.call(this, selector, live, def === undefined ? "" : def);
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {Number}
             * @example
             *     var number = new maus.Number("[type='number']");
             *     number.set(3);
             *     console.log(number.get()); // 3
             */
            var val = this.val();
            if (val === ""){
                val = null;
            } else {
                val = Number(val);
            }
            return val;
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {Number|null} val
             * @return this
             * @example
             *     var number = new maus.Number("[type='number']");
             *     number.set(3);
             *     console.log(number.get()); // 3
             *     number.set(null);
             *     console.log(number.get()); // null
             */
            this.val(val);
            return this;
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var number = new maus.Number("[type='number']");
             *     number.clear();
             *     console.log(number.get()); // null
             */
            return this.set("");
        };
        function _vchange(e){
            var val = self.get();
            if (self._val !== val){
                self._val = val;
                $(this).trigger("vchange.fm", val);
            }
        }
        this.on_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).on("change keyup", selector, _vchange);
                } else {
                    this.on("change keyup", _vchange);
                }
            }
            return this;
        };

        this.off_vchange = function(){
            if (live !== undefined){
                if (live){
                    $(live).off("change", selector, _vchange);
                    $(live).off("keyup", selector, _vchange);
                } else {
                    this.off("change", _vchange);
                    this.off("keyup", _vchange);
                }
            }
            return this;
        };

        this.on_vchange();
    };
    this.Number.prototype = new Form;

    this.controls = function(obj){
        /**
         * The function to make maus.J instances.
         * If the argument ``` obj ``` includes Array objects, they must be [**type**, **selector**, **live**, **def**, **multiple**].
         * **type** and **selector** require, and others are optional.
         * type must be one of the following value.
         *
         * - "text": create a maus.Text object.
         * - "select": create a maus.Select object.
         * - "radio": create a maus.Radio object.
         * - "checkbox": create a maus.CheckBox object.
         * - "bcheckbox", "boolcheckbox": create a maus.BoolCheckBox object.
         * - "color": create a maus.Color object.
         *
         * The meaning of **selector**, **live**, **def**, **multiple** is equivalent to maus.Form .
         *
         * @method controls
         * @param {Object|String|Array} obj
         * @return {Object|maus.J|maus.Text|maus.Radio|maus.Select|maus.BoolCheckBox|maus.CheckBox}
         * @for maus
         * @example
         *     // ex1
         *     var controls = maus.controls({
         *         body: "body",
         *         container: "#container",
         *     });
         *     controls.body.css("background-color", "red"); // $("body").css("background-color", "red");
         *     controls.container.css("background-color", "white"); // $("#container").css("background-color", "white");
         * @example
         *     // ex2
         *     var body = maus.controls("body"); // new maus.J("body");
         *     var text = maus.controls(["text", ":text"]); // new maus.Text(":text");
         * @example
         *     // ex3
         *     var controls = maus.controls({
         *         body: "body",
         *         form: {
         *             name: ["text", ":text[name='name']"],
         *             sex: ["radio", ":radio[name='sex']"],
         *             submit: ":submit",
         *         },
         *     });
         *     controls.form.name.set("John");
         * @example
         *     // ex4
         *     var controls = maus.controls({
         *         body: "body",
         *         form: {
         *             name: ["text", ":text[name='name']"],
         *             sex: ["radio", ":radio[name='sex']"],
         *         },
         *     });
         *     controls.form.set({name: "John", sex: "male"});
         */

        function form(arr){
            var type = arr[0];
            var selector = arr[1];
            var live = arr[2];
            var def = arr[3];
            var multiple = arr[4];
            var types = {
                "text": maus.Text,
                "select": maus.Select,
                "radio": maus.Radio,
                "checkbox": maus.CheckBox,
                "bcheckbox": maus.BoolCheckBox,
                "boolcheckbox": maus.BoolCheckBox,
                "color": maus.Color,
            };
            return new types[type](selector, live, def, multiple);
        }

        function forms(params){
            var ret = {};
            _.each(params, function(vals, key){
                ret[key] = form(vals);
            });

            if (!("get" in params)){
                ret.get = function(names){
                    var items = {};
                    var name;
                    if (names === undefined){
                        for (name in params){
                            items[name] = ret[name].get();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            items[name] = ret[name].get();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            name = arguments[index];
                            items[name] = ret[name].get();
                        }
                    }
                    return items;
                };
            }

            if (!("set" in params)){
                ret.set = function(items){
                    _.each(items, function(val, key){
                        ret[key].set(val);
                    });
                    return ret;
                };
            }

            if (!("clear" in params)){
                ret.clear = function(names){
                    var name;
                    if (names === undefined){
                        for (name in params){
                            ret[name].clear();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            ret[name].clear();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            ret[arguments[index]].clear();
                        }
                    }
                    return ret;
                };
            }

            if (!("def" in params)){
                ret.def = function(names){
                    var name;
                    if (names === undefined){
                        for (name in params){
                            ret[name].def();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            ret[name].def();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            ret[arguments[index]].def();
                        }
                    }
                    return ret;
                };
            }

            if (!("getDef" in params)){
                ret.getDef = function(names){
                    var items = {};
                    var name;
                    if (names === undefined){
                        for (name in params){
                            items[name] = ret[name].getDef();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            items[name] = ret[name].getDef();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            name = arguments[index];
                            items[name] = ret[name].getDef();
                        }
                    }
                    return items;
                };
            }

            if (!("setDef" in params)){
                ret.setDef = function(items){
                    _.each(items, function(val, key){
                        ret[key].setDef(val);
                    });
                    return ret;
                };
            }

            if (!("on_vchange" in params)){
                ret.on_vchange = function(names){
                    var name;
                    if (names === undefined){
                        for (name in params){
                            ret[name].on_vchange();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            ret[name].on_vchange();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            ret[arguments[index]].on_vchange();
                        }
                    }
                    return ret;
                };
            }

            if (!("off_vchange" in params)){
                ret.off_vchange = function(names){
                    var name;
                    if (names === undefined){
                        for (name in params){
                            ret[name].off_vchange();
                        }
                    } else if (names instanceof Array){
                        names.forEach(function(name){
                            ret[name].off_vchange();
                        });
                    } else {
                        for (var index=0; index < arguments.length; index++){
                            ret[arguments[index]].off_vchange();
                        }
                    }
                    return ret;
                };
            }
            return ret;
        }

        if (_.isString(obj)){
            return new maus.J(obj);
        } else if (obj instanceof Array){
            return form(obj);
        } else {
            if (_.every(obj, function(val, key){
                return val instanceof Array;
            })){
                return forms(obj);
            } else {
                var item = {};
                _.each(obj, function(val, key){
                    item[key] = maus.controls(val);
                });
                return item;
            }
        }
    };
};
