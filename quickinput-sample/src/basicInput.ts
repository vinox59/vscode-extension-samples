/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { window } from 'vscode';

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick() {
	let i = 0;
	const result = await window.showQuickPick(['style_collision', 'zwei', 'drei'], {
		placeHolder: 'Choose Option from list like style collision and so on....',
		onDidSelectItem: item => window.showInformationMessage(`Focus ${++i}: ${item}`)
	});
	// const msg = (result == 'style_collision') ? `Initiated: ${result}` : `Got: ${result}`;
	switch(result) {
		case 'style_collision':
			showInform(result);
		break;
	}
	// window.showInformationMessage(msg);
}

export async function showInform(msg: any) {
	const inputCode = await window.showInputBox({
		placeHolder: 'Enter application name to execute style collision',
		validateInput: text => {
			return text === '123' ? 'Not 123!' : null;
		},
		value: ''
	});

	
	window.showInformationMessage(`${inputCode} application is Initiated for Style Collision`);
}

/**
 * Shows an input box using window.showInputBox().
 */
export async function showInputBox() {
	const result = await window.showInputBox({
		value: 'abcdef',
		valueSelection: [2, 4],
		placeHolder: 'For example: fedcba. But not: 123',
		validateInput: text => {
			window.showInformationMessage(`Validating: ${text}`);
			return text === '123' ? 'Not 123!' : null;
		}
	});
	window.showInformationMessage(`Got: ${result}`);
}
