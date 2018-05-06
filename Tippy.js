// Préciser le suffixe d'une classe commencant par tippy-middle par exemple pour tous les Tippy
// Sinon laissez la valeur null 
let yourCla = "_warr";
let canSC = false;
class Tippy{
	constructor(){
		
	}
	
	start(){
		let target = this.element.getAttribute("tippy-big");
		if(target == ""){
			this.describe = this.element.getAttribute("tippy-com"); 	
		}else{
			if(canSC && this.element.getAttribute("t-big") == ""){
				this.describe = this.element.getAttribute("t-com");
			}else{
				this.describe = null;	
			}
		}
		this.title = this.element.getAttribute('tippy-title');
		if(this.titl === "" && canSC){
			this.title = this.element.getAttribute('t-tit');
		}
		this.tooltip = null;
		this.element.addEventListener('mouseover', this.mouseOver.bind(this));
		this.element.addEventListener('mouseout', this.mouseOut.bind(this));
	}
	
	startMenu(){
		let bu = this.element.getAttribute("tippy-val");
		if(bu == null && canSC){
			bu = this.element.getAttribute("t-val");
		}
		let buttons = [];
		let actions = [];
		let ti = this.element.getAttribute("tippy-menu-title");
		if(ti == null && canSC){
			ti = this.element.getAttribute("t-m-tit");
		}
		this.title = ti;
		if(bu != null){
			var a = 1;
			var b = bu.indexOf(",");
			var c = bu.indexOf("}");
			while(b <= c){
				buttons.push(bu.substr(a, b-a));
				a = b+1;
				b = bu.indexOf(",", a);
			}
			buttons.push(bu.substr(a, c-a));
			a = b+2;
			b= bu.indexOf(",", a);
			while (b > -1){
				actions.push(bu.substr(a, b-a));
				a = b+1;
				b = bu.indexOf(",", a);
			}
			actions.push(bu.substr(a,bu.length-1-a));
		}
		this.actions = actions;
		this.buttons = buttons;
		this.menu = null;
	}
	
	createTooltip(clas){
		if(this.tooltip === null){
			let tooltip = document.createElement('div');
			tooltip.innerHTML = this.title;
			if(this.element.getAttribute('tippy-cla') != null){
				clas += this.element.getAttribute('tippy-cla');
			}else if(canSC && this.element.getAttribute('t-cla') != null){
				clas += this.element.getAttribute('t-cla');
			}else if(yourCla != null){
				clas += yourCla;
			}
			tooltip.classList.add(clas);
			document.body.appendChild(tooltip);
			this.tooltip = tooltip;
		}
		return this.tooltip;
	}
	
	createMenu(){
		if(this.menu === null){
			let men = document.createElement('div');
			if(this.title !== null){
				let b = document.createElement('b');
				b.innerHTML = this.title;
				men.appendChild(b);
			}
			let m = document.createElement('ul');
			var i = 0;
			this.buttons.forEach(element => {
				let l = document.createElement('li');
				l.innerHTML = element;
				l.setAttribute("onclick", this.actions[i]+"();");
				i++;
				m.appendChild(l);
			});
			men.appendChild(m);
			men.classList.add("tippy-menu");
			document.body.appendChild(men);
			this.menu = men;
		}
		return this.menu;
	}
	
	mouseOut(){
		if(this.tooltip !== null){
			this.tooltip.classList.remove("visible");
			this.tooltip.addEventListener('transitionend', ()=>{
				if(this.tooltip !== null){
					document.body.removeChild(this.tooltip);
					if(this.describe !== null){
						this.element.style.zIndex = "auto";	
					}
					this.tooltip = null;	
				}
			});
		}
	}
	
	mouseClick(){
		this.menuClick();
	}
	
	clickOut(){
		if(this.menu !== null){
			this.menu.classList.remove("visible");
			this.menu.addEventListener('transitionend', ()=>{
				if(this.menu !== null){
					document.body.removeChild(this.menu);
					this.menu = null;	
				}
			});
		}
	}
	
	createBigTooltip(){
		if(this.tooltip === null){
			let bigtooltip = document.createElement('div');
			let tooltipTitle = document.createElement('h5');
			tooltipTitle.innerHTML = this.title;
			let tooltipDes = document.createElement('p');
			tooltipDes.innerHTML = this.describe;
			bigtooltip.classList.add('bigTippy');
			bigtooltip.appendChild(tooltipTitle);
			bigtooltip.appendChild(tooltipDes);
			document.body.appendChild(bigtooltip);
			this.tooltip = bigtooltip;
		}
		return this.tooltip;
	}
}
class Tippy_up extends Tippy{
	
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_up(element));
	}
	
	constructor (element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createTooltip("tippy-up");
		let width = tooltip.offsetWidth;
		let height = tooltip.offsetHeight;
		let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top - height - 6 + document.documentElement.scrollTop;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		tooltip.classList.add("visible");
	}
	
}
class Tippy_bottom extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_bottom(element));
	}
	
	constructor (element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createTooltip("tippy-bottom");	
		let width = tooltip.offsetWidth;
		let height = tooltip.offsetHeight;
		let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top + height - 15 + document.documentElement.scrollTop + this.element.offsetHeight;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		tooltip.classList.add("visible");
	}
}
class Tippy_left extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_left(element));
	}
	
	constructor (element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createTooltip("tippy-left");	
		let width = tooltip.offsetWidth;
		let height = tooltip.offsetHeight;
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft -width -6;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top-height/2 + document.documentElement.scrollTop + this.element.offsetHeight/2;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		tooltip.classList.add("visible");
	}
	
}
class Tippy_right extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_right(element));
	}
	
	constructor (element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createTooltip("tippy-right");	
		let height = tooltip.offsetHeight;
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft+6+ this.element.offsetWidth;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top-height/2 + document.documentElement.scrollTop + this.element.offsetHeight/2;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		tooltip.classList.add("visible");
	}
	
}
class Tippy_middle extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_middle(element));
	}
	
	constructor (element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createTooltip("tippy-middle");	
		let height = tooltip.offsetHeight;
		let width = tooltip.offsetWidth;
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft+this.element.offsetWidth/2 - width/2;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top-height + document.documentElement.scrollTop + this.element.offsetHeight/2;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		tooltip.classList.add("visible");
	}
	
}
class Big_Tippy extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Big_Tippy(element));
	}
	
	constructor(element){
		super();
		this.element = element;
		this.start();
	}
	
	mouseOver(){
		let tooltip = null;
		tooltip = this.createBigTooltip();
		let width = tooltip.offsetWidth;
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft - width + this.element.offsetWidth;
		if(left < 20){
			left = 20;
		}
		let top = this.element.getBoundingClientRect().top + document.documentElement.scrollTop;
		tooltip.style.top = top + "px";
		tooltip.style.left = left + "px";
		this.element.style.zIndex = 25;
		tooltip.classList.add("visible");
	}
}

class Tippy_MenuRC extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_MenuRC(element));
	}
	
	constructor(element){
		super();
		this.element = element;
		this.startMenu();
		this.element.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			this.toggleMenuOn(e);
		});
		document.addEventListener("click", (e) => {
			var button = e.which || e.button;
			if(button === 1){
				this.toggleMenuOff();
			}
		});
	}
	toggleMenuOn(e){
		let menu = this.createMenu();
		var posx = 0;
		var posy = 0;
		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		} else if (e.clientX || e.clientY) {
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		if(posx+menu.offsetWidth > window.innerWidth){
			posx = window.innerWidth-menu.offsetWidth;
		}
		menu.style.left = posx + "px";
		menu.style.top = posy + "px";
		menu.classList.add("visible");
		
	}
	toggleMenuOff(){
		if(this.menu !== null){
			this.menu.classList.remove("visible");
			this.menu.addEventListener('transitionend', ()=>{
				if(this.menu !== null){
					document.body.removeChild(this.menu);
					this.menu = null;
				}
			});	
		}
	}
}
class Tippy_MenuClick extends Tippy{
	static bind(selector){
		document.querySelectorAll(selector).forEach(element => new Tippy_MenuClick(element));
	}
	
	constructor(element){
		super();
		this.element = element;
		this.startMenu();
		
		this.element.addEventListener("click", (e) => {
			e.preventDefault();
			if(this.menu === null){
				this.menuClick();	
			}else{
				this.toggleMenuOff();
			}
		});
		if(element.getAttribute("tippy-menu-stay") != null || (element.getAttribute("t-m-stay") != null && canSC)){
			document.addEventListener("click", this.toggleMenuOff.bind(this), true);	
		}
	}
	toggleMenuOff(){
		if(this.menu !== null){
			this.menu.classList.remove("visible");
			this.menu.addEventListener('transitionend', ()=>{
				if(this.menu !== null){
					document.body.removeChild(this.menu);
					this.menu = null;
				}
			});	
		}
	}
	menuClick(){
		let m = this.createMenu();
		let left = this.element.getBoundingClientRect().left + document.documentElement.scrollLeft + this.element.offsetWidth + 5;
		let top = this.element.getBoundingClientRect().top + document.documentElement.scrollTop;
		m.style.left = left + "px";
		m.style.top = top + "px";
		m.classList.add("visible");
	}
}
window.onload = function(){
	let sc = document.querySelectorAll('*[tippy-sc]');
	if(sc.length > 0){
		canSC = true;
	}
	Tippy_middle.bind('*[tippy-middle]');
	Tippy_up.bind('*[tippy-up]');
	Tippy_bottom.bind('*[tippy-bottom]');
	Tippy_left.bind('*[tippy-left]');
	Tippy_right.bind('*[tippy-right]');
	Big_Tippy.bind('*[tippy-big]');
	Tippy_MenuRC.bind('*[tippy-menuRC]');
	Tippy_MenuClick.bind('*[tippy-menuC]');
	if(canSC){
		Tippy_middle.bind('*[t-mid]');
		Tippy_up.bind('*[t-up]');
		Tippy_bottom.bind('*[t-bot]');
		Tippy_left.bind('*[t-le]');
		Tippy_right.bind('*[t-ri]');
		Big_Tippy.bind('*[t-b]');
		Tippy_MenuRC.bind('*[t-mRC]');
		Tippy_MenuClick.bind('*[t-mC]');
	}
};
