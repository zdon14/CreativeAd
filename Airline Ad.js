(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Airline Ad_atlas_1", frames: [[1230,1321,106,92],[1230,1218,101,101],[862,1358,106,92],[970,1358,106,92],[862,1218,182,138],[1078,1358,106,92],[1046,1218,182,138],[1186,1358,20,68],[0,1218,860,368],[0,0,1920,1216]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Plane = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sky = function() {
	this.initialize(ss["Airline Ad_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Plane();
	this.instance.setTransform(30,0,0.2442,0.2663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(30,0,210.1,98), null);


(lib.ButtonSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(1,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-20.45,-9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(1,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-20.45,-9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-9,91,69);


(lib.PlaneSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(247,313.5,1,1,0,0,0,160.3,48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:135,regY:49,scaleX:1.0022,scaleY:0.9998,skewY:-0.418,x:232.25,y:307.45},0).wait(1).to({scaleX:1.0043,scaleY:0.9996,skewY:-0.8359,x:242.75,y:300.7},0).wait(1).to({scaleX:1.0065,scaleY:0.9994,skewY:-1.2539,x:253.3,y:294},0).wait(1).to({scaleX:1.0087,scaleY:0.9992,skewY:-1.6719,x:263.85,y:287.3},0).wait(1).to({scaleX:1.0108,scaleY:0.9991,skewY:-2.0899,x:274.4,y:280.55},0).wait(1).to({scaleX:1.013,scaleY:0.9989,skewY:-2.5078,x:284.95,y:273.8},0).wait(1).to({scaleX:1.0152,scaleY:0.9987,skewY:-2.9258,x:295.5,y:267.1},0).wait(1).to({scaleX:1.0173,scaleY:0.9985,skewY:-3.3438,x:306.1,y:260.4},0).wait(1).to({scaleX:1.0195,scaleY:0.9983,skewY:-3.7618,x:316.65,y:253.6},0).wait(1).to({scaleX:1.0217,scaleY:0.9981,skewY:-4.1797,x:327.2,y:246.95},0).wait(1).to({scaleX:1.0238,scaleY:0.9979,skewY:-4.5977,x:337.75,y:240.2},0).wait(1).to({scaleX:1.026,scaleY:0.9977,skewY:-5.0157,x:348.3,y:233.5},0).wait(1).to({scaleX:1.0281,scaleY:0.9975,skewY:-5.4337,x:358.85,y:226.8},0).wait(1).to({scaleX:1.0303,scaleY:0.9974,skewY:-5.8516,x:369.45,y:220},0).wait(1).to({scaleX:1.0325,scaleY:0.9972,skewY:-6.2696,x:380,y:213.35},0).wait(1).to({scaleX:1.0346,scaleY:0.997,skewY:-6.6876,x:390.55,y:206.65},0).wait(1).to({scaleX:1.0368,scaleY:0.9968,skewY:-7.1056,x:401.15,y:199.95},0).wait(1).to({scaleX:1.039,scaleY:0.9966,skewY:-7.5235,x:411.7,y:193.2},0).wait(1).to({scaleX:1.0411,scaleY:0.9964,skewY:-7.9415,x:422.3,y:186.45},0).wait(1).to({scaleX:1.0433,scaleY:0.9962,skewY:-8.3595,x:432.85,y:179.7},0).wait(1).to({scaleX:1.0455,scaleY:0.996,skewY:-8.7775,x:443.45,y:173.05},0).wait(1).to({scaleX:1.0476,scaleY:0.9958,skewY:-9.1954,x:454,y:166.35},0).wait(1).to({scaleX:1.0498,scaleY:0.9957,skewY:-9.6134,x:464.6,y:159.65},0).wait(1).to({scaleX:1.0519,scaleY:0.9955,skewY:-10.0314,x:475.2,y:152.9},0).wait(1).to({scaleX:1.0541,scaleY:0.9953,skewY:-10.4494,x:485.75,y:146.2},0).wait(1).to({scaleX:1.0563,scaleY:0.9951,skewY:-10.8673,x:496.35,y:139.45},0).wait(1).to({scaleX:1.0584,scaleY:0.9949,skewY:-11.2853,x:506.9,y:132.8},0).wait(1).to({scaleX:1.0606,scaleY:0.9947,skewY:-11.7033,x:517.5,y:126.05},0).wait(1).to({scaleX:1.0628,scaleY:0.9945,skewY:-12.1213,x:528.05,y:119.4},0).wait(1).to({scaleX:1.0649,scaleY:0.9943,skewY:-12.5392,x:538.7,y:112.65},0).wait(1).to({scaleX:1.0671,scaleY:0.9941,skewY:-12.9572,x:549.3,y:105.9},0).wait(1).to({scaleX:1.0693,scaleY:0.994,skewY:-13.3752,x:559.85,y:99.2},0).wait(1).to({scaleX:1.0714,scaleY:0.9938,skewY:-13.7932,x:570.45,y:92.5},0).wait(1).to({scaleX:1.0736,scaleY:0.9936,skewY:-14.2111,x:581.05,y:85.8},0).wait(1).to({scaleX:1.0758,scaleY:0.9934,skewY:-14.6291,x:591.6,y:79.1},0).wait(1).to({scaleX:1.0779,scaleY:0.9932,skewY:-15.0471,x:602.25,y:72.35},0).wait(1).to({scaleX:1.0801,scaleY:0.993,skewY:-15.4651,x:612.85,y:65.65},0).wait(1).to({scaleX:1.0822,scaleY:0.9928,skewY:-15.883,x:623.4,y:58.95},0).wait(1).to({scaleX:1.0844,scaleY:0.9926,skewY:-16.301,x:634.05,y:52.3},0).wait(1).to({scaleX:1.0866,scaleY:0.9924,skewY:-16.719,x:644.65,y:45.6},0).wait(1).to({scaleX:1.0887,scaleY:0.9923,skewY:-17.137,x:655.25,y:38.85},0).wait(1).to({scaleX:1.0909,scaleY:0.9921,skewY:-17.555,x:665.85,y:32.2},0).wait(1).to({scaleX:1.0931,scaleY:0.9919,skewY:-17.9729,x:676.45,y:25.45},0).wait(1).to({scaleX:1.0952,scaleY:0.9917,skewY:-18.3909,x:687.1,y:18.75},0).wait(1).to({scaleX:1.0974,scaleY:0.9915,skewY:-18.8089,x:697.7,y:12.1},0).wait(1).to({scaleX:1.0996,scaleY:0.9913,skewY:-19.2268,x:708.3,y:5.3},0).wait(1).to({scaleX:1.1017,scaleY:0.9911,skewY:-19.6448,x:718.9,y:-1.35},0).wait(1).to({scaleX:1.1039,scaleY:0.9909,skewY:-20.0628,x:729.55,y:-8},0).wait(1).to({scaleX:1.106,scaleY:0.9907,skewY:-20.4808,x:740.2,y:-14.7},0).wait(1).to({scaleX:1.1082,scaleY:0.9906,skewY:-20.8987,x:750.75,y:-21.4},0).wait(1).to({scaleX:1.1104,scaleY:0.9904,skewY:-21.3167,x:761.4,y:-28.1},0).wait(1).to({scaleX:1.1125,scaleY:0.9902,skewY:-21.7347,x:772,y:-34.8},0).wait(1).to({scaleX:1.1147,scaleY:0.99,skewY:-22.1527,x:782.65,y:-41.55},0).wait(1).to({scaleX:1.1169,scaleY:0.9898,skewY:-22.5706,x:793.3,y:-48.2},0).wait(1).to({scaleX:1.119,scaleY:0.9896,skewY:-22.9886,x:803.9,y:-54.9},0).wait(1).to({scaleX:1.1212,scaleY:0.9894,skewY:-23.4066,x:814.55,y:-61.6},0).wait(1).to({scaleX:1.1234,scaleY:0.9892,skewY:-23.8246,x:825.2,y:-68.35},0).wait(1).to({scaleX:1.1255,scaleY:0.989,skewY:-24.2425,x:835.8,y:-75.05},0).wait(1).to({scaleX:1.1277,scaleY:0.9889,skewY:-24.6605,x:846.45,y:-81.7},0).wait(1).to({scaleX:1.1298,scaleY:0.9887,skewY:-25.0785,x:857.1,y:-88.4},0).wait(1).to({scaleX:1.132,scaleY:0.9885,skewY:-25.4965,x:867.75,y:-95.1},0).wait(1).to({scaleX:1.1342,scaleY:0.9883,skewY:-25.9144,x:878.35,y:-101.8},0).wait(1).to({scaleX:1.1363,scaleY:0.9881,skewY:-26.3324,x:889,y:-108.55},0).wait(1).to({scaleX:1.1385,scaleY:0.9879,skewY:-26.7504,x:899.65,y:-115.25},0).wait(1).to({scaleX:1.1407,scaleY:0.9877,skewY:-27.1684,x:910.3,y:-121.9},0).wait(1).to({scaleX:1.1428,scaleY:0.9875,skewY:-27.5863,x:920.95,y:-128.6},0).wait(1).to({scaleX:1.145,scaleY:0.9873,skewY:-28.0043,x:931.55,y:-135.3},0).wait(1).to({scaleX:1.1472,scaleY:0.9872,skewY:-28.4223,x:942.25,y:-142.05},0).wait(1).to({scaleX:1.1493,scaleY:0.987,skewY:-28.8403,x:952.9,y:-148.75},0).wait(1).to({scaleX:1.1515,scaleY:0.9868,skewY:-29.2582,x:963.55,y:-155.4},0).wait(1).to({scaleX:1.1537,scaleY:0.9866,skewY:-29.6762,x:974.2,y:-162.1},0).wait(1).to({scaleX:1.1558,scaleY:0.9864,skewY:-30.0942,x:984.85,y:-168.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.7,-277.9,973.2,641.0999999999999);


// stage content:
(lib.AirlineAd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Book.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.aa.com/booking/find-flights');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.Book = new lib.ButtonSymbol();
	this.Book.name = "Book";
	this.Book.setTransform(251.95,217);
	new cjs.ButtonHelper(this.Book, 0, 1, 2, false, new lib.ButtonSymbol(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Book).wait(1));

	// Text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-425.9,126.6,0.5,0.5);

	this.text = new cjs.Text(" Save 15%\nFly American Airlines", "normal 400 29px 'Righteous'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(118.5467,29.2,1.3674,0.659);
	if(!lib.properties.webfonts['Righteous']) {
		lib.webFontTxtInst['Righteous'] = lib.webFontTxtInst['Righteous'] || [];
		lib.webFontTxtInst['Righteous'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

	// Plane
	this.instance_1 = new lib.PlaneSymbol();
	this.instance_1.setTransform(-127,116.15,0.6002,0.6735,0,0,0,105,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// SkyBG
	this.instance_2 = new lib.sky();
	this.instance_2.setTransform(-17,0,0.2032,0.2567);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,140,631,187.7);
// library properties:
lib.properties = {
	id: 'FF88EA0C8CE73A4793E411E07DE4FCE7',
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Airline Ad_atlas_1.png?1677505713639", id:"Airline Ad_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FF88EA0C8CE73A4793E411E07DE4FCE7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;