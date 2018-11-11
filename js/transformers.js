//Factory function - declares a transformer character
const Transformer = (name, title, type1, type2, type3, sword, wrench, shield, star, allegiance, mode, wave, cardno, rarity) => {
  return { 
    name: name,
    title: title,
	type1: type1, //Leader, Specialist etc.
	type2: type2, //Car, Truck, Plane, Tank, Insecticon, Dinobot, empty etc.
	type3: type3, //Ranged, Melee etc.
	sword: sword, //Attack #
	wrench: wrench, //Health #
	shield: shield, //Defense #
	star: star, //Star cost
	allegiance: allegiance, //Autobot, Decepticon
	mode: mode, //Bot, Alt
	wave: wave, //Wave 1, Wave 1S
	cardno: cardno, //T##
	rarity: rarity, //Common, Uncommon, Rare
  }
};
//const naming convention (No spaces, end with w1)
const arceew1 = Transformer('Arcee', 'Skilled Fighter', '1none', '2none', 'Specialist', 1, 9, 1, 5, 'Autobot', 'Alt', '1', 'T01', 'Rare');
const cosmosw1 = Transformer('Autobot Cosmos', 'Recon & Communication', '1none', '2none', 'Specialist', 2, 21, 1, 11, 'Autobot', 'Alt', '1', 'T02', 'Rare');  
const houndw1 = Transformer('Autobot Hound', 'Long Range Scout', '1none', '2none', 'Melee', 4, 12, 2, 8, 'Autobot', 'Alt', '1', 'T03', 'Common');
const jazzw1 = Transformer('Autobot Jazz', 'Special Ops', 'Leader', '2none', 'Melee', 3, 10, 0, 6, 'Autobot', 'Alt', '1', 'T04', 'Uncommon');
const miragew1 = Transformer('Autobot Mirage', 'Lone Wolf', '1none', '2none', 'Ranged', 5, 12, 2, 9, 'Autobot', 'Alt', '1', 'T05', 'Uncommon');      
const barragew1 = Transformer('Barrage', 'Merciless Insecticon', '1none', 'Insecticon', 'Ranged', 5, 11, 1, 7, 'Insecticon', 'Alt', '1', 'T06', 'Common');
const bombshellw1 = Transformer('Bombshell', 'Insecticon Mind-Controller', '1none', 'Insecticon', 'Bombshell', 5, 10, 2, 8, 'Insecticon', 'Alt', '1', 'T07', 'Common');    
const bumblebeecomw1 = Transformer('Bumblebee', 'Courageous Scout', '1none', '2none', 'Specialist', 6, 10, 2, 9, 'Autobot', 'Alt', '1', 'T08', 'Common');  
const bumblebeeSt = Transformer('Bumblebee', 'Brave Warrior', 'Leader', '2none', 'Melee', 4, 9, 2, 6, 'Autobot', 'Alt', '1', 'ST01', 'Rare');
const bumblebeesurarw1 = Transformer('Bumblebee', 'Legendary Warrior', 'Leader', '2none', 'Melee', 5, 15, 1, 10, 'Autobot', 'Alt', '1', 'T09', 'Super Rare');
const chopshopw1 = Transformer('Chop Shop', 'Sneaky Insecticon', '1none', 'Insecticon', 'Melee', 4, 9, 1, 6, 'Insecticon', 'Alt', '1', 'T10', 'Uncommon');  
const chromiaw1 = Transformer('Chromia', 'Special Ops', 'Leader', '2none', 'Specialist', 4, 11, 0, 8, 'Autobot', 'Alt', '1', 'T11', 'Rare');
const cliffjumperp1 = Transformer('Cliff Jumper', 'Renegade Warrior', '1none', '2none', 'Ranged', 5, 12, 2, 11, 'Autobot', 'Alt', '1', 'P01', 'Super Rare');
const darkmountw1 = Transformer('Darkmount', 'Cruel Overlord', '1none', '2none', 'Melee', 5, 9, 3, 9, 'Decepticon', 'Alt', '1', 'T12', 'Rare');
const deadlockw1 = Transformer('Deadlock', 'Bounty Hunter', '1none', '2none', 'Ranged', 5, 11, 1, 8, 'Decepticon', 'Alt', '1', 'T13', 'Uncommon');        
const shockwavew1 = Transformer('Decepticon Shockwave', 'Cybertron Commander', 'Leader', '2none', 'Specialist', 4, 11, 3, 11, 'Decepticon', 'Alt', '1', 'T14', 'Rare');
const demolisherw1 = Transformer('Demolisher', 'Devoted Decepticon', '1none', '2none', 'Melee', 0, 7, 4, 6, 'Decepticon', 'Alt', '1', 'T15', 'Uncommon');    	
const sludgew1 = Transformer('Dinobot Sludge', 'Mighty Stomper', '1none', 'Dinobot', 'Specialist', 5, 12, 2, 8, 'Dinobot', 'Alt', '1', 'T16', 'Uncommon');  
const slugw1 = Transformer('Dinobot Slug', 'Hot-Headed Warrior', '1none', 'Dinobot', 'Melee', 6, 13, 0, 9, 'Dinobot', 'Alt', '1', 'T17', 'Common');
const snarlw1 = Transformer('Dinobot Snarl', 'Desert Warrior', '1none', 'Dinobot', 'Melee', 5, 9, 2, 7, 'Dinobot', 'Alt', '1', 'T18', 'Uncommon');    
const swoopw1 = Transformer('Dinobot Swoop', 'Fearsome Flyer', '1none', 'Dinobot', 'Specialist', 5, 10, 0, 6, 'Dinobot', 'Alt', '1', 'T19', 'Common');
const flamewarw1 = Transformer('Flamewar', 'Veteran Decepticon', '1none', '2none', 'Specialist', 3, 10, 1, 5, 'Decepticon', 'Alt', '1', 'T20', 'Common');
const grimlockw1 = Transformer('Grimlock', 'Dinobot Leader', 'Leader', 'Dinobot', 'Melee', 6, 12, 2, 10, 'Dinobot', 'Alt', '1', 'T21', 'Uncommon');
const infernow1 = Transformer('Inferno', 'Fearless Firefighter', '1none', '2none', 'Ranged', 8, 11, 3, 12, 'Autobot', 'Alt', '1', 'T22', 'Common');
const skrapnelw1 = Transformer('Insecticon Skrapnel', 'Insecticon Leader', 'Leader', 'Insecticon', 'Melee', 5, 7, 0, 7, 'Insecticon', 'Alt', '1', 'T23', 'Rare');
const ironhideSt = Transformer('Ironhide', 'Veteran Autobot', '1none', '2none', 'ranged', 4, 7, 2, 6, 'Autobot', 'Alt', '1', 'ST02', 'Rare');
const jetfirew1 = Transformer('Jetfire', 'Air Guardian', '1none', '2none', 'Ranged', 4, 15, 1, 10, 'Autobot', 'Alt', '1', 'T24', 'Uncommon');
const kickbackw1 = Transformer('Kickback', 'Cunning Insecticon', '1none', 'Insecticon', 'Melee', 0, 9, 1, 5, 'Insecticon', 'Alt', '1', 'T25', 'Uncommon');
const megatroncomw1 = Transformer('Megatron', 'Decepticon Leader', 'Leader', '2none', 'Ranged', 4, 12, 2, 10, 'Decepticon', 'Alt', '1', 'T26', 'Common');
const megatronrarw1 = Transformer('Megatron', 'Living Weapon', 'Leader', '2none', 'Ranged', 7, 14, 2, 13, 'Decepticon', 'Alt', '1', 'T27', 'Rare');
const nemesisprimew1 = Transformer('Nemesis Prime', 'Dark Clone', '1none', '2none', 'Melee', 7, 16, 2, 12, 'Decepticon', 'Alt', '1', 'T28', 'Super Rare');
const optimusprimerarw1 = Transformer('Optimus Prime', 'Battlefield Legend', 'Leader', '2none', 'Ranged', 8, 14, 2, 13, 'Autobot', 'Alt', '1', 'T29', 'Rare');
const optimusprimecomw1 = Transformer('Optimus Prime', 'Freedom Fighter', 'Leader', '2none', 'Melee', 5, 15, 2, 12, 'Autobot', 'Alt', '1', 'T30', 'Rare');
const optimusprimeSt = Transformer('Optimus Prime', 'Autobot Leader', 'Leader', '2none', 'Ranged', 3, 10, 2, 7, 'Autobot', 'Alt', '1S', 'ST03', 'Rare');
const prowlw1 = Transformer('Prowl', 'Military Strategist', '1none', '2none', 'Ranged', 4, 9, 2, 6, 'Autobot', 'Alt', '1', 'T31', 'Uncommon');
const ramjetw1 = Transformer('Ramjet', 'Sky Smasher', '1none', '2none', 'Ranged', 4, 14, 2, 10, 'Decepticon', 'Alt', '1', 'T32', 'Common');
const ransackw1 = Transformer('Ransack', 'Insecticon Commando', '1none', 'Insecticon', 'Ranged', 0, 8, 3, 7, 'Insecticon', 'Alt', '1', 'T33', 'Uncommon');
const redalertSt = Transformer('Red Alert', 'Security Chief', '1none', '2none', 'Ranged', 3, 10, 2, 6, 'Autobot', 'Alt', '1S', 'ST04', 'Rare');
const sergeantkupw1 = Transformer('Sergeant Kup', 'Veteran Sergeant', '1none', '2none', 'Ranged', 5, 8, 1, 7, 'Autobot', 'Alt', '1', 'T34', 'Common');
const skywarpw1 = Transformer('Skywarp', 'Sneaky Prankster', '1none', '2none', 'Ranged', 4, 8, 2, 6, 'Decepticon', 'Alt', '1S', 'T35', 'Uncommon');
const slipstreamp1 = Transformer('Slipstream', 'Strategic Seeker', '1none', '2none', 'Ranged', 3, 13, 1, 8, 'Decepticon', 'Alt', '1', 'P02', 'Super Rare');
const starscreamcomw1 = Transformer('Starscream', 'Scheming Second-In-Command', 'Leader', '2none', 'Ranged', 5, 14, 1, 10, 'Decepticon', 'Alt', '1', 'T36', 'Common');
const starscreamuncw1 = Transformer('Starscream', 'Air Commander', 'Leader', '2none', 'Ranged', 4, 13, 2, 11, 'Decepticon', 'Alt', '1', 'T37', 'Uncommon');
const sunstormw1 = Transformer('Sunstorm', 'Fusion Flyer', '1none', '2none', 'Ranged', 0, 14, 1, 11, 'Decepticon', 'Alt', '1', 'T38', 'Rare');
const thundercrackerw1 = Transformer('Thundercracker', 'Mach Warrior', '1none', '2none', 'Ranged', 5, 12, 1, 8, 'Decepticon', 'Alt', '1', 'T39', 'Uncommon');
const wheeljackw1 = Transformer('Wheeljack', 'Weapons Inventor', '1none', '2none', 'Melee', 5, 13, 1, 9, 'Autobot', 'Alt', '1', 'T40', 'Uncommon');

const mappedTransformers = {
		arceew1: arceew1,
		cosmosw1: cosmosw1,
		houndw1: houndw1,
		jazzw1: jazzw1,
		miragew1: miragew1,
		barragew1: barragew1,
		bombshellw1: bombshellw1,
		bumblebeecomw1: bumblebeecomw1,
		bumblebeeSt: bumblebeeSt,
		bumblebeesurarw1: bumblebeesurarw1,
		chopshopw1: chopshopw1,
		chromiaw1: chromiaw1,
		cliffjumperp1: cliffjumperp1,
		darkmountw1: darkmountw1,
		deadlockw1: deadlockw1,
		shockwavew1: shockwavew1,
		demolisherw1: demolisherw1,
		sludgew1: sludgew1,
		slugw1: slugw1,
		snarlw1: snarlw1,
		swoopw1: swoopw1,
		flamewarw1: flamewarw1,
		grimlockw1: grimlockw1,
		infernow1: infernow1,
		skrapnelw1: skrapnelw1,
		ironhideSt: ironhideSt,
		jetfirew1: jetfirew1,
		kickbackw1: kickbackw1,
		megatroncomw1: megatroncomw1,
		megatronrarew1: megatronrarew1,
		nemesisprimew1: nemesisprimew1,
		optimusprimerarw1: optimusprimerarw1,
		optimusprimecomw1: optimusprimecomw1,
		optimusprimeSt: optimusprimeSt,
		prowlw1: prowlw1,
		ramjetw1: ramjetw1,
		ransackw1: ransackw1,
		redalertSt: redalertSt,
		sergeantkupw1: sergeantkupw1,
		skywarpw1: skywarpw1,
		slipstreamp1: slipstreamp1,
		starscreamcomw1: starscreamcomw1,
		starscreamuncw1: starscreamuncw1,
		sunstormw1: sunstormw1,
		thundercrackerw1: thundercrackerw1,
		wheeljackw1: wheeljackw1,
};

/* DONE 1. Make const for all characters
/* DONE 2. Create option for all characters
/* DONE 3. Code a function for option select that prints the wrench value below the corresponding select box
/* DONE 4. Create a button for damage that appears for each option that is selected within a select form 
/* DONE 5. Create a button for heal that appears for each option that is selected within a select form
/* DONE 6. Create an onclick function for damage that subtracts 1 from the corresponding wrench number
/* DONE 7. Create an onclick function for heal that adds 1 to the corresponding wrench number
/* 8. Write if/else logic for the printed wrench value that states if wrench value = 0 , turn num text color to grey
*/