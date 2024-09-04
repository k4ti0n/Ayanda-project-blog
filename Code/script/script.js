var header = document.getElementById('header');
var navegaçãoMenu = document.getElementById('Navegação-menu');
var content = document.getElementById('text-content');
var showSidebar = false;

function toggleSidebar()
{   
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navegaçãoMenu.style.marginLeft = '-10vw';
        navegaçãoMenu.style.animationName ='showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else
    {
        navegaçãoMenu.style.marginLeft = '-100vw';
        navegaçãoMenu.style.animationName ='';
        content.style.filter = '';
    }
}
function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}
window.addEventListener('resize', function(event){
    if(this.window.innerWidth  > 768 && showSidebar)
    {
        toggleSidebar();
    }
});