const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/character/gothic-hero-run.png");
ASSET_MANAGER.queueDownload("./assets/character/gothic-hero-attack.png");
ASSET_MANAGER.queueDownload("./assets/character/gothic-hero-jump-attack.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new bob(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
