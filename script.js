let titles = getArray('titles') || [];
let notes = getArray('notes') || [];

let deletedTitles = getArray('deletedTitles') || [];
let deletedNotes = getArray('deletedNotes') || [];

let titlesArchiv = getArray('titlesArchiv') || [];
let notesArchiv = getArray('notesArchiv') || [];


function render() {
    document.getElementById('headline').innerHTML = `Notizen`;

    addBg('note-bg', 'archiv-bg', 'trash-bg');

    document.getElementById('note-input-field').innerHTML = inputHTML();

    document.getElementById('notes').innerHTML = '';

    for (let i = 0; i < titles.length; i++)
        document.getElementById('notes').innerHTML += noteHTML(i);
}

function addNote() {
    let title = document.getElementById('mytitle').value;
    let note = document.getElementById('mytext').value;

    if (title == '' || note == '') {
        alert('Bitte fülle die Felder aus!')
        return false;
    }

    else {
        titles.push(title);
        notes.push(note);

        save();

        render();
    }

    document.getElementById('mytitle').value = '';
    document.getElementById('mytext').value = '';
}

function deleteNotes(i) {

    deletedTitles.push(titles[i]);
    deletedNotes.push(notes[i]);

    saveDeletedNote();

    titles.splice(i, 1);
    notes.splice(i, 1);
    save();
    render();
}

function deleteNotesArchiv(i) {

    deletedTitles.push(titlesArchiv[i]);
    deletedNotes.push(notesArchiv[i]);

    saveDeletedNote();

    titlesArchiv.splice(i, 1);
    notesArchiv.splice(i, 1);
    saveArchiv();

    renderArchiv();
}

function restoreNotes(i) {
    titles.push(deletedTitles[i]);
    notes.push(deletedNotes[i]);

    save();

    deletedNotes.splice(i, 1);
    deletedTitles.splice(i, 1);

    saveDeletedNote();

    renderTrash();
}

function restoreNotesArchiv(i) {
    titles.push(titlesArchiv[i]);
    notes.push(notesArchiv[i]);

    save();

    titlesArchiv.splice(i, 1);
    notesArchiv.splice(i, 1);

    saveArchiv();

    renderArchiv();
}

function deleteTrashItem(i) {
    deletedNotes.splice(i, 1);
    deletedTitles.splice(i, 1);

    saveDeletedNote();

    renderTrash();
}

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}

function showAddNotes() {
    document.getElementById('input').classList.add('d-none');
    document.getElementById('closed-input').classList.remove('d-none');
}

function save() {
    setArray('titles', titles);
    setArray('notes', notes);
}

function saveDeletedNote() {
    setArray('deletedTitles', deletedTitles);
    setArray('deletedNotes', deletedNotes);
}

function saveArchiv() {
    setArray('titlesArchiv', titlesArchiv);
    setArray('notesArchiv', notesArchiv);
}

function renderTrash() {
    document.getElementById('headline').innerHTML = `Papierkorb`;

    addBg('trash-bg', 'note-bg', 'archiv-bg');

    document.getElementById('note-input-field').innerHTML = /*html*/  `      
            <div class="note-field" id="deletedNotes">
            </div>
        `;

    document.getElementById('deletedNotes').innerHTML = '';

    for (let i = 0; i < deletedTitles.length; i++)
        document.getElementById('deletedNotes').innerHTML += trashNoteHTML(i);
}

function renderArchiv() {
    document.getElementById('headline').innerHTML = `Archiv`;

    addBg('archiv-bg', 'trash-bg', 'note-bg');

    document.getElementById('note-input-field').innerHTML = /*html*/  `      
            <div class="note-field" id="archiveNotes">
            </div>
        `;

    document.getElementById('archiveNotes').innerHTML = '';

    for (let i = 0; i < titlesArchiv.length; i++)
        document.getElementById('archiveNotes').innerHTML += archivNoteHTML(i);
}

function archiveNotes(i) {

    titlesArchiv.push(titles[i]);
    notesArchiv.push(notes[i]);

    saveArchiv();

    titles.splice(i, 1);
    notes.splice(i, 1);
    save();

    render();
}

function addBg(id1, id2, id3){
    document.getElementById(id1).classList.add('bg-yellow');
    document.getElementById(id2).classList.remove('bg-yellow');
    document.getElementById(id3).classList.remove('bg-yellow');
}


