sap.ui.define([
	"sap/ui/core/mvc/Controller",

], function (Controller) {
	"use strict";

	return Controller.extend("AmChart.AmChart.controller.View1", {
		onInit: function () {
			//this.byId("idHTMLContent").setContent("<div id='visualization'>1</div>");
			//this.byId("idHTMLContent").setContent("<div id='visualization2'>2</div>");
		},
		onAfterRendering: function () {
			// Create chart instance
			var chart = am4core.create("chart1", am4charts.PieChart);
			// Add data
			chart.data = [{
				"country": "Lithuania",
				"litres": 501.9
			}, {
				"country": "Czechia",
				"litres": 301.9
			}, {
				"country": "Ireland",
				"litres": 201.1
			}, {
				"country": "The Netherlands",
				"litres": 50
			}];
			// Add and configure Series
			var pieSeries = chart.series.push(new am4charts.PieSeries());
			pieSeries.dataFields.value = "litres";
			pieSeries.dataFields.category = "country";

			// Add and configure Series
			let chart2 = am4core.create("chart2", am4plugins_venn.VennDiagram);

			// Create and configure series
			var series = chart2.series.push(new am4plugins_venn.VennSeries())
			series.dataFields.category = "name";
			series.dataFields.value = "value";
			series.dataFields.intersections = "sets";
			series.data = [{
				name: "A",
				value: 10
			}, {
				name: "B",
				value: 10
			}, {
				name: "C",
				value: 3,
				sets: ["A", "B"]
			}];
		}

	});
});