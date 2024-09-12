document.addEventListener('DOMContentLoaded', () => {
    const curtab = window.location.hash

    if (!curtab) {
        window.location.href = `#home`;
    }

    const tabs = {
        '#home': '#home-tab',
        '#projects': '#projects-tab',
    }

    const setActiveTab = (tab) => {
        Object.keys(tabs).forEach(t => {
            if (t == tab) {
                document.querySelector(tabs[t]).style.display = 'flex';
                return
            }

            document.querySelector(tabs[t]).style.display = 'none';
        })
    }

    Object.keys(tabs).forEach(tab => {
        const tabElement = document.querySelector(tab);
        tabElement.addEventListener('click', () => {
            setActiveTab(tab)
        })
    })

    document.querySelectorAll("[data-trigger=tab]").forEach(e => e.addEventListener('click', (e) => {
        setActiveTab(e.target.href)
    }))

    setActiveTab(curtab)
})