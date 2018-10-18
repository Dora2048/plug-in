var design = 750;  //一般是设计图的尺寸
var base = 100;     //定义基准值，设计图中的font-size
function responsive(){
  var pageWidth = window.innerWidth;
  if(pageWidth < 320){
    pageWidth =320;   //320为最小屏幕尺寸
  }
  if(pageWidth > 750){
    pageWidth = 750;  //750为最大屏幕尺寸
  }
  //计算当前屏幕下的根字体大小
  var size = pageWidth/design * base;
  //将根字体大小设置给当前html
  document.documentElement.style.fontSize = size + 'px';
}


responsive();
window.addEventListener('resize',responsive);
//resize事件:屏幕大小改变是触发