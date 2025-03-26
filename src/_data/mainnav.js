const site = require('./site');

module.exports = [
    {   
        label: "Je suis créateur",
        trigger: "creator",
        url: "/creator/",
    },
    {
        label: "tweetz it",
        trigger: "tweetz-it",
        url: "/tweetz-it/",
    },
    {   
        label: "Connexion",
        trigger: "App",
        url: site.urlApp,
        isPrimary: true,
    },
    
];
