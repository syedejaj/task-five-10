const historyButton = document.getElementById('history-button');
historyButton.addEventListener('click', function () {

    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

document.getElementById('donation-button').addEventListener('click', function () {

    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});

// noakhali donation button 
document.getElementById('noakhali-button').addEventListener('click', function (event) {

    event.preventDefault();
    const accountBalance = getTextFieldValueById('account-balance');
    const noakhaliDonateAmount = getInputValueById('noakhali-input');
    const noakhaliAccountBalance = getTextFieldValueById('noakhali-account');

    if (isNaN(noakhaliDonateAmount)) {
        alert('Please enter a valid amount');
        return;
    }
    else if (noakhaliDonateAmount > accountBalance) {
        alert('You do not have enough money to donate.');
        return;
    } else {
        const newBalance = noakhaliAccountBalance + noakhaliDonateAmount;
        const currentBalance = accountBalance - noakhaliDonateAmount;
        document.getElementById('noakhali-account').innerText = newBalance;
        document.getElementById('account-balance').innerText = currentBalance;
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="mt-3 border border-gray-200 rounded-lg flex flex-col items-center bg-green-300">
                    <p class="font-light">Added: ${noakhaliDonateAmount} Taka for the Noakhali Flood Affected People. </p>
                    <p> Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}, Time Zone: ${timeZone} </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
        alert('Thank you for your Donation');
    }

});
// feni donation button 
document.getElementById('feni-button').addEventListener('click', function (event) {

    event.preventDefault();
    const accountBalance = getTextFieldValueById('account-balance');
    const DonateAmount = getInputValueById('feni-input');
    const AccountBalance = getTextFieldValueById('feni-account');

    if (isNaN(DonateAmount)) {
        alert('Please enter a valid amount');
        return;
    }
    else if (DonateAmount > accountBalance) {
        alert('You do not have enough money to donate.');
        return;
    } else {
        const newBalance = AccountBalance + DonateAmount;
        const currentBalance = accountBalance - DonateAmount;
        document.getElementById('feni-account').innerText = newBalance;
        document.getElementById('account-balance').innerText = currentBalance;
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="mt-3 border border-gray-200 rounded-lg flex flex-col items-center bg-green-300">
                    <p class="font-light">Added: ${DonateAmount} Taka for the Feni Flood Affected People. </p>
                    <p> Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}, Time Zone: ${timeZone} </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
        alert('Thank you for your Donation');

    }

});
// qouta movement 
document.getElementById('qouta-button').addEventListener('click', function (event) {

    event.preventDefault();
    const accountBalance = getTextFieldValueById('account-balance');
    const noakhaliDonateAmount = getInputValueById('qouta-input');
    const noakhaliAccountBalance = getTextFieldValueById('qouta-account');

    if (isNaN(noakhaliDonateAmount)) {
        alert('Please enter a valid amount');
        return;
    }
    else if (noakhaliDonateAmount > accountBalance) {
        alert('You do not have enough money to donate.');
        return;
    } else {
        const newBalance = noakhaliAccountBalance + noakhaliDonateAmount;
        const currentBalance = accountBalance - noakhaliDonateAmount;
        document.getElementById('qouta-account').innerText = newBalance;
        document.getElementById('account-balance').innerText = currentBalance;
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="mt-3 border border-gray-200 rounded-lg flex flex-col items-center bg-green-300">
                    <p class="font-light">Added: ${noakhaliDonateAmount} Taka donation for the qouta movement Students. </p>
                    <p> Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}, Time Zone: ${timeZone} </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
        alert('Thank you for your Donation');

    }
});
// sylhet flood donation 
document.getElementById('sylhet-button').addEventListener('click', function (event) {

    event.preventDefault();
    const accountBalance = getTextFieldValueById('account-balance');
    const DonateAmount = getInputValueById('sylhet-input');
    const AccountBalance = getTextFieldValueById('sylhet-account');

    if (isNaN(DonateAmount)) {
        alert('Please enter a valid amount');
        return;
    }
    else if (DonateAmount > accountBalance) {
        alert('You do not have enough money to donate.');
        return;
    } else {
        const newBalance = AccountBalance + DonateAmount;
        const currentBalance = accountBalance - DonateAmount;
        document.getElementById('sylhet-account').innerText = newBalance;
        document.getElementById('account-balance').innerText = currentBalance;
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="mt-3 border border-gray-200 rounded-lg flex flex-col items-center bg-green-300">
                    <p class="font-light">Added: ${DonateAmount} Taka for the Sylhet Flood Affected People. </p>
                    <p> Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}, Time Zone: ${timeZone} </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
        alert('Thank you for your Donation');

    }
});
// Moulvibazar donation 
document.getElementById('moulvibazar-button').addEventListener('click', function (event) {

    event.preventDefault();
    const accountBalance = getTextFieldValueById('account-balance');
    const DonateAmount = getInputValueById('moulvibazar-input');
    const AccountBalance = getTextFieldValueById('moulvibazar-account');

    if (isNaN(DonateAmount)) {
        alert('Please enter a valid amount');
        return;
    }
    else if (DonateAmount > accountBalance) {
        alert('You do not have enough money to donate.');
        return;
    } else {
        const newBalance = AccountBalance + DonateAmount;
        const currentBalance = accountBalance - DonateAmount;
        document.getElementById('moulvibazar-account').innerText = newBalance;
        document.getElementById('account-balance').innerText = currentBalance;
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="mt-3 border border-gray-200 rounded-lg flex flex-col items-center bg-green-300">
                    <p class="font-light">Added: ${DonateAmount} Taka for the Moulvibazar Flood Affected People. </p>
                    <p> Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}, Time Zone: ${timeZone} </p>
            </div>
        `;
        document.getElementById('history-container').appendChild(div);
        alert('Thank you for your Donation');

    }

});