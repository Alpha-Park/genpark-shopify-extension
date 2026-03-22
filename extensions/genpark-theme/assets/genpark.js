document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("genpark-sync-btn");
  if (!btn) return;

  btn.addEventListener("click", function() {
    const defaultText = this.innerHTML;
    this.innerHTML = "⏳ Syncing to GenPark Agents...";
    this.style.opacity = "0.8";
    
    // Simulate API call to GenPark Backend
    setTimeout(() => {
        this.innerHTML = "✅ Synced successfully!";
        this.style.background = "#4CAF50";
        this.style.opacity = "1";
        
        const statusEl = document.getElementById("genpark-status");
        statusEl.style.display = "block";
        statusEl.style.color = "#4CAF50";
        statusEl.innerHTML = "<strong>Success!</strong> Your product is now active in GenPark Dark Pools and Arbitrage networks.";
        
        setTimeout(() => {
            this.innerHTML = defaultText;
            this.style.background = "#000";
            statusEl.style.display = "none";
        }, 5000);
    }, 2500);
  });
});
