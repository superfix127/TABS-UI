var tabs = document.querySelectorAll('.tab-item');
var panes = document.querySelectorAll('.tab-pane');


var activeTab = document.querySelector('.tab-item.active');
var line = document.querySelector('.line')
line.style.left = activeTab.offsetLeft + 'px';
line.style.width = activeTab.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    tab.onclick = function() {
        var pane = panes[index];
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
        this.classList.add('active');
        pane.classList.add('active');

    }
})