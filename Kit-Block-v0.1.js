/*Kit Block Mod by SeangJemmy! Please don't copy codes!*/

Block.defineBlock(180, "Kit Block", [["enchanting_table_top", 0], ["command_block", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0], ["redstone_lamp_on", 0]], 1, false, 0);
Block.setLightLevel(180, 15);
Block.setDestroyTime(180, 1.5);
Item.addShapedRecipe(180, 1, 0,["sis", "ggg", "ded"], ["d", 264, 0, "e", 388, 0, "s", 1, 0, "i", 265, 0, "g", 89, 0]);

function destroyBlock(x, y, z){

var blockId = Level.getTile(x, y, z);

preventDefault();
Level.destroyBlock(x, y, z, true)
}

function useItem(x, y, z, itemId, blockId, side){
if (blockId==180){
clientMessage(ChatColor.RED + "Your Kit is given!");
Player.addItemInventory(276, 1, 0);
Player.addItemInventory(278, 1, 0);
Player.addItemInventory(310, 1, 0);
Player.addItemInventory(311, 1, 0);
Player.addItemInventory(312, 1, 0);
Player.addItemInventory(313, 1, 0);
Player.addItemInventory(364, 64, 0);
Player.addItemInventory(261, 1, 0);
Player.addItemInventory(262, 64, 0);
Level.playSound(x, y, z, "random.click", 1, 1);
}
}

function newLevel(){

clientMessage(ChatColor.GREEN + "Thanks for downloading!");
clientMessage(ChatColor.GRAY + "Try /kb");
}

function procCmd(cmd){
if (cmd == "kb"){
clientMessage(ChatColor.BLUE + "Kit Block v0.1 by SeangJemmy");
clientMessage(ChatColor.GRAY + "It can be craft in Stone Cutter (or using TMI id<180>)!!!");
clientMessage("Creator: www.youtube.com/SeangJemmy");
}
}
