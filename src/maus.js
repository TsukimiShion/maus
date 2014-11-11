window.maus = new function(){
    "use strict";
    /**
     * @class maus
     * @static
     */

    var maus = this;

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

    this.j = function(selector, context, descend){
        /**
         * The function to make a J instance.
         *
         * ``` maus.j(selector) ``` is equal to ``` new maus.J(selector) ``` .
         *
         * @method j
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @return {maus.J}
         * @example
         *     // ex1
         *     var body = maus.j("body"); // new maus.J("body")
         *     body.css("background-color", "red"); // $("body").css("background-color", "red");
         */
        return new maus.J.apply(maus, arguments);
        // return new maus.J(selector, context, descend);
    };

    this.J = function(selector, context, descend){
        /**
         * jQuery Wrapper Class.
         *
         * @class J
         * @namespace maus
         * @constructor
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     // ex1
         *     var lis = new maus.J("li");
         *     var lis2 = new maus.J("li", true); // context is omitted.
         *     lis.size(); // 2
         *     lis2.size(); // 2
         *     $("ul").append("<li></li>");
         *     lis.size(); // 2
         *     lis2.size(); // 3
         *
         * @example
         *     // ex2: maus.J accepts various parameters.
         *     new maus.J("li"); // selector: String
         *     var elems = $("li").get();
         *     new maus.J(elems); // selector: Array of Element
         *     var elem = $("li").get(0);
         *     new maus.J(elem); // selector: Element
         *     new maus.J($("li")); // selector: jQuery
         *     new maus.J("li", "ul"); // selector: String, context: String
         *     new maus.J("li", elem); // selector: String, context: Element
         *     new maus.J("li", $("li")); // selector: String, context: jQuery
         *     new maus.J("li", true); // selector: String, descend: true
         *     new maus.J("li", "ul", true); // selector: String, context: String, descend: true
         *     new maus.J("li", elem, true); // selector: String, context: Element, descend: true
         *     new maus.J("li", "ul", true); // selector: String, context: jQuery, descend: true
         */

        /**
         * Get the jQuery object.
         * @method jq
         * @return {jQuery} The jQuery object.
         * @example
         *     // ex1
         *     var body = new maus.J("body");
         *     body.jq(); // $("body")
         */

        var self = this;

        (function(len){
            var jq;
            if (_.isString(selector)){
                if (len === 1){
                    jq = $(selector);
                    self.jq = function(){
                        return jq;
                    };
                } else if (len === 2){
                    if (context instanceof HTMLElement || context instanceof $ || _.isString(context)){
                        jq = $(selector, context);
                        self.jq = function(){
                            return jq;
                        };
                    } else if (context){
                        self.jq = function(){
                            return $(selector);
                        };
                    } else {
                        jq = $(selector);
                        self.jq = function(){
                            return jq;
                        };
                    }
                } else if (len > 2){
                    if (descend){
                        self.jq = function(){
                            return $(selector, context);
                        };
                    } else {
                        jq = $(selector, context);
                        self.jq = function(){
                            return jq;
                        };
                    }
                }
            } else {
                jq = $(selector);
                self.jq = function(){
                    return jq;
                };
            }
        })(arguments.length);
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

        (function(J_selector){
            /**
             * Attach the event handler function for the event to the selected elements.
             * This method is similar to ``` jQuery.on() ``` .
             * For detail of the parameters **events**, **data**, **handler**, please refer http://api.jquery.com/on/ .
             *
             * The main difference between this method and jQuery.on is the meaning of **selector**.
             *
             * @method lon
             * @param {String|Object} events
             * @param {String} selector
             * @param {Anything} [data]
             * @param {Function} [handler]
             * @return this
             * @example
             *     // ex1: In case selector of maus.Form is a String
             *     //      and selector of maus.Form.lon is specified.
             *     var selector = ":text";
             *     var text = new maus.Text(selector);
             *     text.lon("change", document, callback); // $(document).on("change", selector, callback);
             *
             * @example
             *     // ex2: In case selector of maus.Form is not a String.
             *     var selector = $(":text");
             *     var text = new maus.Text(selector);
             *     text.lon("change", document, callback); // $(document).find(text.jq()).on("change", callback);
             */
            if (_.isString(J_selector)){
                self.lon = function(events, selector, data, handler){
                    var len = arguments.length;
                    if (len === 2){
                        return $(selector).on(events, J_selector);
                    } else if (len === 3){
                        return $(selector).on(events, J_selector, data);
                    } else if (len > 3){
                        return $(selector).on(events, J_selector, data, handler);
                    }
                };
            } else {
                self.lon = function(events, selector, data, handler){
                    var len = arguments.length;
                    if (len === 2){
                        return $(selector).find(J_selector).on(events);
                    } else if (len === 3){
                        return $(selector).find(J_selector).on(events, null, data);
                    } else if (len > 3){
                        return $(selector).find(J_selector).on(events, null, data, handler);
                    }
                };
            }
        })(selector);
    };

    function Form(selector, context, descend){
        /**
         * The Base Class of Text, CheckBox, etc.
         * You cannot access this class.
         *
         * @class Form
         * @constructor
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         */
        
        var _default;

        maus.J.apply(this, arguments);
        // maus.J.call(this, selector, context, descend);
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
            _default = val;
            return this;
        };
    }
    Form.prototype = new maus.J;

    this.Text = function(selector, context, descend){
        /**
         * This class helps to operate input:text or textarea.
         * @class Text
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     var text = new maus.Text(":text");
         */

        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
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
        this.setDef("");
    };
    this.Text.prototype = new Form;

    this.Select = function(selector, context, descend){
        /**
         * This class helps to operate select.
         *
         * > ##### Note:
         * Since the version 3.0.0, the parameter **multiple** has been abolished.
         * Whether the select element can select multiple items is automatically checked using **multiple** attribute.
         *
         * @class Select
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     var select = new maus.Select("select");
         */

        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
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
             *     var select = new maus.Select("select");
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
             *     var select = new maus.Select("select");
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
             *     var select = new maus.Select("select");
             *     select.clear();
             *     console.log(select.get()); // null
             */
            return this.set([]);
        };
        this.setDef(null);
    };
    this.Select.prototype = new Form;
    
    this.Radio = function(selector, context, descend){
        /**
         * This class helps to operate input:radio.
         * @class Radio
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
        var checked_selector = _.template("[value='<%= value %>']");
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
            var val = this.filter(":checked").val();
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
                this.filter(checked_selector({value: val})).prop("checked", true);
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
            this.checked(false);
            // checked.checked(false);
            return this;
        };
        this.setDef(null);
    };
    this.Radio.prototype = new Form;

    this.CheckBox = function(selector, context, descend){
        /**
         * This class helps to operate input:checkbox.
         * @class CheckBox
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
        var checked_selector = _.template("[value='<%= value %>']");
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
            this.filter(":checked").each(function(){
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
            this.filter(":checked").each(function(){
                $(this).prop("checked", false);
            });
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
            var self = this;
            if (vals instanceof Array){
                vals.forEach(function(val){
                    self.filter(checked_selector({value: val})).prop("checked", true);
                });
            } else if (_.isString(vals)){
                this.filter(checked_selector({value: vals})).prop("checked", true);
            } else if (vals === null){
                this.clear();
            }
            return this;
        };
        this.setDef([]);
    };
    this.CheckBox.prototype = new Form;

    this.BoolCheckBox = function(selector, context, descend){
        /**
         * This class helps to operate input:checkbox.
         * If you use this class, the following conditions should be satisfied.
         *
         * - ``` $(selector).size() ``` is 1.
         * - You want to check whether this checkbox is checked.
         * - You don't want to check the value of the checked checkbox.
         *
         * @class BoolCheckBox
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
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
        this.setDef(false);
    };
    this.BoolCheckBox.prototype = new Form;

    this.Color = function(selector, context, descend){
        /**
         * This class helps to operate input:color.
         *
         * @class Color
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     var text = new maus.Color("[type='color']");
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
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
        this.setDef("#ffffff");
    };
    this.Color.prototype = new Form;

    this.Number = function(selector, context, descend){
        /**
         * This class helps to operate input:number.
         * @class Number
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     var number = new maus.Number("[type='number']");
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {Number|null}
             * @example
             *     var number = new maus.Number("[type='number']");
             *     number.set(3);
             *     console.log(number.get()); // 3
             */
            var val = this.val();
            return val === "" ? null : Number(val);
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
        this.setDef(null);
    };
    this.Number.prototype = new Form;

    this.File = function(selector, context, descend){
        /**
         * This class helps to operate input:file.
         * > ##### Note: 
         * Some browsers have a security feature that prevents javascript from knowing your file's local full path.
         * So maus.File has the following limitations.
         *
         * - The def, setDef, getDef methods do nothing.
         * - The set method is not defined.
         * - The get method may not return the correct full path. The return value of the get method depends on the browser.
         *
         * @class File
         * @constructor
         * @extends maus.Form
         * @namespace maus
         * @param {String|Element|Array of Element|jQuery} selector This parameter is passed to $(). For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {Element|jQuery|String} [context] This parameter is valid if **selector** is a string. A DOM Element, Document, or jQuery to use as context.  For detail, please refer http://api.jquery.com/jQuery/ .
         * @param {boolean} [descend=false] This parameter is valid if **selector** is a string. If **selector** is a string and **descend** is **true**, this maus.J instance does not process currently selected elements but also descendant elements that are added to the document at a later time. If **descend** is false, this maus.J instance processes only currently selected elements.
         * @example
         *     var file = new maus.File("[type='file']");
         */
        Form.apply(this, arguments);
        // Form.call(this, selector, context, descend);
        this.getDef = function(){
            /**
             * Do nothing.
             *
             * @method getDef
             */
        };
        this.setDef = function(){
            /**
             * Do nothing.
             *
             * @method setDef
             */
        };
        this.def = function(){
            /**
             * Do nothing.
             *
             * @method def
             */
        };
        this.get = function(){
            /**
             * Return the selected files.
             *
             * @method get
             * @return {File|Array of File|null}
             * @example
             *     var file = new maus.File("[type='file']");
             *     console.log(file.get()); // 
             */
            var ifile = this.jq().get(0);
            if (ifile.multiple){
                return _.toArray(ifile.files);
            } else {
                var file = ifile.files[0];
                return file ? file : null;
            }
        };
        this.clear = function(){
            /**
             * Clear the value.
             * @method clear
             * @return this
             * @example
             *     var file = new maus.File("[type='file']");
             *     file.clear();
             *     console.log(file.get()); // null | []
             */
            return this.jq().val("");
        };
    };
    this.File.prototype = new Form;

    this.controls = function(obj){
        /**
         * The function to make maus.J instances.
         * If the argument ``` obj ``` includes Array objects, they must be [**type**, **selector**, **context**, **descend**].
         * **type** and **selector** require, and others are optional.
         * type must be one of the following value.
         *
         * - "text": create a maus.Text object.
         * - "select": create a maus.Select object.
         * - "radio": create a maus.Radio object.
         * - "checkbox": create a maus.CheckBox object.
         * - "bcheckbox", "boolcheckbox": create a maus.BoolCheckBox object.
         * - "color": create a maus.Color object.
         * - "number": create a maus.Number object.
         * - "file": create a maus.File object.
         *
         * The meaning of **selector**, **context**, **descend** is equivalent to maus.Form .
         *
         * @method controls
         * @param {Object|String|Array} obj
         * @return {Object|maus.J|maus.Text|maus.Radio|maus.Select|maus.BoolCheckBox|maus.CheckBox|maus.Color|maus.Number|maus.File}
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

            function applyConstructor(Constructor, args){
                function construct(args){
                    Constructor.apply(this, args);
                }

                construct.prototype = Constructor.prototype;

                return new construct(args);
            }

            var types = {
                "text": maus.Text,
                "select": maus.Select,
                "radio": maus.Radio,
                "checkbox": maus.CheckBox,
                "bcheckbox": maus.BoolCheckBox,
                "boolcheckbox": maus.BoolCheckBox,
                "color": maus.Color,
                "number": maus.Number,
                "file": maus.File,
            };

            var type = types[arr[0]];
            return applyConstructor(type, _.toArray(arr).slice(1));
        }

        function forms(params){
            var ret = {};
            _.each(params, function(vals, key){
                ret[key] = form(vals);
            });

            ret.get = function(names){
                var items = {};
                var name;
                if (names == null){
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

            ret.set = function(items){
                _.each(items, function(val, key){
                    ret[key].set(val);
                });
                return ret;
            };

            ret.clear = function(names){
                var name;
                if (names == null){
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

            ret.def = function(names){
                var name;
                if (names == null){
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

            ret.getDef = function(names){
                var items = {};
                var name;
                if (names == null){
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

            ret.setDef = function(items){
                _.each(items, function(val, key){
                    ret[key].setDef(val);
                });
                return ret;
            };

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
