﻿CKEDITOR.dialog.add("widgetfoundationAccordion",
    function() {
        return{
            title: "Edit Accordion Box",
            minWidth: 200,
            minHeight: 100,
            contents: [
                {
                    id: "info",
                    elements: [
                        {
                            id: "name",
                            type: "text",
                            label: "Accordion machine name",
                            width: "200px",
                            setup: function(a) { this.setValue(void 0 != a.data.name ? a.data.name : "accordion") },
                            commit: function(a) { a.setData("name", this.getValue()) }
                        }, {
                            id: "count",
                            type: "text",
                            label: "Number of panels",
                            width: "50px",
                            setup: function(a) { this.setValue(void 0 != a.data.count ? a.data.count : 3) },
                            commit: function(a) {
                                a.setData("count",
                                    this.getValue())
                            }
                        },
                        {
                            id: "activePanel",
                            type: "text",
                            width: "50px",
                            label:
                                "Active panel (leave blank for accordion to be initially collapsed, or enter the number of the panel you would like open, ex: 1)",
                            setup: function(a) { this.setValue(a.data.activePanel) },
                            commit: function(a) { a.setData("activePanel", this.getValue()) }
                        }, {
                            id: "multiExpand",
                            type: "checkbox",
                            label: "Allow multiple accordion panels to be expanded at the same time",
                            setup: function(a) { this.setValue(a.data.multiExpand) },
                            commit: function(a) {
                                a.setData("multiExpand",
                                    this.getValue())
                            }
                        }
                    ]
                }
            ]
        }
    });