// OneDark Theme
// Based on: https://github.com/joshdick/onedark.vim

let base00 = '#282c34' // base00, black
let base01 = '#e06c75' // base01, red
let base02 = '#98c379' // base02, green
let base03 = '#e5c07b' // base03, yellow
let base04 = '#61afef' // base04, blue
let base05 = '#c678dd' // base05, magenta
let base06 = '#56b6c2' // base06, cyan
let base07 = '#abb2bf' // base07, white
let base08 = '#3e4452' // base08, bright-black
let base09 = '#be5046' // base09, bright-red
let base10 = '#98c379' // base10, bright-green
let base11 = '#d19a66' // base11, bright-yellow
let base12 = '#61afef' // base12, bright-blue
let base13 = '#c678dd' // base13, bright-magenta
let base14 = '#56b6c2' // base14, bright-cyan
let base15 = '#5c6370' // base15, bright-white

term_.prefs_.set('color-palette-overrides',
  [base00,
    base01,
    base02,
    base03,
    base04,
    base05,
    base06,
    base07,
    base08,
    base09,
    base10,
    base11,
    base12,
    base13,
    base14,
    base15])

term_.prefs_.set('cursor-color', 'rgba(171, 178, 191, 0.5)')
term_.prefs_.set('foreground-color', base07)
term_.prefs_.set('background-color', base00)
