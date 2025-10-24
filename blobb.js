// Game Setup
eden = new Eden;
kaboom();
setGravity(1600);
loadSprite("blobb", eden.links[0]);

// Level Setup
add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
])

const blobb = add([
    sprite("blobb"),
    pos(80, 40),
    area(),
    body()
])

blobb.onCollide("enemy", () => {
    addKaboom(blobb.pos);
    shake();
});


// Movement
onKeyPress("space", () => {
    if (blobb.isGrounded()) {
        blobb.jump();
    }
});

/*onKeyPress("w", () => {
    blobb.
});*/
