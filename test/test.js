$(function(){
    "use strict";
    /* global mocha: false, chai: false, _: false, maus: false */
    mocha.setup("tdd");
    /* global suite: false, test: false */
    suite("J", function(){
        test("normal", function(){
            var body = new maus.J("body");
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
    });
    suite("Text", function(){
        test("normal", function(){
            var text = new maus.Text(":text");
            chai.assert.ok(_.isEqual(text.jq(), $(":text")), "OK");
        });
        test("constructor def", function(){
            var val = "hello";
            var text = new maus.Text(":text", undefined, val);
            chai.assert.equal(text.getDef(), val, "OK");
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
        test("constructor def", function(){
            var val = "1";
            var select = new maus.Select(selector, undefined, val);
            chai.assert.equal(select.getDef(), val, "OK");
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
            var select = new maus.Select("select[name='name']", undefined, undefined, true);
            chai.assert.equal(select.get(), null, "OK");
            var val = "kics";
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
        test("constructor def", function(){
            var selector = "[name='sports']";
            var val = "soccer";
            var target = new maus.CheckBox(selector, undefined, val);
            chai.assert.equal(target.getDef(), val, "OK");
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
        test("constructor def", function(){
            var val = "female";
            var target = new maus.Radio(selector, undefined, val);
            chai.assert.equal(target.getDef(), val, "OK");
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
        test("constructor def", function(){
            var val = true;
            var target = new maus.BoolCheckBox(selector, undefined, val);
            chai.assert.equal(target.getDef(), val, "OK");
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

    mocha.run();
});
