const TournamentModule = (() => {
    const pageText = {
        'header-text-qualifications': 'Одиночные квалификации на турнир',
        'header-text-tournament': 'Турнир Tarkov.Help',
        'header-text-categories-first': 'Охота на новичков',
        'header-text-categories-second': 'Одиночки',
        'header-apply-button': 'Записаться на турнир'
    }

    function appendTextToTag(id, text) {
        document.getElementById(id)?.append(text);
    }

    function initPageText() {
        for(let id in pageText) {
            appendTextToTag(id, pageText[id]);
        }
    }

    return {
        initPageText,
    }
})();

TournamentModule.initPageText();