require('babel-register');
require('babel-polyfill')

const os = require('os')
let platform = os.platform()

// Returns the correct chrome driver based on the host OS
function chromeDriver() {
    if(platform == 'win32'){
        return "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
    }

    return "./node_modules/chromedriver/lib/chromedriver/chromedriver"
}

var SELENIUM = {
    start_process: true,
    server_path: "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
    log_path: "",
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chromeDriver(),
      "webdriver.ie.driver": ""
    }
}

var MOCHA = {
    test_runner: {
        type: "mocha",
        options: {
            ui: "bdd",
            reporter: "lst"
        }
    }
}

var DEFUALT = {
    launch_url: "http://www.qualityworkscg.com/",
    selenium_port: 4444,
    silent: true,
    screenshots: {
      enabled: true,
      path: "screenshots"
    },
    desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
    } 
}

var ENVIRONMENTS = {
    default: DEFUALT,
    mocha: MOCHA
}

module.exports = {
    src_folders: [
        "tests"
    ],
    output_folder: "reports",
    custom_commands_path: "custom/commands",
    custom_assertions_path: "",
    page_objects_path: [
        "page_objects"
    ],
    globals_path: "custom/globals.js",
    selenium: SELENIUM,
    test_workers: true,
    test_settings: ENVIRONMENTS
}