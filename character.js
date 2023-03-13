class bob {
    constructor(game) {
        this.game = game;
        this.running = new Animator(ASSET_MANAGER.getAsset("./assets/character/gothic-hero-run.png"), 0, 0, 66, 160, 12, 0.075);
        this.attacking = new Animator(ASSET_MANAGER.getAsset("./assets/character/gothic-hero-attack.png"), 0, 0, 96, 160, 6, 0.1);
        this.jump_attack = new Animator(ASSET_MANAGER.getAsset("./assets/character/gothic-hero-jump-attack.png"), 0, 0, 83, 160, 6, 0.1);

        this.animator = this.running;

        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        let canvasWidth = 1280;
        if (this.x > canvasWidth * 1 / 4) {
            this.speed = 50;
            this.animator = this.attacking;
        };
        if (this.x > canvasWidth * 2 / 4) {
            this.speed = 100;
            this.y = -100;
            this.animator = this.jump_attack;
        };
        

        if (this.x > canvasWidth * 3 / 4) {
            this.y =0;
            this.speed = 200;
            this.animator = this.running;
        };

        if (this.x > canvasWidth) this.x = 0;
    };
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y + 500, 3);
    };
}