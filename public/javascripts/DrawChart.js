
// <script src = "d3-transform.js"></script>

$(document).ready(function () {
    var t = d3.transition().delay(2000).duration(2000);
    d3.select("body").transition(t).style("background-color", "lightblue");

     // set the dimensions and margins of the graph
     var margin = {top: 20, right: 20, bottom: 30, left: 50},
     width = 1100 - margin.left - margin.right,
     height = 700 - margin.top - margin.bottom;

     // set the ranges
     var x = d3.scaleTime().range([0, width]);
     var y = d3.scaleLinear().range([height, 0]);

     // append the svg obgect to the body of the page
     // appends a 'group' element to 'svg'
     // moves the 'group' element to the top left margin
     var g = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g").attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");


    var parseDate = d3.timeParse("%d-%b-%y");
    d3.csv("../data/data.csv").then(function(data) {
        
        data.forEach(function(d) {
            d.Date = parseDate(d.Date);
         });

        x.domain(d3.extent(data, function(d) { return d.Date; }));
        y.domain([0, d3.max(data, function(d) { 
            return d.Close; 
        })]);
      
        // Add the X Axis
        g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("text-color","red")
        .call(d3.axisBottom(x));

     // Add the Y Axis
        g.append("g").call(d3.axisLeft(y));
      
        g.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .style("fill", "red")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.Date); })
            .attr("y", function(d) { return y(d.Open); })
            .attr("width", 5)
            .attr("height", function(d) { return Math.abs( y(d.Open) - y(d.Close)); });
    
    });

});

