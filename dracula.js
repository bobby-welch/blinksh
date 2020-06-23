// https://spec.draculatheme.com/#sec-Example-spec-compliant-theme-implementation
{ 
    // dracula theme
    let black = '#21222C';
    let red = '#FF5555';
    let green = '#50FA7B';
    let yellow '#F1FA8C';
    let blue = '#BD93F9';
    let magenta = '#FF79C6';
    let cyan = '#8BE9FD';
    let white = '#F8F8F2';
    let brightBlack = '#6272A4';
    let brightRed = '#FF6E6E';
    let brightGreen = '#69FF94';
    let brightYellow = '#FFFFA5';
    let brightBlue = '#D6ACFF';
    let brightMagenta = '#FF92DF';
    let brightCyan = '#A4FFFF';
    let brightWhite = '#FFFFFF';
    let background = '282A36';
    let foreground = 'F8F8F2';

    // black dark/light
    let color0 = black;
    let color8 = brightBlack;
    // red dark/light
    let color1 = red;
    let color9 = brightRed;
    // green dark/light
    let color2 = green;
    let color10 = brightGreen;
    // yellow dark/light
    let color3 = yellow;
    let color11 = brightYellow;
    // blue dark/light
    let color4 = blue;
    let color12 = brightBlue;
    // magenta dark/light
    let color5 = magenta;
    let color13 = brightMagenta;
    // cyan dark/light
    let color6 = cyan;
    let color14 = brightCyan;
    // white dark/light
    let color7 = white;
    let color15 = brightWhite;

    // set preferences
    t.prefs_.set('color-palette-overrides', [color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12, color13, color14, color15]);
    t.prefs_.set('foreground-color', foreground);
    t.prefs_.set('background-color', background);
    t.prefs_.set('cursor-color', 'rgba(187, 187, 187, 0.5)');
}
