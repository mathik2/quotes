const quoteText = document.getElementById('quoteText');
const loading = document.getElementById('loading');

function showLoading(show = true) {
    if (loading) loading.style.display = show ? 'block' : 'none';
    if (quoteText) quoteText.style.opacity = show ? 0.5 : 1;
}

async function quote() {
    showLoading(true);
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        quoteText.innerHTML = '<span class="quote-content">' + data.content + '</span>' +
            '<span class="quote-author">— ' + data.author + '</span>';
        quoteText.style.color = "";
    } catch (e) {
        quoteText.innerHTML = '<span style="color:red;">Failed to fetch quote. Please try again.</span>';
    }
    showLoading(false);
}

async function advice() {
    showLoading(true);
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        quoteText.innerHTML = '<span class="quote-content">' + data.slip["advice"] + '</span>';
        quoteText.style.color = "";
    } catch (e) {
        quoteText.innerHTML = '<span style="color:red;">Failed to fetch advice. Please try again.</span>';
    }
    showLoading(false);
}