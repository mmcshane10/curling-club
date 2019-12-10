export default function sketch1(stone) {

  stone.setup = () => {
    stone.createCanvas(800, 300);

    //create a sprite and add the 3 animations
    // stone.createSprite(400, 150, 50, 100);

    //label, first frame, last frame
    //the addAnimation method returns the added animation
    //that can be store in a temporary variable to change parameters
    var myAnimation = stone.addAnimation('floating', '../img/stone.png', '../img/stone.png');
    //offX and offY is the distance of animation from the center of the sprite
    //in this case since the animations have different heights i want to adjust
    //the vertical offset to make the transition between floating and moving look better
    myAnimation.offY = 18;

    stone.addAnimation('moving', '../img/stone.png', '../img/stone.png');

    stone.addAnimation('spinning', '../img/stone.png', '../img/stone.png');
  };

  stone.draw = () => {
    background(255, 255, 255);

    //if mouse is to the left
    if (mouseX < stone.position.x - 10) {
      stone.changeAnimation('moving');
      //flip horizontally
      stone.mirrorX(-1);
      //negative x velocity: move left
      stone.velocity.x = -2;
    }
    else if (mouseX > stone.position.x + 10) {
      stone.changeAnimation('moving');
      //unflip
      stone.mirrorX(1);
      stone.velocity.x = 2;
    }
    else {
      //if close to the mouse, don't move
      stone.changeAnimation('floating');
      stone.velocity.x = 0;
    }

    if (mouseIsPressed) {
      //the rotation is not part of the spinning animation
      stone.rotation -= 3;
      stone.changeAnimation('spinning');
    }
    else
      stone.rotation = 0;

    //draw the sprite
    drawSprites();

  };
}