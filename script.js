function toggleFileList(topicId) {
    const fileList = document.getElementById(topicId + 'Files');
    const topic = document.getElementById(topicId);

    // Oculta todas as listas de arquivos e remove a classe 'selected' de todos os tópicos
    document.querySelectorAll('.file-list').forEach(list => {
        list.style.display = 'none';
    });

    document.querySelectorAll('.topic').forEach(t => {
        t.classList.remove('selected');
    });

    // Exibe a lista de arquivos e marca o tópico selecionado
    fileList.style.display = fileList.style.display === 'none' ? 'block' : 'none';
    topic.classList.add('selected');
}

function openFile(fileName) {
    alert('Bixando o Arquivo: ' + fileName);
}

function searchFiles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const fileItems = document.querySelectorAll('.file-item');
    let filesFound = 0;

    fileItems.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
            filesFound++;
        } else {
            item.style.display = 'none';
        }
    });

    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = filesFound > 0 ? 'none' : 'block';
}