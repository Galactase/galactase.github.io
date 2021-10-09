(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1920,1080]]},
		{name:"index_atlas_2", frames: [[420,263,400,162],[1224,373,400,162],[822,263,400,162],[0,1411,1869,237],[420,0,1005,139],[1451,0,418,208],[1451,210,428,161],[1626,373,201,120],[420,141,1029,120],[0,0,418,1409]]}
];


// symbols:



(lib.Background = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ButtonDown = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ButtonOver = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_94 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_95 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_96 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_97 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_98 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_99 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.change = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.lab = function() {
	this.initialize(img.lab);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Sleeping1 = function() {
	this.initialize(img.Sleeping1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Sleeping2 = function() {
	this.initialize(img.Sleeping2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Sleeping3 = function() {
	this.initialize(img.Sleeping3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Sleeping4 = function() {
	this.initialize(img.Sleeping4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake1 = function() {
	this.initialize(img.Wake1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake2 = function() {
	this.initialize(img.Wake2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake3 = function() {
	this.initialize(img.Wake3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake4 = function() {
	this.initialize(img.Wake4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake5 = function() {
	this.initialize(img.Wake5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Wake_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_98();
	this.instance.parent = this;
	this.instance.setTransform(151.35,-584.15,0.6778,0.6778);

	this.instance_1 = new lib.Wake1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1436,-750);

	this.instance_2 = new lib.Wake2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1436,-750);

	this.instance_3 = new lib.Wake3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1436,-750);

	this.instance_4 = new lib.Wake4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1436,-750);

	this.instance_5 = new lib.CachedTexturedBitmap_99();
	this.instance_5.parent = this;
	this.instance_5.setTransform(117.6,-614,0.6778,0.6778);

	this.instance_6 = new lib.Wake5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1436,-750);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.instance_1 = new lib.ButtonOver();
	this.instance_1.parent = this;

	this.instance_2 = new lib.ButtonDown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,401,163);


(lib.Sleeping_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sleeping1();
	this.instance.parent = this;

	this.instance_1 = new lib.Sleeping2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Sleeping3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Sleeping4();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.CachedTexturedBitmap_96();
	this.instance.parent = this;
	this.instance.setTransform(855.5,487.95,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_95();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1417.4,1010.45,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_94();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491.7,15.5,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_97();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1664.3,979.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.instance_1 = new lib.lab();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.6685,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_UI_Elements = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI_Elements
	this.playBtn = new lib.Button_1();
	this.playBtn.name = "playBtn";
	this.playBtn.parent = this;
	this.playBtn.setTransform(960,540,1,1,0,0,0,200,81);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 2);

	this.wakeBtn = new lib.Button_1();
	this.wakeBtn.name = "wakeBtn";
	this.wakeBtn.parent = this;
	this.wakeBtn.setTransform(1771.2,1019.75,0.7438,0.7438,0,0,0,200,81);
	new cjs.ButtonHelper(this.wakeBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBtn}]}).to({state:[{t:this.wakeBtn}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Wake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Wake_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1436,-750,2872,1500);


(lib.Sleeping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Sleeping_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1436,750,1,1,0,0,0,1436,750);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2872,1500);


(lib.Scene_1_Mila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mila
	this.instance = new lib.change();
	this.instance.parent = this;
	this.instance.setTransform(125,10,0.7521,0.7521);

	this.milaSleep = new lib.Sleeping();
	this.milaSleep.name = "milaSleep";
	this.milaSleep.parent = this;
	this.milaSleep.setTransform(964.6,526.75,0.7377,0.7377,0,0,0,1436,750);

	this.milaWake = new lib.Wake();
	this.milaWake.name = "milaWake";
	this.milaWake.parent = this;
	this.milaWake.setTransform(964.6,526.75,0.7377,0.7377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.milaSleep}]},1).to({state:[{t:this.milaWake}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.TransformingMilaR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{menuMain:0,tutorial1:1,tutorial2:3,Background:0});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.playBtn = this.UI_Elements.playBtn;
		let root = this;
		this.stop();
		this.playBtn.addEventListener("click", function() {
			root.gotoAndStop("tutorial1");
			root.milaSleep.play();
		})
	}
	this.frame_1 = function() {
		this.playBtn = undefined;this.milaSleep = this.Mila.milaSleep;
		this.wakeBtn = this.UI_Elements.wakeBtn;
		let root = this;
		this.wakeBtn.addEventListener("click", function() {
			root.gotoAndStop("tutorial2");
			root.milaWake.play();
		})
	}
	this.frame_3 = function() {
		this.milaSleep = undefined;this.milaWake = this.Mila.milaWake;
	}
	this.frame_4 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Mila_obj_
	this.Mila = new lib.Scene_1_Mila();
	this.Mila.name = "Mila";
	this.Mila.parent = this;
	this.Mila.setTransform(282.2,539.9,1,1,0,0,0,282.2,539.9);
	this.Mila.depth = 0;
	this.Mila.isAttachedToCamera = 0
	this.Mila.isAttachedToMask = 0
	this.Mila.layerDepth = 0
	this.Mila.layerIndex = 0
	this.Mila.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Mila).wait(5));

	// Text_obj_
	this.Text = new lib.Scene_1_Text();
	this.Text.name = "Text";
	this.Text.parent = this;
	this.Text.setTransform(1205.8,547.7,1,1,0,0,0,1205.8,547.7);
	this.Text.depth = 0;
	this.Text.isAttachedToCamera = 0
	this.Text.isAttachedToMask = 0
	this.Text.layerDepth = 0
	this.Text.layerIndex = 1
	this.Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(1).to({_off:true},1).wait(3));

	// UI_Elements_obj_
	this.UI_Elements = new lib.Scene_1_UI_Elements();
	this.UI_Elements.name = "UI_Elements";
	this.UI_Elements.parent = this;
	this.UI_Elements.setTransform(960.5,539.5,1,1,0,0,0,960.5,539.5);
	this.UI_Elements.depth = 0;
	this.UI_Elements.isAttachedToCamera = 0
	this.UI_Elements.isAttachedToMask = 0
	this.UI_Elements.layerDepth = 0
	this.UI_Elements.layerIndex = 2
	this.UI_Elements.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.UI_Elements).wait(1).to({_off:true},1).wait(3));

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.parent = this;
	this.Background.setTransform(960,541,1,1,0,0,0,960,541);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 3
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(865.3,513.5,1158.6000000000001,567.5);
// library properties:
lib.properties = {
	id: '12827D51C0170A42B35FF516742CF1CA',
	width: 1920,
	height: 1080,
	fps: 8,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lab.png", id:"lab"},
		{src:"images/Sleeping1.png", id:"Sleeping1"},
		{src:"images/Sleeping2.png", id:"Sleeping2"},
		{src:"images/Sleeping3.png", id:"Sleeping3"},
		{src:"images/Sleeping4.png", id:"Sleeping4"},
		{src:"images/Wake1.png", id:"Wake1"},
		{src:"images/Wake2.png", id:"Wake2"},
		{src:"images/Wake3.png", id:"Wake3"},
		{src:"images/Wake4.png", id:"Wake4"},
		{src:"images/Wake5.png", id:"Wake5"},
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"}
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
an.compositions['12827D51C0170A42B35FF516742CF1CA'] = {
	getStage: function() { return exportRoot.getStage(); },
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;