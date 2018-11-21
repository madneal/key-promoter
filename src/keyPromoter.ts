"use strict";
import * as fs from "fs";
import * as vscode from "vscode";


export class KeyPromoter {
    private _outputChannel: vscode.OutputChannel;
    private _terminal: vscode.Terminal;

    constructor() {
      this._outputChannel = vscode.window.createOutputChannel("Code");
      this._terminal = null;
    }
  }