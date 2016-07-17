// Tomorrow Night Blue Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#ffffff';
      action.config.backgroundColor = '#002451';
      action.config.cursorColor = '#003f8e';
      action.config.colors = [
        "#002451",
        "#ff9da4",
        "#d1f1a9",
        "#ffeead",
        "#bbdaff",
        "#ebafbf",
        "#99ffff",
        "#00346e",
        "#7285b7",
        "#ff9da4",
        "#d1f1a9",
        "#ffeead",
        "#bbdaff",
        "#ebafbf",
        "#99ffff",
        "#ffffff",
        "#ffffff"
      ];
      action.config.css = '.title_1i8co95 { color: #ffffff !important }'
  }
  next(action)
}

