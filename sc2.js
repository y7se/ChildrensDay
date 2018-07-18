(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ALLRIGHTSRESERVED.png?1496297721315", id:"ALLRIGHTSRESERVED"},
		{src:"images/arr.png?1496297721315", id:"arr"},
		{src:"images/ba151.png?1496297721315", id:"ba151"},
		{src:"images/ba152.png?1496297721315", id:"ba152"},
		{src:"images/ba161.png?1496297721315", id:"ba161"},
		{src:"images/ba162.png?1496297721315", id:"ba162"},
		{src:"images/ball77.png?1496297721315", id:"ball77"},
		{src:"images/ball78.png?1496297721315", id:"ball78"},
		{src:"images/ball79.png?1496297721315", id:"ball79"},
		{src:"images/bby11.png?1496297721315", id:"bby11"},
		{src:"images/bby12.png?1496297721315", id:"bby12"},
		{src:"images/bgg.png?1496297721315", id:"bgg"},
		{src:"images/binggui.png?1496297721315", id:"binggui"},
		{src:"images/Bitmap1.png?1496297721315", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1496297721315", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1496297721315", id:"Bitmap3"},
		{src:"images/btnpressd.png?1496297721315", id:"btnpressd"},
		{src:"images/btnpress.png?1496297721315", id:"btnpress"},
		{src:"images/car11.png?1496297721315", id:"car11"},
		{src:"images/car12.png?1496297721315", id:"car12"},
		{src:"images/car22.png?1496297721315", id:"car22"},
		{src:"images/car22_1.png?1496297721315", id:"car22_1"},
		{src:"images/coin1.png?1496297721315", id:"coin1"},
		{src:"images/conv1.png?1496297721315", id:"conv1"},
		{src:"images/cross.png?1496297721315", id:"cross"},
		{src:"images/dj1.png?1496297721315", id:"dj1"},
		{src:"images/dj11.png?1496297721315", id:"dj11"},
		{src:"images/dj2.png?1496297721315", id:"dj2"},
		{src:"images/dj21.png?1496297721315", id:"dj21"},
		{src:"images/dj22.png?1496297721315", id:"dj22"},
		{src:"images/dj23.png?1496297721315", id:"dj23"},
		{src:"images/dj31.png?1496297721315", id:"dj31"},
		{src:"images/down1.png?1496297721315", id:"down1"},
		{src:"images/down2.png?1496297721315", id:"down2"},
		{src:"images/down3.png?1496297721315", id:"down3"},
		{src:"images/dust1.png?1496297721315", id:"dust1"},
		{src:"images/f12.png?1496297721315", id:"f12"},
		{src:"images/f2.png?1496297721315", id:"f2"},
		{src:"images/f3.png?1496297721315", id:"f3"},
		{src:"images/f5.png?1496297721315", id:"f5"},
		{src:"images/gameover.png?1496297721315", id:"gameover"},
		{src:"images/holo1.png?1496297721315", id:"holo1"},
		{src:"images/holo2.png?1496297721315", id:"holo2"},
		{src:"images/holo3.png?1496297721315", id:"holo3"},
		{src:"images/ic1.png?1496297721315", id:"ic1"},
		{src:"images/ic2.png?1496297721315", id:"ic2"},
		{src:"images/ic3.png?1496297721315", id:"ic3"},
		{src:"images/ic4.png?1496297721315", id:"ic4"},
		{src:"images/jianban.png?1496297721315", id:"jianban"},
		{src:"images/jianban12.png?1496297721315", id:"jianban12"},
		{src:"images/jianban13.png?1496297721315", id:"jianban13"},
		{src:"images/jianban14.png?1496297721315", id:"jianban14"},
		{src:"images/ko.png?1496297721315", id:"ko"},
		{src:"images/moon.png?1496297721315", id:"moon"},
		{src:"images/moon2.png?1496297721315", id:"moon2"},
		{src:"images/moon3.png?1496297721315", id:"moon3"},
		// {src:"images/note.png?1496297721315", id:"note"},
		{src:"images/npc19_1.png?1496297721315", id:"npc19_1"},
		{src:"images/npc20.png?1496297721315", id:"npc20"},
		{src:"images/p1.png?1496297721315", id:"p1"},
		{src:"images/p13.png?1496297721315", id:"p13"},
		{src:"images/p1_1.png?1496297721315", id:"p1_1"},
		{src:"images/p1_2.png?1496297721315", id:"p1_2"},
		{src:"images/p2.png?1496297721315", id:"p2"},
		{src:"images/p2_1.png?1496297721315", id:"p2_1"},
		{src:"images/p2_2.png?1496297721315", id:"p2_2"},
		{src:"images/p3.png?1496297721315", id:"p3"},
		{src:"images/p3_1.png?1496297721315", id:"p3_1"},
		{src:"images/p3_2.png?1496297721315", id:"p3_2"},
		{src:"images/qq11.png?1496297721315", id:"qq11"},
		{src:"images/qq12.png?1496297721315", id:"qq12"},
		{src:"images/qq13.png?1496297721315", id:"qq13"},
		{src:"images/qq21.png?1496297721315", id:"qq21"},
		{src:"images/qq22.png?1496297721315", id:"qq22"},
		{src:"images/qq23.png?1496297721315", id:"qq23"},
		{src:"images/rr11.png?1496297721315", id:"rr11"},
		{src:"images/rr12.png?1496297721315", id:"rr12"},
		{src:"images/rr13.png?1496297721315", id:"rr13"},
		{src:"images/sand.png?1496297721315", id:"sand"},
		{src:"images/sc01.png?1496297721315", id:"sc01"},
		{src:"images/sc02.png?1496297721315", id:"sc02"},
		{src:"images/sc03.png?1496297721315", id:"sc03"},
		{src:"images/spark1.png?1496297721315", id:"spark1"},
		{src:"images/spark2.png?1496297721315", id:"spark2"},
		{src:"images/spark3.png?1496297721315", id:"spark3"},
		{src:"images/spark4.png?1496297721315", id:"spark4"},
		{src:"images/title.png?1496297721315", id:"title"},
		{src:"images/ty1.png?1496297721315", id:"ty1"},
		{src:"images/ty2.png?1496297721315", id:"ty2"},
		{src:"images/ty3.png?1496297721315", id:"ty3"},
		{src:"images/ty4.png?1496297721315", id:"ty4"},
		{src:"images/ty5.png?1496297721315", id:"ty5"},
		{src:"images/ty6.png?1496297721315", id:"ty6"},
		{src:"images/up1.png?1496297721315", id:"up1"},
		{src:"images/up2.png?1496297721315", id:"up2"},
		{src:"images/up3.png?1496297721315", id:"up3"},
		{src:"images/wg10.png?1496297721315", id:"wg10"},
		{src:"images/wg11.png?1496297721315", id:"wg11"},
		{src:"images/wg13.png?1496297721315", id:"wg13"},
		{src:"images/wg14.png?1496297721315", id:"wg14"},
		{src:"images/wg17.png?1496297721315", id:"wg17"},
		{src:"images/wg2.png?1496297721315", id:"wg2"},
		{src:"images/wgb1.png?1496297721315", id:"wgb1"},
		{src:"images/wgb12.png?1496297721315", id:"wgb12"},
		{src:"images/wgb13.png?1496297721315", id:"wgb13"},
		{src:"images/wgb2.png?1496297721315", id:"wgb2"},
		{src:"images/wgb41.png?1496297721315", id:"wgb41"},
		{src:"images/wgb51.png?1496297721315", id:"wgb51"},
		{src:"images/wggg.png?1496297721315", id:"wggg"},
		{src:"images/wow.png?1496297721315", id:"wow"}
	]
};



// symbols:



(lib.ALLRIGHTSRESERVED = function() {
	this.initialize(img.ALLRIGHTSRESERVED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,54);


(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.ba151 = function() {
	this.initialize(img.ba151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,112);


(lib.ba152 = function() {
	this.initialize(img.ba152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,112);


(lib.ba161 = function() {
	this.initialize(img.ba161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,140);


(lib.ba162 = function() {
	this.initialize(img.ba162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,140);


(lib.ball77 = function() {
	this.initialize(img.ball77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.ball78 = function() {
	this.initialize(img.ball78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.ball79 = function() {
	this.initialize(img.ball79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.bby11 = function() {
	this.initialize(img.bby11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,266);


(lib.bby12 = function() {
	this.initialize(img.bby12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,266);


(lib.bgg = function() {
	this.initialize(img.bgg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,707);


(lib.binggui = function() {
	this.initialize(img.binggui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,294);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1479,289);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,70);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,63);


(lib.btnpressd = function() {
	this.initialize(img.btnpressd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,147);


(lib.btnpress = function() {
	this.initialize(img.btnpress);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,147);


(lib.car11 = function() {
	this.initialize(img.car11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,112);


(lib.car12 = function() {
	this.initialize(img.car12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.car22 = function() {
	this.initialize(img.car22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,112);


(lib.car22_1 = function() {
	this.initialize(img.car22_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.coin1 = function() {
	this.initialize(img.coin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,56);


(lib.conv1 = function() {
	this.initialize(img.conv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,273);


(lib.cross = function() {
	this.initialize(img.cross);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,217);


(lib.dj1 = function() {
	this.initialize(img.dj1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,210);


(lib.dj11 = function() {
	this.initialize(img.dj11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,196);


(lib.dj2 = function() {
	this.initialize(img.dj2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,210);


(lib.dj21 = function() {
	this.initialize(img.dj21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,245);


(lib.dj22 = function() {
	this.initialize(img.dj22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,259);


(lib.dj23 = function() {
	this.initialize(img.dj23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,252);


(lib.dj31 = function() {
	this.initialize(img.dj31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,217);


(lib.down1 = function() {
	this.initialize(img.down1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,350);


(lib.down2 = function() {
	this.initialize(img.down2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,273);


(lib.down3 = function() {
	this.initialize(img.down3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,203);


(lib.dust1 = function() {
	this.initialize(img.dust1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,49);


(lib.f12 = function() {
	this.initialize(img.f12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.f2 = function() {
	this.initialize(img.f2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,70);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,98);


(lib.f5 = function() {
	this.initialize(img.f5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,14);


(lib.gameover = function() {
	this.initialize(img.gameover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,217);


(lib.holo1 = function() {
	this.initialize(img.holo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.holo2 = function() {
	this.initialize(img.holo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);


(lib.holo3 = function() {
	this.initialize(img.holo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,49);


(lib.ic1 = function() {
	this.initialize(img.ic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,98);


(lib.ic2 = function() {
	this.initialize(img.ic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.ic3 = function() {
	this.initialize(img.ic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.ic4 = function() {
	this.initialize(img.ic4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.jianban = function() {
	this.initialize(img.jianban);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,504);


(lib.jianban12 = function() {
	this.initialize(img.jianban12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,52);


(lib.jianban13 = function() {
	this.initialize(img.jianban13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,267);


(lib.jianban14 = function() {
	this.initialize(img.jianban14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,408);


(lib.ko = function() {
	this.initialize(img.ko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,119);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.moon2 = function() {
	this.initialize(img.moon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.moon3 = function() {
	this.initialize(img.moon3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,78);


(lib.npc19_1 = function() {
	this.initialize(img.npc19_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,231);


(lib.npc20 = function() {
	this.initialize(img.npc20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,231);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,196);


(lib.p13 = function() {
	this.initialize(img.p13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,105);


(lib.p1_1 = function() {
	this.initialize(img.p1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,196);


(lib.p1_2 = function() {
	this.initialize(img.p1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,203);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.p2_1 = function() {
	this.initialize(img.p2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.p2_2 = function() {
	this.initialize(img.p2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,217);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,203);


(lib.p3_1 = function() {
	this.initialize(img.p3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,203);


(lib.p3_2 = function() {
	this.initialize(img.p3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.qq11 = function() {
	this.initialize(img.qq11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,196);


(lib.qq12 = function() {
	this.initialize(img.qq12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,196);


(lib.qq13 = function() {
	this.initialize(img.qq13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,196);


(lib.qq21 = function() {
	this.initialize(img.qq21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,203);


(lib.qq22 = function() {
	this.initialize(img.qq22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,203);


(lib.qq23 = function() {
	this.initialize(img.qq23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,203);


(lib.rr11 = function() {
	this.initialize(img.rr11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,196);


(lib.rr12 = function() {
	this.initialize(img.rr12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.rr13 = function() {
	this.initialize(img.rr13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,196);


(lib.sand = function() {
	this.initialize(img.sand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,49);


(lib.sc01 = function() {
	this.initialize(img.sc01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4310,1141);


(lib.sc02 = function() {
	this.initialize(img.sc02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3407,1141);


(lib.sc03 = function() {
	this.initialize(img.sc03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2783,1141);


(lib.spark1 = function() {
	this.initialize(img.spark1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.spark2 = function() {
	this.initialize(img.spark2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.spark3 = function() {
	this.initialize(img.spark3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.spark4 = function() {
	this.initialize(img.spark4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,216);


(lib.ty1 = function() {
	this.initialize(img.ty1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,84);


(lib.ty2 = function() {
	this.initialize(img.ty2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,91);


(lib.ty3 = function() {
	this.initialize(img.ty3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,35);


(lib.ty4 = function() {
	this.initialize(img.ty4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,42);


(lib.ty5 = function() {
	this.initialize(img.ty5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,217);


(lib.ty6 = function() {
	this.initialize(img.ty6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,203);


(lib.up1 = function() {
	this.initialize(img.up1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,357);


(lib.up2 = function() {
	this.initialize(img.up2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,280);


(lib.up3 = function() {
	this.initialize(img.up3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,196);


(lib.wg10 = function() {
	this.initialize(img.wg10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,217);


(lib.wg11 = function() {
	this.initialize(img.wg11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,161);


(lib.wg13 = function() {
	this.initialize(img.wg13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,161);


(lib.wg14 = function() {
	this.initialize(img.wg14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.wg17 = function() {
	this.initialize(img.wg17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.wg2 = function() {
	this.initialize(img.wg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,210);


(lib.wgb1 = function() {
	this.initialize(img.wgb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.wgb12 = function() {
	this.initialize(img.wgb12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.wgb13 = function() {
	this.initialize(img.wgb13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,161);


(lib.wgb2 = function() {
	this.initialize(img.wgb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,161);


(lib.wgb41 = function() {
	this.initialize(img.wgb41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,210);


(lib.wgb51 = function() {
	this.initialize(img.wgb51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,217);


(lib.wggg = function() {
	this.initialize(img.wggg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,474,272);


(lib.wow = function() {
	this.initialize(img.wow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,91);


(lib.越野兔3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.moon2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.越野兔2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.moon3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.越野兔1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.moon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,266);


(lib.话框 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.conv1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357,273);


(lib.斗鸡1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dj11();
	this.instance.setTransform(-7,14);

	this.instance_1 = new lib.dj2();
	this.instance_1.setTransform(0,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,14,231,196);


(lib.冰棍箱 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.binggui();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,294);


(lib.冰棍姨 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bby11();

	this.instance_1 = new lib.bby12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,266);


(lib.冰棍m1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ic1();

	this.instance_1 = new lib.ic4();
	this.instance_1.setTransform(108.5,87.5,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewX:0,y:0,skewY:0,x:0}}]}).to({state:[{t:this.instance_1,p:{skewX:90,skewY:-90,x:108.5,y:87.5}}]},1).to({state:[{t:this.instance,p:{skewX:180,y:98,skewY:0,x:0}}]},1).to({state:[{t:this.instance,p:{skewX:0,y:0,skewY:180,x:105}}]},1).to({state:[{t:this.instance_1,p:{skewX:180,skewY:0,x:21,y:112}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,98);


(lib.冰3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ic4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.冰2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ic3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.冰1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ic2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,112);


(lib.startpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ALL RIGHTS RESERVED
	this.instance = new lib.ALLRIGHTSRESERVED();
	this.instance.setTransform(98,981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// 大儿童的
	this.instance_1 = new lib.title();
	this.instance_1.setTransform(52.4,239);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.4,239,550,796);


(lib.shoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 60
	this.instance = new lib.f12();
	this.instance.setTransform(28,31.5);

	this.instance_1 = new lib.f3();
	this.instance_1.setTransform(91,119,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,y:31.5,x:28}}]}).to({state:[{t:this.instance_1,p:{rotation:180,x:91,y:119}}]},2).to({state:[{t:this.instance,p:{rotation:-90,y:108.5,x:28}}]},2).to({state:[{t:this.instance_1,p:{rotation:90,x:112,y:42}}]},2).to({state:[{t:this.instance,p:{rotation:180,y:108.5,x:105}}]},3).to({state:[{t:this.instance_1,p:{rotation:0,x:35,y:21}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,31.5,77,77);


(lib.pressm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnpress();

	this.instance_1 = new lib.btnpressd();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,147);


(lib.notes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.note();
	this.instance.setTransform(0,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,254,387,78);


(lib.gameover_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gameover();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,217);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg2();
	this.instance.setTransform(-59.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-105,119,210);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg2();
	this.instance.setTransform(-59.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-105,119,210);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg10();
	this.instance.setTransform(-77,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-108.5,154,217);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg10();
	this.instance.setTransform(-77,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-108.5,154,217);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb41();
	this.instance.setTransform(-59.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-105,119,210);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb41();
	this.instance.setTransform(-59.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-105,119,210);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb51();
	this.instance.setTransform(-59.5,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-108.5,119,217);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb51();
	this.instance.setTransform(-59.5,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-108.5,119,217);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dj1();
	this.instance.setTransform(59.5,-105,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-105,119,210);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.holo1();
	this.instance.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.holo1();
	this.instance.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.rr13();
	this.instance.setTransform(-94.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-98,189,196);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.rr13();
	this.instance.setTransform(-94.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-98,189,196);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.rr11();
	this.instance.setTransform(-70,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-98,140,196);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wggg();
	this.instance.setTransform(-237,-136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-136,474,272);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,49);


(lib.元件35复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p13();
	this.instance.setTransform(-182.4,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.4,91.5,301,105);


(lib.元件35复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p2_1();

	this.instance_1 = new lib.p2_2();
	this.instance_1.setTransform(0,-6.5);

	this.instance_2 = new lib.p2();
	this.instance_2.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,210);


(lib.元件35复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p3_1();

	this.instance_1 = new lib.p3_2();
	this.instance_1.setTransform(0,-6.5);

	this.instance_2 = new lib.p3();
	this.instance_2.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,203);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p1_1();

	this.instance_1 = new lib.p1_2();
	this.instance_1.setTransform(0,-6.5);

	this.instance_2 = new lib.p1();
	this.instance_2.setTransform(-35,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,196);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.npc19_1();

	this.instance_1 = new lib.npc20();
	this.instance_1.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,231);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ball78();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ball77();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ball79();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,28);


(lib.元件30复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.元件29复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wow();
	this.instance.setTransform(255,-61.5,1,1,0,0,180);

	this.instance_1 = new lib.wgb2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61.5,255,222.5);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,161);


(lib.元件28复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wow();
	this.instance.setTransform(238.5,-25.5,1,1,0,0,180);

	this.instance_1 = new lib.wg11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.5,238.5,186.5);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,161);


(lib.元件27复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wow();
	this.instance.setTransform(-91.5,-71.5);

	this.instance_1 = new lib.wg14();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-71.5,224.5,232.5);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wg17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,161);


(lib.元件26复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ba152();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,112);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ba151();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,112);


(lib.元件25复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ba162();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,140);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ba161();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,140);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,70);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.f5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,14);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1479,289);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car22_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,112);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.car22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,112);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.wgb13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,161);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ko();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,119);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dj23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,252);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.spark1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.spark3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dj31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,217);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dj21();
	this.instance.setTransform(0,14);

	this.instance_1 = new lib.dj22();
	this.instance_1.setTransform(3.5,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14,133,245);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ty1();
	this.instance.setTransform(63,7);

	this.instance_1 = new lib.ty2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,518,91);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.holo3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,49);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.holo2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzUBZJMAAAiyRMBmoAAAMAAACyRg");
	this.shape.setTransform(321.4,570.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,0,657,1141);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ty3();
	this.instance.setTransform(35,0);

	this.instance_1 = new lib.ty4();
	this.instance_1.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511,49);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ty5();
	this.instance.setTransform(462,0);

	this.instance_1 = new lib.ty6();
	this.instance_1.setTransform(0,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,581,217);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A9/HzIAAvmMA7/AAAIAAPmg");
	this.shape.setTransform(192.1,50);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn_restart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,63);


(lib.BG3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.sc03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2783,1141);


(lib.BG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.sc02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3407,1141);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.sc01();
	this.instance.setTransform(0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,4310,1141);


(lib.圈2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qq23();

	this.instance_1 = new lib.qq22();

	this.instance_2 = new lib.qq21();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294,203);


(lib.圈1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.qq11();

	this.instance_1 = new lib.qq12();

	this.instance_2 = new lib.qq13();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294,196);


(lib.trackpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car1-1
	this.instance = new lib.元件18();
	this.instance.setTransform(196,321.5,1,1,0,0,0,42,56);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:440.5},2,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// car2-2
	this.instance_1 = new lib.元件17();
	this.instance_1.setTransform(273,321.5,1,1,0,0,0,42,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:426.5},2,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// down1
	this.instance_2 = new lib.down1();
	this.instance_2.setTransform(154,377);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61));

	// 图层 6
	this.instance_3 = new lib.元件17();
	this.instance_3.setTransform(196,314.5,1,1,0,0,0,42,56);
	this.instance_3._off = true;

	this.instance_4 = new lib.元件20();
	this.instance_4.setTransform(237,614.5,1,1,-90,0,0,63,63);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1).to({y:419.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-90,x:379,y:678.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:560,y:485.5},0).wait(1).to({regY:56.1,rotation:-213.7,x:529,y:359.5},0).wait(1).to({regY:56,rotation:-180,x:483,y:264.5},0).to({_off:true},1).wait(11).to({_off:false,rotation:0,x:196,y:314.5},0).wait(1).to({y:419.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-90,x:379,y:678.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:560,y:485.5},0).wait(1).to({regY:56.1,rotation:-213.7,x:529,y:359.5},0).wait(1).to({regY:56,rotation:-180,x:483,y:264.5},0).to({_off:true},1).wait(11).to({_off:false,rotation:0,x:196,y:314.5},0).wait(1).to({y:419.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-90,x:379,y:678.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:560,y:485.5},0).wait(1).to({regY:56.1,rotation:-213.7,x:529,y:359.5},0).wait(1).to({regY:56,rotation:-180,x:483,y:264.5},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:503,y:635.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:-90,x:237,y:614.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:503,y:635.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:-90,x:237,y:614.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:503,y:635.5},0).to({_off:true},1).wait(7));

	// car1-2
	this.instance_5 = new lib.元件19();
	this.instance_5.setTransform(245,629.5,1,1,0,0,180,63,63);
	this.instance_5._off = true;

	this.instance_6 = new lib.元件18();
	this.instance_6.setTransform(376,677.5,1,1,-90,0,0,42,56);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,rotation:180,skewY:0,x:518,y:614.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:0,skewY:180,x:245,y:629.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:180,skewY:0,x:518,y:614.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:0,skewY:180,x:245,y:629.5},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:560,y:481.5},0).wait(1).to({regX:42.1,rotation:-204.9,x:520,y:345.5},0).to({_off:true},1).wait(15).to({_off:false,regX:42,rotation:-90,x:376,y:677.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:-180,x:560,y:481.5},0).wait(1).to({regX:42.1,rotation:-204.9,x:520,y:345.5},0).to({_off:true},1).wait(15).to({_off:false,regX:42,rotation:-90,x:376,y:677.5},0).to({_off:true},1).wait(17));

	// down2
	this.instance_7 = new lib.down2();
	this.instance_7.setTransform(231,377);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61));

	// car1-2
	this.instance_8 = new lib.元件18();
	this.instance_8.setTransform(273,321.5,1,1,0,0,0,42,56);

	this.instance_9 = new lib.元件19();
	this.instance_9.setTransform(308,572.5,1,1,0,0,180,63,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{y:321.5}}]},11).to({state:[{t:this.instance_8,p:{y:443.5}}]},1).to({state:[{t:this.instance_9,p:{skewX:0,skewY:180,x:308,y:572.5}}]},1).to({state:[{t:this.instance_9,p:{skewX:-90,skewY:90,x:455,y:565.5}}]},1).to({state:[]},1).to({state:[{t:this.instance_8,p:{y:321.5}}]},15).to({state:[{t:this.instance_8,p:{y:443.5}}]},1).to({state:[{t:this.instance_9,p:{skewX:0,skewY:180,x:308,y:572.5}}]},1).to({state:[{t:this.instance_9,p:{skewX:-90,skewY:90,x:455,y:565.5}}]},1).to({state:[]},1).wait(27));

	// car2-2_1
	this.instance_10 = new lib.元件20();
	this.instance_10.setTransform(308,572.5,1,1,-90,0,0,63,63);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(1).to({rotation:-180,x:448,y:573.5},0).to({_off:true},1).wait(17).to({_off:false,rotation:-90,x:308,y:572.5},0).wait(1).to({rotation:-180,x:448,y:573.5},0).to({_off:true},1).wait(17).to({_off:false,rotation:-90,x:308,y:572.5},0).wait(1).to({rotation:-180,x:448,y:573.5},0).to({_off:true},1).wait(17));

	// down3
	this.instance_11 = new lib.down3();
	this.instance_11.setTransform(308,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(61));

	// cross
	this.instance_12 = new lib.cross();
	this.instance_12.setTransform(448,244);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(61));

	// up3
	this.instance_13 = new lib.up3();
	this.instance_13.setTransform(308,174);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(61));

	// 图层 7
	this.instance_14 = new lib.元件20();
	this.instance_14.setTransform(451,194.5,1,1,90,0,0,63,63);
	this.instance_14._off = true;

	this.instance_15 = new lib.元件17();
	this.instance_15.setTransform(273,282.5,1,1,0,0,0,42,56);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).wait(1).to({rotation:0,x:315,y:187.5},0).to({_off:true},1).wait(17).to({_off:false,rotation:90,x:451,y:194.5},0).wait(1).to({rotation:0,x:315,y:187.5},0).to({_off:true},1).wait(17).to({_off:false,rotation:90,x:451,y:194.5},0).wait(1).to({rotation:0,x:315,y:187.5},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(21).to({_off:false},0).wait(1).to({y:426.5},0).to({_off:true},1).wait(17).to({_off:false,y:282.5},0).wait(1).to({y:426.5},0).to({_off:true},1).wait(17).to({_off:false,y:282.5},0).wait(1).to({y:426.5},0).wait(1));

	// 图层 2
	this.instance_16 = new lib.元件19();
	this.instance_16.setTransform(447,194.5,1,1,90,0,0,63,63);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).wait(1).to({rotation:0,x:301,y:201.5},0).to({_off:true},1).wait(17).to({_off:false,rotation:90,x:447,y:194.5},0).wait(1).to({rotation:0,x:301,y:201.5},0).to({_off:true},1).wait(31));

	// up2
	this.instance_17 = new lib.up2();
	this.instance_17.setTransform(231,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(61));

	// 图层 5
	this.instance_18 = new lib.元件17();
	this.instance_18.setTransform(483,473.5,1,1,180,0,0,42,56);
	this.instance_18._off = true;

	this.instance_19 = new lib.元件20();
	this.instance_19.setTransform(505,138,1,1,90,0,0,63,63);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(6).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:90,x:378,y:89.5},0).to({_off:true},1).wait(15).to({_off:false,rotation:180,x:483,y:473.5},0).to({_off:true},1).wait(2).to({_off:false,rotation:90,x:378,y:89.5},0).to({_off:true},1).wait(15).to({_off:false,rotation:180,x:483,y:473.5},0).to({_off:true},1).wait(2).to({_off:false,rotation:90,x:378,y:89.5},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(8).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:238,y:145.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:90,x:505,y:138},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:238,y:145.5},0).to({_off:true},1).wait(16).to({_off:false,rotation:90,x:505,y:138},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:238,y:145.5},0).to({_off:true},1).wait(12));

	// 图层 4
	this.instance_20 = new lib.元件18();
	this.instance_20.setTransform(483,464.5,1,1,180,0,0,42,56);
	this.instance_20._off = true;

	this.instance_21 = new lib.元件19();
	this.instance_21.setTransform(504,135.5,1,1,90,0,0,63,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},15).to({state:[]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21,p:{rotation:90,x:504,y:135.5}}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:245,y:138.5}}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},11).to({state:[]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21,p:{rotation:90,x:504,y:135.5}}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:245,y:138.5}}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:560,y:277.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:90,x:378,y:89.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:196,y:300.5},0).wait(1).to({y:440.5},0).to({_off:true},1).wait(11).to({_off:false,rotation:180,x:483,y:464.5},0).to({_off:true},1).wait(1).to({_off:false,x:560,y:277.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:90,x:378,y:89.5},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:196,y:300.5},0).wait(1).to({y:440.5},0).to({_off:true},1).wait(19));

	// up1
	this.instance_22 = new lib.up1();
	this.instance_22.setTransform(154,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(61));

	// bgg
	this.instance_23 = new lib.bgg();
	this.instance_23.setTransform(154,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154,20,448,707);


(lib.jianbanm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件22();
	this.instance.setTransform(-447,144.4,1,1,0,0,0,456.5,144.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:569.1,y:143.8},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-903.5,0,1479,289);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件37("synched",0);
	this.instance.setTransform(8.8,206.5,1,1,0,0,0,28,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(2).to({x:287},0).to({x:1488,y:124.5},11).wait(11).to({x:1181,y:121.5},0).to({x:15,y:75.5},12).wait(9).to({x:303,y:88.5},0).to({x:1490,y:280.5},12).wait(7).to({x:1194,y:282.5},0).to({x:9,y:169.5},14).wait(1).to({x:321,y:185.5},0).to({x:931.6,y:231.6},6).wait(17));

	// 元件 35 复制 2
	this.instance_1 = new lib.元件35复制2("synched",0);
	this.instance_1.setTransform(1262,188.5,1,1,0,0,180,63,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:949},8).to({x:938,mode:"single"},1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(89));

	// 元件 35
	this.instance_2 = new lib.元件35("synched",0);
	this.instance_2.setTransform(1077,217.5,1,1,0,0,180,63,98);

	this.instance_3 = new lib.元件35复制3("synched",0);
	this.instance_3.setTransform(803.1,217.5,1,1,0,0,180,63,98);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:842.2,startPosition:6},6).to({_off:true,x:803.1,startPosition:0},1).wait(4).to({_off:false,x:607.4,startPosition:4},1).to({x:342,startPosition:7},4).wait(11).to({skewY:0,x:351,startPosition:0},0).to({x:1135,startPosition:7},11).wait(1).to({skewY:180,startPosition:0},0).wait(7).to({startPosition:5},0).to({x:907.3,y:214.8,startPosition:0},4).to({x:743,y:36.5,startPosition:1},1).to({x:702,y:108.5,startPosition:2},1).to({x:645,y:174.5,startPosition:3},1).to({x:300,y:207.5,startPosition:0},5).wait(6).to({skewY:0,startPosition:1},0).to({x:551.1,y:223.2,startPosition:5},3).to({_off:true,x:649.9,y:227.1,startPosition:0},3).wait(14).to({_off:false,x:934.7,y:246.3,startPosition:6},1).to({x:970.3,y:248.7,mode:"single",startPosition:7},1).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},1).to({x:631},4).to({_off:true,x:607.4,startPosition:4},1).wait(55).to({_off:false,skewY:0,x:649.9,y:227.1,startPosition:0},3).to({x:899.1,y:243.9},14).to({_off:true,x:934.7,y:246.3,startPosition:6},1).wait(18));

	// 元件 35 复制
	this.instance_4 = new lib.元件35复制("synched",0);
	this.instance_4.setTransform(958,150.5,1,1,0,0,180,63,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:762.4,startPosition:5},5).to({x:651,y:42.5,startPosition:6},1).to({x:577,y:139.5,startPosition:0},2).to({x:371,y:150.5,startPosition:7},7).wait(8).to({skewY:0,x:322,startPosition:1},0).to({x:635.6,startPosition:7},6).to({x:688,y:72.5,mode:"single",startPosition:0},1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(68));

	// 元件 34
	this.instance_5 = new lib.元件34("single",0);
	this.instance_5.setTransform(1405,140.5,1,1,0,0,180,98,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({startPosition:0},0).wait(10).to({mode:"synched",loop:false},0).wait(21).to({y:291.5,mode:"single"},0).wait(19).to({mode:"synched",loop:false},0).wait(16).to({mode:"single"},0).wait(24));

	// 元件 34
	this.instance_6 = new lib.元件34("single",0);
	this.instance_6.setTransform(98,228.5,1,1,0,0,0,98,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({mode:"synched",loop:false},0).wait(25).to({y:91.5,mode:"single"},0).wait(18).to({mode:"synched",loop:false},0).wait(19).to({y:191.5,mode:"single"},0).wait(16).to({mode:"synched",startPosition:1,loop:false},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,25,1522.3,319);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件16();
	this.instance.setTransform(124,913.5,1,1,0,0,0,80.5,80.5);

	this.instance_1 = new lib.补间3("synched",0);
	this.instance_1.setTransform(70,120.5);

	this.instance_2 = new lib.wg17();
	this.instance_2.setTransform(161.5,0);

	this.instance_3 = new lib.wg13();
	this.instance_3.setTransform(382,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508,994);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 11
	this.instance = new lib.元件8("synched",0);
	this.instance.setTransform(252,104,1,1,0,0,0,24.5,24.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(5).to({startPosition:0},0).to({alpha:1},2).to({alpha:0},2).wait(5));

	// 图层 12
	this.instance_1 = new lib.补间7("synched",0);
	this.instance_1.setTransform(53,205);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(1));

	// 图层 10
	this.instance_2 = new lib.补间7("synched",0);
	this.instance_2.setTransform(255,-3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).to({_off:true},4).wait(1).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(4));

	// 图层 9
	this.instance_3 = new lib.元件7("synched",0);
	this.instance_3.setTransform(67,-52,1,1,0,0,0,45.5,45.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).to({_off:true},2).wait(3).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(2));

	// 图层 7
	this.instance_4 = new lib.元件7("synched",0);
	this.instance_4.setTransform(219,166,1,1,0,0,0,45.5,45.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).to({_off:true},4).wait(1).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(4));

	// 图层 8
	this.instance_5 = new lib.元件8("synched",0);
	this.instance_5.setTransform(-3.5,124.1,1,1,0,0,0,24.5,24.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(5).to({startPosition:0},0).to({alpha:1},2).to({alpha:0},2).wait(5));

	// 图层 6
	this.instance_6 = new lib.补间7("synched",0);
	this.instance_6.setTransform(21,33);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间8("synched",0);
	this.instance_7.setTransform(119,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[]},1).to({state:[]},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true,x:119,y:115},2).wait(19));

	// 图层 5
	this.instance_8 = new lib.补间7("synched",0);
	this.instance_8.setTransform(21,33);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间8("synched",0);
	this.instance_9.setTransform(65,-129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},2).to({state:[]},1).to({state:[]},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true,x:65,y:-129},2).wait(20));

	// 图层 4
	this.instance_10 = new lib.补间7("synched",0);
	this.instance_10.setTransform(21,33);
	this.instance_10._off = true;

	this.instance_11 = new lib.补间8("synched",0);
	this.instance_11.setTransform(-83,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[]},1).to({state:[]},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true,x:-83,y:5},2).wait(20));

	// 图层 3
	this.instance_12 = new lib.补间7("synched",0);
	this.instance_12.setTransform(21,33);

	this.instance_13 = new lib.补间8("synched",0);
	this.instance_13.setTransform(131,-69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},2).to({state:[]},1).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:131,y:-69},2).wait(21));

	// 图层 2
	this.instance_14 = new lib.补间7("synched",0);
	this.instance_14.setTransform(21,33);

	this.instance_15 = new lib.补间8("synched",0);
	this.instance_15.setTransform(-41,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},2).to({state:[]},1).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:-41,y:143},2).wait(21));

	// 图层 1
	this.instance_16 = new lib.补间7("synched",0);
	this.instance_16.setTransform(21,33);

	this.instance_17 = new lib.补间8("synched",0);
	this.instance_17.setTransform(-67,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},2).to({state:[]},1).to({state:[]},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,x:-67,y:-83},2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,42,42);


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.pressm();
	this.instance.setTransform(59.5,73.5,1,1,0,0,0,59.5,73.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("A9/HzIAAvmMA7/AAAIAAPmg");
	this.shape.setTransform(65.9,85.7,0.343,1.714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,147);


(lib.光环m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件5("synched",0,false);
	this.instance.setTransform(68,98.5,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,89.5,42,42);


(lib.sc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		this.btn2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(1);
			
			// 结束您的自定义代码
		}
	}
	this.frame_91 = function() {
		this.stop()
		
		this.btn4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(92);
			
			// 结束您的自定义代码
		}
	}
	this.frame_192 = function() {
		this.stop()
		
		this.btn4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(193);
			
			// 结束您的自定义代码
		}
	}
	this.frame_294 = function() {
		this.stop()
		
		this.btn4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(295);
			
			// 结束您的自定义代码
		}
	}
	this.frame_344 = function() {
		this.stop()
		
		this.btn4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(345);
			
			// 结束您的自定义代码
		}
	}
	this.frame_381 = function() {
		this.stop()
		
		this.btn4.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndPlay(382);
			
			// 结束您的自定义代码
		}
	}
	this.frame_482 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		if(model) model.dispatchEvent("complete");
		this.restart.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			this.gotoAndStop(0);
			
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91).call(this.frame_91).wait(101).call(this.frame_192).wait(102).call(this.frame_294).wait(50).call(this.frame_344).wait(37).call(this.frame_381).wait(101).call(this.frame_482).wait(5));

	// button
	this.btn2 = new lib.btn2();
	this.btn2.setTransform(-9.2,-61.2,1,2.452,0,0,0,192.1,50.1);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn2(), 3);

	this.btn4 = new lib.btn4();
	this.btn4.setTransform(41.1,-231.2);
	this.btn4._off = true;
	new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.btn4(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn2}]}).to({state:[]},12).to({state:[{t:this.btn4}]},79).to({state:[]},1).to({state:[{t:this.btn4}]},100).to({state:[]},1).to({state:[{t:this.btn4}]},101).to({state:[]},1).to({state:[{t:this.btn4}]},49).to({state:[]},1).to({state:[{t:this.btn4}]},36).to({state:[]},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.btn4).wait(91).to({_off:false},0).to({_off:true},1).wait(100).to({_off:false,x:-80.8,y:157.1},0).to({_off:true},1).wait(101).to({_off:false,regX:58.1,regY:58.1,x:-177.7,y:-173.1},0).to({_off:true},1).wait(49).to({_off:false,x:1.5,y:130.1},0).to({_off:true},1).wait(36).to({_off:false,x:-117,y:29.5},0).to({_off:true},1).wait(105));

	// 图层 14
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-121.7,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},1).wait(475));

	// 图层 12
	this.instance_1 = new lib.startpsd("synched",0);
	this.instance_1.setTransform(-3.9,-12,1,1,0,0,0,324.5,632);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(475));

	// 图层 13
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(-8.1,-4.2,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},12).wait(475));

	// 图层 1
	this.instance_3 = new lib.notes();
	this.instance_3.setTransform(1,739,1,1,0,0,0,193.5,166);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(477).to({_off:false},0).to({y:215.4},5).wait(5));

	// 图层 2
	this.restart = new lib.btn_restart();
	this.restart.setTransform(1.8,-170.9,1.5,1.5,0,0,0,120,31.5);
	this.restart._off = true;
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.btn_restart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(482).to({_off:false},0).wait(5));

	// 图层 3
	this.instance_4 = new lib.gameover_1();
	this.instance_4.setTransform(3.5,-695.5,1,1,0,0,0,196,108.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(477).to({_off:false},0).to({x:3,y:-365.1},5).wait(5));

	// 图层 4
	this.instance_5 = new lib.元件3();
	this.instance_5.setTransform(0,0,1,1,0,0,0,320,568);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(477).to({_off:false},0).wait(10));

	// 图层 5
	this.instance_6 = new lib.元件36("single",0);
	this.instance_6.setTransform(1306.5,194.5,1,1,0,0,0,665.5,172);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(367).to({_off:false},0).to({x:458.5},13).wait(1).to({mode:"synched",loop:false},0).wait(2).to({startPosition:2},0).to({x:-109.5,startPosition:5},3).wait(12).to({startPosition:17},0).to({x:-672.5,startPosition:20},3).wait(5).to({startPosition:25},0).to({x:6.5,startPosition:28},3).wait(9).to({startPosition:37},0).to({x:408.5,startPosition:41},4).wait(5).to({startPosition:46},0).to({x:-78.5,startPosition:49},3).wait(7).to({startPosition:56},0).to({x:-576.5,startPosition:61},5).wait(4).to({startPosition:65},0).to({x:-85.5,startPosition:68},3).wait(6).to({startPosition:74},0).to({x:394,startPosition:77},3).wait(3).to({startPosition:80},0).to({x:-131,startPosition:84},4).to({_off:true},12).wait(10));

	// 图层 6
	this.instance_7 = new lib.元件32();
	this.instance_7.setTransform(348,86,1,1,0,0,0,14,14);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(367).to({_off:false},0).to({x:71,y:73},13).to({_off:true},1).wait(106));

	// 图层 7
	this.instance_8 = new lib.元件18();
	this.instance_8.setTransform(173,307,1,1,-90,0,0,42,56);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(338).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,x:-386,y:344},0).to({x:70.6,y:110},3).to({x:375,y:-46},2).to({_off:true},1).wait(131));

	// 元件 33
	this.instance_9 = new lib.元件33();
	this.instance_9.setTransform(1052,107,1,1,0,0,0,14,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(338).to({_off:false},0).to({x:0},6).wait(9).to({x:56,y:37},0).wait(1).to({x:228.7,y:-119.4},0).wait(1).to({x:274.6,y:-161},0).wait(1).to({x:298.4,y:-182.6},0).wait(1).to({x:314.4,y:-197.1},0).wait(1).to({x:325.9,y:-207.5},0).wait(1).to({x:333,y:-214},0).to({_off:true},1).wait(127));

	// 元件 33
	this.instance_10 = new lib.元件33();
	this.instance_10.setTransform(989,170,1,1,0,0,0,14,14);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(338).to({_off:false},0).to({x:-63},6).wait(9).to({x:-7,y:58},0).wait(1).to({x:157.6,y:22},0).wait(1).to({x:217.4,y:9},0).wait(1).to({x:251.9,y:1.5},0).wait(1).to({x:274.2,y:-3.4},0).wait(1).to({x:290.6,y:-7},0).wait(1).to({x:303.7,y:-9.8},0).wait(1).to({x:314.5,y:-12.2},0).wait(1).to({x:323.5,y:-14.1},0).wait(1).to({x:331,y:-15.8},0).wait(1).to({x:337.1,y:-17.1},0).wait(1).to({x:341,y:-18},0).to({_off:true},1).wait(122));

	// 元件 32
	this.instance_11 = new lib.元件32();
	this.instance_11.setTransform(1080,93,1,1,0,0,0,14,14);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(338).to({_off:false},0).to({x:28},6).wait(9).to({x:84,y:58},0).wait(1).to({x:244.2,y:-62.9},0).wait(1).to({x:286.8,y:-95},0).wait(1).to({x:308.9,y:-111.7},0).wait(1).to({x:323.8,y:-123},0).wait(1).to({x:334.4,y:-131},0).wait(1).to({x:341,y:-136},0).to({_off:true},1).wait(127));

	// 元件 32
	this.instance_12 = new lib.元件32();
	this.instance_12.setTransform(1052,142,1,1,0,0,0,14,14);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(338).to({_off:false},0).to({x:0},6).wait(9).to({x:42,y:163},0).wait(1).to({x:232.8,y:174.2},0).wait(1).to({x:283.5,y:177.2},0).wait(1).to({x:309.8,y:178.8},0).wait(1).to({x:327.5,y:179.8},0).wait(1).to({x:340.2,y:180.5},0).wait(1).to({x:348,y:181},0).to({_off:true},1).wait(127));

	// 元件 31
	this.instance_13 = new lib.元件31();
	this.instance_13.setTransform(1003,121,1,1,0,0,0,14,14);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(338).to({_off:false},0).to({x:-49},6).wait(9).to({x:-55,y:86},0).wait(1).to({x:-29.4,y:-52.3},0).wait(1).to({x:-22.6,y:-89.1},0).wait(1).to({x:-19.1,y:-108.2},0).wait(1).to({x:-16.7,y:-121.1},0).wait(1).to({x:-15,y:-130.3},0).wait(1).to({x:-14,y:-136},0).to({_off:true},8).wait(120));

	// 元件 31
	this.instance_14 = new lib.元件31();
	this.instance_14.setTransform(1094,170,1,1,0,0,0,14,14);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(338).to({_off:false},0).to({x:42},6).wait(9).to({x:56,y:191},0).wait(1).to({x:204.9,y:296},0).wait(1).to({x:253.9,y:330.6},0).wait(1).to({x:280.9,y:349.6},0).wait(1).to({x:298.4,y:362},0).wait(1).to({x:311.5,y:371.2},0).wait(1).to({x:321.9,y:378.5},0).wait(1).to({x:330.2,y:384.4},0).wait(1).to({x:336.8,y:389},0).wait(1).to({x:341,y:392},0).to({_off:true},1).wait(124));

	// 元件 30
	this.instance_15 = new lib.元件30();
	this.instance_15.setTransform(1146.5,285.5,1,1,0,0,0,66.5,80.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.元件30复制();
	this.instance_16.setTransform(94.5,285.5,1,1,0,0,0,66.5,80.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(338).to({_off:false},0).to({x:94.5},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(353).to({_off:false},0).wait(14).to({x:-753.5},13).to({_off:true},1).wait(106));

	// 元件 29
	this.instance_17 = new lib.元件29();
	this.instance_17.setTransform(922.5,285.5,1,1,0,0,0,80.5,80.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.元件29复制();
	this.instance_18.setTransform(-129.5,285.5,1,1,0,0,0,80.5,80.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(338).to({_off:false},0).to({x:-129.5},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(353).to({_off:false},0).wait(14).to({x:-977.5},13).to({_off:true},1).wait(106));

	// 元件 28
	this.instance_19 = new lib.元件28();
	this.instance_19.setTransform(1115,-50.5,1,1,0,0,0,63,80.5);
	this.instance_19._off = true;

	this.instance_20 = new lib.元件28复制();
	this.instance_20.setTransform(63,-50.5,1,1,0,0,0,63,80.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(338).to({_off:false},0).to({x:63},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(353).to({_off:false},0).wait(14).to({x:-785},13).to({_off:true},1).wait(106));

	// 元件 27
	this.instance_21 = new lib.元件27();
	this.instance_21.setTransform(964.5,-57.5,1,1,0,0,0,66.5,80.5);
	this.instance_21._off = true;

	this.instance_22 = new lib.元件27复制();
	this.instance_22.setTransform(-87.5,-57.5,1,1,0,0,0,66.5,80.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(338).to({_off:false},0).to({x:-87.5},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(353).to({_off:false},0).wait(14).to({x:-935.5},13).to({_off:true},1).wait(106));

	// 元件 26
	this.instance_23 = new lib.元件26();
	this.instance_23.setTransform(870,128,1,1,0,0,0,98,56);
	this.instance_23._off = true;

	this.instance_24 = new lib.元件26复制();
	this.instance_24.setTransform(-182,128,1,1,0,0,0,98,56);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(338).to({_off:false},0).to({x:-182},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(353).to({_off:false},0).wait(14).to({x:-1030},13).to({_off:true},1).wait(106));

	// 元件 25
	this.instance_25 = new lib.元件25();
	this.instance_25.setTransform(1248,114,1,1,0,0,0,98,70);
	this.instance_25._off = true;

	this.instance_26 = new lib.元件25复制();
	this.instance_26.setTransform(196,114,1,1,0,0,0,98,70);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(338).to({_off:false},0).to({x:196},6).to({_off:true},9).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(353).to({_off:false},0).wait(14).to({x:-652},13).to({_off:true},1).wait(106));

	// 图层 20
	this.instance_27 = new lib.元件18();
	this.instance_27.setTransform(6,-155,2.454,2.454,0,0,0,42,56);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(287).to({_off:false},0).to({scaleX:1,scaleY:1,x:-177,y:-10},6).to({_off:true},2).wait(192));

	// 元件 23
	this.instance_28 = new lib.元件23();
	this.instance_28.setTransform(6,-392,3,3,0,180,0,42,7);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(272).to({_off:false},0).to({y:-292},3).wait(1).to({y:-302},0).to({_off:true},11).wait(200));

	// 元件 23
	this.instance_29 = new lib.元件23();
	this.instance_29.setTransform(6,70,3,3,0,0,0,42,7);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(272).to({_off:false},0).to({y:-19},3).wait(1).to({y:-9},0).to({_off:true},11).wait(200));

	// 图层 23
	this.instance_30 = new lib.shoe1("synched",0);
	this.instance_30.setTransform(97,42,1,1,0,0,0,63,70);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(234).to({_off:false},0).to({scaleX:3.21,scaleY:3.21,x:92,y:-295,startPosition:1},6).to({scaleX:3,scaleY:3,x:9.4,y:-155.5,mode:"single",startPosition:11},19).wait(1).to({startPosition:11},0).to({_off:true},27).wait(200));

	// 元件 24
	this.instance_31 = new lib.元件24();
	this.instance_31.setTransform(299,-156,3,3,0,0,0,7,35);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(266).to({_off:false},0).to({x:83},3).wait(1).to({x:93},0).to({_off:true},17).wait(200));

	// 元件 24
	this.instance_32 = new lib.元件24();
	this.instance_32.setTransform(-299,-156,3,3,0,0,0,7,35);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(266).to({_off:false},0).to({x:-66},3).wait(1).to({x:-74},0).to({_off:true},17).wait(200));

	// 图层 26
	this.instance_33 = new lib.元件15("synched",0);
	this.instance_33.setTransform(-460,-1,1,1,0,0,0,133,59.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(234).to({_off:false},0).to({x:20},2).wait(1).to({x:12},0).wait(2).to({startPosition:0},0).to({x:0},1).to({x:474},2).to({_off:true},1).wait(244));

	// 图层 27 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_259 = new cjs.Graphics().p("Eg2rAnYMAAAhOvMBtWAAAMAAABOvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_graphics_259,x:3,y:-161}).wait(26).to({graphics:null,x:0,y:0}).wait(202));

	// 图层 28
	this.instance_34 = new lib.jianbanm("synched",0);
	this.instance_34.setTransform(-273,-270,1,1,0,0,0,24.5,24.5);
	this.instance_34._off = true;

	this.instance_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(259).to({_off:false},0).to({_off:true},26).wait(202));

	// 图层 29
	this.instance_35 = new lib.jianban12();
	this.instance_35.setTransform(-347,-187.2);

	this.instance_36 = new lib.jianban13();
	this.instance_36.setTransform(-347,-294.7);

	this.instance_37 = new lib.jianban14();
	this.instance_37.setTransform(-347,-365.2);

	this.instance_38 = new lib.jianban();
	this.instance_38.setTransform(-347,-413.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35}]},257).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36},{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_36},{t:this.instance_37}]},24).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_35}]},1).to({state:[]},1).wait(200));

	// 图层 30
	this.instance_39 = new lib.元件21();
	this.instance_39.setTransform(831,6.5,1,1,0,0,0,254,497);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(234).to({_off:false},0).to({x:181.2},17).wait(36).to({x:-10},6).wait(45).to({x:-1062},6).to({_off:true},1).wait(142));

	// 图层 31
	this.instance_40 = new lib.trackpsd("single",0);
	this.instance_40.setTransform(776.5,42,1,1,0,0,0,308.5,373.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(234).to({_off:false},0).to({x:126.7},17).wait(36).to({startPosition:0},0).to({x:-64.5},6).wait(1).to({mode:"synched",loop:false},0).wait(44).to({startPosition:44},0).to({x:-1116.5,startPosition:50},6).to({_off:true},1).wait(142));

	// 图层 32
	this.instance_41 = new lib.spark3();
	this.instance_41.setTransform(-90,131);

	this.instance_42 = new lib.spark4();
	this.instance_42.setTransform(-83,138);

	this.instance_43 = new lib.元件12("synched",0);
	this.instance_43.setTransform(2,194,1,1,0,0,0,49,49);

	this.instance_44 = new lib.元件13("synched",0);
	this.instance_44.setTransform(7,165,1,1,0,0,0,35,35);

	this.instance_45 = new lib.spark2();
	this.instance_45.setTransform(-16.5,110.5);

	this.instance_46 = new lib.dust1();
	this.instance_46.setTransform(29.5,192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_41,p:{x:-90,y:131}}]},183).to({state:[{t:this.instance_42,p:{x:-83,y:138}}]},2).to({state:[]},1).to({state:[{t:this.instance_43,p:{x:2,y:194}}]},14).to({state:[{t:this.instance_43,p:{x:-68,y:215}},{t:this.instance_44,p:{x:7,y:165}}]},2).to({state:[]},2).to({state:[{t:this.instance_41,p:{x:-115,y:125}},{t:this.instance_45,p:{x:-16.5,y:110.5}}]},7).to({state:[{t:this.instance_45,p:{x:5.5,y:159.5}},{t:this.instance_42,p:{x:-131,y:159}}]},2).to({state:[{t:this.instance_44,p:{x:15,y:195}}]},1).to({state:[]},1).to({state:[{t:this.instance_41,p:{x:-47,y:132}},{t:this.instance_45,p:{x:51.5,y:117.5}}]},8).to({state:[{t:this.instance_45,p:{x:5.5,y:159.5}},{t:this.instance_42,p:{x:-33,y:76}}]},2).to({state:[]},1).to({state:[{t:this.instance_43,p:{x:2,y:194}}]},7).to({state:[{t:this.instance_43,p:{x:43,y:215}},{t:this.instance_44,p:{x:-33,y:150}}]},1).to({state:[{t:this.instance_45,p:{x:68.5,y:116.5}},{t:this.instance_42,p:{x:-29,y:159}}]},1).to({state:[]},2).to({state:[{t:this.instance_46,p:{x:29.5}}]},7).to({state:[]},1).to({state:[{t:this.instance_46,p:{x:13.5}}]},1).to({state:[]},1).wait(240));

	// 斗鸡1
	this.instance_47 = new lib.补间11("synched",0);
	this.instance_47.setTransform(717,157);
	this.instance_47._off = true;

	this.instance_48 = new lib.元件11("synched",0);
	this.instance_48.setTransform(10,125,1,1,0,0,0,73.5,108.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(175).to({_off:false},0).to({x:-17.1},7).to({_off:true,regX:73.5,regY:108.5,x:10,y:125},1).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(182).to({_off:false},1).to({x:401,y:-142},3).to({_off:true},1).wait(300));

	// 图层 34
	this.instance_49 = new lib.元件10("synched",0);
	this.instance_49.setTransform(936,133,1,1,0,0,0,66.5,129.5);
	this.instance_49._off = true;

	this.instance_50 = new lib.元件14("synched",0);
	this.instance_50.setTransform(164,108,1,1,0,0,0,115.5,126);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(175).to({_off:false},0).to({x:97,startPosition:3},8).wait(9).to({startPosition:0},0).to({x:139,y:134,startPosition:2},3).wait(3).to({startPosition:1},0).to({x:69,startPosition:3},2).to({x:-16,y:134.5,startPosition:0},4).to({x:27,y:134,startPosition:3},3).wait(2).to({startPosition:1},0).to({x:-1,startPosition:3},2).to({x:87,y:133.5,startPosition:2},3).to({x:156,y:134,startPosition:0},2).wait(4).to({startPosition:0},0).to({x:75,startPosition:2},3).to({x:143,y:135,startPosition:0},2).to({x:68,y:134,startPosition:2},2).wait(6).to({startPosition:0},0).to({_off:true},1).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(234).to({_off:false},0).to({x:88.5,y:-19},5).to({x:-37,y:115},5).wait(1).to({x:-40,y:93},0).wait(1).to({x:-51,y:112},0).to({_off:true},1).wait(2).to({_off:false,x:-164,y:115.3},0).to({x:-200,y:115.5},1).to({_off:true},1).wait(236));

	// 图层 35
	this.instance_51 = new lib.斗鸡1("synched",0);
	this.instance_51.setTransform(11,248,1,1,0,0,0,108.5,105);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(175).to({_off:false},0).to({x:-121,y:158,startPosition:3},8).wait(9).to({startPosition:0},0).to({x:-155,y:159,startPosition:2},3).wait(3).to({startPosition:1},0).to({x:-57,startPosition:3},2).to({x:-142,y:159.5,startPosition:0},4).to({x:-179,y:159,startPosition:3},3).wait(2).to({startPosition:1},0).to({x:-109,startPosition:3},2).to({x:-54,startPosition:2},3).to({x:-152,startPosition:0},2).wait(4).to({startPosition:0},0).to({x:-26,startPosition:2},3).to({x:-47,startPosition:0},2).wait(2).to({x:-92,y:152,startPosition:2},0).to({x:-187,y:159,startPosition:0},3).wait(1).to({x:-175,startPosition:1},0).to({x:-24,startPosition:3},2).wait(1).to({startPosition:1},0).to({x:-635.6},16).to({x:-673.8,startPosition:2},1).to({_off:true},1).wait(235));

	// 围观5-1.png
	this.instance_52 = new lib.补间13("synched",0);
	this.instance_52.setTransform(1086,351);
	this.instance_52._off = true;

	this.instance_53 = new lib.补间14("synched",0);
	this.instance_53.setTransform(247,351);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(175).to({_off:false},0).to({_off:true,x:247},8).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(175).to({_off:false},8).wait(51).to({startPosition:0},0).to({x:-364.6},16).to({x:-402.8},1).to({_off:true},1).wait(235));

	// 围观4-1.png
	this.instance_54 = new lib.补间15("synched",0);
	this.instance_54.setTransform(624,398);
	this.instance_54._off = true;

	this.instance_55 = new lib.补间16("synched",0);
	this.instance_55.setTransform(-215,398);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(175).to({_off:false},0).to({_off:true,x:-215},8).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(175).to({_off:false},8).wait(51).to({startPosition:0},0).to({x:-826.6},16).to({x:-864.8},1).to({_off:true},1).wait(235));

	// 组 10
	this.instance_56 = new lib.补间17("synched",0);
	this.instance_56.setTransform(715,-83);
	this.instance_56._off = true;

	this.instance_57 = new lib.补间18("synched",0);
	this.instance_57.setTransform(-124,-83);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(175).to({_off:false},0).to({_off:true,x:-124},8).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(175).to({_off:false},8).wait(51).to({startPosition:0},0).to({x:-735.6},16).to({x:-773.8},1).to({_off:true},1).wait(235));

	// 组 2
	this.instance_58 = new lib.补间19("synched",0);
	this.instance_58.setTransform(967,-112);
	this.instance_58._off = true;

	this.instance_59 = new lib.补间20("synched",0);
	this.instance_59.setTransform(128,-112);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(175).to({_off:false},0).to({_off:true,x:128},8).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(175).to({_off:false},8).wait(51).to({startPosition:0},0).to({x:-483.6},16).to({x:-521.8},1).to({_off:true},1).wait(235));

	// 图层 40
	this.instance_60 = new lib.光环m("synched",0);
	this.instance_60.setTransform(3.5,-234.2,1,1,0,0,0,168.5,175.3);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(144).to({_off:false},0).to({_off:true},23).wait(320));

	// 图层 15
	this.instance_61 = new lib.越野兔2();
	this.instance_61.setTransform(17,-258,1,1,0,0,0,80.5,133);
	this.instance_61.alpha = 0;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(142).to({_off:false},0).to({alpha:1},2).wait(1).to({alpha:0},2).wait(1).to({alpha:1},2).wait(1).to({alpha:0},2).wait(1).to({alpha:1},2).wait(1).to({alpha:0},6).to({_off:true},1).wait(323));

	// 图层 41
	this.instance_62 = new lib.冰3();
	this.instance_62.setTransform(131,-50,1,1,0,0,0,31.5,56);

	this.instance_63 = new lib.冰棍m1();
	this.instance_63.setTransform(222.5,-85,1,1,0,0,0,52.5,49);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_62,p:{x:131,y:-50}}]},117).to({state:[{t:this.instance_62,p:{x:114.5,y:-15}}]},7).to({state:[{t:this.instance_63}]},8).to({state:[{t:this.instance_63}]},9).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},6).to({state:[]},1).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(132).to({_off:false},0).to({x:-85,y:-296},9).wait(1).to({mode:"single",startPosition:0},0).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({startPosition:0},2).wait(1).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(323));

	// 图层 42
	this.instance_64 = new lib.越野兔1();
	this.instance_64.setTransform(831,157,1,1,0,0,0,80.5,133);
	this.instance_64._off = true;

	this.instance_65 = new lib.越野兔3();
	this.instance_65.setTransform(17,-258,1,1,0,0,0,80.5,133);
	this.instance_65._off = true;

	this.instance_66 = new lib.斗鸡1("synched",0);
	this.instance_66.setTransform(11,248,1,1,0,0,0,108.5,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_64}]},132).to({state:[{t:this.instance_64}]},9).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},14).to({state:[{t:this.instance_65}]},8).to({state:[{t:this.instance_65}]},6).to({state:[{t:this.instance_66}]},1).to({state:[]},4).wait(312));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(132).to({_off:false},0).to({x:17,y:-258},9).wait(1).to({_off:true},14).wait(331));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(156).to({_off:false},0).wait(8).to({y:148},6,cjs.Ease.get(-1)).to({_off:true},1).wait(316));

	// 图层 44
	this.instance_67 = new lib.元件3();
	this.instance_67.setTransform(0,0,1,1,0,0,0,320,568);
	this.instance_67.alpha = 0;
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(141).to({_off:false},0).to({alpha:1},3).wait(20).to({alpha:0},3).to({_off:true},1).wait(319));

	// 元件 2
	this.instance_68 = new lib.元件2();
	this.instance_68.setTransform(839.5,286.5,1,1,0,0,0,255.5,24.5);
	this.instance_68._off = true;

	this.instance_69 = new lib.元件9("synched",0);
	this.instance_69.setTransform(0,307.5,1,1,0,0,0,259,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_68}]},132).to({state:[{t:this.instance_68}]},9).to({state:[{t:this.instance_69}]},30).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_68}]},8).to({state:[]},1).wait(303));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(132).to({_off:false},0).to({x:3.5},9).to({_off:true},30).wait(2).to({_off:false},0).wait(2).to({x:-835.5},8).to({_off:true},1).wait(303));

	// 元件 1
	this.instance_70 = new lib.元件1();
	this.instance_70.setTransform(846.5,237.5,1,1,0,0,0,290.5,108.5);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(132).to({_off:false},0).to({x:10.5},9).wait(34).to({x:-828.5},8).to({_off:true},1).wait(303));

	// 图层 47
	this.instance_71 = new lib.rr12();
	this.instance_71.setTransform(104,-43);

	this.instance_72 = new lib.补间5("synched",0);
	this.instance_72.setTransform(106.5,55);
	this.instance_72._off = true;

	this.instance_73 = new lib.补间6("synched",0);
	this.instance_73.setTransform(-729,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_71}]},124).to({state:[{t:this.instance_72}]},8).to({state:[{t:this.instance_73}]},9).to({state:[]},1).wait(345));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(132).to({_off:false},0).to({_off:true,x:-729},9).wait(346));

	// 图层 48
	this.instance_74 = new lib.arr();
	this.instance_74.setTransform(-34.5,-332.5);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(99).to({_off:false},0).wait(5).to({x:66.5},0).wait(2).to({x:170.5},0).to({_off:true},11).wait(370));

	// 图层 49
	this.instance_75 = new lib.冰3();
	this.instance_75.setTransform(187.5,-246,1,1,0,0,0,31.5,56);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(99).to({_off:false},0).to({_off:true},9).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},3).wait(370));

	// 图层 50
	this.instance_76 = new lib.冰2();
	this.instance_76.setTransform(85,-246,1,1,0,0,0,31.5,56);

	this.instance_77 = new lib.冰1();
	this.instance_77.setTransform(-17.5,-246,1,1,0,0,0,31.5,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77},{t:this.instance_76}]},99).to({state:[]},18).wait(370));

	// 图层 51
	this.instance_78 = new lib.话框();
	this.instance_78.setTransform(123,-137,0.35,0.35,0,0,0,178.5,136.3);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(97).to({_off:false},0).to({regY:136.5,scaleX:1,scaleY:1,x:80.5,y:-228.5},2).to({_off:true},18).wait(370));

	// 图层 52
	this.instance_79 = new lib.coin1();
	this.instance_79.setTransform(78,-67);
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(91).to({_off:false},0).to({_off:true},17).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},3).wait(370));

	// 抛1-1.png
	this.instance_80 = new lib.补间3("synched",0);
	this.instance_80.setTransform(835,55);
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(76).to({_off:false},0).to({x:190},15).to({_off:true},33).wait(363));

	// 位图 1
	this.instance_81 = new lib.补间2("synched",0);
	this.instance_81.setTransform(520,210);
	this.instance_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(76).to({_off:false},0).to({x:-125},15).wait(41).to({x:-287},0).to({x:-1122.5},9).to({_off:true},1).wait(345));

	// 冰棍姨
	this.instance_82 = new lib.冰棍姨();
	this.instance_82.setTransform(643,20,1,1,0,0,0,91,133);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(76).to({_off:false},0).to({x:-2},15).wait(41).to({x:-164},0).to({x:-999.5},9).to({_off:true},1).wait(345));

	// 冰棍箱
	this.instance_83 = new lib.冰棍箱();
	this.instance_83.setTransform(472.5,6,1,1,0,0,0,87.5,147);
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(76).to({_off:false},0).to({x:-172.5},15).wait(41).to({x:-334.5},0).to({x:-1170},9).to({_off:true},1).wait(345));

	// 图层 57
	this.instance_84 = new lib.圈2();
	this.instance_84.setTransform(-187,76,1,1,0,0,0,147,98);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(12).to({_off:false},0).wait(15).to({y:-11},5).wait(6).to({y:102},3).to({y:124},3).wait(10).to({y:31},5).wait(17).to({x:477,y:-141},8).to({_off:true},1).wait(402));

	// 图层 58
	this.instance_85 = new lib.圈1();
	this.instance_85.setTransform(109,76,1,1,0,0,0,147,98);
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(12).to({_off:false},0).wait(7).to({x:107,y:-11},5).wait(6).to({y:109},3).to({y:131},3).wait(11).to({y:31},5).wait(24).to({x:290,y:167},4).to({_off:true},1).wait(406));

	// 图层 60
	this.instance_86 = new lib.BG3();
	this.instance_86.setTransform(6588.1,2.5,1,1,0,0,0,5250,570.5);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(338).to({_off:false},0).to({x:5536.1},6).wait(23).to({x:4688.1},13).wait(3).to({x:4120.1},3).wait(12).to({x:3557.1},3).wait(5).to({x:4236.1},3).wait(9).to({x:4638.1},4).wait(5).to({x:4151.1},3).wait(7).to({x:3653.1},5).wait(4).to({x:4144.1},3).wait(6).to({x:4623.6},3).wait(3).to({x:4098.6},4).wait(22));

	// 图层 61
	this.instance_87 = new lib.BG2();
	this.instance_87.setTransform(5859.7,2.5,1,1,0,0,0,5250,570.5);
	this.instance_87._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(131).to({_off:false},0).to({x:4862.1},9).wait(35).to({x:4023.1},8).wait(51).to({x:3411.5},16).to({x:3373.3},1).wait(36).to({x:3182.1},6).wait(45).to({x:2129.1},6).wait(23).to({x:1281.1},13).to({_off:true},1).wait(106));

	// 图层 62
	this.instance_88 = new lib.BG();
	this.instance_88.setTransform(4874,2.5,1,1,0,0,0,5250,570.5);
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(12).to({_off:false},0).wait(1).to({regX:2155.7,x:1737.7},0).wait(1).to({x:1695.6},0).wait(1).to({x:1653.5},0).wait(1).to({x:1611.4},0).wait(1).to({x:1569.3},0).wait(1).to({x:1527.2},0).wait(1).to({x:1485.1},0).wait(1).to({x:1443},0).wait(1).to({x:1401},0).wait(1).to({x:1358.9},0).wait(1).to({x:1316.8},0).wait(1).to({x:1274.7},0).wait(1).to({x:1232.6},0).wait(1).to({x:1190.5},0).wait(1).to({x:1148.4},0).wait(1).to({x:1106.3},0).wait(1).to({x:1064.2},0).wait(1).to({x:1022.2},0).wait(1).to({x:980.1},0).wait(1).to({x:938},0).wait(1).to({x:895.9},0).wait(1).to({x:853.8},0).wait(1).to({x:811.7},0).wait(1).to({x:769.6},0).wait(1).to({x:727.5},0).wait(1).to({x:685.4},0).wait(1).to({x:643.4},0).wait(1).to({x:601.3},0).wait(1).to({x:559.2},0).wait(1).to({x:517.1},0).wait(1).to({x:475},0).wait(1).to({x:432.9},0).wait(1).to({x:390.8},0).wait(1).to({x:348.7},0).wait(1).to({x:306.6},0).wait(1).to({x:264.6},0).wait(1).to({x:222.5},0).wait(1).to({x:180.4},0).wait(1).to({x:138.3},0).wait(1).to({x:96.2},0).wait(1).to({x:54.1},0).wait(1).to({x:12},0).wait(1).to({x:-30.1},0).wait(1).to({x:-72.1},0).wait(1).to({x:-114.2},0).wait(1).to({x:-156.3},0).wait(1).to({x:-198.4},0).wait(1).to({x:-240.5},0).wait(1).to({x:-282.6},0).wait(1).to({x:-324.7},0).wait(1).to({x:-366.8},0).wait(1).to({x:-408.9},0).wait(1).to({x:-450.9},0).wait(1).to({x:-493},0).wait(1).to({x:-535.1},0).wait(1).to({x:-577.2},0).wait(1).to({x:-619.3},0).wait(1).to({x:-661.4},0).wait(1).to({x:-703.5},0).wait(1).to({x:-745.6},0).wait(1).to({x:-787.7},0).wait(1).to({x:-829.7},0).wait(1).to({x:-871.8},0).wait(1).to({x:-913.9},0).wait(1).to({x:-956},0).wait(1).to({x:-998.1},0).wait(1).to({x:-1040.2},0).wait(1).to({x:-1082.3},0).wait(1).to({x:-1124.4},0).wait(1).to({x:-1166.5},0).wait(1).to({x:-1208.5},0).wait(1).to({x:-1250.6},0).wait(1).to({x:-1292.7},0).wait(1).to({x:-1334.8},0).wait(1).to({x:-1376.9},0).wait(1).to({x:-1419},0).wait(1).to({x:-1461.1},0).wait(1).to({x:-1503.2},0).wait(1).to({regX:5250,x:1549},0).wait(40).to({x:551},9).to({_off:true},2).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.2,-572.2,657,1141);


// stage content:



(lib.sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.sc2_1();
	this.instance.setTransform(2577.1,570.5,1,1,0,0,0,2249.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.6,563.8,657,1141);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;