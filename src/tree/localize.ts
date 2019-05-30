/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nls from 'vscode-nls';

export const localize: nls.LocalizeFunc = nls.config(process.env.VSCODE_NLS_CONFIG)();
