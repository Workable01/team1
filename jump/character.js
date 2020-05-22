export class Character {
  constructor(ctx) {
    this.x = 0;
    this.oldX = 0;
    this.y = 0;
    this.oldY = 0;
    this.ctx = ctx;
    this.width = 50;
    this.height = 80;
    this.speed = 5;
    this.velocityY = 0;
    this.gravity = 0.6;
    this.jumpStrength = -13;
    this.bottom = this.y + this.height;
    this.oldBottom = this.oldY + this.height;
    this.movement = {
      left: false,
      right: false,
      jumping: false,
      isOnGround: false,
    };
    this.planks = [];
    this.eye = {
      size: 10,
      offset: 10,
    };
  }

  draw() {
    this.ctx.fillStyle = "#d90368";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x + this.eye.offset, this.y + this.eye.offset + 10, this.eye.size, this.eye.size);
    this.ctx.fillRect(
      this.x + this.width - this.eye.offset - this.eye.size,
      this.y + this.eye.offset + 10,
      this.eye.size,
      this.eye.size
    );
  }

  move() {
    this.oldX = this.x;
    this.oldY = this.y;
    this.velocityY += this.gravity;
    this.y += this.velocityY;
    this.bottom = this.y + this.height;
    this.oldBottom = this.oldY + this.height;

    this.checkColission(this.planks);

    if (this.movement.left) {
      this.x -= this.speed;
    } else if (this.movement.right) {
      this.x += this.speed;
    }

    if (this.movement.jumping) {
      if (this.movement.isOnGround) {
        this.velocityY = this.jumpStrength;
        this.movement.isOnGround = false;
      }
    }
  }

  checkColission(planks) {
    planks.forEach((plank) => {
      if (plank.visible) {
        if (
          this.bottom > plank.y &&
          this.oldBottom <= plank.y &&
          this.x + this.width >= plank.x &&
          this.x <= plank.x + plank.width
        ) {
          this.y = plank.y - this.height;
          this.velocityY = 0;
          this.jumping = false;
          this.movement.isOnGround = true;
          //plank.visible = false;
          if (plank.type === "FINISH") {
            alert("Congratulations! Don't let it go into your head");
            window.location.reload();
          } else if (plank.type === "BOOST") {
            this.jumpStrength = -18.5;
          } else {
            this.jumpStrength = -13;
          }

          //console.log("on plank");
        }
      }
    });
  }

  listenTo(window) {
    window.addEventListener("keydown", (e) => this.handleEvent(e));
    window.addEventListener("keyup", (e) => this.handleEvent(e));
  }

  handleEvent(e) {
    const keyState = e.type === "keydown" ? true : false;
    switch (e.key) {
      case "d":
        this.movement.right = keyState;
        break;
      case "a":
        this.movement.left = keyState;
        break;
      case " ":
        this.movement.jumping = keyState;
        break;
    }
    //console.log(this.movement);
  }
}
