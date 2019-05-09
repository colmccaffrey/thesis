
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// Initialize the X axis
var x = d3.scaleLinear()
  .range([ 0, width ]);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleBand()
  .range([height, 0])
  .padding(1);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")

var xAxisLabel = xAxis.append('text').attr("class", "text")
// A function that create / update the plot for a given variable:
function update(var1) {
  // Parse the Data
  d3.csv("data/med-15-averages-edited.csv", function(data) {


    // / X axis
    x.domain([0, d3.max(data, function(d) { return +d[var1] }) ]);
    // x.domain([0, 200]);
    // x.domain(data.map(function(d) { return d.group; }))
    xAxis.transition().duration(1000).call(d3.axisBottom(x))

    // Add Y axis
    // y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
    y.domain(data.map(function(d) { return +d.cluster; }))
    yAxis.transition().duration(1000).call(d3.axisLeft(y));

//     // Add X axis
//   var x = d3.scaleLinear()
//     // .domain([-1, 6])
//     .domain([0,200])
//     .range([ 0, width]);
//     svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))

//     // Y axis
//     var y = d3.scaleBand()
//     .range([ 0, height ])
//     .domain(data.map(function(d) { return d.cluster; }))
//     .padding(1);
//     svg.append("g")
//     .call(d3.axisLeft(y))

    // variable u: map data to existing circle
    var j = svg.selectAll(".myLine")
      .data(data)
    // update lines
    j
      .enter()
      .append("line")
      .attr("class", "myLine")
      .merge(j)
      .transition()
      .duration(1000)
        // .attr("x1", function(d) { console.log(x(d[selectedd[var1]])) ; return x(d[selectedd[var1]]); })
        // .attr("x2", function(d) { return x(d[selectedd[var1]]); })
        // .attr("y1", y(0))
        // .attr("y2", function(d) { return y(d.cluster); })
        // .attr("stroke", "grey")
      .attr("x1", x(0))
      .attr("x2", function(d) { return x(d[var1]); })
      .attr("y1", function(d) { return y(d.cluster); })
      .attr("y2", function(d) { return y(d.cluster); })
      .attr("stroke", "grey")
      .attr("stroke-width", "1px")



    // variable u: map data to existing circle
    var u = svg.selectAll("circle")
      .data(data)
    // update bars
    u
      .enter()
      .append("circle")
      .merge(u)
      .transition()
      .duration(1000)
    //     .attr("cx", function(d) { return x(d[selectedd[var1]]); })
    //     .attr("cy", function(d) { return y(d.cluster); })
    //     .attr("r", 8)
    //     .attr("fill", "#69b3a2");


         // Circles of variable 1
        // .enter()
        // .append("circle")
            .attr("cx", function(d) { return x(d[var1]); })
            .attr("cy", function(d) { return y(d.cluster); })
            .attr("r", "6")
            .style("fill", "#69b3a2")

// // Circles of variable 2
//         var z = svg.selectAll("circle")
//         .data(data)
//         // update bars
//         z
//         .enter()
//         .append("circle")
//         .merge(z)
//         .transition()
//         .duration(1000)

//         // .enter()
//         // .append("circle")
//             .attr("cx", function(d) { return x(d[var1]); })
//             .attr("cy", function(d) { return y(d.cluster); })
//             .attr("r", "6")
//             .style("fill", "#4C4082")
        })

}

// Initialize plot
// update('raised_mean', 'donors_mean');

// run function on scroll position
window.addEventListener("scroll", function () {
    var offsets = document.getElementById('plots').getBoundingClientRect();
    var top = offsets.top;
    console.log(top);
    if (top < 200) {
        return update('raised_mean');
    }
});

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 30},
//     width = 460 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // Parse the Data
// // d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_cleveland.csv", function(data) {
// d3.csv("data/med-15-averages-edited.csv", function(data) {

//   // Add X axis
//   var x = d3.scaleLinear()
//     // .domain([-1, 6])
//     .domain([0,200])
//     .range([ 0, width]);
//   svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))

//   // Y axis
//   var y = d3.scaleBand()
//     .range([ 0, height ])
//     .domain(data.map(function(d) { return d[selectedd[var1]]; }))
//     .padding(1);
//   svg.append("g")
//     .call(d3.axisLeft(y))

//   // Lines
//   svg.selectAll("myline")
//     .data(data)
//     .enter()
//     .append("line")
//       .attr("x1", function(d) { return x(d[var2]); })
//       .attr("x2", function(d) { return x(d[var1]/d[var2]); })
//       .attr("y1", function(d) { return y(d[selectedd[var1]]); })
//       .attr("y2", function(d) { return y(d[selectedd[var1]]); })
//       .attr("stroke", "grey")
//       .attr("stroke-width", "1px")


// //dont forget to change other instances!!!!!
// //can sort?
// //average engagment rates to average success rates
//   //   svg.selectAll("myline")
//     // .data(data)
//     // .enter()
//     // .append("line")
//     //   .attr("x1", function(d) { return x(d.engagement_mean); })
//     //   .attr("x2", function(d) { return x(d.success_mean); })
//     //   .attr("y1", function(d) { return y(d[selectedd[var1]]); })
//     //   .attr("y2", function(d) { return y(d[selectedd[var1]]); })
//     //   .attr("stroke", "grey")
//     //   .attr("stroke-width", "1px")

// //dont forget to change other instances!!!!!
// //average number of donors per campaign to average campaign donation amount
//     //   svg.selectAll("myline")
//     // .data(data)
//     // .enter()
//     // .append("line")
//     //   .attr("x1", function(d) { return x(d[var2]); })
//     //   .attr("x2", function(d) { return x(d[var1]/d[var2]); })
//     //   .attr("y1", function(d) { return y(d[selectedd[var1]]); })
//     //   .attr("y2", function(d) { return y(d[selectedd[var1]]); })
//     //   .attr("stroke", "grey")
//     //   .attr("stroke-width", "1px")



//   // Circles of variable 1
//   svg.selectAll("mycircle")
//     .data(data)
//     .enter()
//     .append("circle")
//       .attr("cx", function(d) { return x(d[var2]); })
//       .attr("cy", function(d) { return y(d[selectedd[var1]]); })
//       .attr("r", "6")
//       .style("fill", "#69b3a2")

//   // Circles of variable 2
//   svg.selectAll("mycircle")
//     .data(data)
//     .enter()
//     .append("circle")
//       .attr("cx", function(d) { return x(d[var1]/d[var2]); })
//       .attr("cy", function(d) { return y(d[selectedd[var1]]); })
//       .attr("r", "6")
//       .style("fill", "#4C4082")
// })
