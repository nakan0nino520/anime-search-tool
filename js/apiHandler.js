class AnimeSearchAPI {
 constructor() {
 this.apis = [
 { name: "Trace.moe", endpoint: "https://api.trace.moe/search", active: true },
 { name: "SauceNAO", endpoint: "https://saucenao.com/search.php", active: true }
 ];
 this.currentApiIndex = 0;
 }

 async searchByImage(file) {
 let result;
 try {
 result = await this.callAPI(file);
 } catch (error) {
 console.error("Failed with current API:", error);
 this.switchToNextAPI();
 result = await this.callAPI(file); // Retry
 }
 return result;
 }

 switchToNextAPI() {
 do {
 this.currentApiIndex = (this.currentApiIndex + 1) % this.apis.length;
 } while (!this.apis[this.currentApiIndex].active);
 }

 async callAPI(file) {
 const api = this.apis[this.currentApiIndex];
 // Mock response handling – real implementation would use FormData and CORS proxy
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({ success: true, animeName: "Sample Anime" });
 }, 1000);
 });
 }
}

export default AnimeSearchAPI;
