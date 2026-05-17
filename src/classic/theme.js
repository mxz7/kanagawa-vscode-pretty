const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
	// Usage: `auto('pink')`
	const auto = (hex) => getVariant(hex, style);

	// Usage: `pick({ light: "lightblue", dark: "darkblue" })`
	const pick = (options) => options[style];

	const primer = getColors(style);

	// Kanagawa palette (dark mode)
	const K = {
		bg_deep:    "#16161D", // deepest bg: statusbar, tabbar, dropdown
		bg:         "#1F1F28", // editor bg, sidebar bg
		bg_dim:     "#2A2A37", // activity bar, line highlight, panels
		bg_medium:  "#363646", // hover, active selection, title bar
		bg_blue:    "#223249", // selections, suggest widget
		bg_search:  "#2D4F67", // find match, suggest selected
		fg:         "#DCD7BA", // main foreground
		fg_status:  "#C8C093", // status bar foreground
		fg_muted:   "#727169", // comments, ignored, description
		fg_subtle:  "#54546D", // line numbers, word highlights
		purple:     "#957FB8", // keywords, storage, attributes, accent
		blue:       "#7E9CD8", // functions, methods, headings
		blue_light: "#7FB4CA", // constants, boolean, escape chars
		blue_med:   "#9CABCA", // punctuation, cyan terminal
		teal:       "#7AA89F", // class, type, support
		teal_dark:  "#6A9589", // text links
		teal_dim:   "#658594", // activity badge, terminal blue
		green:      "#98BB6C", // strings, inserted
		green_dark: "#76946A", // gutter added, inserted markup
		yellow:     "#E6C384", // properties, html attributes, html tags
		gold:       "#C0A36E", // operators, arithmetic
		orange:     "#FFA066", // variable.readonly, macro, import
		amber:      "#DCA561", // modified
		amber_warn: "#FF9E3B", // warnings, terminal yellow
		pink:       "#D27E99", // numbers, JSON level 0
		red:        "#E82424", // errors
		red_bright: "#FF5D62", // invalid, language methods
		red_dark:   "#C34043", // deleted, gutter deleted
	};

	const workbenchForeground = pick({ light: primer.gray[8], dark: K.fg });
	const workbenchBackground = pick({ light: primer.gray[1], dark: K.bg });
	const editorBackground    = pick({ light: primer.white,   dark: K.bg });
	const panelBorder         = pick({ light: primer.gray[2], dark: K.bg_dim });
	const tipBackground       = pick({ light: primer.gray[0], dark: K.bg_dim });
	const tipBorder           = pick({ light: primer.gray[2], dark: K.bg_blue });
	const editorForeground    = pick({ light: primer.gray[9], dark: K.fg });

	return {
		name: name,
		colors: {
			focusBorder: pick({ light: primer.blue[4], dark: K.purple }),
			foreground: pick({ light: primer.gray[7], dark: K.fg }),
			descriptionForeground: pick({ light: primer.gray[5], dark: K.fg }),
			errorForeground: pick({ light: primer.red[6], dark: K.red }),
			"icon.foreground": pick({ light: primer.gray[7], dark: K.fg }),
			"keybindingLabel.foreground": pick({ light: primer.gray[7], dark: K.fg }),

			"textLink.foreground": pick({ light: primer.blue[5], dark: K.teal_dark }),
			"textLink.activeForeground": pick({ light: primer.blue[6], dark: K.teal }),
			"textBlockQuote.background": tipBackground,
			"textBlockQuote.border": tipBorder,
			"textCodeBlock.background": pick({ light: primer.gray[1], dark: K.bg_dim }),
			"textPreformat.foreground": pick({ light: primer.gray[6], dark: K.amber_warn }),
			"textSeparator.foreground": pick({ light: primer.gray[3], dark: K.fg_subtle }),

			"button.background": pick({ light: "#159739", dark: K.bg_dim }),
			"button.foreground": pick({ light: primer.white, dark: K.fg }),
			"button.hoverBackground": pick({ light: "#138934", dark: K.bg_medium }),

			"button.secondaryBackground": pick({ light: primer.gray[2], dark: K.bg_blue }),
			"button.secondaryForeground": pick({ light: primer.black, dark: K.fg }),
			"button.secondaryHoverBackground": pick({ light: primer.gray[3], dark: K.bg_medium }),

			"checkbox.background": pick({ light: primer.gray[0], dark: K.bg_dim }),
			"checkbox.border": pick({ light: primer.gray[3], dark: K.bg_blue }),

			"dropdown.background": pick({ light: primer.gray[0], dark: K.bg_deep }),
			"dropdown.border": pick({ light: primer.gray[2], dark: K.bg_dim }),
			"dropdown.foreground": workbenchForeground,
			"dropdown.listBackground": pick({ light: primer.white, dark: K.bg }),

			"input.background": pick({ light: primer.white, dark: K.bg_deep }),
			"input.border": pick({ light: primer.gray[2], dark: K.bg_dim }),
			"input.foreground": workbenchForeground,
			"input.placeholderForeground": pick({ light: primer.gray[4], dark: K.fg_muted }),

			"badge.foreground": pick({ light: primer.blue[6], dark: K.fg }),
			"badge.background": pick({ light: primer.blue[1], dark: K.bg_dim }),

			"progressBar.background": pick({ light: primer.blue[4], dark: K.blue }),

			"titleBar.activeForeground": workbenchForeground,
			"titleBar.activeBackground": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"titleBar.inactiveForeground": pick({ light: primer.gray[5], dark: K.fg }),
			"titleBar.inactiveBackground": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"titleBar.border": panelBorder,

			"activityBar.foreground": workbenchForeground,
			"activityBar.inactiveForeground": pick({ light: primer.gray[4], dark: K.fg_muted }),
			"activityBar.background": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"activityBarBadge.foreground": pick({ light: primer.white, dark: K.fg }),
			"activityBarBadge.background": pick({ light: primer.blue[4], dark: K.teal_dim }),
			"activityBar.activeBorder": pick({ light: "#f9826c", dark: K.purple }),
			"activityBar.border": panelBorder,

			"sideBar.foreground": pick({ light: primer.gray[6], dark: K.fg }),
			"sideBar.background": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"sideBar.border": panelBorder,
			"sideBarTitle.foreground": workbenchForeground,
			"sideBarSectionHeader.foreground": workbenchForeground,
			"sideBarSectionHeader.background": pick({ light: workbenchBackground, dark: K.bg_medium }),
			"sideBarSectionHeader.border": pick({ light: primer.gray[2], dark: K.fg }),

			"list.hoverForeground": workbenchForeground,
			"list.inactiveSelectionForeground": workbenchForeground,
			"list.activeSelectionForeground": workbenchForeground,
			"list.hoverBackground": pick({ light: "#ebf0f4", dark: K.bg_medium }),
			"list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: K.bg_dim }),
			"list.activeSelectionBackground": pick({ light: "#e2e5e9", dark: K.bg_medium }),
			"list.inactiveFocusBackground": pick({ light: primer.blue[1], dark: K.bg_dim }),
			"list.focusBackground": pick({ light: "#cce5ff", dark: K.bg_dim }),
			"list.highlightForeground": pick({ light: primer.blue[6], dark: K.blue }),
			"list.warningForeground": pick({ light: primer.orange[6], dark: K.amber_warn }),

			"tree.indentGuidesStroke": pick({ light: primer.gray[2], dark: K.bg_dim }),

			"notificationCenterHeader.foreground": pick({ light: primer.gray[5], dark: K.fg_muted }),
			"notificationCenterHeader.background": pick({ light: primer.gray[2], dark: K.bg }),
			"notifications.foreground": workbenchForeground,
			"notifications.background": pick({ light: primer.gray[0], dark: K.bg_dim }),
			"notifications.border": panelBorder,
			"notificationsErrorIcon.foreground": pick({ light: primer.red[5], dark: K.red }),
			"notificationsWarningIcon.foreground": pick({ light: primer.orange[6], dark: K.amber_warn }),
			"notificationsInfoIcon.foreground": pick({ light: primer.blue[6], dark: K.blue }),

			"pickerGroup.border": pick({ light: primer.gray[2], dark: K.bg_dim }),
			"pickerGroup.foreground": workbenchForeground,
			"quickInput.background": workbenchBackground,
			"quickInput.foreground": workbenchForeground,
			"quickInputTitle.background": pick({ light: primer.gray[1], dark: K.bg_dim }),

			"menu.background": pick({ light: primer.gray[0], dark: K.bg_dim }),
			"menu.foreground": workbenchForeground,
			"menu.selectionBackground": pick({ light: "#e2e5e9", dark: K.bg_medium }),
			"menu.selectionForeground": workbenchForeground,
			"menu.separatorBackground": panelBorder,
			"menubar.selectionBackground": pick({ light: "#e2e5e9", dark: K.bg_medium }),
			"menubar.selectionForeground": workbenchForeground,

			"editorWidget.foreground": workbenchForeground,
			"editorWidget.border": panelBorder,

			"chat.requestBackground": tipBackground,
			"chat.requestBorder": tipBorder,
			"chat.requestBubbleBackground": tipBackground,
			"chat.requestBubbleHoverBackground": pick({ light: primer.gray[1], dark: K.bg_dim }),
			"chat.requestCodeBorder": tipBorder,
			"inlineChat.background": tipBackground,
			"inlineChat.border": tipBorder,
			"inlineChatInput.background": editorBackground,
			"inlineChatInput.border": tipBorder,

			"statusBar.foreground": pick({ light: primer.gray[6], dark: K.fg }),
			"statusBar.background": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"statusBar.border": panelBorder,
			"statusBar.noFolderBackground": pick({ light: workbenchBackground, dark: K.bg }),
			"statusBar.debuggingBackground": pick({ light: auto("#f9826c"), dark: K.red }),
			"statusBar.debuggingForeground": pick({ light: primer.white, dark: K.fg }),
			"statusBar.debuggingBorder": pick({ light: primer.gray[2], dark: K.purple }),
			"statusBarItem.prominentBackground": pick({ light: "#e8eaed", dark: K.bg_dim }),
			"statusBarItem.remoteForeground": pick({ light: primer.gray[6], dark: K.fg }),
			"statusBarItem.remoteBackground": pick({ light: workbenchBackground, dark: K.bg_search }),
			"statusBarItem.hoverBackground": pick({ light: primer.gray[2], dark: K.bg_medium }),

			"editorGroupHeader.tabsBackground": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"editorGroupHeader.tabsBorder": panelBorder,
			"editorGroup.border": panelBorder,

			"tab.activeForeground": workbenchForeground,
			"tab.inactiveForeground": pick({ light: primer.gray[5], dark: K.fg_muted }),
			"tab.inactiveBackground": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"tab.activeBackground": workbenchBackground,
			"tab.hoverBackground": pick({ light: workbenchBackground, dark: K.bg_dim }),
			"tab.unfocusedHoverBackground": pick({ light: workbenchBackground, dark: K.bg_dim }),
			"tab.border": panelBorder,
			"tab.unfocusedActiveBorderTop": pick({ light: primer.gray[2], dark: K.fg_subtle }),
			"tab.activeBorder": workbenchBackground,
			"tab.unfocusedActiveBorder": workbenchBackground,
			"tab.activeBorderTop": pick({ light: "#f9826c", dark: K.purple }),

			"breadcrumb.foreground": pick({ light: primer.gray[5], dark: K.fg_muted }),
			"breadcrumb.focusForeground": workbenchForeground,
			"breadcrumb.activeSelectionForeground": pick({ light: primer.gray[6], dark: K.fg }),
			"breadcrumbPicker.background": pick({ light: primer.gray[0], dark: K.bg_dim }),

			"editor.foreground": editorForeground,
			"editor.background": editorBackground,
			"editorWidget.background": pick({ light: primer.gray[1], dark: K.bg_dim }),
			"editor.foldBackground": pick({ light: "#d1d5da11", dark: "#54546D22" }),
			"editor.lineHighlightBackground": pick({ light: primer.gray[1], dark: K.bg_dim }),
			"editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: K.fg_subtle }),
			"editorLineNumber.activeForeground": pick({ light: editorForeground, dark: K.purple }),
			"editorIndentGuide.background": pick({ light: "#eff2f6", dark: K.bg_dim }),
			"editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: K.bg_medium }),
			"editorWhitespace.foreground": pick({ light: primer.gray[3], dark: K.bg }),
			"editorCursor.foreground": pick({ light: primer.blue[7], dark: K.fg }),
			"editorCursor.background": pick({ light: primer.white, dark: K.fg }),
			"editorError.foreground": pick({ light: primer.red[6], dark: K.red }),
			"editorWarning.foreground": pick({ light: primer.yellow[6], dark: K.amber_warn }),
			"editorHoverWidget.background": pick({ light: primer.gray[1], dark: K.bg }),
			"editorHoverWidget.border": pick({ light: primer.gray[2], dark: K.bg_dim }),
			"editorHoverWidget.highlightForeground": pick({ light: primer.blue[6], dark: K.teal_dim }),
			"editorInlayHint.foreground": pick({ light: primer.gray[5], dark: K.fg_muted }),
			"editorInlayHint.background": editorBackground,
			"editorMarkerNavigation.background": pick({ light: primer.gray[1], dark: K.bg_medium }),
			"editorRuler.foreground": pick({ light: primer.gray[2], dark: K.bg_medium }),
			"editorSuggestWidget.background": pick({ light: primer.gray[1], dark: K.bg_blue }),
			"editorSuggestWidget.border": pick({ light: primer.gray[2], dark: K.bg_blue }),
			"editorSuggestWidget.selectedBackground": pick({ light: "#e2e5e9", dark: K.bg_search }),

			"editor.findMatchBackground": pick({ light: primer.yellow[4], dark: K.bg_search }),
			"editor.findMatchBorder": pick({ light: primer.yellow[6], dark: K.amber_warn }),
			"editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: K.bg_search }),
			"editor.linkedEditingBackground": pick({ light: "#0366d611", dark: "#3392FF22" }),
			"editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#3636464d" }),
			"editor.selectionBackground": pick({ light: "#0366d625", dark: K.bg_blue }),
			"editor.selectionHighlightBackground": pick({ light: "#34d05840", dark: K.bg_medium }),
			"editor.selectionHighlightBorder": pick({ light: "#34d05800", dark: K.fg_subtle }),
			"editor.wordHighlightBackground": pick({ light: "#34d05800", dark: "#3636464d" }),
			"editor.wordHighlightStrongBackground": pick({ light: "#34d05800", dark: "#3636464d" }),
			"editor.wordHighlightBorder": pick({ light: "#24943e99", dark: K.fg_subtle }),
			"editor.wordHighlightStrongBorder": pick({ light: "#24943e50", dark: K.fg_subtle }),
			"editorBracketMatch.background": pick({ light: "#34d05840", dark: K.bg_deep }),
			"editorBracketMatch.border": pick({ light: "#34d05800", dark: K.fg_subtle }),

			"editorBracketHighlight.foreground1": pick({ light: primer.blue[6], dark: K.purple }),
			"editorBracketHighlight.foreground2": pick({ light: primer.orange[6], dark: K.orange }),
			"editorBracketHighlight.foreground3": pick({ light: primer.purple[6], dark: K.blue }),
			"editorBracketHighlight.foreground4": pick({ light: primer.blue[6], dark: K.pink }),
			"editorBracketHighlight.foreground5": pick({ light: primer.orange[6], dark: K.yellow }),
			"editorBracketHighlight.foreground6": pick({ light: primer.purple[6], dark: K.teal }),
			"editorBracketHighlight.unexpectedBracket.foreground": pick({ light: primer.red[6], dark: K.red_bright }),
			"editorBracketPairGuide.activeBackground1": pick({ light: primer.blue[6], dark: K.purple }),
			"editorBracketPairGuide.activeBackground2": pick({ light: primer.orange[6], dark: K.orange }),
			"editorBracketPairGuide.activeBackground3": pick({ light: primer.purple[6], dark: K.blue }),
			"editorBracketPairGuide.activeBackground4": pick({ light: primer.blue[6], dark: K.pink }),
			"editorBracketPairGuide.activeBackground5": pick({ light: primer.orange[6], dark: K.yellow }),
			"editorBracketPairGuide.activeBackground6": pick({ light: primer.purple[6], dark: K.teal }),

			"editorGutter.modifiedBackground": pick({ light: primer.blue[4], dark: K.amber }),
			"editorGutter.addedBackground": pick({ light: primer.green[5], dark: K.green_dark }),
			"editorGutter.deletedBackground": pick({ light: primer.red[5], dark: K.red_dark }),

			"diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#2B3328" }),
			"diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#43242430" }),

			"scrollbar.shadow": pick({ light: "#6a737d33", dark: K.bg_medium }),
			"scrollbarSlider.background": pick({ light: "#959da533", dark: "#54546D66" }),
			"scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#54546D80" }),
			"scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6f6f9080" }),
			"editorOverviewRuler.border": panelBorder,

			"panel.background": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"panel.border": panelBorder,
			"panelTitle.activeBorder": pick({ light: "#f9826c", dark: K.purple }),
			"panelTitle.activeForeground": workbenchForeground,
			"panelTitle.inactiveForeground": pick({ light: primer.gray[5], dark: K.fg_muted }),
			"panelInput.border": panelBorder,
			"panelSectionHeader.background": pick({ light: primer.gray[1], dark: K.bg }),

			"terminal.background": pick({ light: workbenchBackground, dark: K.bg_deep }),
			"terminal.foreground": pick({ light: primer.gray[6], dark: K.fg }),
			"terminal.border": panelBorder,
			"terminal.tab.activeBorder": pick({ light: "#f9826c", dark: K.purple }),
			"terminal.selectionBackground": pick({ light: "#0366d625", dark: K.bg_blue }),
			"terminalCursor.background": pick({ light: primer.gray[3], dark: K.fg }),
			"terminalCursor.foreground": pick({ light: primer.blue[6], dark: K.fg }),

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
			"terminal.ansiBlack":         pick({ light: primer.gray[4], dark: K.bg }),
			"terminal.ansiRed":           pick({ light: primer.red[6],  dark: K.red }),
			"terminal.ansiGreen":         pick({ light: primer.green[6],dark: K.green_dark }),
			"terminal.ansiYellow":        pick({ light: primer.yellow[8],dark: K.amber_warn }),
			"terminal.ansiBlue":          pick({ light: primer.blue[6], dark: K.teal_dim }),
			"terminal.ansiMagenta":       pick({ light: primer.purple[6],dark: K.purple }),
			"terminal.ansiCyan":          pick({ light: "#3192aa",      dark: K.blue_med }),
			"terminal.ansiWhite":         pick({ light: primer.gray[3], dark: K.fg }),
			"terminal.ansiBrightBlack":   pick({ light: primer.gray[4], dark: K.bg_dim }),
			"terminal.ansiBrightRed":     pick({ light: primer.red[6],  dark: K.red_bright }),
			"terminal.ansiBrightGreen":   pick({ light: primer.green[6],dark: K.green }),
			"terminal.ansiBrightYellow":  pick({ light: primer.yellow[8],dark: K.yellow }),
			"terminal.ansiBrightBlue":    pick({ light: primer.blue[6], dark: K.blue_light }),
			"terminal.ansiBrightMagenta": pick({ light: primer.purple[6],dark: K.pink }),
			"terminal.ansiBrightCyan":    pick({ light: "#3192aa",      dark: "#A3D4D5" }),
			"terminal.ansiBrightWhite":   pick({ light: primer.gray[3], dark: K.fg }),

			"gitDecoration.addedResourceForeground":       pick({ light: primer.green[5],  dark: K.green_dark }),
			"gitDecoration.modifiedResourceForeground":    pick({ light: primer.blue[6],   dark: K.blue }),
			"gitDecoration.deletedResourceForeground":     pick({ light: primer.red[5],    dark: K.red_dark }),
			"gitDecoration.untrackedResourceForeground":   pick({ light: primer.green[5],  dark: K.green_dark }),
			"gitDecoration.ignoredResourceForeground":     pick({ light: primer.gray[4],   dark: K.fg_muted }),
			"gitDecoration.conflictingResourceForeground": pick({ light: primer.orange[6], dark: K.amber_warn }),
			"gitDecoration.submoduleResourceForeground":   pick({ light: primer.gray[4],   dark: K.fg_muted }),

			"minimapGutter.addedBackground":    pick({ light: primer.green[5],  dark: K.green_dark }),
			"minimapGutter.deletedBackground":  pick({ light: primer.red[5],    dark: K.red_dark }),
			"minimapGutter.modifiedBackground": pick({ light: primer.blue[4],   dark: K.amber }),

			"debugToolBar.background": pick({ light: primer.white, dark: K.bg_deep }),
			"editor.stackFrameHighlightBackground": pick({
				light: "#ffd33d33",
				dark: "#C6902625",
			}), // needs opacity (yellow)
			"editor.focusedStackFrameHighlightBackground": pick({
				light: "#28a74525",
				dark: "#2b6a3033",
			}), // needs opacity (green)

			"peekView.border":                        pick({ dark: K.fg_subtle }),
			"peekViewEditor.matchHighlightBackground": pick({ dark: K.bg_search }),
			"peekViewResult.matchHighlightBackground": pick({ dark: K.bg_search }),
			"peekViewEditor.background":               pick({ dark: K.bg_dim }),
			"peekViewResult.background":               pick({ dark: K.bg_medium }),

			"settings.headerForeground":       workbenchForeground,
			"settings.modifiedItemIndicator":  pick({ light: primer.blue[4], dark: K.blue }),
			"settings.focusedRowBackground":   pick({ light: primer.gray[1], dark: K.bg_medium }),
			"welcomePage.buttonBackground":    pick({ light: primer.gray[1], dark: K.bg_dim }),
			"welcomePage.buttonHoverBackground": pick({ light: primer.gray[2], dark: K.bg_medium }),
		},
		semanticHighlighting: true,
		tokenColors: [
			{
				scope: ["comment", "punctuation.definition.comment", "string.comment"],
				settings: {
					foreground: pick({ light: primer.gray[5], dark: K.fg_muted }),
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
					foreground: pick({ light: primer.blue[6], dark: K.blue_light }),
				},
			},
			{
				scope: "variable.language",
				settings: {
					foreground: pick({ light: primer.red[5], dark: K.red_bright }),
				},
			},
			{
				scope: ["entity.name"],
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.teal }),
				},
			},
			{
				scope: "entity.name.type",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.teal }),
				},
			},
			{
				scope: "entity.name.function",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.blue }),
				},
			},
			{
				scope: "entity.name.namespace",
				settings: {
					foreground: pick({ light: primer.gray[7], dark: K.fg }),
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
					foreground: pick({ light: primer.green[6], dark: K.yellow }),
				},
			},
			{
				scope: "entity.name.tag.html",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.purple }),
				},
			},
			{
				scope: "keyword",
				settings: {
					foreground: pick({ light: primer.red[5], dark: K.purple }),
				},
			},
			{
				scope: "keyword.control.flow",
				settings: {
					foreground: pick({ light: primer.red[5], dark: K.purple }),
					fontStyle: "bold",
				},
			},
			{
				scope: "keyword.operator",
				settings: {
					foreground: pick({ light: primer.gray[7], dark: K.gold }),
				},
			},
			{
				scope: ["storage", "storage.type"],
				settings: {
					foreground: pick({ light: primer.red[5], dark: K.purple }),
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
					foreground: pick({ light: primer.blue[8], dark: K.green }),
				},
			},
			{
				scope: "support",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "support.type",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.teal }),
				},
			},
			{
				scope: "support.function",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "meta.property-name",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.yellow }),
				},
			},
			{
				scope: "variable",
				settings: {
					foreground: pick({ light: primer.orange[6], dark: K.fg }),
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
					foreground: pick({ light: primer.orange[6], dark: K.yellow }),
				},
			},
			{
				scope: "variable.other.readwrite",
				settings: {
					foreground: pick({ light: primer.orange[6], dark: K.orange }),
				},
			},
			{
				scope: "punctuation",
				settings: {
					foreground: pick({ light: primer.gray[7], dark: K.blue_med }),
				},
			},
			{
				scope: "invalid.broken",
				settings: {
					fontStyle: "italic",
					foreground: pick({ light: primer.red[7], dark: K.red_bright }),
				},
			},
			{
				scope: "invalid.deprecated",
				settings: {
					fontStyle: "italic",
					foreground: pick({ light: primer.red[7], dark: K.red_bright }),
				},
			},
			{
				scope: "invalid.illegal",
				settings: {
					fontStyle: "italic",
					foreground: pick({ light: primer.red[7], dark: K.red_bright }),
				},
			},
			{
				scope: "invalid.unimplemented",
				settings: {
					fontStyle: "italic",
					foreground: pick({ light: primer.red[7], dark: K.red_bright }),
				},
			},
			{
				scope: "carriage-return",
				settings: {
					fontStyle: "italic underline",
					background: pick({ light: primer.red[5], dark: K.red }),
					foreground: primer.gray[0],
					content: "^M",
				},
			},
			{
				scope: "message.error",
				settings: {
					foreground: pick({ light: primer.red[7], dark: K.red }),
				},
			},
			{
				scope: "string variable",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: ["source.regexp", "string.regexp"],
				settings: {
					foreground: pick({ light: primer.blue[8], dark: K.blue_light }),
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
					foreground: pick({ light: primer.blue[8], dark: K.blue_light }),
				},
			},
			{
				scope: "string.regexp constant.character.escape",
				settings: {
					fontStyle: "bold",
					foreground: pick({ light: primer.green[6], dark: K.blue_light }),
				},
			},
			{
				scope: "constant.character.escape",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue_light }),
				},
			},
			{
				scope: "support.constant",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "support.variable",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.fg }),
				},
			},
			{
				scope: "meta.module-reference",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "punctuation.definition.list.begin.markdown",
				settings: {
					foreground: pick({ light: primer.orange[6], dark: K.orange }),
				},
			},
			{
				scope: ["markup.heading", "markup.heading entity.name"],
				settings: {
					fontStyle: "bold",
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "markup.quote",
				settings: {
					foreground: pick({ light: primer.green[6], dark: K.fg_muted }),
					fontStyle: "italic",
				},
			},
			{
				scope: "markup.italic",
				settings: {
					fontStyle: "italic",
					foreground: pick({ light: editorForeground, dark: "#E46876" }),
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
					foreground: pick({ light: primer.blue[6], dark: K.blue_light }),
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
					foreground: pick({ light: primer.blue[6], dark: K.purple }),
				},
			},
			{
				scope: [
					"markup.deleted",
					"meta.diff.header.from-file",
					"punctuation.definition.deleted",
				],
				settings: {
					background: pick({ light: primer.red[0], dark: "#43242488" }),
					foreground: pick({ light: primer.red[7], dark: K.red_dark }),
				},
			},
			{
				scope: [
					"markup.inserted",
					"meta.diff.header.to-file",
					"punctuation.definition.inserted",
				],
				settings: {
					background: pick({ light: primer.green[0], dark: "#2B332888" }),
					foreground: pick({ light: primer.green[6], dark: K.green_dark }),
				},
			},
			{
				scope: ["markup.changed", "punctuation.definition.changed"],
				settings: {
					background: pick({ light: primer.orange[1], dark: "#3d2a1088" }),
					foreground: pick({ light: primer.orange[6], dark: K.amber }),
				},
			},
			{
				scope: ["markup.ignored", "markup.untracked"],
				settings: {
					foreground: pick({ light: primer.gray[1], dark: K.fg_muted }),
					background: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "meta.diff.range",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.purple }),
					fontStyle: "bold",
				},
			},
			{
				scope: "meta.diff.header",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
				},
			},
			{
				scope: "meta.separator",
				settings: {
					fontStyle: "bold",
					foreground: pick({ light: primer.blue[6], dark: K.blue_med }),
				},
			},
			{
				scope: "meta.output",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.blue }),
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
					foreground: pick({ light: primer.gray[6], dark: K.fg }),
				},
			},
			{
				scope: "brackethighlighter.unmatched",
				settings: {
					foreground: pick({ light: primer.red[7], dark: K.red }),
				},
			},
			{
				scope: ["constant.other.reference.link", "string.other.link"],
				settings: {
					foreground: pick({ light: primer.blue[8], dark: K.green }),
					fontStyle: "underline",
				},
			},
			{
				scope: "constant.numeric",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.pink }),
				},
			},
			{
				scope: "constant.language.boolean",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.orange }),
				},
			},
			{
				scope: "entity.other.attribute-name",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.purple }),
				},
			},
			{
				scope: "entity.other.attribute-name.html",
				settings: {
					foreground: pick({ light: primer.blue[6], dark: K.yellow }),
				},
			},
			{
				scope: "entity.other.attribute-name.class",
				settings: {
					foreground: pick({ light: primer.orange[6], dark: K.yellow }),
				},
			},
			{
				scope: "entity.name.function.macro",
				settings: {
					foreground: pick({ light: primer.purple[5], dark: K.orange }),
				},
			},
		],
		semanticTokenColors: {
			parameter:                       pick({ light: editorForeground, dark: K.fg }),
			variable:                        pick({ light: editorForeground, dark: K.fg }),
			arithmetic:                      pick({ light: primer.gray[7],   dark: K.gold }),
			method:                          pick({ light: primer.purple[5], dark: K.blue }),
			function:                        pick({ light: primer.purple[5], dark: K.blue }),
			operator:                        pick({ light: primer.gray[7],   dark: K.gold }),
			"parameter.declaration":         pick({ light: primer.orange[6], dark: K.yellow }),
			"parameter.definition":          pick({ light: primer.orange[6], dark: K.yellow }),
			"variable.readonly":             pick({ light: primer.blue[6],   dark: K.orange }),
			"variable.readonly.local":       pick({ light: primer.blue[6],   dark: K.fg }),
			"variable.readonly.defaultLibrary": pick({ light: primer.blue[6], dark: K.blue_light }),
			macro:                           pick({ light: primer.purple[5], dark: K.orange }),
			"keyword.controlFlow": {
				foreground: pick({ light: primer.red[5], dark: K.purple }),
				fontStyle: "bold",
			},
		},
	};
}

module.exports = getTheme;
