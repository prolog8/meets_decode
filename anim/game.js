enchant();
		  
window.onload = function(){
	
    var game = new Core(450, 450);
    game.fps = 25;
	
	game.preload("bg_pink.png");
	game.preload("b41.png");
	game.preload("m41.png");
	game.preload("a41.png");
	game.preload("k41.png");
	
	game.preload("b40.png");
	game.preload("m40.png");
	game.preload("a40.png");
	game.preload("k40.png");

	game.preload("b69.png");
	game.preload("m69.png");
	game.preload("a69.png");
	game.preload("k69.png");
	
	
	game.keybind(65, 'left');	
	game.keybind(68, 'right');
	game.keybind(87, 'up');
	game.keybind(83, 'down');

	
    game.onload = function(){
		
		
		//*************************************************
		// Common functions
		//*************************************************
		function RndInt(a,b){return Math.floor(Math.random() * (b - a + 1)) + a; }
		function Deg2Rad(angle){return -(angle * 3.14159 / 180);}
		var scale = (number, [inMin, inMax], [outMin, outMax]) => {
			return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
		}
		
		function HandleKeyPress(){
			main.keyL=main.keyR=0;
			if(game.input.left && main.keyRelease)main.keyL=1, main.keyRelease=0;
			if(game.input.right && main.keyRelease)main.keyR=1, main.keyRelease=0;
			if(!game.input.left && !game.input.right)main.keyRelease=1;
		}
		
		function RelKey(){
			if(!game.input.left && !game.input.down && !game.input.right) keyRelease = true; 
			else  keyRelease = false; 
		}
		
		function mkSprite(W,H,IMG){
			var o = new Sprite(W,H);
			o.image = game.assets[IMG];
			
			o.XY = function(x,y){o.x=x;o.y=y; return this}
			o.face = function(f){o.scaleX=f; return this}
			o.fra = function(f){o.frame=f; return this}
			o.hide = function(f){o.y=999; return this}
			o.Rot = function(angle){var r=Deg2Rad(angle); o.vx = Math.cos(r); o.vy = Math.sin(r); return this;}
			o.lookTo = function(X,Y){ var r = Math.atan2(Y-o.y, X-o.x); o.vx = Math.cos(r); o.vy = Math.sin(r); return this;}
			
			o.Front = function(a){
				game.rootScene.removeChild(o);
				game.rootScene.insertBefore(o,a);
			}
			
			game.rootScene.addChild(o);
			game.rootScene.sprites.push(o);
			
			return o;
		}

		//*************************************************
		// Create Actors & Objects
		//*************************************************
		var main = new Sprite(450, 450);
		main.image = game.assets['bg_pink.png'];
		game.rootScene.addChild(main);
		//game.rootScene.backgroundColor = '#FF00FF'
		game.rootScene.sprites = [];
		
	
		function ClearAll(){ game.rootScene.sprites.forEach(o=>{o.y=99}) }
		
		var buff = new Sprite(450,450)
		buff.image = new Surface(450,450)
		game.rootScene.addChild(buff)
		
		//console.log(buff.image.context)

		
		function loadSpriteSet(idx, point){
			var o = {}
			
			o.b = new Sprite(44,50)
			o.b.image = game.assets['b'+idx+'.png']

			o.m = new Sprite(44,16)
			o.m.image = game.assets['m'+idx+'.png']

			o.k = new Sprite(44,26)
			o.k.image = game.assets['k'+idx+'.png']

			o.a = new Sprite(44,38)
			o.a.image = game.assets['a'+idx+'.png']
			//o.a.scale(-1,1)
			//o.a.scaleX = -3
			//console.log(o.a.scaleX)
			
			o.point = point

			o.x = o.y = 0
			o.dir = 1
			o.vx = o.vy = 0
			o.state = o.cur = 0
			
			o.b_frame = 0
			o.m_frame = 0
			o.a_frame = 0
			o.k_frame = 0
			return o
		}
		
		function draw(x,y, o, M, A, K){
			var BF = o.b_frame
			var AF = o.a_frame
			var MF = o.m_frame
			var KF = o.k_frame
			var dir = o.dir
			var Y = o.point[BF][0]
			var R = o.point[BF][1]
			var B = o.point[BF][2]
			
			//o.b.scaleX = dir
			//o.m.scaleX = dir
			//o.a.scaleX = dir
			//o.k.scaleX = dir
			
			if(o.dir<0){
				//o.a.image.scaleX = dir
			} else {
				//o.a.image.scaleX = dir
			}
			
			
			
			//o.b.scaleX = -1
			//A.a.scaleX = -1
			//A.a.image.scaleX = -1
			
			//buff.scaleX = -1
			
			//console.log(dir)
			
			var off_eye = 0
			if(BF>=4 && BF<=7) off_eye = -2
			
			
			if(dir>0){
				buff.image.draw(K.k.image, KF*44,0,44,26,  x,y+B-26/2,44,26)
				buff.image.draw(o.b.image, BF*44,0,44,50,  x,y,44,50)
				buff.image.draw(M.m.image, MF*44,0,44,16,  x+off_eye,y+Y-16/2,44,16)
				buff.image.draw(A.a.image, AF*44,0,44,38,  x,y+R-38/2,44,38)
			} else {
				
				buff.image.context.save()
				buff.image.context.scale(-1,1)

				buff.image.draw(K.k.image, KF*44,0,44,26,  x*-1-44,y+B-26/2,44,26)
				buff.image.draw(o.b.image, BF*44,0,44,50,  x*-1-44,y,44,50)
				buff.image.draw(M.m.image, MF*44,0,44,16,  x*-1-44+off_eye,y+Y-16/2,44,16)
				buff.image.draw(A.a.image, AF*44,0,44,38,  x*-1-44,y+R-38/2,44,38)
				buff.image.context.restore()
			}
		}
		
		function drawSprite(L){
			draw(L[0].x, L[0].y, L[0],L[1],L[2],L[3])
		}
		
		function body(L,b,m,a,k){
			var o = L[0]
			if(b>=0)o.b_frame=b
			if(m>=0)o.m_frame=m
			if(a>=0)o.a_frame=a
			if(k>=0)o.k_frame=k
		}
		
		var _ = -1
		
		function pose(L,i){
			switch(i){
				case 0: body(L,0,_,_,_); break;
				case 1: body(L,1,_,_,_); break;
			}
		}
		
		
		function moving(L){
			var o = L[0], c = o.cur, n=0
			var HZ = scale(o.x, [10,150], [1,10])
			var VT = scale(o.y, [30,90], [1,10])

			// current position (left, center, right)
			var Hz = 0, Vt = 0
			if(o.x<40)Hz=-1; else if(o.x>100)Hz= 1;
			if(o.y<44)Vt=-1; else if(o.x>84)Vt= 1;
			
			
			//console.log(o.x + ' : ' + o.y)
			//console.log(Hz + ' : ' +Vt)
			
			// plan
			var dx = RndInt(20,30)
			var dy = RndInt(6,14)
			var d,v
			if(Hz<0) d=1
			if(Hz>0) d=-1
			if(Hz==0) d=o.dir*-1 //d=(dx%2?1:-1)
			if(Vt<0) v=1
			if(Vt>0) v=-1
			if(Vt==0) v=(dy%2?1:-1)
				
			o.dir = (d<0?1:-1)
			o.x += dx*d
			o.y += dy*v
			
			body(L, 4+(o.cur%2), 0, 4, 3)
			
			o.cur++
		}
		
		function jumpover(L){
			var o = L[0], c = o.cur, n=0
			var Hz = scale(o.x, [10,150], [1,10])
			var Vt = scale(o.y, [30,90], [1,10])
			var dx = RndInt(20,30)
			var dy = RndInt(4,8)
			var d=o.dir*-1,v=o.vy,J=0
			
			// plan
			if(Vt<1)o.vy=1
			if(Vt>9)o.vy=-1,J=1
			if(J){if(Hz<5)d=1; else d=-1}
			if(!J){if(Hz<=1 || Hz>=10)dx=0}
			
			o.dir = (d<0?1:-1)
			o.x += dx*d
			o.y += (o.vy<0?-20:15)
			
			body(L, 4+(o.cur%2), 0, 4, 3)
			o.cur++
		}

		function moving2(L){
			var o = L[0], c = o.cur, n=0
			var Hz = scale(o.x, [10,150], [1,10])
			var Vt = scale(o.y, [30,90], [1,10])
			var dx = RndInt(20,30)
			var dy = RndInt(4,8)
			var d=o.dir*-1,v=o.vy
			
			// plan
			if(Hz<=1.5) d=1
			if(Hz>=8.5) d=-1
			if(Vt<1.5) v=1
			if(Vt>8.5) v=-1
			
			o.dir = (d<0?1:-1)
			o.x += dx*d
			o.y += dy*v
			
			body(L, 4+(o.cur%2), 0, 4, 3)
			
			o.cur++
		}
		
		function anim(L, i){
			var o = L[0], c = o.cur, n=0
			switch(i){
				case 0: body(L,c,_,_,_);
						n=2
						break;
				case 10: if(c==0){ body(L, 5, 0, 4, 3); o.x -= 20; o.y += 10 }
						 if(c==1){ body(L, 5, 0, 4, 3); o.x -= 20; o.y -= 10 }
						 if(c==2){ body(L, 0, 0, 0, 0);  }
						 o.dir=1
						 n=2
						 break;
				case 11: if(c==0){ body(L, 5, 0, 4, 3); o.x += 20; o.y -= 10 }
						 if(c==1){ body(L, 5, 0, 4, 3); o.x += 20; o.y += 10 }
						 if(c==2){ body(L, 0, 0, 0, 0);  }
						 o.dir=-1
						 n=2
						 break;
				case 12: if(c==0){ body(L, 5, 0, 4, 3); o.x += 20; o.y += 10 }
						 if(c==1){ body(L, 5, 0, 4, 3); o.x += 20; o.y -= 10 }
						 if(c==2){ body(L, 0, 0, 0, 0);  }
						 o.dir=-1
						 n=2
						 break;
				case 13: if(c==0){ body(L, 5, 0, 4, 3); o.x -= 20; o.y -= 10 }
						 if(c==1){ body(L, 5, 0, 4, 3); o.x -= 20; o.y += 10 }
						 if(c==2){ body(L, 0, 0, 0, 0);  }
						 o.dir=1
						 n=2
						 break;
			}
			o.cur++
			if(o.cur>=n){o.cur=0; return 1} else {return 0}
			
		}
		
		var s40 = loadSpriteSet(40, [[24,15,33],[23,14,32],[25,16,34],[23,14,32],[25,16,31],[24,15,30],[31,22,37],[31,22,37],[31,22,37]])
		var s41 = loadSpriteSet(41, [[29,19,37],[29,19,37],[29,19,37],[29,19,37],[30,20,35],[29,19,34],[32,22,37],[32,22,37],[31,22,37]])
		var s69 = loadSpriteSet(69, [[22,13,31],[22,13,31],[22,13,31],[22,13,31],[23,14,29],[22,13,28],[27,18,33],[27,18,33],[30,21,36]])
		
		var cmd1 = {x:0, y:0, dir:1, pose:0, face:0}
		
		
		var S1 = [s40,s40,s40,s40]
		var S2 = [s69,s69,s69,s69]
		var pool = [S1, S2]
		
		//buff.image.clearRect(0,0,450,450)
		
		
		pose(S1,1)
		
		//drawSprite(0,0, S1)
		
		
		//draw(10+i*50, 10+k*60, obj[id%obj.length][0], obj[id%obj.length][1], obj[id%obj.length][2], obj[id%obj.length][3])
				


		//game.rootScene.addChild(b41)
		
		
		
		var count=0
		
		var o = S1[0]
		o.cur=0
		o.x = 80
		o.y = 64
		
		o.state=12
		o.vy = 1
		
		function cont(){
			if(o.x<60)
				o.state=(RndInt(0,1)?11:12);
			else if(o.x>100)
				o.state=(RndInt(0,1)?10:13);
			else
				o.state=(RndInt(0,1)?10:12);
		}

		
		
		// var r = scale(-50, [10,150], [1,10])
		// console.log(r)
	
	
		main.addEventListener("enterframe", function(){
			HandleKeyPress();
			
			if(count>15){
				buff.image.clear()
				
				//moving2(S1)
				
				jumpover(S1)
				
				
				drawSprite(S1)				
				
				count=0
			}
			count++
			
			
			
			RelKey();

		});
		
		
    };
    game.start();
};
