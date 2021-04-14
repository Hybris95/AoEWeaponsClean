const { Setting, SettingsObject } = require("SettingsManager/SettingsManager.js")
const Settings = new SettingsObject("AoEWeaponsClean", [
    {
        name:"Weapons Clean Toggles",
        settings: [
            new Setting.Toggle("AoE Messages", false),
			new Setting.Toggle("Warp Messages", false)
        ]
    },
	{
		name:"Weapons Clean Developer",
		settings: [
			new Setting.Toggle("Debug Messages", false)
		]
	}
]).setCommand("wclean").setSize(Renderer.screen.getWidth()/2, Renderer.screen.getHeight()/2);
Setting.register(Settings);

register("chat", (weapon,nbTargets,multiply,damage,event) => {
	if(Settings.getSetting("Weapons Clean Toggles","AoE Messages")){
		if(Settings.getSetting("Weapons Clean Developer","Debug Messages")){
			ChatLib.chat("&cRemoving " + weapon + " message for " + nbTargets + " target(s) and " + damage + " damage");
		}
		cancel(event);
	}
}).setCriteria("Your ${weapon} hit ${nbTargets} enem${multiply} for ${damage} damage.")

register("chat", (event) => {
	if(Settings.getSetting("Weapons Clean Toggles","Warp Messages")){
		if(Settings.getSetting("Weapons Clean Developer","Debug Messages")){
			ChatLib.chat("&cRemoving warp message");
		}
		cancel(event);
	}
}).setCriteria("There are blocks in the way!")
