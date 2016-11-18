$(function(){

})();
//打开或下载文件
function openmydoc(path){ 
	var doc = new ActiveXObject("Word.Application"); 
	doc.visible=true; 
	doc.Documents.Open(path); 
} 

function AddFavorite(sURL, sTitle) {
 	try { 
        //IE 
        window.external.addFavorite(sURL, sTitle); 
    } catch (e) { 
        try { 
            //Firefox 
            window.sidebar.addPanel(sTitle, sURL, ""); 
        } catch (e) { 
            alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置!");
        } 
    } 	
}