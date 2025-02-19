const site = require('./site');

module.exports = [
    {   
        label: "Je suis créateur", 
        trigger: "creator", 
        url: "/creator/",
    },
    {
        label: "Tweetz It",
        trigger: "tweetz-it",
        url: "/tweetz-it/",
    },
    {   
        label: "Rejoindre la beta",
        trigger: "App",
        url: site.urlApp,
        isPrimary: true,
    },
    
];
