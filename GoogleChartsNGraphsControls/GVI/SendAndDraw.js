﻿
/**
 * Registered by GoogleVisualizationsDotNet to facilitate the reload() function 
 * for each control.  Reload will proxy this to this call with the control and container
 * data.  Do not call directly. 
 *
 * PLEASE READ:
 * When loading data from the data source, there will be a GET parameter in the request - tqx - with a value like: "reqId:0". 
 * You must return the same reqId in your response.
 *
 */

function m_SendAndDraw(container, chart, queryString, args) {
  if (queryString == undefined || queryString == null){
        alert('Missing ajax query string!');
  }
  if (args != undefined || args != null){
    queryString = queryString + '?' + args;
  }
  var objAjaxCallback = new AjaxCallback(container, chart);
  jx.load(queryString, objAjaxCallback.fnAjaxCallback, 'json');
   
}


function AjaxCallback(container, chart)
{
    this.container = container;
    this.chart = chart;
    this.fnAjaxCallback = function(data){
        var dt = new google.visualization.DataTable(data);
        chart.draw(dt);
    };
}
 


