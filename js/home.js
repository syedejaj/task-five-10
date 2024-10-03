document.getElementById('history-button').addEventListener('click', function () {

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

document.getElementById('donation-button').addEventListener('click', function () {

    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});