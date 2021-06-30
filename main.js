const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const toggleSwitch = $('.theme-switch input[type="checkbox"]')

const app = {

    config: JSON.parse(localStorage.getItem('CONGSON')) || {},

    setConfig(key, value) {
        this.config[key] = value;
        localStorage.setItem('CONGSON', JSON.stringify(this.config))
    },

    changeTheme() {
        const _this = this
        const currentTheme = this.config.theme

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme)

            if (currentTheme === "dark") {
                toggleSwitch.checked = true
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark")
                _this.setConfig('theme', "dark")
            } else {
                document.documentElement.setAttribute("data-theme", "light")
                _this.setConfig('theme', "light")
            }
        }

        toggleSwitch.addEventListener("change", switchTheme, false);
    },

    start() {
        // Change theme
        this.changeTheme()

        
    },
}

app.start()
