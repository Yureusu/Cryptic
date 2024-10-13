function openDrop(){
    document.getElementById('open-drop').style.display = 'none';
    document.getElementById('drop-nav').style.display = 'flex';
    document.getElementById('close-drop').style.display = 'flex';
}
function closeDrop(){
    document.getElementById('drop-nav').style.display = 'none';
    document.getElementById('open-drop').style.display = 'flex';
    document.getElementById('close-drop').style.display = 'none';
}