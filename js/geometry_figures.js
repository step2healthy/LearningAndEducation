class math_geometry_figures
	{
		//或中心点，或顶点
		constructor(cx,cy) {		
			this.canvas = document.getElementById('tutorial');
			 this.cx = cx;
			 this.cy = cy;
		}
		 
		 draw() { //demo      
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');		  
				var squarelen = 20;
				var linelen = 80;
				var dogr = 6;
				ctx.fillStyle = 'rgb(0, 0, 0)'; 
				ctx.fillRect(this.cx, this.cy, squarelen, squarelen);
				ctx.beginPath();
				ctx.strokeStyle = 'red';
				ctx.arc(this.cx - linelen, this.cy + squarelen, dogr, 0, 2 * Math.PI);
				ctx.stroke();

			}
		 } 
	}


    class equilateral_triangle{//等边三角形，给出顶点坐标，顶角，腰长
		constructor(tx,ty) {				 
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty; 
		}

		 draw(sidelen,whereisthetopangle,linecolor ='black') {       
			if (this.canvas.getContext) { 
			//	
			    var ctx = this.canvas.getContext('2d');	 
			    var x1=0;
			    var y1=0;
			    var x2=0;
			    var y2 = 0;
				
				ctx.beginPath();
				ctx.strokeStyle = linecolor;
				var halftopangle = 60*Math.PI/360;
						
				switch (whereisthetopangle)
				{
					case 0://top
					{						
						 x1 = this.tx - sidelen * Math.sin(halftopangle);
						 y1 = this.ty + sidelen * Math.cos(halftopangle);
						 x2 = this.tx + sidelen * Math.sin(halftopangle);
						 y2 = y1;
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 1://bottom
					{
					
						 x1 = this.tx - sidelen * Math.sin(halftopangle);
						 y1 = this.ty - sidelen * Math.cos(halftopangle);
						 x2 = this.tx + sidelen * Math.sin(halftopangle);
						 y2 = y1;
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 2://left
					{
						x1 = this.tx + sidelen * Math.cos(halftopangle);
						y1 = this.ty - sidelen * Math.sin(halftopangle);
						x2 = x1;
						y2 = this.ty + sidelen * Math.sin(halftopangle);
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 3://right
					{
											
						x1 = this.tx - sidelen * Math.cos(halftopangle);
						y1 = this.ty - sidelen * Math.sin(halftopangle);
						x2 = x1;
						y2 = this.ty + sidelen * Math.sin(halftopangle);
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					default:
					alert("Not support");
					break;
				}

				ctx.stroke();

			}
		}
	}


	class isosceles_triangle{//等腰三角形，给出顶点坐标，顶角，腰长
		constructor(tx,ty) {				 
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty; 
		}

		 draw(tangle,sidelen,whereisthetopangle,linecolor ='black') {       
			if (this.canvas.getContext) { 
			//	alert(1);
			    var ctx = this.canvas.getContext('2d');	 
			    var x1=0;
			    var y1=0;
			    var x2=0;
			    var y2 = 0;
				
				ctx.beginPath();
				ctx.strokeStyle = linecolor;
								
				switch (whereisthetopangle)
				{
					case 0://top
					{
						//alert(  sidelen * Math.cos(tangle/360));
						 x1 = this.tx - sidelen * Math.sin(tangle* Math.PI/360);
						 y1 = this.ty + sidelen * Math.cos(tangle* Math.PI/360);
						 x2 = this.tx + sidelen * Math.sin(tangle* Math.PI/360);
						 y2 = y1;
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 1://bottom
					{
					
						 x1 = this.tx - sidelen * Math.sin(tangle* Math.PI/360);
						 y1 = this.ty - sidelen * Math.cos(tangle* Math.PI/360);
						 x2 = this.tx + sidelen * Math.sin(tangle* Math.PI/360);
						 y2 = y1;
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 2://left
					{
						x1 = this.tx + sidelen * Math.cos(tangle* Math.PI/360);
						y1 = this.ty - sidelen * Math.sin(tangle* Math.PI/360);
						x2 = x1;
						y2 = this.ty + sidelen * Math.sin(tangle* Math.PI/360);;
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					case 3://right
					{
											
						x1 = this.tx - sidelen * Math.cos(tangle* Math.PI/360);
						y1 = this.ty - sidelen * Math.sin(tangle* Math.PI/360);
						x2 = x1;
						y2 = this.ty + sidelen * Math.sin(tangle* Math.PI/360);
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(x1, y1);				
						ctx.lineTo(x2,y2);
						ctx.lineTo(this.tx,this.ty);
					}
					break;
					default:
					alert("Not support");
					break;
				}

				ctx.stroke();

			}
		}
	}

	class right_triangle {//直角三角形，给出直角顶点坐标
		constructor(tx,ty) {				 
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty; 
		}
		setRightAngleDotPosition(tx,ty){
	 		this.tx = tx;
			this.ty = ty; 
		}
		 /*
		 whereistherightangle: topleft,topright, bottomleft,bottomright
		 //other orientation:
		 */
		 draw(rightside1,rightside2,whereistherightangle,linecolor ='black') {       
			if (this.canvas.getContext) { 
		 
			    var ctx = this.canvas.getContext('2d');	 
				
				ctx.beginPath();
				ctx.strokeStyle = linecolor;
				//drawmain(rightside1,rightside2,whereistherightangle);
					switch (whereistherightangle)
				{
					case 0://topleft
					{
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(this.tx + rightside1, this.ty);				
						ctx.moveTo(this.tx, this.ty);
						ctx.lineTo(this.tx,this.ty+rightside2);
						ctx.lineTo(this.tx + rightside1,this.ty);
					}
					break;
					case 1://bottomleft
					{
					
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(this.tx + rightside1, this.ty);				
						ctx.moveTo(this.tx, this.ty);
						ctx.lineTo(this.tx,this.ty-rightside2);
						ctx.lineTo(this.tx + rightside1,this.ty);
					}
					break;
					case 2://bottomright
					{
					
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(this.tx- rightside1, this.ty);				
						ctx.moveTo(this.tx, this.ty);
						ctx.lineTo(this.tx,this.ty- rightside2);
						ctx.lineTo(this.tx - rightside1,this.ty);
					}
					break;
					case 3://topright
					{
					
						ctx.moveTo(this.tx, this.ty);				
						ctx.lineTo(this.tx - rightside1, this.ty);				
						ctx.moveTo(this.tx, this.ty);
						ctx.lineTo(this.tx,this.ty+rightside2);
						ctx.lineTo(this.tx - rightside1,this.ty);
					}
					break;
					default:
					alert("Not support");
					break;
				}

				ctx.stroke();
			}
		 } 
    } 
    

    class square{//正方形
    	constructor(tx,ty) {		
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty;
		}
    	draw(sidelen,linecolor ='black'){
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');

				ctx.beginPath();	
				ctx.strokeStyle = linecolor;		 	
				ctx.moveTo(this.tx, this.ty);
				
				
			 	ctx.lineTo(this.tx+sidelen, this.ty);		
				ctx.lineTo(this.tx+sidelen, this.ty+sidelen);		
				ctx.lineTo(this.tx, this.ty+sidelen);		
				ctx.lineTo(this.tx, this.ty);
				ctx.stroke();	 
//alert(1);
			}

		}    
	}

  class rectangle{//长方形
    	constructor(tx,ty) {		
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty;
		}
    	draw(sidelen1,sidelen2,linecolor ='black'){
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');

				ctx.beginPath();	
				ctx.strokeStyle = linecolor;		 	
				ctx.moveTo(this.tx, this.ty);
			 	ctx.lineTo(this.tx+sidelen1, this.ty);		
				ctx.lineTo(this.tx+sidelen1, this.ty+sidelen2);		
				ctx.lineTo(this.tx, this.ty+sidelen2);		
				ctx.lineTo(this.tx, this.ty);
				ctx.stroke();	 



			}

		}    
	}


	  class parallelogram{//长方形
    	constructor(tx,ty) {		
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty;
		}
    	draw(sidelen1,sidelen2, tangle, linecolor ='black'){
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');

				ctx.beginPath();	
				ctx.strokeStyle = linecolor;		 	
				ctx.moveTo(this.tx, this.ty);
			 	ctx.lineTo(this.tx-sidelen1 * Math.sin(Math.PI*(tangle-90)/180), this.ty+ sidelen1 * Math.cos(Math.PI * (tangle-90)/180));		
				ctx.lineTo(this.tx-sidelen1 * Math.sin(Math.PI*(tangle-90)/180) + sidelen2,  this.ty+ sidelen1 * Math.cos(Math.PI * (tangle-90)/180));		
				ctx.lineTo(this.tx+ sidelen2, this.ty);		
				ctx.lineTo(this.tx, this.ty);
				ctx.stroke();	 
			}

		}    
	}


	  class rhombus{//长方形
    	constructor(tx,ty) {		
			 this.canvas = document.getElementById('tutorial');
			 this.tx = tx;
			 this.ty = ty;
		}
    	draw(sidelen, tangle,linecolor ='black'){
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');

				ctx.beginPath();	
				ctx.strokeStyle = linecolor;		 	
				ctx.moveTo(this.tx, this.ty);
			 	ctx.lineTo(this.tx-sidelen * Math.sin(Math.PI*(tangle-90)/180), this.ty+ sidelen * Math.cos(Math.PI * (tangle-90)/180));		
				ctx.lineTo(this.tx-sidelen * Math.sin(Math.PI*(tangle-90)/180) + sidelen,  this.ty+ sidelen * Math.cos(Math.PI * (tangle-90)/180));	
				ctx.lineTo(this.tx+ sidelen, this.ty);		
				ctx.lineTo(this.tx, this.ty);
				ctx.stroke();	 
			}

		}    
	}


  class circle{//圆
    	constructor(cx,cy) {		
			 this.canvas = document.getElementById('tutorial');
			 this.cx = cx;
			 this.cy = cy;
		}
    	draw(radius,linecolor ='black'){
			if (this.canvas.getContext) { 
			    var ctx = this.canvas.getContext('2d');

				ctx.beginPath();	
				ctx.strokeStyle = linecolor;	 
			 	ctx.arc(this.cx, this.cy, radius, 0, 2 * Math.PI);
				ctx.stroke();	 
			}

		}    
	}

