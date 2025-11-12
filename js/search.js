// Simple search functionality for CloudSync Help Center

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
});

function performSearch(query) {
    if (!query.trim()) return;
    
    // In a real implementation, this would search through articles
    // For now, we'll just show an alert
    console.log('Searching for:', query);
    
    // Simple keyword matching for demo
    const keywords = {
        'sync': 'articles/sync-issues.html',
        'install': 'articles/install.html',
        'upload': 'articles/uploading.html',
        'share': 'articles/sharing.html',
        'login': 'articles/login-problems.html',
        'storage': 'articles/storage-limits.html',
        'account': 'articles/create-account.html',
        'backup': 'articles/first-backup.html'
    };
    
    const lowerQuery = query.toLowerCase();
    
    for (const [keyword, url] of Object.entries(keywords)) {
        if (lowerQuery.includes(keyword)) {
            window.location.href = url;
            return;
        }
    }
    
    // If no match, show a message
    alert(`No results found for "${query}". Try searching for: sync, install, upload, share, login, or storage.`);
}
