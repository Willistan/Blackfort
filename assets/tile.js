Game.Tile = function(glyph) {
    this._glyph = glyph;
};

Game.Tile.prototype.getGlyph = function() {
    return this._glyph;
};

Game.Tile.nullTile = new Game.Tile(new Game.Glyph());
Game.Tile.floorTile = new Game.Tile(new Game.Glyph(' ', 'black', "#5a3c00"));
Game.Tile.wallTile = new Game.Tile(new Game.Glyph(' ', 'black' ,'#333300'));
Game.Tile.waterTile = new Game.Tile(new Game.Glyph('=', '#00ffff'));
