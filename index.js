const { Setting, SettingsObject } = require("SettingsManager/SettingsManager.js")
const Settings = new SettingsObject("AoEWeaponsClean", [
    {
        name:"AoE Weapons Clean Toggles",
        settings: [
            new Setting.Toggle("Weapon Messages", false),
			new Setting.Toggle("Debug Messages", false)
        ]
    }
]).setCommand("aoewc").setSize(Renderer.screen.getWidth()/2, Renderer.screen.getHeight()/2);
Setting.register(Settings);

register("chat", (weapon,nbTargets,multiply,damage,event) => {
	if(Settings.getSetting("AoE Weapons Clean Toggles","Weapon Messages")){
		if(Settings.getSetting("AoE Weapons Clean Toggles","Debug Messages")){
			ChatLib.chat("&cRemoving " + weapon + " message for " + nbTargets + " target(s) and " + damage + " damage");
		}
		cancel(event);
	}
}).setCriteria("Your ${weapon} hit ${nbTargets} enem${multiply} for ${damage} damage.")
