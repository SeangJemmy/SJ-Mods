/*Troll Mod by SeangJemmy! DON'T BREAK THE CODES OR IT WILL BE ERROR! DON'T COPY CODES OR YOU WILL GET PUNISHED!*/

ModPE.setItem(500, "blaze_rod", 0, "§ePOWER TOOL");

ModPE.setItem(491, "blaze_powder", 0, "§4TNT Troller");

ModPE.setItem(492, "fire_charge", 0, "§4LAVA Killer");

ModPE.setItem(493, "nether_star", 0, "§4Exploder");

function useItem(x, y, z, itemId, blockId, side)
 {
   if(itemId==500)
    {
for (var i=0; i<14; i++)
    {
setTile(x, y-i, z, 0);
setTile(x, y-14, z, 11);
   }
}

else if(itemId==491)
    {
Level.spawnMob(x, y+1, z, 33, "mob/creeper.png");
    }

else if(itemId==492)
     {
setTile(x, y+2, z, 20);
setTile(x, y+1, z, 11);
    }

else if(itemId==493)
     {
Level.explode(x, y, z, 3.1);
    }
}

function procCmd(cmd)
 {
    if(cmd == "troll")
     {
       if(Level.getGameMode(1))
          {
clientMessage("§4Fail to add item in §2Creative Mode§4!");
   }
     if(Level.getGameMode(0))
        {
Player.addItemInventory(500, 1);
Player.addItemInventory(491, 1);
Player.addItemInventory(492, 1);
Player.addItemInventory(493, 1);
clientMessage("§aSuccessfully add the items!");
  }
     }
        }

function newLevel()
   {
clientMessage("§eWelcome §5" + Player.getName(Player.getEntity()));
clientMessage("§eTroll Mod by SeangJemmy");
clientMessage("§eDo §4/troll §eto get the items!");
clientMessage("§3Tell your friend to install this mod before troll them");
 }
