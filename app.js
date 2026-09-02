

let earliest = new Date("9999-12-31");
const msToYears = 1000*60*60*24*365;
const margin = {left: 50, right: 50}

groups.forEach(group => {
    let debut_date = new Date(group.debut_date)
    if (debut_date < earliest)
    {
        earliest = debut_date
    }
});

const now = new Date();

function activeYears(group) {
    let debut_date = new Date(group.debut_date)
    let disband_date
    let active_years = 0

    if (group.disband_date == null)
    {
        disband_date = now
    }
    else
    {
        disband_date = new Date(group.disband_date)
    }
    active_years = (disband_date-debut_date) / (msToYears)

    return active_years
}

const total_range = ((now - earliest)/msToYears)*50

const xScale = d3.scaleTime()
.domain([earliest, now])
.range([margin.left, total_range + margin.left])

function getGroupWidth(group){
    let width
    if(group.disband_date == null)
    {
        width = xScale(now) - xScale(new Date(group.debut_date))
    } 
    else
    {
        width = xScale(new Date(group.disband_date)) - xScale(new Date(group.debut_date))
    }
    return width
}

d3.select("svg")
.attr("width", total_range + margin.left + margin.right)

/*
d3.select("svg")
.append("rect")
.attr("x", xScale(new Date(groups[0].debut_date)))
.attr("y", 50)
.attr("width", getGroupWidth(groups[0]))
.attr("height", 50)
.attr("fill", "steelblue")
*/

const rowHeight = 20

d3.select("svg") // selects the <div> im using, this time, an svg
.selectAll("rect") // selects all the <rect> elements (will be empty, but its good practice)
.data(groups) // the data (array) that will be paired to an element
.join("rect") // for each item in the array that doesnt have an element, create (append) a rect
.attr("x", d => xScale(new Date(d.debut_date))) // for each item "d" in the array, apply xScale to their debut_date as a new Date, return its value, and apply to x
.attr("y", (_, i) => i*rowHeight) // i represents the second parameter of the callback function, that is the index, by using an _ in the first parameter, im representing that i need to have something in the first slot to reach for the index, but i wont use the variable in the first slot
.attr("width", d => getGroupWidth(d))
.attr("height", 15) // since the y-axis grows downwards, and the y position is measured from the rectangle's top-left edge, height needs to be smaller than the rowHeight, so that there won't be any ovarlap (with rowHeight = 20 and height = 15, there will be a 5px gap between each bar)
.attr("fill", "steelblue")
