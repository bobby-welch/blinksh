// https://spec.draculatheme.com/#sec-Example-spec-compliant-theme-implementation
{ 
    // dracula theme
    const black = '#21222C';
    const red = '#FF5555';
    const green = '#50FA7B';
    const yellow '#F1FA8C';
    const blue = '#BD93F9';
    const magenta = '#FF79C6';
    const cyan = '#8BE9FD';
    const white = '#F8F8F2';
    const brightBlack = '#6272A4';
    const brightRed = '#FF6E6E';
    const brightGreen = '#69FF94';
    const brightYellow = '#FFFFA5';
    const brightBlue = '#D6ACFF';
    const brightMagenta = '#FF92DF';
    const brightCyan = '#A4FFFF';
    const brightWhite = '#FFFFFF';
    const background = '282A36;'
    const foreground = 'F8F8F2;'

    // black dark/light
    const color0 = black;
    const color8 = brightBlack;
    // red dark/light
    const color1 = red;
    const color9 = brightRed;
    // green dark/light
    const color2 = green;
    const color10 = brightGreen;
    // yellow dark/light
    const color3 = yellow;
    const color11 = brightYellow;
    // blue dark/light
    const color4 = blue;
    const color12 = brightBlue;
    // magenta dark/light
    const color5 = magenta;
    const color13 = brightMagenta;
    // cyan dark/light
    const color6 = cyan;
    const color14 = brightCyan;
    // white dark/light
    const color7 = white;
    const color15 = brightWhite;

    // set preferences
    t.prefs_.set('color-palette-overrides', [color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12, color13, color14, color15]);
    t.prefs_.set('foreground-color', foreground);
    t.prefs_.set('background-color', background);
    t.prefs_.set('cursor-color', 'rgba(187, 187, 187, 0.5)');
}
