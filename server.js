var express = require('express');
var http = require('http');
var cors = require('cors');
var app = express();
var fs = require('fs');
var fabric = require('fabric').fabric;
var bodyparser = require('body-parser');
var azure = require('azure-storage');
var blobSvc = azure.createBlobService("miicarpeta", "mUC924FNhbPHT69+l8wYhDw9chT5ZE7AS9UOWfOLVhF8MR9Oxp1oD+c6lNoyRLMvZAB5M8lfuAyDtqJWSRuLwg==","https://miicarpeta.blob.core.windows.net/");

app.use(cors());
app.use(bodyparser.json({limit: '10mb'}));

app.get('/', function (req, res) {
  res.send('Hello from miic webservice!\n');
});

app.post('/processData',function(req,res,next){
	
	var content = '';
    var data = '';

    var scalefactor = 2.8445454545454547;

    var width = 1100;
    var height = 716;

    console.log(req.body.scalefactor);
    console.log(req.body.width);
    console.log(req.body.height);

    if(req.body.scalefactor)
    	scalefactor = req.body.scalefactor;

    if(req.body.width)
    	width = parseFloat(req.body.width);

    if(req.body.height)
    	height = parseFloat(req.body.height);
	
	var canvas = fabric.createCanvasForNode(width, height);
	
	var AbrilFatfacefont = new canvas.Font('Abril Fatface', 'fonts/Abril_Fatface/AbrilFatface-Regular.ttf');canvas.contextContainer.addFont(AbrilFatfacefont);canvas.contextTop.addFont(AbrilFatfacefont);
	var AlegreyaSCfont = new canvas.Font('Alegreya SC', 'fonts/Alegreya_SC/AlegreyaSC-Regular.ttf');canvas.contextContainer.addFont(AlegreyaSCfont);canvas.contextTop.addFont(AlegreyaSCfont);
	var AlfaSlabOnefont = new canvas.Font('Alfa Slab One', 'fonts/Alfa_Slab_One/AlfaSlabOne-Regular.ttf');canvas.contextContainer.addFont(AlfaSlabOnefont);canvas.contextTop.addFont(AlfaSlabOnefont);
	var Alikefont = new canvas.Font('Alike', 'fonts/Alike/Alike-Regular.ttf');canvas.contextContainer.addFont(Alikefont);canvas.contextTop.addFont(Alikefont);
	var AllertaStencilfont = new canvas.Font('Allerta Stencil', 'fonts/Allerta_Stencil/AllertaStencil-Regular.ttf');canvas.contextContainer.addFont(AllertaStencilfont);canvas.contextTop.addFont(AllertaStencilfont);
	var Allurafont = new canvas.Font('Allura', 'fonts/Allura/Allura-Regular.ttf');canvas.contextContainer.addFont(Allurafont);canvas.contextTop.addFont(Allurafont);
	var Amaranthfont = new canvas.Font('Amaranth', 'fonts/Amaranth/Amaranth-Regular.ttf');canvas.contextContainer.addFont(Amaranthfont);canvas.contextTop.addFont(Amaranthfont);
	var AmaticSCfont = new canvas.Font('Amatic SC', 'fonts/Amatic_SC/AmaticSC-Regular.ttf');canvas.contextContainer.addFont(AmaticSCfont);canvas.contextTop.addFont(AmaticSCfont);
	var AnonymousProfont = new canvas.Font('Anonymous Pro', 'fonts/Anonymous_Pro/AnonymousPro-Regular.ttf');canvas.contextContainer.addFont(AnonymousProfont);canvas.contextTop.addFont(AnonymousProfont);
	var Anticfont = new canvas.Font('Antic', 'fonts/Antic/Antic-Regular.ttf');canvas.contextContainer.addFont(Anticfont);canvas.contextTop.addFont(Anticfont);
	var Antonfont = new canvas.Font('Anton', 'fonts/Anton/Anton-Regular.ttf');canvas.contextContainer.addFont(Antonfont);canvas.contextTop.addFont(Antonfont);
	var Anuratifont = new canvas.Font('Anurati', 'fonts/Anurati/Anurati-Regular.otf');canvas.contextContainer.addFont(Anuratifont);canvas.contextTop.addFont(Anuratifont);
	var ArchitectsDaughterfont = new canvas.Font('Architects Daughter', 'fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf');canvas.contextContainer.addFont(ArchitectsDaughterfont);canvas.contextTop.addFont(ArchitectsDaughterfont);
	var ArchivoBlackfont = new canvas.Font('Archivo Black', 'fonts/Archivo_Black/ArchivoBlack-Regular.ttf');canvas.contextContainer.addFont(ArchivoBlackfont);canvas.contextTop.addFont(ArchivoBlackfont);
	var ArchivoNarrowfont = new canvas.Font('Archivo Narrow', 'fonts/Archivo_Narrow/ArchivoNarrow-Regular.ttf');canvas.contextContainer.addFont(ArchivoNarrowfont);canvas.contextTop.addFont(ArchivoNarrowfont);
	var Arialfont = new canvas.Font('Arial', 'fonts/Arial/Arial-Regular.ttf');canvas.contextContainer.addFont(Arialfont);canvas.contextTop.addFont(Arialfont);
	var Arimofont = new canvas.Font('Arimo', 'fonts/Arimo/Arimo-Regular.ttf');canvas.contextContainer.addFont(Arimofont);canvas.contextTop.addFont(Arimofont);
	var Arvofont = new canvas.Font('Arvo', 'fonts/Arvo/Arvo-Regular.ttf');canvas.contextContainer.addFont(Arvofont);canvas.contextTop.addFont(Arvofont);
	var BerkshireSwashfont = new canvas.Font('Berkshire Swash', 'fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf');canvas.contextContainer.addFont(BerkshireSwashfont);canvas.contextTop.addFont(BerkshireSwashfont);
	var BlackOpsOnefont = new canvas.Font('Black Ops One', 'fonts/Black_Ops_One/BlackOpsOne-Regular.ttf');canvas.contextContainer.addFont(BlackOpsOnefont);canvas.contextTop.addFont(BlackOpsOnefont);
	var CabinSketchfont = new canvas.Font('Cabin Sketch', 'fonts/Cabin_Sketch/CabinSketch-Regular.ttf');canvas.contextContainer.addFont(CabinSketchfont);canvas.contextTop.addFont(CabinSketchfont);
	var CantoraOnefont = new canvas.Font('Cantora One', 'fonts/Cantora_One/CantoraOne-Regular.ttf');canvas.contextContainer.addFont(CantoraOnefont);canvas.contextTop.addFont(CantoraOnefont);
	var CarterOnefont = new canvas.Font('Carter One', 'fonts/Carter_One/CarterOne-Regular.ttf');canvas.contextContainer.addFont(CarterOnefont);canvas.contextTop.addFont(CarterOnefont);
	var Chewyfont = new canvas.Font('Chewy', 'fonts/Chewy/Chewy-Regular.ttf');canvas.contextContainer.addFont(Chewyfont);canvas.contextTop.addFont(Chewyfont);
	var Cinzelfont = new canvas.Font('Cinzel', 'fonts/Cinzel/Cinzel-Regular.ttf');canvas.contextContainer.addFont(Cinzelfont);canvas.contextTop.addFont(Cinzelfont);
	var ClickerScriptfont = new canvas.Font('Clicker Script', 'fonts/Clicker_Script/ClickerScript-Regular.ttf');canvas.contextContainer.addFont(ClickerScriptfont);canvas.contextTop.addFont(ClickerScriptfont);
	var ComicSansMSfont = new canvas.Font('Comic Sans MS', 'fonts/Comic_Sans_MS/ComicSansMS-Regular.ttf');canvas.contextContainer.addFont(ComicSansMSfont);canvas.contextTop.addFont(ComicSansMSfont);
	var SourceCodeProfont = new canvas.Font('Source Code Pro', 'fonts/Source_Code_Pro/SourceCodePro-Regular.ttf');canvas.contextContainer.addFont(SourceCodeProfont);canvas.contextTop.addFont(SourceCodeProfont);
	var Codystarfont = new canvas.Font('Codystar', 'fonts/Codystar/Codystar-Regular.ttf');canvas.contextContainer.addFont(Codystarfont);canvas.contextTop.addFont(Codystarfont);
	var ComingSoonfont = new canvas.Font('Coming Soon', 'fonts/Coming_Soon/ComingSoon-Regular.ttf');canvas.contextContainer.addFont(ComingSoonfont);canvas.contextTop.addFont(ComingSoonfont);
	var Courgettefont = new canvas.Font('Courgette', 'fonts/Courgette/Courgette-Regular.ttf');canvas.contextContainer.addFont(Courgettefont);canvas.contextTop.addFont(Courgettefont);
	var CourierNewfont = new canvas.Font('Courier New', 'fonts/Courier_New/CourierNew-Regular.ttf');canvas.contextContainer.addFont(CourierNewfont);canvas.contextTop.addFont(CourierNewfont);
	var Coustardfont = new canvas.Font('Coustard', 'fonts/Coustard/Coustard-Regular.ttf');canvas.contextContainer.addFont(Coustardfont);canvas.contextTop.addFont(Coustardfont);
	var CraftyGirlsfont = new canvas.Font('Crafty Girls', 'fonts/Crafty_Girls/CraftyGirls-Regular.ttf');canvas.contextContainer.addFont(CraftyGirlsfont);canvas.contextTop.addFont(CraftyGirlsfont);
	var Creepsterfont = new canvas.Font('Creepster', 'fonts/Creepster/Creepster-Regular.ttf');canvas.contextContainer.addFont(Creepsterfont);canvas.contextTop.addFont(Creepsterfont);
	var Crushedfont = new canvas.Font('Crushed', 'fonts/Crushed/Crushed-Regular.ttf');canvas.contextContainer.addFont(Crushedfont);canvas.contextTop.addFont(Crushedfont);
	var DiplomataSCfont = new canvas.Font('Diplomata SC', 'fonts/Diplomata_SC/DiplomataSC-Regular.ttf');canvas.contextContainer.addFont(DiplomataSCfont);canvas.contextTop.addFont(DiplomataSCfont);
	var DrSugiyamafont = new canvas.Font('Dr Sugiyama', 'fonts/Dr_Sugiyama/DrSugiyama-Regular.ttf');canvas.contextContainer.addFont(DrSugiyamafont);canvas.contextTop.addFont(DrSugiyamafont);
	var DroidSeriffont = new canvas.Font('Droid Serif', 'fonts/Droid_Serif/DroidSerif-Regular.ttf');canvas.contextContainer.addFont(DroidSeriffont);canvas.contextTop.addFont(DroidSeriffont);
	var Economicafont = new canvas.Font('Economica', 'fonts/Economica/Economica-Regular.ttf');canvas.contextContainer.addFont(Economicafont);canvas.contextTop.addFont(Economicafont);
	var EmilysCandyfont = new canvas.Font('Emilys Candy', 'fonts/Emilys_Candy/EmilysCandy-Regular.ttf');canvas.contextContainer.addFont(EmilysCandyfont);canvas.contextTop.addFont(EmilysCandyfont);
	var Engagementfont = new canvas.Font('Engagement', 'fonts/Engagement/Engagement-Regular.ttf');canvas.contextContainer.addFont(Engagementfont);canvas.contextTop.addFont(Engagementfont);
	var EuphoriaScriptfont = new canvas.Font('Euphoria Script', 'fonts/Euphoria_Script/EuphoriaScript-Regular.ttf');canvas.contextContainer.addFont(EuphoriaScriptfont);canvas.contextTop.addFont(EuphoriaScriptfont);
	var Exofont = new canvas.Font('Exo', 'fonts/Exo/Exo-Regular.ttf');canvas.contextContainer.addFont(Exofont);canvas.contextTop.addFont(Exofont);
	var Forumfont = new canvas.Font('Forum', 'fonts/Forum/Forum-Regular.ttf');canvas.contextContainer.addFont(Forumfont);canvas.contextTop.addFont(Forumfont);
	var FredokaOnefont = new canvas.Font('Fredoka One', 'fonts/Fredoka_One/FredokaOne-Regular.ttf');canvas.contextContainer.addFont(FredokaOnefont);canvas.contextTop.addFont(FredokaOnefont);
	var Georgiafont = new canvas.Font('Georgia', 'fonts/Georgia/Georgia-Regular.ttf');canvas.contextContainer.addFont(Georgiafont);canvas.contextTop.addFont(Georgiafont);
	var GermaniaOnefont = new canvas.Font('Germania One', 'fonts/Germania_One/GermaniaOne-Regular.ttf');canvas.contextContainer.addFont(GermaniaOnefont);canvas.contextTop.addFont(GermaniaOnefont);
	var GlassAntiquafont = new canvas.Font('Glass Antiqua', 'fonts/Glass_Antiqua/GlassAntiqua-Regular.ttf');canvas.contextContainer.addFont(GlassAntiquafont);canvas.contextTop.addFont(GlassAntiquafont);
	var Glegoofont = new canvas.Font('Glegoo', 'fonts/Glegoo/Glegoo-Regular.ttf');canvas.contextContainer.addFont(Glegoofont);canvas.contextTop.addFont(Glegoofont);
	var GochiHandfont = new canvas.Font('Gochi Hand', 'fonts/Gochi_Hand/GochiHand-Regular.ttf');canvas.contextContainer.addFont(GochiHandfont);canvas.contextTop.addFont(GochiHandfont);
	var Graduatefont = new canvas.Font('Graduate', 'fonts/Graduate/Graduate-Regular.ttf');canvas.contextContainer.addFont(Graduatefont);canvas.contextTop.addFont(Graduatefont);
	var GrandHotelfont = new canvas.Font('Grand Hotel', 'fonts/Grand_Hotel/GrandHotel-Regular.ttf');canvas.contextContainer.addFont(GrandHotelfont);canvas.contextTop.addFont(GrandHotelfont);
	var GreatVibesfont = new canvas.Font('Great Vibes', 'fonts/Great_Vibes/GreatVibes-Regular.ttf');canvas.contextContainer.addFont(GreatVibesfont);canvas.contextTop.addFont(GreatVibesfont);
	var Gruppofont = new canvas.Font('Gruppo', 'fonts/Gruppo/Gruppo-Regular.ttf');canvas.contextContainer.addFont(Gruppofont);canvas.contextTop.addFont(Gruppofont);
	var HammersmithOnefont = new canvas.Font('Hammersmith One', 'fonts/Hammersmith_One/HammersmithOne-Regular.ttf');canvas.contextContainer.addFont(HammersmithOnefont);canvas.contextTop.addFont(HammersmithOnefont);
	var IMFellEnglishSCfont = new canvas.Font('IM Fell English SC', 'fonts/IM_Fell_English_SC/IMFellEnglishSC-Regular.ttf');canvas.contextContainer.addFont(IMFellEnglishSCfont);canvas.contextTop.addFont(IMFellEnglishSCfont);
	var JosefinSansfont = new canvas.Font('Josefin Sans', 'fonts/Josefin_Sans/JosefinSans-Regular.ttf');canvas.contextContainer.addFont(JosefinSansfont);canvas.contextTop.addFont(JosefinSansfont);
	var JosefinSlabfont = new canvas.Font('Josefin Slab', 'fonts/Josefin_Slab/JosefinSlab-Regular.ttf');canvas.contextContainer.addFont(JosefinSlabfont);canvas.contextTop.addFont(JosefinSlabfont);
	var JuliusSansOnefont = new canvas.Font('Julius Sans One', 'fonts/Julius_Sans_One/JuliusSansOne-Regular.ttf');canvas.contextContainer.addFont(JuliusSansOnefont);canvas.contextTop.addFont(JuliusSansOnefont);
	var KaushanScriptfont = new canvas.Font('Kaushan Script', 'fonts/Kaushan_Script/KaushanScript-Regular.ttf');canvas.contextContainer.addFont(KaushanScriptfont);canvas.contextTop.addFont(KaushanScriptfont);
	var KiteOnefont = new canvas.Font('Kite One', 'fonts/Kite_One/KiteOne-Regular.ttf');canvas.contextContainer.addFont(KiteOnefont);canvas.contextTop.addFont(KiteOnefont);
	var Knewavefont = new canvas.Font('Knewave', 'fonts/Knewave/Knewave-Regular.ttf');canvas.contextContainer.addFont(Knewavefont);canvas.contextTop.addFont(Knewavefont);
	var Latofont = new canvas.Font('Lato', 'fonts/Lato/Lato-Regular.ttf');canvas.contextContainer.addFont(Latofont);canvas.contextTop.addFont(Latofont);
	var LibreBaskervillefont = new canvas.Font('Libre Baskerville', 'fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf');canvas.contextContainer.addFont(LibreBaskervillefont);canvas.contextTop.addFont(LibreBaskervillefont);
	var LilitaOnefont = new canvas.Font('Lilita One', 'fonts/Lilita_One/LilitaOne-Regular.ttf');canvas.contextContainer.addFont(LilitaOnefont);canvas.contextTop.addFont(LilitaOnefont);
	var Limelightfont = new canvas.Font('Limelight', 'fonts/Limelight/Limelight-Regular.ttf');canvas.contextContainer.addFont(Limelightfont);canvas.contextTop.addFont(Limelightfont);
	var Lobsterfont = new canvas.Font('Lobster', 'fonts/Lobster/Lobster-Regular.ttf');canvas.contextContainer.addFont(Lobsterfont);canvas.contextTop.addFont(Lobsterfont);
	var LondrinaShadowfont = new canvas.Font('Londrina Shadow', 'fonts/Londrina_Shadow/LondrinaShadow-Regular.ttf');canvas.contextContainer.addFont(LondrinaShadowfont);canvas.contextTop.addFont(LondrinaShadowfont);
	var LondrinaSketchfont = new canvas.Font('Londrina Sketch', 'fonts/Londrina_Sketch/LondrinaSketch-Regular.ttf');canvas.contextContainer.addFont(LondrinaSketchfont);canvas.contextTop.addFont(LondrinaSketchfont);
	var Lorafont = new canvas.Font('Lora', 'fonts/Lora/Lora-Regular.ttf');canvas.contextContainer.addFont(Lorafont);canvas.contextTop.addFont(Lorafont);
	var Lustriafont = new canvas.Font('Lustria', 'fonts/Lustria/Lustria-Regular.ttf');canvas.contextContainer.addFont(Lustriafont);canvas.contextTop.addFont(Lustriafont);
	var Megrimfont = new canvas.Font('Megrim', 'fonts/Megrim/Megrim-Regular.ttf');canvas.contextContainer.addFont(Megrimfont);canvas.contextTop.addFont(Megrimfont);
	var Merriweatherfont = new canvas.Font('Merriweather', 'fonts/Merriweather/Merriweather-Regular.ttf');canvas.contextContainer.addFont(Merriweatherfont);canvas.contextTop.addFont(Merriweatherfont);
	var Montserratfont = new canvas.Font('Montserrat', 'fonts/Montserrat/Montserrat-Regular.ttf');canvas.contextContainer.addFont(Montserratfont);canvas.contextTop.addFont(Montserratfont);
	var MrDafoefont = new canvas.Font('Mr Dafoe', 'fonts/Mr_Dafoe/MrDafoe-Regular.ttf');canvas.contextContainer.addFont(MrDafoefont);canvas.contextTop.addFont(MrDafoefont);
	var Niconnefont = new canvas.Font('Niconne', 'fonts/Niconne/Niconne-Regular.ttf');canvas.contextContainer.addFont(Niconnefont);canvas.contextTop.addFont(Niconnefont);
	var NixieOnefont = new canvas.Font('Nixie One', 'fonts/Nixie_One/NixieOne-Regular.ttf');canvas.contextContainer.addFont(NixieOnefont);canvas.contextTop.addFont(NixieOnefont);
	var NotoSansfont = new canvas.Font('Noto Sans', 'fonts/Noto_Sans/NotoSans-Regular.ttf');canvas.contextContainer.addFont(NotoSansfont);canvas.contextTop.addFont(NotoSansfont);
	var OldStandardTTfont = new canvas.Font('Old Standard TT', 'fonts/Old_Standard_TT/OldStandardTT-Regular.ttf');canvas.contextContainer.addFont(OldStandardTTfont);canvas.contextTop.addFont(OldStandardTTfont);
	var OleoScriptfont = new canvas.Font('Oleo Script', 'fonts/Oleo_Script/OleoScript-Regular.ttf');canvas.contextContainer.addFont(OleoScriptfont);canvas.contextTop.addFont(OleoScriptfont);
	var OpenSansfont = new canvas.Font('Open Sans', 'fonts/Open_Sans/OpenSans-Regular.ttf');canvas.contextContainer.addFont(OpenSansfont);canvas.contextTop.addFont(OpenSansfont);
	var Oreganofont = new canvas.Font('Oregano', 'fonts/Oregano/Oregano-Regular.ttf');canvas.contextContainer.addFont(Oreganofont);canvas.contextTop.addFont(Oreganofont);
	var OvertheRainbowfont = new canvas.Font('Over the Rainbow', 'fonts/Over_the_Rainbow/OvertheRainbow-Regular.ttf');canvas.contextContainer.addFont(OvertheRainbowfont);canvas.contextTop.addFont(OvertheRainbowfont);
	var Pacificofont = new canvas.Font('Pacifico', 'fonts/Pacifico/Pacifico-Regular.ttf');canvas.contextContainer.addFont(Pacificofont);canvas.contextTop.addFont(Pacificofont);
	var Parisiennefont = new canvas.Font('Parisienne', 'fonts/Parisienne/Parisienne-Regular.ttf');canvas.contextContainer.addFont(Parisiennefont);canvas.contextTop.addFont(Parisiennefont);
	var PermanentMarkerfont = new canvas.Font('Permanent Marker', 'fonts/Permanent_Marker/PermanentMarker-Regular.ttf');canvas.contextContainer.addFont(PermanentMarkerfont);canvas.contextTop.addFont(PermanentMarkerfont);
	var PinyonScriptfont = new canvas.Font('Pinyon Script', 'fonts/Pinyon_Script/PinyonScript-Regular.ttf');canvas.contextContainer.addFont(PinyonScriptfont);canvas.contextTop.addFont(PinyonScriptfont);
	var PlayfairDisplayfont = new canvas.Font('Playfair Display', 'fonts/Playfair_Display/PlayfairDisplay-Regular.ttf');canvas.contextContainer.addFont(PlayfairDisplayfont);canvas.contextTop.addFont(PlayfairDisplayfont);
	var PlayfairDisplaySCfont = new canvas.Font('Playfair Display SC', 'fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf');canvas.contextContainer.addFont(PlayfairDisplaySCfont);canvas.contextTop.addFont(PlayfairDisplaySCfont);
	var Pratafont = new canvas.Font('Prata', 'fonts/Prata/Prata-Regular.ttf');canvas.contextContainer.addFont(Pratafont);canvas.contextTop.addFont(Pratafont);
	var PrincessSofiafont = new canvas.Font('Princess Sofia', 'fonts/Princess_Sofia/PrincessSofia-Regular.ttf');canvas.contextContainer.addFont(PrincessSofiafont);canvas.contextTop.addFont(PrincessSofiafont);
	var PTSansfont = new canvas.Font('PT Sans', 'fonts/PT_Sans/PTSans-Regular.ttf');canvas.contextContainer.addFont(PTSansfont);canvas.contextTop.addFont(PTSansfont);
	var PTSeriffont = new canvas.Font('PT Serif', 'fonts/PT_Serif/PTSerif-Regular.ttf');canvas.contextContainer.addFont(PTSeriffont);canvas.contextTop.addFont(PTSeriffont);
	var Quandofont = new canvas.Font('Quando', 'fonts/Quando/Quando-Regular.ttf');canvas.contextContainer.addFont(Quandofont);canvas.contextTop.addFont(Quandofont);
	var Quattrocentofont = new canvas.Font('Quattrocento', 'fonts/Quattrocento/Quattrocento-Regular.ttf');canvas.contextContainer.addFont(Quattrocentofont);canvas.contextTop.addFont(Quattrocentofont);
	var Quicksandfont = new canvas.Font('Quicksand', 'fonts/Quicksand/Quicksand-Regular.ttf');canvas.contextContainer.addFont(Quicksandfont);canvas.contextTop.addFont(Quicksandfont);
	var RacingSansOnefont = new canvas.Font('Racing Sans One', 'fonts/Racing_Sans_One/RacingSansOne-Regular.ttf');canvas.contextContainer.addFont(RacingSansOnefont);canvas.contextTop.addFont(RacingSansOnefont);
	var Ralewayfont = new canvas.Font('Raleway', 'fonts/Raleway/Raleway-Regular.ttf');canvas.contextContainer.addFont(Ralewayfont);canvas.contextTop.addFont(Ralewayfont);
	var Ribeyefont = new canvas.Font('Ribeye', 'fonts/Ribeye/Ribeye-Regular.ttf');canvas.contextContainer.addFont(Ribeyefont);canvas.contextTop.addFont(Ribeyefont);
	var Robotofont = new canvas.Font('Roboto', 'fonts/Roboto/Roboto-Regular.ttf');canvas.contextContainer.addFont(Robotofont);canvas.contextTop.addFont(Robotofont);
	var RobotoCondensedfont = new canvas.Font('Roboto Condensed', 'fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf');canvas.contextContainer.addFont(RobotoCondensedfont);canvas.contextTop.addFont(RobotoCondensedfont);
	var Rosariofont = new canvas.Font('Rosario', 'fonts/Rosario/Rosario-Regular.ttf');canvas.contextContainer.addFont(Rosariofont);canvas.contextTop.addFont(Rosariofont);
	var RubikOnefont = new canvas.Font('Rubik One', 'fonts/Rubik_One/RubikOne-Regular.ttf');canvas.contextContainer.addFont(RubikOnefont);canvas.contextTop.addFont(RubikOnefont);
	var RubikMonoOnefont = new canvas.Font('Rubik Mono One', 'fonts/Rubik_Mono_One/RubikMonoOne-Regular.ttf');canvas.contextContainer.addFont(RubikMonoOnefont);canvas.contextTop.addFont(RubikMonoOnefont);
	var Ryefont = new canvas.Font('Rye', 'fonts/Rye/Rye-Regular.ttf');canvas.contextContainer.addFont(Ryefont);canvas.contextTop.addFont(Ryefont);
	var Sacramentofont = new canvas.Font('Sacramento', 'fonts/Sacramento/Sacramento-Regular.ttf');canvas.contextContainer.addFont(Sacramentofont);canvas.contextTop.addFont(Sacramentofont);
	var Sanchezfont = new canvas.Font('Sanchez', 'fonts/Sanchez/Sanchez-Regular.ttf');canvas.contextContainer.addFont(Sanchezfont);canvas.contextTop.addFont(Sanchezfont);
	var Satisfyfont = new canvas.Font('Satisfy', 'fonts/Satisfy/Satisfy-Regular.ttf');canvas.contextContainer.addFont(Satisfyfont);canvas.contextTop.addFont(Satisfyfont);
	var Schoolbellfont = new canvas.Font('Schoolbell', 'fonts/Schoolbell/Schoolbell-Regular.ttf');canvas.contextContainer.addFont(Schoolbellfont);canvas.contextTop.addFont(Schoolbellfont);
	var ShadowsIntoLightfont = new canvas.Font('Shadows Into Light', 'fonts/Shadows_Into_Light/ShadowsIntoLight-Regular.ttf');canvas.contextContainer.addFont(ShadowsIntoLightfont);canvas.contextTop.addFont(ShadowsIntoLightfont);
	var Signikafont = new canvas.Font('Signika', 'fonts/Signika/Signika-Regular.ttf');canvas.contextContainer.addFont(Signikafont);canvas.contextTop.addFont(Signikafont);
	var SixCapsfont = new canvas.Font('Six Caps', 'fonts/Six_Caps/SixCaps-Regular.ttf');canvas.contextContainer.addFont(SixCapsfont);canvas.contextTop.addFont(SixCapsfont);
	var Snigletfont = new canvas.Font('Sniglet', 'fonts/Sniglet/Sniglet-Regular.ttf');canvas.contextContainer.addFont(Snigletfont);canvas.contextTop.addFont(Snigletfont);
	var SourceSansProfont = new canvas.Font('Source Sans Pro', 'fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf');canvas.contextContainer.addFont(SourceSansProfont);canvas.contextTop.addFont(SourceSansProfont);
	var SourceSerifProfont = new canvas.Font('Source Serif Pro', 'fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf');canvas.contextContainer.addFont(SourceSerifProfont);canvas.contextTop.addFont(SourceSerifProfont);
	var SpecialElitefont = new canvas.Font('Special Elite', 'fonts/Special_Elite/SpecialElite-Regular.ttf');canvas.contextContainer.addFont(SpecialElitefont);canvas.contextTop.addFont(SpecialElitefont);
	var TenorSansfont = new canvas.Font('Tenor Sans', 'fonts/Tenor_Sans/TenorSans-Regular.ttf');canvas.contextContainer.addFont(TenorSansfont);canvas.contextTop.addFont(TenorSansfont);
	var TextMeOnefont = new canvas.Font('Text Me One', 'fonts/Text_Me_One/TextMeOne-Regular.ttf');canvas.contextContainer.addFont(TextMeOnefont);canvas.contextTop.addFont(TextMeOnefont);
	var TimesNewRomanfont = new canvas.Font('Times New Roman', 'fonts/Times_New_Roman/TimesNewRoman-Regular.ttf');canvas.contextContainer.addFont(TimesNewRomanfont);canvas.contextTop.addFont(TimesNewRomanfont);
	var Trocchifont = new canvas.Font('Trocchi', 'fonts/Trocchi/Trocchi-Regular.ttf');canvas.contextContainer.addFont(Trocchifont);canvas.contextTop.addFont(Trocchifont);
	var Ubuntufont = new canvas.Font('Ubuntu', 'fonts/Ubuntu/Ubuntu-Regular.ttf');canvas.contextContainer.addFont(Ubuntufont);canvas.contextTop.addFont(Ubuntufont);
	var Ultrafont = new canvas.Font('Ultra', 'fonts/Ultra/Ultra-Regular.ttf');canvas.contextContainer.addFont(Ultrafont);canvas.contextTop.addFont(Ultrafont);
	var UnifrakturMaguntiafont = new canvas.Font('UnifrakturMaguntia', 'fonts/UnifrakturMaguntia/UnifrakturMaguntia-Regular.ttf');canvas.contextContainer.addFont(UnifrakturMaguntiafont);canvas.contextTop.addFont(UnifrakturMaguntiafont);
	var VampiroOnefont = new canvas.Font('Vampiro One', 'fonts/Vampiro_One/VampiroOne-Regular.ttf');canvas.contextContainer.addFont(VampiroOnefont);canvas.contextTop.addFont(VampiroOnefont);
	var VastShadowfont = new canvas.Font('Vast Shadow', 'fonts/Vast_Shadow/VastShadow-Regular.ttf');canvas.contextContainer.addFont(VastShadowfont);canvas.contextTop.addFont(VastShadowfont);
	var Verdanafont = new canvas.Font('Verdana', 'fonts/Verdana/Verdana-Regular.ttf');canvas.contextContainer.addFont(Verdanafont);canvas.contextTop.addFont(Verdanafont);
	var Vidalokafont = new canvas.Font('Vidaloka', 'fonts/Vidaloka/Vidaloka-Regular.ttf');canvas.contextContainer.addFont(Vidalokafont);canvas.contextTop.addFont(Vidalokafont);
	var Vollkornfont = new canvas.Font('Vollkorn', 'fonts/Vollkorn/Vollkorn-Regular.ttf');canvas.contextContainer.addFont(Vollkornfont);canvas.contextTop.addFont(Vollkornfont);
	var VT323font = new canvas.Font('VT323', 'fonts/VT323/VT323-Regular.ttf');canvas.contextContainer.addFont(VT323font);canvas.contextTop.addFont(VT323font);
	var Yellowtailfont = new canvas.Font('Yellowtail', 'fonts/Yellowtail/Yellowtail-Regular.ttf');canvas.contextContainer.addFont(Yellowtailfont);canvas.contextTop.addFont(Yellowtailfont);
	
	canvas.on('uncaughtException', function(err){
			console.log(err);
		});	
		
	canvas.loadFromJSON(req.body.image, function() {
		
			console.log(new Date().toString() + ": Order received --> " + req.body.orderid);
			
			console.log(new Date().toString() + ': canvas loaded!');
			canvas.renderAll();
			console.log(new Date().toString() + ': Canvas rendered!');
			
			var dataUrl = canvas.toDataURLWithMultiplier('png', parseFloat(scalefactor));
			var data2 = dataUrl.replace(/^data:image\/png;base64,/, '');
			console.log(new Date().toString() + ': Processing...!');
			fs.writeFile('miic_images/' + req.body.orderid + '.png', data2, 'base64', function(err) {
				if (err)
					console.log(new Date().toString() + ': Error saving PNG: ' + err);
				else{
					console.log(new Date().toString() + ': PNG file saved!');
						
						//Write blob to Azure1
						blobSvc.createBlockBlobFromLocalFile('miicarpetacontainer', req.body.orderid, 'miic_images/' + req.body.orderid + '.png', function(error, result, response){
						  if(!error){
							console.log(new Date().toString() + ': File uploaded to Azure!');
							
							fs.unlink('miic_images/' + req.body.orderid + '.png');
							
							console.log(new Date().toString() + ': File deleted locally!');
							
							res.writeHead(200, { 'Content-Type': 'text/html' });
							res.write("1");
							res.end();
						  }
						  else
						  {
							  console.log(error);
						  }
						});
					}
			});
	  	});		
});

http.createServer(app).listen(8124);
console.log("Server Started successfully at Port 8124");
