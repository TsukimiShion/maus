window.maus = new function(){
    "use strict";
    /**
     * @class maus
     * @static
     */

    var maus = this;

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

    this.controls = function(obj){
        /**
         * The function to make J instances.
         * @method controls
         * @param {Object} obj
         * @return {Object}
         * @for maus
         * @example
         *     // ex1
         *     var controls = maus.controls({
         *         body: "body",
         *         container: "#container",
         *     });
         *     controls.body.css("background-color", "red"); // $("body").css("background-color", "red");
         *     controls.container.css("background-color", "white"); // $("#container").css("background-color", "white");
         */
        var A = {};
        for (var key in obj){
            A[key] = new this.J(obj[key]);
        }
        return A;
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
        maus.J.call(this, selector);
        this._default = def;
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
            return this.set(this._default);
        };
        this.getDef = function(){
            /**
             * Return the default value.
             * @method getDef
             * @return {String|Array of String}
             * @example
             *     var text = new maus.Text(":text");
             *     console.log(text.getDef()); // undefined
             *     text.setDef("hello");
             *     console.log(text.getDef()); // "hello"
             */
            return this._default;
        };
        this.setDef = function(val){
            /**
             * Set the default value.
             * @method setDef
             * @param {String|Array of String} val The default value.
             * @return this
             * @example
             *     var text = new maus.Text(":text");
             *     console.log(text.getDef()); // undefined
             *     text.setDef("hello");
             *     console.log(text.getDef()); // "hello"
             */
            this._default = val;
            return this;
        };
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
         * @param [def] The default value.
         * @example
         *     var text = new maus.Text(":text");
         */
        Form.call(this, selector, live, def);
        var self = this;
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
             * @param {String} val
             * @return this
             * @example
             *     var text = new maus.Text("textarea");
             *     text.set("hello");
             *     console.log(text.get()); // "hello"
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
         * @param [def] The default value.
         * @param {boolean} [multiple=false] The value of select's multiple attribute.
         * @example
         *     var select = new maus.Select("select");
         *     var multi_select = new maus.Select("select", undefined, undefined, true); // multiple select
         */
        Form.call(this, selector, live, def);
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
             * @param {String|Array of String} val
             * @return this
             * @example
             *     // ex1: single
             *     var select = new maus.Select("select");
             *     select.set("hello");
             *     console.log(select.get()); // "hello"
             * @example
             *     // ex2: multiple
             *     var select = new maus.Select("select", undefined, undefined, multiple);
             *     select.set("hello");
             *     console.log(select.get()); // ["hello"]
             *     select.set(["bad", "good"]);
             *     console.log(select.get()); // ["bad", "good"]
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
         * @param [def] The default value.
         */
        Form.call(this, selector, live, def);
        var self = this;
        var checked_selector = _.template(selector + "[value='<%= value %>']");
        var checked = new maus.J(selector + ":checked");
        this.get = function(){
            /**
             * Return the value.
             * @method get
             * @return {String}
             * @example
             *     var radio = new maus.Radio(":radio");
             *     radio.set("good");
             *     console.log(radio.get()); // "good"
             */
            return checked.val();
        };
        this.set = function(val){
            /**
             * Set the value.
             * @method set
             * @param {String} val
             * @return this
             * @example
             *     var radio = new maus.Radio(":radio");
             *     radio.set("good");
             *     console.log(radio.get()); // "good"
             */
            $(checked_selector({value: val})).prop("checked", true);
            return this;
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
         * @param [def] The default value.
         */
        Form.call(this, selector, live, def);
        var self = this;
        var checked_selector = _.template(selector + "[value='<%= value %>']");
        var checked = new maus.J(selector + ":checked");
        this.get = function(flag){
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
             * @param {String} val
             * @return this
             * @example
             *     var checkbox = new maus.CheckBox(":checkbox");
             *     checkbox.set("hello");
             *     console.log(checkbox.get()); // ["hello"]
             *     checkbox.set(["good", "bad"]);
             *     console.log(checkbox.get()); // ["good", "bad"]
             */
            this.clear();
            if (vals instanceof Array){
                vals.forEach(function(val){
                    $(checked_selector({value: val})).prop("checked", true);
                });
            } else {
                for (var i=0; i<arguments.length; i++){
                    var val = arguments[i];
                    $(checked_selector({value: val})).prop("checked", true);
                }
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
         * @param [def] The default value.
         */
        Form.call(this, selector, live, def);
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
             * @param {String} val
             * @return this
             * @example
             *     var checkbox = new maus.BoolCheckBox(":checkbox");
             *     checkbox.set(true);
             *     console.log(checkbox.get()); // true
             *     checkbox.set(false);
             *     console.log(checkbox.get()); // false
             */
            this.checked(val);
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

    this.form = function(params){
        /**
         * This method helps to make instances of the subclass of Form.
         * @method form
         * @for maus
         * @param {Object} params 
         * The each value of **params**'s property must be an Array object [**type**, **selector**, **live**, **def**, **multiple**].
         * **type** and **selector** require, and others are optional.
         * type must be one of the following value.
         * 
         * - "text": create a maus.Text object.
         * - "select": create a maus.Select object.
         * - "radio": create a maus.Radio object.
         * - "checkbox": create a maus.CheckBox object.
         * - "bcheckbox", "boolcheckbox": create a maus.BoolCheckBox object.
         *
         * The meaning of **selector**, **live**, **def**, **multiple** is equivalent to maus.Form .
         * 
         * @return Object
         * @example
         *     var form = maus.form({
         *         name: ["text", ":text[name='name']", undefined, "John"],
         *         sex: ["checkbox", ":checkbox[name='sex']", undefined],
         *     });
         *     form.set({ name: "John", sex: "male" });
         *     console.log(form.name.get()); // "John"
         *     console.log(form.sex.get()); // "male"
         *     form.sex.set("female");
         *     console.log(form.get()); // { name: "John", sex: "female" }
         */

        /* {name: {"type": type, "selector": selector, "multiple": boolean, "def": def, "live": live}
         * {name: [type, selector, live, def, multiple] 
         *
         */
        var ret = {};
        var types = {
            "text": maus.Text,
            "select": maus.Select,
            "radio": maus.Radio,
            "checkbox": maus.CheckBox,
            "bcheckbox": maus.BoolCheckBox,
            "boolcheckbox": maus.BoolCheckBox,
        };
        var type, C, selector, multiple, def, live;
        for (var name in params){
            var a = params[name];
            if (a instanceof Array){
                type = a[0];
                C = types[type];
                selector = a[1];
                live = a[2];
                def = a[3];
                multiple = a[4];
            } else {
                type = a.type;
                C = types[type];
                selector = a.selector;
                def = a.def;
                live = a.live;
                multiple = a.multiple;
            }
            ret[name] = new C(selector, live, def, multiple);
        }

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
    };
};
