function inputHTML(){
    return /*html*/ `    
    <div class="add-note" id="input" onclick="showAddNotes()">
        <input class="input-text" type="text" placeholder="Notiz schreiben...">
    </div>
    <div class="add-note d-none" id="closed-input">
        <input type="text" placeholder="Titel" class="input-title" id="mytitle">
        <input type="text" placeholder="Notiz schreiben..." class="input-text" id="mytext">
        <button onclick="addNote()">Speichern</button>
    </div>
    <div class="note-field" id="notes">
    </div>
`;
}

function noteHTML(i){
    return /*html*/`
    <div class="note" id="note">
    <h3>${titles[i]}</h3>
    <p>${notes[i]}</p>
    <div class="buttons">
        <button onclick="archiveNotes(${i})"><img src="img/archiv.svg" alt=""> Archiv</button>
        <button  onclick="deleteNotes(${i})"><img src="img/bin.svg" alt=""> Löschen</button>
    </div>
    </div>
    `;
}

function trashNoteHTML(i){
    return /*html*/`<div class="note" id="note">
    <h3>${deletedTitles[i]}</h3>
    <p>${deletedNotes[i]}</p>
    <div class="buttons">
        <button onclick="restoreNotes(${i})"><img src="img/return.svg" alt="">Wiederherstellen</button>
        <button  onclick="deleteTrashItem(${i})"><img src="img/bin.svg" alt=""> Löschen</button>
    </div>
    </div>
    `;
}

function archivNoteHTML(i){
    return /*html*/`
    <div class="note" id="note">
    <h3>${titlesArchiv[i]}</h3>
    <p>${notesArchiv[i]}</p>
    <div class="buttons">
        <button onclick="restoreNotesArchiv(${i})"><img src="img/return.svg" alt="">Wiederherstellen</button>
        <button  onclick="deleteNotesArchiv(${i})"><img src="img/bin.svg" alt=""> Löschen</button>
    </div>
    </div>
    `;
}