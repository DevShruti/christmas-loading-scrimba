const meter = document.getElementById("meter")
festivityLoading()
// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function festivityLoading() {
    const today = new Date()
    meter.setAttribute("value", today.getDate())
}
// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
