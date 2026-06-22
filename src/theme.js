function getTheme({ name }) {
	// Kanagawa palette (dark mode)
	const K = {
		bg_deep: "#16161D", // deepest bg: titlebar, sidebar, activitybar, tabbar, statusbar, panels, terminal
		bg_darker: "#1a1a22", // command palette, suggest widget
		bg: "#1F1F28", // editor bg, active tab bg
		bg_dim: "#2A2A37", // line highlight, widgets, list items, buttons, badges
		bg_medium: "#363646", // hover, active selection, suggest selected
		bg_blue: "#223249", // editor selections, secondary buttons, tip borders
		bg_search: "#2D4F67", // find match, peek match highlight
		fg: "#DCD7BA", // main foreground
		fg_status: "#C8C093", // (unused)
		fg_muted: "#727169", // comments, ignored, description
		fg_subtle: "#54546D", // line numbers, word highlights
		purple: "#957FB8", // keywords, storage, attributes, accent
		blue: "#7E9CD8", // functions, methods, headings
		blue_light: "#7FB4CA", // constants, regexp, escape chars
		blue_med: "#9CABCA", // punctuation, cyan terminal
		teal: "#7AA89F", // class, type, support
		teal_dark: "#6A9589", // text links
		teal_dim: "#658594", // activity badge, terminal blue
		green: "#98BB6C", // strings, inserted
		green_dark: "#76946A", // gutter added, inserted markup
		yellow: "#E6C384", // properties, html attributes, html tags, parameters
		gold: "#C0A36E", // operators, arithmetic
		orange: "#FFA066", // variable.readonly, macro, booleans
		amber: "#DCA561", // modified
		amber_warn: "#FF9E3B", // warnings, terminal yellow
		pink: "#D27E99", // numbers
		red: "#E82424", // errors
		red_bright: "#FF5D62", // invalid, language methods
		red_dark: "#C34043", // deleted, gutter deleted
	};

	const workbenchForeground = K.fg;
	const workbenchBackground = K.bg;
	const editorBackground = K.bg;
	const panelBorder = K.bg_dim;
	const tipBackground = K.bg_dim;
	const tipBorder = K.bg_blue;
	const editorForeground = K.fg;

	return {
		name: name,
		colors: {
			focusBorder: K.purple,
			foreground: K.fg,
			descriptionForeground: K.fg_muted,
			errorForeground: K.red,
			"icon.foreground": K.fg,
			"keybindingLabel.foreground": K.fg,

			"textLink.foreground": K.teal_dark,
			"textLink.activeForeground": K.teal,
			"textBlockQuote.background": tipBackground,
			"textBlockQuote.border": tipBorder,
			"textCodeBlock.background": K.bg_dim,
			"textPreformat.foreground": K.amber_warn,
			"textSeparator.foreground": K.fg_subtle,

			"button.background": K.bg_dim,
			"button.foreground": K.fg,
			"button.hoverBackground": K.bg_medium,

			"button.secondaryBackground": K.bg_blue,
			"button.secondaryForeground": K.fg,
			"button.secondaryHoverBackground": K.bg_medium,

			"checkbox.background": K.bg_dim,
			"checkbox.border": K.bg_blue,

			"dropdown.background": K.bg_deep,
			"dropdown.border": K.bg_dim,
			"dropdown.foreground": workbenchForeground,
			"dropdown.listBackground": K.bg,

			"input.background": K.bg_deep,
			"input.border": K.bg_dim,
			"input.foreground": workbenchForeground,
			"input.placeholderForeground": K.fg_muted,

			"badge.foreground": K.fg,
			"badge.background": K.bg_dim,

			"progressBar.background": K.blue,

			"titleBar.activeForeground": workbenchForeground,
			"titleBar.activeBackground": K.bg_deep,
			"titleBar.inactiveForeground": K.fg,
			"titleBar.inactiveBackground": K.bg_deep,
			"titleBar.border": panelBorder,

			"activityBar.foreground": workbenchForeground,
			"activityBar.inactiveForeground": K.fg_muted,
			"activityBar.background": K.bg_deep,
			"activityBarBadge.foreground": K.fg,
			"activityBarBadge.background": K.teal_dim,
			"activityBar.activeBorder": K.purple,
			"activityBar.border": panelBorder,

			"sideBar.foreground": K.fg,
			"sideBar.background": K.bg_deep,
			"sideBar.border": panelBorder,
			"sideBarTitle.foreground": workbenchForeground,
			"sideBarSectionHeader.foreground": workbenchForeground,
			"sideBarSectionHeader.background": K.bg_deep,
			"sideBarSectionHeader.border": K.bg_dim,

			"list.hoverForeground": workbenchForeground,
			"list.inactiveSelectionForeground": workbenchForeground,
			"list.activeSelectionForeground": workbenchForeground,
			"list.hoverBackground": K.bg_medium,
			"list.inactiveSelectionBackground": K.bg_dim,
			"list.activeSelectionBackground": K.bg_medium,
			"list.inactiveFocusBackground": K.bg_dim,
			"list.focusBackground": K.bg_medium,
			"list.highlightForeground": K.blue,
			"list.warningForeground": K.amber_warn,

			"tree.indentGuidesStroke": K.bg_dim,

			"notificationCenterHeader.foreground": K.fg_muted,
			"notificationCenterHeader.background": K.bg,
			"notifications.foreground": workbenchForeground,
			"notifications.background": K.bg_dim,
			"notifications.border": panelBorder,
			"notificationsErrorIcon.foreground": K.red,
			"notificationsWarningIcon.foreground": K.amber_warn,
			"notificationsInfoIcon.foreground": K.blue,

			"pickerGroup.border": K.bg_dim,
			"pickerGroup.foreground": K.fg_muted,
			"quickInput.background": K.bg_darker,
			"quickInput.foreground": workbenchForeground,
			"quickInputTitle.background": K.bg_deep,

			"menu.background": K.bg_dim,
			"menu.foreground": workbenchForeground,
			"menu.selectionBackground": K.bg_medium,
			"menu.selectionForeground": workbenchForeground,
			"menu.separatorBackground": panelBorder,
			"menubar.selectionBackground": K.bg_medium,
			"menubar.selectionForeground": workbenchForeground,

			"editorWidget.foreground": workbenchForeground,
			"editorWidget.border": panelBorder,
			"editorActionList.background": K.bg_darker,

			"chat.requestBackground": tipBackground,
			"chat.requestBorder": tipBorder,
			"chat.requestBubbleBackground": tipBackground,
			"chat.requestBubbleHoverBackground": K.bg_medium,
			"chat.requestCodeBorder": tipBorder,
			"inlineChat.background": tipBackground,
			"inlineChat.border": tipBorder,
			"inlineChatInput.background": editorBackground,
			"inlineChatInput.border": tipBorder,

			"statusBar.foreground": K.fg,
			"statusBar.background": K.bg_deep,
			"statusBar.border": panelBorder,
			"statusBar.noFolderBackground": K.bg,
			"statusBar.debuggingBackground": K.red,
			"statusBar.debuggingForeground": K.fg,
			"statusBar.debuggingBorder": K.purple,
			"statusBarItem.prominentBackground": K.bg_dim,
			"statusBarItem.remoteForeground": K.fg,
			"statusBarItem.remoteBackground": K.bg_search,
			"statusBarItem.hoverBackground": K.bg_medium,

			"editorGroupHeader.tabsBackground": K.bg_deep,
			"editorGroupHeader.tabsBorder": panelBorder,
			"editorGroup.border": panelBorder,

			"tab.activeForeground": workbenchForeground,
			"tab.inactiveForeground": K.fg_muted,
			"tab.inactiveBackground": K.bg_deep,
			"tab.activeBackground": workbenchBackground,
			"tab.hoverBackground": K.bg_dim,
			"tab.unfocusedHoverBackground": K.bg_dim,
			"tab.border": panelBorder,
			"tab.unfocusedActiveBorderTop": K.fg_subtle,
			"tab.activeBorder": workbenchBackground,
			"tab.unfocusedActiveBorder": workbenchBackground,
			"tab.activeBorderTop": K.purple,

			"breadcrumb.foreground": K.fg_muted,
			"breadcrumb.focusForeground": workbenchForeground,
			"breadcrumb.activeSelectionForeground": K.fg,
			"breadcrumbPicker.background": K.bg_dim,

			"editor.foreground": editorForeground,
			"editor.background": editorBackground,
			"editorWidget.background": K.bg_darker,
			"editor.foldBackground": "#54546D22",
			"editor.lineHighlightBackground": "#36364666",
			"editorLineNumber.foreground": K.fg_subtle,
			"editorLineNumber.activeForeground": K.purple,
			"editorIndentGuide.background": K.bg_medium,
			"editorIndentGuide.activeBackground": K.fg_subtle,
			"editorWhitespace.foreground": K.fg_subtle,
			"editorCursor.foreground": K.fg,
			"editorCursor.background": K.fg,
			"editorError.foreground": K.red,
			"editorWarning.foreground": K.amber_warn,
			"editorHoverWidget.background": K.bg_darker,
			"editorHoverWidget.border": K.bg_medium,
			"editorHoverWidget.highlightForeground": K.teal_dim,
			"editorInlayHint.foreground": K.fg_muted,
			"editorInlayHint.background": editorBackground,
			"editorMarkerNavigation.background": K.bg_medium,
			"editorRuler.foreground": K.bg_medium,
			"editorSuggestWidget.background": K.bg_darker,
			"editorSuggestWidget.border": K.bg_dim,
			"editorSuggestWidget.selectedBackground": K.bg_medium,

			"editor.findMatchBackground": K.bg_search,
			"editor.findMatchBorder": K.amber_warn,
			"editor.findMatchHighlightBackground": "#2D4F6740",
			"editor.linkedEditingBackground": "#3392FF22",
			"editor.inactiveSelectionBackground": "#3636464d",
			"editor.selectionBackground": K.bg_blue,
			"editor.selectionHighlightBackground": "#22324955",
			"editor.selectionHighlightBorder": K.bg_search,
			"editor.wordHighlightBackground": "#22324933",
			"editor.wordHighlightStrongBackground": "#2D4F674d",
			"editor.wordHighlightBorder": "#2D4F6780",
			"editor.wordHighlightStrongBorder": K.bg_search,
			"editorBracketMatch.background": K.bg_deep,
			"editorBracketMatch.border": K.fg_subtle,

			"editorBracketHighlight.foreground1": K.purple,
			"editorBracketHighlight.foreground2": K.orange,
			"editorBracketHighlight.foreground3": K.blue,
			"editorBracketHighlight.foreground4": K.pink,
			"editorBracketHighlight.foreground5": K.yellow,
			"editorBracketHighlight.foreground6": K.teal,
			"editorBracketHighlight.unexpectedBracket.foreground": K.red_bright,
			"editorBracketPairGuide.activeBackground1": K.purple,
			"editorBracketPairGuide.activeBackground2": K.orange,
			"editorBracketPairGuide.activeBackground3": K.blue,
			"editorBracketPairGuide.activeBackground4": K.pink,
			"editorBracketPairGuide.activeBackground5": K.yellow,
			"editorBracketPairGuide.activeBackground6": K.teal,

			"editorGutter.modifiedBackground": K.amber,
			"editorGutter.addedBackground": K.green_dark,
			"editorGutter.deletedBackground": K.red_dark,

			"diffEditor.insertedTextBackground": "#2B3328",
			"diffEditor.removedTextBackground": "#43242430",

			"scrollbar.shadow": K.bg_deep,
			"scrollbarSlider.background": "#54546D66",
			"scrollbarSlider.hoverBackground": "#54546D80",
			"scrollbarSlider.activeBackground": "#6f6f9080",
			"editorOverviewRuler.border": panelBorder,

			"panel.background": K.bg_deep,
			"panel.border": panelBorder,
			"panelTitle.activeBorder": K.purple,
			"panelTitle.activeForeground": workbenchForeground,
			"panelTitle.inactiveForeground": K.fg_muted,
			"panelInput.border": panelBorder,
			"panelSectionHeader.background": K.bg,

			"terminal.background": K.bg_deep,
			"terminal.foreground": K.fg,
			"terminal.border": panelBorder,
			"terminal.tab.activeBorder": K.purple,
			"terminal.selectionBackground": K.bg_blue,
			"terminalCursor.background": K.fg,
			"terminalCursor.foreground": K.fg,

			// Test ANSI colors with:
			// echo -e "\033[0mNC (No color)"
			// echo -e "\033[1;37mWHITE\t\033[0;30mBLACK"
			// echo -e "\033[0;34mBLUE\t\033[1;34mLIGHT_BLUE"
			// echo -e "\033[0;32mGREEN\t\033[1;32mLIGHT_GREEN"
			// echo -e "\033[0;36mCYAN\t\033[1;36mLIGHT_CYAN"
			// echo -e "\033[0;31mRED\t\033[1;31mLIGHT_RED"
			// echo -e "\033[0;35mPURPLE\t\033[1;35mLIGHT_PURPLE"
			// echo -e "\033[0;33mYELLOW\t\033[1;33mLIGHT_YELLOW"
			// echo -e "\033[1;30mGRAY\t\033[0;37mLIGHT_GRAY"
			"terminal.ansiBlack": K.bg,
			"terminal.ansiRed": K.red,
			"terminal.ansiGreen": K.green_dark,
			"terminal.ansiYellow": K.amber_warn,
			"terminal.ansiBlue": K.teal_dim,
			"terminal.ansiMagenta": K.purple,
			"terminal.ansiCyan": K.blue_med,
			"terminal.ansiWhite": K.fg,
			"terminal.ansiBrightBlack": K.bg_dim,
			"terminal.ansiBrightRed": K.red_bright,
			"terminal.ansiBrightGreen": K.green,
			"terminal.ansiBrightYellow": K.yellow,
			"terminal.ansiBrightBlue": K.blue_light,
			"terminal.ansiBrightMagenta": K.pink,
			"terminal.ansiBrightCyan": "#A3D4D5",
			"terminal.ansiBrightWhite": K.fg,

			"gitDecoration.addedResourceForeground": K.green_dark,
			"gitDecoration.modifiedResourceForeground": K.blue,
			"gitDecoration.deletedResourceForeground": K.red_dark,
			"gitDecoration.untrackedResourceForeground": K.green_dark,
			"gitDecoration.ignoredResourceForeground": K.fg_muted,
			"gitDecoration.conflictingResourceForeground": K.amber_warn,
			"gitDecoration.submoduleResourceForeground": K.fg_muted,

			"minimapGutter.addedBackground": K.green_dark,
			"minimapGutter.deletedBackground": K.red_dark,
			"minimapGutter.modifiedBackground": K.amber,

			"debugToolBar.background": K.bg_deep,
			"editor.stackFrameHighlightBackground": "#C6902625", // needs opacity (yellow)
			"editor.focusedStackFrameHighlightBackground": "#2b6a3033", // needs opacity (green)

			"peekView.border": K.fg_subtle,
			"peekViewEditor.matchHighlightBackground": K.bg_search,
			"peekViewResult.matchHighlightBackground": K.bg_search,
			"peekViewEditor.background": K.bg_dim,
			"peekViewResult.background": K.bg_medium,

			"settings.headerForeground": workbenchForeground,
			"settings.modifiedItemIndicator": K.blue,
			"settings.focusedRowBackground": K.bg_medium,
			"welcomePage.buttonBackground": K.bg_dim,
			"welcomePage.buttonHoverBackground": K.bg_medium,
		},
		semanticHighlighting: true,
		tokenColors: [
			{
				scope: ["comment", "punctuation.definition.comment", "string.comment"],
				settings: {
					foreground: K.fg_muted,
					fontStyle: "italic",
				},
			},
			{
				scope: [
					"constant",
					"entity.name.constant",
					"variable.other.constant",
					"variable.other.enummember",
				],
				settings: {
					foreground: K.blue_light,
				},
			},
			{
				scope: "variable.language",
				settings: {
					foreground: K.red_bright,
				},
			},
			{
				scope: ["entity.name"],
				settings: {
					foreground: K.teal,
				},
			},
			{
				scope: "entity.name.type",
				settings: {
					foreground: K.teal,
				},
			},
			{
				scope: "entity.name.function",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "entity.name.namespace",
				settings: {
					foreground: K.fg,
				},
			},
			{
				scope: "variable.parameter.function",
				settings: {
					foreground: editorForeground,
				},
			},
			{
				scope: "entity.name.tag",
				settings: {
					foreground: K.yellow,
				},
			},
			{
				scope: "entity.name.tag.html",
				settings: {
					foreground: K.purple,
				},
			},
			{
				scope: "keyword",
				settings: {
					foreground: K.purple,
				},
			},
			{
				scope: "keyword.control.flow",
				settings: {
					foreground: K.purple,
					fontStyle: "bold",
				},
			},
			{
				scope: "keyword.operator",
				settings: {
					foreground: K.gold,
				},
			},
			{
				scope: ["storage", "storage.type"],
				settings: {
					foreground: K.purple,
				},
			},
			{
				scope: [
					"storage.modifier.package",
					"storage.modifier.import",
					"storage.type.java",
				],
				settings: {
					foreground: editorForeground,
				},
			},
			{
				scope: [
					"string",
					"punctuation.definition.string",
					"string punctuation.section.embedded source",
					"markup.inline.raw.string",
				],
				settings: {
					foreground: K.green,
				},
			},
			{
				scope: "support",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "support.type",
				settings: {
					foreground: K.teal,
				},
			},
			{
				scope: "support.function",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "meta.property-name",
				settings: {
					foreground: K.yellow,
				},
			},
			{
				scope: "variable",
				settings: {
					foreground: K.fg,
				},
			},
			{
				scope: "variable.other",
				settings: {
					foreground: editorForeground,
				},
			},
			{
				scope: "variable.other.property",
				settings: {
					foreground: K.yellow,
				},
			},
			{
				scope: "variable.other.readwrite",
				settings: {
					foreground: K.orange,
				},
			},
			{
				scope: "punctuation",
				settings: {
					foreground: K.blue_med,
				},
			},
			{
				scope: "invalid.broken",
				settings: {
					fontStyle: "italic",
					foreground: K.red_bright,
				},
			},
			{
				scope: "invalid.deprecated",
				settings: {
					fontStyle: "italic",
					foreground: K.red_bright,
				},
			},
			{
				scope: "invalid.illegal",
				settings: {
					fontStyle: "italic",
					foreground: K.red_bright,
				},
			},
			{
				scope: "invalid.unimplemented",
				settings: {
					fontStyle: "italic",
					foreground: K.red_bright,
				},
			},
			{
				scope: "carriage-return",
				settings: {
					fontStyle: "italic underline",
					background: K.red,
					foreground: K.fg,
					content: "^M",
				},
			},
			{
				scope: "message.error",
				settings: {
					foreground: K.red,
				},
			},
			{
				scope: "string variable",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: ["source.regexp", "string.regexp"],
				settings: {
					foreground: K.blue_light,
				},
			},
			{
				scope: [
					"string.regexp.character-class",
					"string.regexp constant.character.escape",
					"string.regexp source.ruby.embedded",
					"string.regexp string.regexp.arbitrary-repitition",
				],
				settings: {
					foreground: K.blue_light,
				},
			},
			{
				scope: "string.regexp constant.character.escape",
				settings: {
					fontStyle: "bold",
					foreground: K.blue_light,
				},
			},
			{
				scope: "constant.character.escape",
				settings: {
					foreground: K.blue_light,
				},
			},
			{
				scope: "support.constant",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "support.variable",
				settings: {
					foreground: K.fg,
				},
			},
			{
				scope: "meta.module-reference",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "punctuation.definition.list.begin.markdown",
				settings: {
					foreground: K.orange,
				},
			},
			{
				scope: ["markup.heading", "markup.heading entity.name"],
				settings: {
					fontStyle: "bold",
					foreground: K.blue,
				},
			},
			{
				scope: "markup.quote",
				settings: {
					foreground: K.fg_muted,
					fontStyle: "italic",
				},
			},
			{
				scope: "markup.italic",
				settings: {
					fontStyle: "italic",
					foreground: "#E46876",
				},
			},
			{
				scope: "markup.bold",
				settings: {
					fontStyle: "bold",
					foreground: editorForeground,
				},
			},
			{
				scope: ["markup.underline"],
				settings: {
					fontStyle: "underline",
					foreground: K.blue_light,
				},
			},
			{
				scope: ["markup.strikethrough"],
				settings: {
					fontStyle: "strikethrough",
				},
			},
			{
				scope: "markup.inline.raw",
				settings: {
					foreground: K.purple,
				},
			},
			{
				scope: [
					"markup.deleted",
					"meta.diff.header.from-file",
					"punctuation.definition.deleted",
				],
				settings: {
					background: "#43242488",
					foreground: K.red_dark,
				},
			},
			{
				scope: [
					"markup.inserted",
					"meta.diff.header.to-file",
					"punctuation.definition.inserted",
				],
				settings: {
					background: "#2B332888",
					foreground: K.green_dark,
				},
			},
			{
				scope: ["markup.changed", "punctuation.definition.changed"],
				settings: {
					background: "#3d2a1088",
					foreground: K.amber,
				},
			},
			{
				scope: ["markup.ignored", "markup.untracked"],
				settings: {
					foreground: K.fg_muted,
					background: K.blue,
				},
			},
			{
				scope: "meta.diff.range",
				settings: {
					foreground: K.purple,
					fontStyle: "bold",
				},
			},
			{
				scope: "meta.diff.header",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: "meta.separator",
				settings: {
					fontStyle: "bold",
					foreground: K.blue_med,
				},
			},
			{
				scope: "meta.output",
				settings: {
					foreground: K.blue,
				},
			},
			{
				scope: [
					"brackethighlighter.tag",
					"brackethighlighter.curly",
					"brackethighlighter.round",
					"brackethighlighter.square",
					"brackethighlighter.angle",
					"brackethighlighter.quote",
				],
				settings: {
					foreground: K.fg,
				},
			},
			{
				scope: "brackethighlighter.unmatched",
				settings: {
					foreground: K.red,
				},
			},
			{
				scope: ["constant.other.reference.link", "string.other.link"],
				settings: {
					foreground: K.green,
					fontStyle: "underline",
				},
			},
			{
				scope: "constant.numeric",
				settings: {
					foreground: K.pink,
				},
			},
			{
				scope: "constant.language.boolean",
				settings: {
					foreground: K.orange,
				},
			},
			{
				scope: "entity.other.attribute-name",
				settings: {
					foreground: K.purple,
				},
			},
			{
				scope: "entity.other.attribute-name.html",
				settings: {
					foreground: K.yellow,
				},
			},
			{
				scope: "entity.other.attribute-name.class",
				settings: {
					foreground: K.yellow,
				},
			},
			{
				scope: "entity.name.function.macro",
				settings: {
					foreground: K.orange,
				},
			},
		],
		semanticTokenColors: {
			parameter: K.yellow,
			variable: K.fg,
			arithmetic: K.gold,
			method: K.blue,
			function: K.blue,
			operator: K.gold,
			"parameter.declaration": K.yellow,
			"parameter.definition": K.yellow,
			"variable.readonly": K.orange,
			"variable.readonly.local": K.fg,
			"variable.readonly.defaultLibrary": K.blue_light,
			macro: K.orange,
			"keyword.controlFlow": {
				foreground: K.purple,
				fontStyle: "bold",
			},
		},
	};
}

module.exports = getTheme;
