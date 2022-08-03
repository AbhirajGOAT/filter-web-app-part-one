function preload() {
}
function setup() {
    canvas = createCanvas(500, 600);
    canvas.center();
    video = createCapture(VIDEO);
}
function draw() {
    image(video, 0, 0, 500, 600);
}