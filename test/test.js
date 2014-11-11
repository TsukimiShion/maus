$(function(){
    "use strict";
    /* global mocha: false, chai: false, _: false, maus: false */
    mocha.setup("tdd");
    /* global suite: false, test: false */
    suite("J", function(){
        test("normal", function(){
            var body = new maus.J("body");
        });
        test("selector", function(){
            var lis = new maus.J("ul#J li");
            var jq = $("ul#J li");
            chai.assert.equal(lis.size(), 2, "lis.size() must be 2.");
            chai.assert.equal(jq.size(), 2, "jq.size() must be 2.");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 2, "lis.size() must be 2.");
            chai.assert.equal(jq.size(), 2, "jq.size() must be 2.");
            lis.filter(":last").remove();
        });
        test("element", function(){
            var elem = $("ul#J li").get(0);
            var li = new maus.J(elem);
            var jq = $(elem);
            chai.assert.equal(li.size(), 1, "li.size() must be 1.");
            chai.assert.equal(jq.size(), 1, "jq.size() must be 1.");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(li.size(), 1, "li.size() must be 1.");
            chai.assert.equal(jq.size(), 1, "jq.size() must be 1.");
            $("ul#J li:last").remove();
        });
        test("elements", function(){
            var elems = $("ul#J li").get();
            var lis = new maus.J(elems);
            var jq = $(elems);
            chai.assert.equal(lis.size(), 2, "lis.size() must be 2.");
            chai.assert.equal(jq.size(), 2, "jq.size() must be 2.");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 2, "lis.size() must be 2.");
            chai.assert.equal(jq.size(), 2, "jq.size() must be 2.");
            $("ul#J li:last").remove();
        });
        test("jquery", function(){
            var jq = $("ul#J li");
            var lis = new maus.J(jq);
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J li:last").remove();
        });
        test("selector context", function(){
            var jq = $("li", "ul#J");
            var lis = new maus.J("li", "ul#J");
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J li:last").remove();
        });
        test("selector descend", function(){
            var jq = $("ul#J li");
            var lis = new maus.J("ul#J li", true);
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 3, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J li:last").remove();
        });
        test("selector context descend", function(){
            var jq = $("li", "ul#J");
            var lis = new maus.J("li", "ul#J", true);
            chai.assert.equal(lis.size(), 2, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J").append("<li>c</li>");
            chai.assert.equal(lis.size(), 3, "OK");
            chai.assert.equal(jq.size(), 2, "OK");
            $("ul#J li:last").remove();
        });
    });
    suite("J.jq", function(){
        test("normal", function(){
            var body = new maus.J("body");
            chai.assert.ok(_.isEqual(body.jq(), $("body")), "OK");
        });
    });
    suite("J.get", function(){
        test("normal", function(){
            var body = new maus.J("body");
            chai.assert.ok(_.isEqual(body.get(0), $("body").get(0)), "OK");
        });
    });
    suite("J.display", function(){
        // remove run-in
        ["inline", "block", "list-item", "inline-block", "table",
            "inline-table", "table-row-group", "table-header-group",
            "table-footer-group", "table-row", "table-column-group",
            "table-column", "table-cell", "table-caption", "none"]
        .forEach(function(val){
            test("display: " + val, function(){
                var target = new maus.J("#display-target");
                target.display(val);
                var result = $("#display-target").css("display");
                chai.assert.equal(result, val, "OK");
            });
            });
        test("display: inherit", function(){
            var target = new maus.J("#display-target");
            target.display("inherit");
            var result = $("#display-target").css("display");
            var expect = $("#display-target").parent().css("display");
            chai.assert.equal(result, expect, "OK");
        });
    });
    suite("J.display_*", function(){
        // remove run-in
        ["inline", "block", "list-item", "inline-block", "table",
            "inline-table", "table-row-group", "table-header-group",
            "table-footer-group", "table-row", "table-column-group",
            "table-column", "table-cell", "table-caption", "none"]
        .forEach(function(val){
            test("display_ " + val, function(){
                var target = new maus.J("#display-target");
                target["display_" + val.replace("-", "_")]();
                var result = $("#display-target").css("display");
                chai.assert.equal(result, val, "OK");
            });
            });
        test("display: inherit", function(){
            var target = new maus.J("#display-target");
            target.display_inherit();
            var result = $("#display-target").css("display");
            var expect = $("#display-target").parent().css("display");
            chai.assert.equal(result, expect, "OK");
        });
    });
    suite("J.ckecked", function(){
        test("normal", function(){
            var selector = "#checked-target";
            var target = new maus.J(selector);
            target.checked(true);
            chai.assert.ok($(selector).prop("checked"));
            chai.assert.ok(target.checked());
            target.checked(false);
            chai.assert.notOk($(selector).prop("checked"));
            chai.assert.notOk(target.checked());
        });
    });
    suite("J.disabled", function(){
        test("normal", function(){
            var text = new maus.J(":text");
            text.disabled(true);
            chai.assert.ok($(":text").prop("disabled"));
            chai.assert.ok(text.disabled());
            text.disabled(false);
            chai.assert.notOk($(":text").prop("disabled"));
            chai.assert.notOk(text.disabled());
        });
    });
    suite("controls", function(){
        test("normal", function(){
            var controls = maus.controls({
                text: ":text",
                checkbox: "#checked-target",
            });
            chai.assert.ok(_.isEqual(controls.text.jq(), $(":text")), "OK");
            chai.assert.ok(_.isEqual(controls.checkbox.jq(), $("#checked-target")), "OK");
        });
        test("selector", function(){
            var controls = maus.controls(":text");
            chai.assert.ok(_.isEqual(controls.jq(), $(":text")), "OK");
        });
        test("Array", function(){
            var text = maus.controls(["text", ":text"]);
            var val = "hello";
            text.set(val);
            chai.assert.equal(val, $(":text").val(), "OK");
            text.clear();
            chai.assert.equal("", $(":text").val(), "OK");
        });
        test("complex", function(){
            var controls = maus.controls({
                body: "body",
                form: {
                    name: ["text", ":text"],
                    sex: ["radio", ":radio[name='sex']"]
                }
            });
            controls.form.set({name: "John", sex: "male"});
            chai.assert.ok(_.isEqual({name: "John", sex: "male"}, controls.form.get()), "OK");
            controls.form.clear();
            chai.assert.ok(_.isEqual({name:"", sex: null}, controls.form.get()), "OK");
        });
    });
    suite("Text", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            chai.assert.ok(_.isEqual(text.jq(), $(":text")), "OK");
        });
    });
    suite("Text.def", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            var def = "yahoo";
            var val = "google";
            text.setDef(def);
            text.set(val);
            text.def();
            chai.assert.equal(text.get(), def, "OK");
        });
    });
    suite("Text.setDef, getDef", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            chai.assert.equal(text.getDef(), "", "OK");
            var val = "yahoo";
            text.setDef(val);
            chai.assert.equal(text.getDef(), val, "OK");
        });
    });
    suite("Text.set, get", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            var val = "yahoo";
            text.set(val);
            chai.assert.equal(text.get(), val, "OK");
            text.set(null);
            chai.assert.equal(text.get(), "", "OK");
            text.set(val);
            text.set(undefined);
            chai.assert.equal(text.get(), "", "OK");
        });
    });
    suite("Text.clear", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            text.set("yahoo");
            text.clear();
            chai.assert.equal(text.get(), "", "OK");
        });
    });
    suite("Select", function(){
        var selector = "select";
        test("normal", function(){
            var select = new maus.Select(selector);
            chai.assert.ok(_.isEqual(select.jq(), $(selector)), "OK");
        });
    });
    suite("Select.set, get", function(){
        test("normal", function(){
            var select = new maus.Select("select");
            var val = "1";
            select.set(val);
            chai.assert.equal(select.get(), val, "OK");
        });
    });
    suite("Select.clear", function(){
        test("normal", function(){
            var select = new maus.Select("select");
            select.set("0");
            select.clear();
            chai.assert.equal(select.get(), null, "OK");
        });
    });
    suite("Select multiple", function(){
        test("normal", function(){
            var select = new maus.Select("select[name='name']");
            chai.assert.equal(select.get(), null, "OK");
            var val = "Ace";
            select.set(val);
            chai.assert.ok(_.isEqual(select.get(), [val]), "OK");
            select.clear();
            chai.assert.ok(_.isEqual(select.get(), null), "OK");
        });
    });
    suite("CheckBox", function(){
        test("normal", function(){
            var selector = "[name='sports']";
            var target = new maus.CheckBox(selector);
            chai.assert.ok(_.isEqual(target.jq(), $(selector)), "OK");
        });
    });
    suite("CheckBox.set, get", function(){
        test("normal", function(){
            var selector = "[name='sports']";
            var target = new maus.CheckBox(selector);
            var val = "soccer";
            target.set(val);
            chai.assert.ok(_.isEqual(target.get(), [val]), "OK");
            var vals = ["soccer", "baseball"];
            target.set(vals);
            chai.assert.ok(_.isEqual(target.get(), vals), "OK");
        });
    });
    suite("CheckBox.clear", function(){
        test("normal", function(){
            var selector = "[name='sports']";
            var target = new maus.CheckBox(selector);
            var vals = ["soccer", "baseball"];
            target.set(vals);
            target.clear();
            chai.assert.ok(_.isEqual(target.get(), []), "OK");
        });
    });
    suite("Radio", function(){
        var selector = ":radio[name='sex']";
        test("normal", function(){
            var target = new maus.Radio(selector);
            chai.assert.ok(_.isEqual(target.jq(), $(selector)), "OK");
        });
    });
    suite("Radio.set, get", function(){
        test("normal", function(){
            var selector = ":radio[name='sex']";
            var target = new maus.Radio(selector);
            var val = "male";
            target.set(val);
            chai.assert.equal(target.get(), val, "OK");
        });
    });
    suite("Radio.clear", function(){
        test("normal", function(){
            var selector = ":radio[name='sex']";
            var target = new maus.Radio(selector);
            target.set("male");
            target.clear();
            chai.assert.equal(target.get(), null, "OK");
        });
    });
    suite("BoolCheckBox", function(){
        var selector = "#checked-target";
        test("normal", function(){
            var target = new maus.BoolCheckBox(selector);
            chai.assert.ok(_.isEqual(target.jq(), $(selector)), "OK");
        });
    });
    suite("BoolCheckBox.set, get", function(){
        var selector = "#checked-target";
        test("normal", function(){
            var target = new maus.BoolCheckBox(selector);
            target.set(true);
            chai.assert.ok(target.get(), "OK");
            target.set(false);
            chai.assert.notOk(target.get(), "OK");
        });
    });
    suite("BoolCheckBox.clear", function(){
        var selector = "#checked-target";
        test("normal", function(){
            var target = new maus.BoolCheckBox(selector);
            target.set(true);
            target.clear();
            chai.assert.notOk(target.get(), "OK");
        });
    });
    suite("Color", function(){
        var selector = "[name='bg-color']";
        test("normal", function(){
            var target = new maus.Color(selector);
            chai.assert.ok(_.isEqual(target.jq(), $(selector)), "OK");
        });
    });
    suite("Color.set, get", function(){
        var selector = "[name='bg-color']";
        test("normal", function(){
            var target = new maus.Color(selector);
            target.set("red");
            chai.assert.equal(target.get(), maus.colors["red"], "OK");
        });
    });
    suite("Number", function(){
        var selector = "[name='age']";
        test("normal", function(){
            var target = new maus.Number(selector);
            chai.assert.ok(_.isEqual(target.jq(), $(selector)), "OK");
        });
    });
    suite("Number.set, get", function(){
        var selector = "[name='age']";
        test("normal", function(){
            var target = new maus.Number(selector);
            target.set(10);
            chai.assert.ok(target.get() === 10, "OK");
        });
        test("null", function(){
            var target = new maus.Number(selector);
            target.set(null);
            chai.assert.ok(_.isNull(target.get()), "OK");
        });
    });
    suite("Text password", function(){
        var selector = "[name='password']";
        test("normal", function(){
            var text = new maus.Text(selector);
            chai.assert.ok(_.isEqual(text.jq(), $(selector)), "OK");
        });
    });
    suite("Text.def password", function(){
        test("normal", function(){
            var text = new maus.Text("[name='password']");
            var def = "yahoo";
            var val = "google";
            text.setDef(def);
            text.set(val);
            text.def();
            chai.assert.equal(text.get(), def, "OK");
        });
    });
    suite("Text.setDef, getDef password", function(){
        test("normal", function(){
            var text = new maus.Text("[name='password']");
            chai.assert.equal(text.getDef(), "", "OK");
            var val = "yahoo";
            text.setDef(val);
            chai.assert.equal(text.getDef(), val, "OK");
        });
    });
    suite("Text.set, get password", function(){
        test("normal", function(){
            var text = new maus.Text("[name='password']");
            var val = "yahoo";
            text.set(val);
            chai.assert.equal(text.get(), val, "OK");
            text.set(null);
            chai.assert.equal(text.get(), "", "OK");
            text.set(val);
            text.set(undefined);
            chai.assert.equal(text.get(), "", "OK");
        });
    });
    suite("Text.clear password", function(){
        test("normal", function(){
            var text = new maus.Text("[name='password']");
            text.set("yahoo");
            text.clear();
            chai.assert.equal(text.get(), "", "OK");
        });
    });
    suite("File", function(){
        var selector = "[name='file']";
        test("normal", function(){
            var file = new maus.File(selector);
            chai.assert.ok(_.isEqual(file.jq(), $(selector)), "OK");
        });
    });
    suite("File multiple", function(){
        var selector = "[name='files']";
        test("normal", function(){
            var file = new maus.File(selector);
            chai.assert.ok(_.isEqual(file.jq(), $(selector)), "OK");
        });
    });

    mocha.run();
});
