const TournamentModule = (() => {
    const pageText = {
        'header-text-qualifications': 'Одиночные квалификации на турнир',
        'header-text-tournament': 'Турнир Tarkov.Help',
        'header-text-categories-first': 'Охота на новичков',
        'header-text-categories-second': 'Одиночки',
        'header-apply-button': 'Записаться на турнир',
        'rules-header': 'Правила проведения турнира',
        'objective-header': 'Цель участников турнира:',
        'objective-content': 'Игроки за 3 часа игры на локации Таможня, должны как можно больше раз выжить в рейдах и уничтожить как можно больше игроков на карте за один рейд. Турнир основан на PVP механике и удаче в нахождении игроков низкого уровня персонажа. ',
        'gear-header': 'Снаряжение:',
        'gear-content': 'Любое снаряжение на любую сумму денег с основного аккаунта игрока.',
        'scoring-header': 'Получение очков:',
        'scoring-subheader': 'Убийства ЧВК с жетоном за один рейд:',
        'scoring-point-kill-count-1': '1 убийство с жетоном',
        'scoring-point-kill-count-2': '2 убийства с жетоном',
        'scoring-point-kill-count-3': '3 убийства с жетоном',
        'scoring-point-kill-count-4': '4 убийства с жетоном',
        'scoring-point-kill-count-5': '5+ убийств с жетоном',
        'scoring-point-kill-count-6': 'Extra: убийство оружием ближнего боя',
        'scoring-point-points-1': '1 очко',
        'scoring-point-points-2': '4 очка',
        'scoring-point-points-3': '8 очков',
        'scoring-point-points-4': '16 очков',
        'scoring-point-points-5': 'за каждого ЧВК по 5 очков',
        'scoring-point-points-6': '20 очков',
        'scoring-hint-1': '*(Если уровень убитого ЧВК не превышает или равен 20, то дополнительно дается 4 очка за каждого)',
        'scoring-hint-2': '*(Учитываются очки только в рейдах, где участник выжил в рейде, обязательно нужно собирать жетоны, иначе очки за убийство не будут засчитаны)',
        'applying-header': 'Правила подачи заявки:',
        'applying-subheader': 'Заявка должна включать в себя:',
        'applying-point-1-plaintext': 'двухчасовой стрим на платформе Twitch c названием: ',
        'applying-point-1-styled-text': 'Tarkov Help заявка',
        'applying-point-2': 'ссылка на запись двухчасового стрима',
        'applying-point-3': 'с самого начала стрима нужно показать статистику вашего персонажа по убийствам чвк, после уже начинать рейды на локации Таможня',
        'applying-point-4': 'всегда показывать список убийств в конце рейда, не скрывать экран чем-либо',
        'applying-point-5': 'по окончанию двух часов показать статистику персонажа по убийством чвк',
        'applying-point-6': 'количество участников в турнире: 10 человек',
        'requirements-header': 'Минимальные требования к участнику:',
        'requirements-point-1': 'аккаунт на твиче, не важно партнер или нет',
        'requirements-point-2': '18 лет или более',
        'requirements-point-3': 'качество стрима для заявки 720р и выше',
        'requirements-point-4': 'умение говорить хорошо на русском языке',
        'requirements-point-5': 'не нарушать правила плафтормы Twitch',
        'requirements-point-6': 'жить в регионах России',
        'timing-info-header': 'Время проведения турнира',
        'timing-info-dates': 'Прием заявок: 12-20 апреля',
        'timing-info-start': 'Проведение турнира: 23 апреля',
        'main-apply-button': 'Записаться на турнир',
        'location-header': 'Локация:',
        'location-text': 'Таможня',
        'rewards-header': 'Награда победителям',
        'first-place-header': '1 место',
        'second-place-header': '2 место',
        'third-place-header': '3 место',
        'fourth-place-header': '4 место',
        'first-place-reward': '25 000 \u20BD',
        'second-place-reward': '14 000 \u20BD',
        'third-place-reward': '8 000 \u20BD',
        'fourth-place-reward': '3 000 \u20BD',
        'additional-rewards-header': '+ дополнительные секретные призы победителям',
        'sponsors-header': 'Спонсоры турнира',
        'pepich-name': 'pep1ch',
        'first-additional-reward': '5 видеокарточек :)',
        'second-additional-reward': '10 мьёлниров :)',
        'third-additional-reward': 'пака :)',
    }

    function appendTextToTag(id, text) {
        document.getElementById(id)?.append(text);
    }

    function initPageText() {
        for(let id in pageText) {
            appendTextToTag(id, pageText[id]);
        }
    }

    function toggleAdditionalRewards() {
        document.getElementById('additional-rewards-list').classList.toggle('displayed');
    }

    return {
        initPageText,
        toggleAdditionalRewards,
    }
})();

TournamentModule.initPageText();