export class DataStore {
    constructor(fb, cfg) {
        let f = fb || firebase;
        var config = cfg || {
            apiKey: "AIzaSyA9NxRaR0xiYNp0aDkesfnBPCp8L-iNgW0",
            authDomain: "project-7706350799177221098.firebaseapp.com",
            databaseURL: "https://project-7706350799177221098.firebaseio.com",
            storageBucket: "",
        };
        this.app = f.initializeApp(config);
        this.database = this.app.database();
    }
    loadStaff(fn) {
        this.database.ref("staff").on('value', (e) => {
            fn(e.val());
        });
    }
}
