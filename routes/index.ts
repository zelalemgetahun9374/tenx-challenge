/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import account from "./account";
import { Home } from "./home";
import legal from "./legal";

/**
 * The list of application routes (pages).
 */
export default [Home, account, ...legal] as const;
